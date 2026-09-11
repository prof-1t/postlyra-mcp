const origin = "https://postlyra.app";
let failed = false;
async function check(label, path, inspect) {
  try {
    const response = await fetch(origin + path, { signal: AbortSignal.timeout(15000), redirect: "error", headers: { Accept: "application/json" } });
    const body = response.ok ? await response.json() : null;
    const ok = response.ok && inspect(body);
    console.log(JSON.stringify({ check: label, status: response.status, ok }));
    if (!ok) failed = true;
  } catch {
    console.log(JSON.stringify({ check: label, ok: false, error: "network_or_invalid_response" }));
    failed = true;
  }
}
await check("protected_resource", "/.well-known/oauth-protected-resource", (data) => data?.resource === origin + "/mcp" && data?.authorization_servers?.includes(origin));
await check("authorization_server", "/.well-known/oauth-authorization-server", (data) => data?.issuer === origin && data?.code_challenge_methods_supported?.includes("S256"));
try {
  const response = await fetch(origin + "/mcp", { method: "POST", signal: AbortSignal.timeout(15000), redirect: "error", headers: { Accept: "application/json, text/event-stream", "Content-Type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "tools/list", params: {} }) });
  if (response.status === 401) {
    const challenged = Boolean(response.headers.get("www-authenticate"));
    console.log(JSON.stringify({ check: "tool_discovery_requires_auth", status: response.status, ok: challenged }));
    if (!challenged) failed = true;
  } else {
    const body = await response.json();
    const tools = body?.result?.tools;
    const valid = response.ok && Array.isArray(tools) && tools.every((tool) => typeof tool.name === "string" && tool.inputSchema?.type === "object");
    const contentWorkspaceAvailable = valid && ["get_post", "list_publications", "schedule_post"].every((name) => tools.some((tool) => tool.name === name));
    console.log(JSON.stringify({ check: "public_tool_metadata", status: response.status, ok: valid, contentWorkspaceAvailable }));
    if (!valid || !contentWorkspaceAvailable) failed = true;
  }
} catch {
  console.log(JSON.stringify({ check: "tool_discovery", ok: false, error: "network_or_invalid_response" }));
  failed = true;
}
console.log("These checks do not verify OAuth completion, tool behavior or client compatibility.");
process.exitCode = failed ? 1 : 0;

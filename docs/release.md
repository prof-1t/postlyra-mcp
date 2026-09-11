# Release records

The public integration repository is [prof-1t/postlyra-mcp](https://github.com/prof-1t/postlyra-mcp). The service remains a release candidate. The private SaaS backend is deployed; publishing metadata does not establish client compatibility.

## Hosted MCP 0.3.0: optional card

Deployed on September 11, 2026 at 16:21 UTC. Public discovery exposes 32 tools including `show_post_card`; the static MCP Apps resource matches the tested local build. The implementation passed 776 tests, typecheck and build. A local SDK/AppBridge host exercised card actions, including recovery of a lost scheduling response. Actual ChatGPT and other vendors' UI implementations remain unverified. The endpoint and existing Registry manifest are unchanged. See the [card guide](chat-card.md).

## Content workspace 0.2.0-rc.1: confirmed on September 11, 2026

| Item | Evidence |
| --- | --- |
| Registry server | `io.github.prof-1t/postlyra-mcp` |
| Registry version | `0.2.0-rc.1` |
| Registry state | `active`, confirmed by the official version API |
| Published at | `2026-09-11T12:54:16.786176Z` |
| Remote endpoint | `https://postlyra.app/mcp`, Streamable HTTP |
| Public discovery | HTTP 200, 31 tool definitions |
| Public diagnostics | Protected-resource metadata, authorization-server metadata and tool discovery passed; `contentWorkspaceAvailable: true` |
| Read-only protocol session | Official MCP SDK `1.30.0` passed initialize, 31-tool discovery, anonymous auth status, formatting capabilities, ping and close; no credentials or content creation |
| Installed Codex app connector | Existing grant authenticated; formatting, shared-draft search, valid preview and connected-channel publication passed. Ten legacy tools are currently surfaced; the original five scopes were preserved |
| SDK authorization | OAuth/PKCE and refresh rotation passed; final grant revocation revoked consent and all test access/refresh tokens. Protected workspace access returned 401, refresh returned 400 `invalid_grant`, and the separate existing Codex five-scope connection remained authorized |
| Live selected-publication lifecycle | The SDK found the same sent message; source autosave left it unchanged; explicit apply updated the same publication/message URL; deletion removed it. Message, footer, edit and removal were visually verified in Telegram Desktop |
| Native and inline delivery | Telegram Desktop native preview/recipient/send and inline query/card/send both delivered one-footer messages. Cleanup used Telegram UI; Postlyra-managed editing/deletion was not established for these messages |
| Live schedule management | Schedule, reschedule, source/snapshot isolation, explicit apply and cancellation passed. The canceled +48h/+49h schedule sent no message; counters returned to baseline, with no reservation yet created before dispatch |
| Live timed-worker delivery | A separate browser-scheduled control job reached its one selected chat at 14:22:00.650Z, with one sent attempt, zero retries, a Telegram message ID, completed outbox and confirmed reservation |
| Inline feedback control | After BotFather feedback was enabled at 100%, a new chosen-result webhook, selection timestamp and confirmed reservation were independently observed |
| Legacy account beta policy | Effective Free limits and mandatory attribution applied to preview/delivery while raw Creator/footer preferences remained unchanged |
| Final code validation | Deployed revision `33f0c3f3`: 765 tests passed, 0 failed/pending; typecheck/build passed with 62 public pages; four services passed seven readiness checks with zero observed restarts |
| Browser publication actions | Fresh dialog had all five targets unchecked. Exact-post/exact-chat confirmation deleted the selected worker message and preserved its source; Telegram Desktop showed it absent. Light-theme menu/confirmation checked at width 390 without overflow |
| Cleanup and observed usage | Both test sources archived; sent jobs deleted, future job canceled, outboxes completed, leases cleared and no active test jobs. Old temporary inline holds expired/released; observed-control usage reconciled |
| HTTPS and readiness | Certificate chain/hostname verified, expiry 2026-11-27; readiness HTTP 200 with all checks true; legacy redirects preserve HTTPS and query parameters |
| Manifest | Validated against its official JSON schema and with official `mcp-publisher` v1.8.1 |
| Browser sign-in | Telegram OIDC completed in desktop Chrome; the existing account workspace loaded at `/app` |
| Bot branding | Default, Russian and English descriptions/commands, the `/app` menu, avatar and shared RU 640×360 description cover were applied |
| Telegram launch configuration | Main App URL `https://postlyra.app/app`, Compact mode and direct link `https://t.me/PostlyraBot/app` were visually verified in BotFather |

The [published Registry entry](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.prof-1t%2Fpostlyra-mcp/versions/0.2.0-rc.1) matches [server.json](../server.json), including the repository URL and remote endpoint. Publication used the official CLI after the maintainer completed GitHub device authorization. No GitHub Actions publication workflow is installed in this public repository.

## Pending acceptance

- The installed Codex app connector passed preview and publication; selected editing/deletion and scheduling passed through the SDK. The remaining AI-client workflows and direct-MCP Codex CLI OAuth remain unverified.
- Native/inline confirmation and recipient-accounting limits remain platform constraints, even though the observed controls reconciled. They are documented in [compatibility.md](compatibility.md).
- A test group and Android/iOS acceptance remain pending. Telegram Desktop and the read-only worker observer verified the specified single-channel operations.
- The [compatibility record](compatibility.md) distinguishes the bounded live result from untested clients and delivery methods.
- No OpenAI app/plugin submission or catalog approval is claimed.

Public endpoint checks and Registry registration do not prove successful authorization or publication from an AI client. Update the compatibility record only with dated evidence, client version and the operations actually observed.

## Future releases

1. Review public files for credentials, private content and SaaS source; preserve the private repository's visibility.
2. Deploy and verify the intended endpoint, complete the applicable live-client checks, and record unresolved limitations.
3. Review the new manifest version and validate it using the official publisher. Do not assume a published version can be overwritten; check the Registry versioning rules.
4. Run the official `mcp-publisher login github` device flow and then publish the reviewed manifest. These are external operations for an authorized maintainer.
5. Verify the resulting public Registry version API and record its publication timestamp. Update both READMEs and the compatibility record to match the observed result.
6. Handle any OpenAI submission separately, using the matching tool snapshot and permission descriptions.

Official references: [publishing quickstart](https://modelcontextprotocol.io/registry/quickstart), [authentication and namespaces](https://modelcontextprotocol.io/registry/authentication), [remote servers](https://modelcontextprotocol.io/registry/remote-servers), [versioning](https://modelcontextprotocol.io/registry/versioning).

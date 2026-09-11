# Postlyra MCP

**0.2 release candidate (`0.2.0-rc.1`).** The expanded content toolset is deployed and its MCP Registry entry is published. Public discovery returned 31 tools and the endpoint diagnostics passed on September 11, 2026. Telegram browser OIDC setup is in progress; end-to-end OAuth and the full workflows in all five documented clients remain unverified. See the [verification record](docs/compatibility.md).

[Русский](README.ru.md) · [Website](https://postlyra.app/en) · [Connection guide](https://postlyra.app/en/connect)

Save Telegram drafts, schedule publications and manage your content from an AI client. Postlyra is a hosted service. This repository contains public integration instructions, client configurations and diagnostics; it does not contain the private SaaS backend. No bot token or locally installed server is required.

## Connect

- Remote MCP URL: **https://postlyra.app/mcp**
- Transport: **Streamable HTTP**
- Authentication: **OAuth with PKCE**, using your Postlyra account.

1. Open [Postlyra](https://postlyra.app/app) and sign in with Telegram.
2. Add your channel or group under Connections and grant @PostlyraBot the necessary rights. You may save drafts before connecting a destination.
3. Add the MCP URL in your AI client, follow its OAuth sign-in flow and review the requested permissions.
4. Ask the client to list your connected channels, then save a test draft. Configuration is complete only after authorization and a successful tool call.

### Claude Code

```text
claude mcp add --transport http --scope user postlyra https://postlyra.app/mcp
```

Open `/mcp` and authenticate Postlyra. Alternatively merge [claude-code.json](clients/claude-code.json) into your MCP configuration without replacing other servers.

### Codex

Merge [codex.toml](clients/codex.toml) into your Codex configuration. Complete the MCP OAuth sign-in flow.

### Cursor

Merge [cursor.json](clients/cursor.json) into your MCP configuration. Open the server settings and complete OAuth.

### ChatGPT and Claude

Add a custom remote MCP connection in the client's apps/integrations settings, using the endpoint above. Account, plan, organization policy and client version can affect custom-server availability. These instructions do not claim catalog approval or support on every account.

## Example requests

- “Save this text as a Postlyra draft titled Weekly recap.”
- “Find my draft about the autumn launch and show it.”
- “Schedule this post in my connected channel for September 22, 2026 at 10:00 Europe/Moscow.”
- “Move that publication to September 23 at the same local time.”
- “Apply the current version only to the publication in my news channel.”
- “Cancel this scheduled publication.”
- “Show posts that need attention.”

Read [permissions](docs/permissions.md), [media transfer](docs/media.md), [troubleshooting](docs/troubleshooting.md) and the [compatibility record](docs/compatibility.md).

## Free Beta

5 channels/groups, 30 publications per day, 300 per 30-day period and 1 GB of media. One delivery to one chat counts as one publication. Technical delivery retries are not additional publications. Publications include mandatory Postlyra attribution. AI-client subscriptions are separate.

Drafts and publications are distinct. Saving content does not automatically edit sent messages. Native/inline Telegram shares may lack identifiers required for later message management; the original Postlyra draft remains editable.

## Diagnostics

Node.js 18+:

```text
node scripts/diagnose.mjs
```

This makes read-only checks of public metadata and unauthenticated MCP discovery. It does not authenticate, access drafts or publish anything.

## Distribution status

[server.json](server.json) is published as [io.github.prof-1t/postlyra-mcp, version 0.2.0-rc.1](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.prof-1t%2Fpostlyra-mcp/versions/0.2.0-rc.1). The official Registry API confirmed an active entry on September 11, 2026. The production endpoint also exposes the expanded tool metadata. Registry publication does not establish client compatibility or OpenAI catalog approval; no OpenAI submission is claimed. See the [release record](docs/release.md).

## Support

[Postlyra support](https://t.me/postlyra) · [Privacy](https://postlyra.app/en/privacy) · [Terms](https://postlyra.app/en/terms)

Never include access tokens, authorization codes, private previews or channel content in public issues.

## Official client references

[Claude Code MCP](https://code.claude.com/docs/en/mcp) · [MCP remote registry](https://modelcontextprotocol.io/registry/remote-servers) · [Codex MCP](https://developers.openai.com/codex/mcp) · [Cursor MCP](https://docs.cursor.com/context/model-context-protocol)

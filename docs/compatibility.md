# Compatibility evidence

Updated: 2026-09-11 for **0.2.0-rc.1**. The expanded content toolset is deployed and Registry publication is confirmed. Telegram browser OIDC setup is in progress. **Public metadata verified** and **setup documented** are distinct from **live client verified**.

## Confirmed public checks

- The production MCP endpoint returned 31 public tool definitions.
- `node scripts/diagnose.mjs` passed: protected-resource metadata, authorization-server metadata and public tool discovery each returned HTTP 200; `contentWorkspaceAvailable` was true.
- The [official Registry version API](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.prof-1t%2Fpostlyra-mcp/versions/0.2.0-rc.1) returned HTTP 200 with the expected name, version, repository and Streamable HTTP endpoint. Status: `active`; published at `2026-09-11T12:54:16.786176Z`.

These unauthenticated checks do not prove OAuth completion, browser sign-in, content operations, publication delivery or client compatibility. End-to-end authorization has not been verified in this record.

## Client acceptance matrix

| Client | Setup | OAuth + draft + schedule + targeted edit |
| --- | --- | --- |
| ChatGPT | Remote MCP / custom app where available | NOT RUN for this release |
| Claude | Custom remote connector where available | NOT RUN for this release |
| Claude Code | HTTP command and JSON configuration | NOT RUN for this release |
| Codex | Remote MCP TOML configuration | NOT RUN for this release |
| Cursor | Remote MCP JSON configuration | NOT RUN for this release |

Replace a NOT RUN entry only with dated evidence including client version, account constraints and operations actually observed. Never include private post content or credentials. Protocol/unit tests are not substitutes for these client tests.

Use one dedicated test channel/group. Validate authorization, channel listing, draft creation/search, media transfer, schedule/reschedule/cancel, publication result, selected-message editing/deletion and revocation. Check the same post in the Mini App/browser.

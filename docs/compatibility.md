# Compatibility evidence

Prepared: 2026-09-11 for **0.2.0-rc.1**. Deployment of the expanded content toolset and live-client verification are pending. **Setup documented** is distinct from **live verified**.

| Client | Setup | OAuth + draft + schedule + targeted edit |
| --- | --- | --- |
| ChatGPT | Remote MCP / custom app where available | NOT RUN for this release |
| Claude | Custom remote connector where available | NOT RUN for this release |
| Claude Code | HTTP command and JSON configuration | NOT RUN for this release |
| Codex | Remote MCP TOML configuration | NOT RUN for this release |
| Cursor | Remote MCP JSON configuration | NOT RUN for this release |

Replace a NOT RUN entry only with dated evidence including client version, account constraints and operations actually observed. Never include private post content or credentials. Protocol/unit tests are not substitutes for these client tests.

Use one dedicated test channel/group. Validate authorization, channel listing, draft creation/search, media transfer, schedule/reschedule/cancel, publication result, selected-message editing/deletion and revocation. Check the same post in the Mini App/browser.

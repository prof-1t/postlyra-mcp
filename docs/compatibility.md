# Compatibility evidence

Updated: 2026-09-11. The historical content release **0.2.0-rc.1** supplies the delivery/Registry evidence below. Hosted MCP Apps server **0.3.3** adds verified desktop ChatGPT viewing and refresh, documented in the [card guide](chat-card.md). Public metadata, browser sign-in, read-only UI operation and complete publication workflows are distinct checks.

## Confirmed public checks for the content release

- The production MCP endpoint returned 31 public tool definitions.
- `node scripts/diagnose.mjs` passed: protected-resource metadata, authorization-server metadata and public tool discovery each returned HTTP 200; `contentWorkspaceAvailable` was true.
- The [official Registry version API](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.prof-1t%2Fpostlyra-mcp/versions/0.2.0-rc.1) returned HTTP 200 with the expected name, version, repository and Streamable HTTP endpoint. Status: `active`; published at `2026-09-11T12:54:16.786176Z`.

These unauthenticated checks do not prove MCP OAuth completion, content operations, publication delivery or client compatibility.

## Browser and device evidence

The owner completed Telegram OIDC sign-in in desktop Chrome at `https://postlyra.app/app`. The existing account's posts and connected channels loaded. This is a browser sign-in result; the Chrome version was not recorded, and this does not establish an AI client's MCP authorization or a delivery workflow.

| Environment | Full content/publication workflow |
| --- | --- |
| Telegram Desktop | Connected-channel message/edit/delete and native chat-picker/inline delivery visually verified, each with one footer. The same source opened in the dark Mini App with four readable send choices; native/inline cleanup used Telegram UI |
| Telegram Android | NOT RUN for this release |
| Telegram iOS | NOT RUN for this release |

One owner-designated test channel passed the bounded Codex connector publication plus SDK selected edit/deletion and schedule/reschedule/cancel workflow described below. A dedicated test group has not yet been verified. Responsive desktop emulation does not replace real-device checks.

## Client acceptance matrix

Local inventory was read-only: executable lookup, selected standard installation paths and Windows package/uninstall metadata. Missing from these checks does not mean a client is absent from every possible location. That inventory did not open authentication or run a model. The subsequent ChatGPT web check below used normal owner-approved OAuth and real read-only tool calls.

| Client | Locally observed | Setup / observed operations | OAuth + draft + schedule + targeted edit |
| --- | --- | --- | --- |
| ChatGPT | Desktop Chrome web, developer mode | Normal owner-approved dynamic OAuth; Refresh loaded 32 tools. Saved and fresh cards rendered, Refresh read the source, and the planning form showed unselected recipients and the account time zone | OAuth + viewing/refresh PASS; editing, scheduling and targeted edits inside ChatGPT NOT RUN |
| Claude | Desktop Windows package `1.40609.0.0` installed; not launched | Account-based remote-connector instructions reviewed; desktop app presence is not connector verification | NOT RUN for this release |
| Claude Code | `claude` CLI not found on PATH or inspected standard install paths | HTTP command and project `.mcp.json` shape match official documentation | NOT RUN for this release |
| Codex | CLI `0.153.4`; Windows app package `26.903.9818.0` | Installed app connector: auth, formatting, shared test-draft search, preview and connected-channel publication PASS. Direct CLI: config parsed without persistence; bearer launcher rejected before process creation | Connector publication PASS; subsequent selected edits/deletion and scheduling verified via SDK, not this connector. Native direct-MCP CLI OAuth NOT RUN |
| Cursor | `cursor`, `cursor-agent` and `agent` not found on PATH or inspected installation paths | Remote URL configuration matches official documentation; documented `agent mcp list-tools` command could not be exercised | NOT RUN for this release |

## Observed connector and SDK workflow

The existing Postlyra connector installed in the Codex Windows app was exercised on 2026-09-11. `get_auth_status` returned `authorized: true` with `mcpOAuth`; formatting capabilities and search for the shared SDK test draft passed. The connector produced a valid image-ready preview without warnings and with one attribution footer, then `publish_post` returned `published` under a stable idempotency key. The existing five-scope grant remained unchanged, without newly added post read/write/delete permissions. The installed connector surfaces ten legacy tools; direct SDK discovery exposes 31. This real connector result is distinct from direct-MCP CLI OAuth and OpenAI catalog approval; it did not use the blocked CLI launcher.

The SDK found that same single sent publication, with a Telegram message identifier and zero retries. Actual Telegram Desktop displayed the test post and footer. A source autosave left the sent publication unchanged; explicitly applying the next source revision updated the same publication/message URL, and the new content was visually verified. SDK deletion then removed the message, and the test marker was visually absent in Telegram Desktop. The same source post was scheduled 48 hours ahead, moved to 49 hours ahead, edited and explicitly applied to the scheduled snapshot, then canceled. Snapshot isolation and cancellation passed; the canceled +48h/+49h schedule sent no message, and quota counters returned to baseline. A quota reservation had not yet been created before dispatch, so reservation release was not exercised by this cancellation.

These selected-publication and scheduling operations used the SDK's authorized toolset, not the cached ten-tool Codex connector. The legacy Creator account kept its stored subscription/footer preference while effective Free beta limits and mandatory attribution applied to preview and delivery.

Actual Telegram Desktop also completed native sending with preview and explicit recipient selection, followed by inline sending through the bot query and selected post card. Each message arrived in the designated channel with one footer. Both were removed through Telegram's UI, and the final accessibility check found no test marker. Postlyra-managed editing/deletion of native or inline messages was not verified because the required message identifiers were not established. A single-channel result does not verify a group or Android/iOS.

After BotFather inline feedback was changed from 0% to 100%, a new control result produced a source-correlated chosen-result webhook, a populated selection time and a confirmed reservation. A control post scheduled in the browser UI to one selected channel at `14:22:00Z` was sent at `14:22:00.650Z` with one attempt, zero retries, a Telegram message ID, completed outbox, cleared lease and confirmed reservation. Telegram Desktop displayed it once with one footer and local timestamp 21:22. After final deployment, the browser's exact-post/exact-chat confirmation deleted that selected message while preserving its source; Telegram Desktop then showed no test marker.

Final production code `33f0c3f3` passed 765 tests, typecheck/build and all seven readiness checks across four application services, with zero observed container restarts. A fresh publish dialog showed all five recipients unchecked. Browser selected deletion and subsequent source archival through Posts search/actions passed. Menu/confirmation screenshots at width 390 cover the light theme without overflow; these observations do not establish every theme or device.

Final OAuth verification passed: authenticated inspection and protected workspace access worked before revocation; the consent plus all four test access and four refresh tokens were atomically revoked. Afterwards protected `get_workspace` returned HTTP 401 and refresh returned HTTP 400 `invalid_grant`. A public initialize HTTP 200 is expected and is not a protected-authorization check; the harness was corrected accordingly. The separate installed Codex connection stayed authorized before and after with the same five legacy scopes. Test credentials were cleared.

Final read-only cleanup found both test sources archived, both sent-message jobs deleted, the future job canceled, all outboxes completed, all leases cleared and no active test jobs. The two old inline preparation holds expired/released; they were distinct queries without chosen feedback, not duplicate webhook updates or confirmed charges. The new control after enabling feedback was correctly selected and confirmed. Usage reconciliation is closed for these observed controls, subject to the Telegram confirmation limits below.

## Telegram confirmation and usage limits

Server-managed connected publications retain the known recipient and delivery identifiers, allowing one-target publication accounting. Native and inline flows use temporary holds and the confirmations Telegram makes available. Telegram's Mini App share callback returns a success boolean; its success event has no parameters, so it does not expose recipient counts or message identifiers. [Telegram Mini Apps documentation](https://core.telegram.org/bots/webapps).

Even at 100% inline feedback, Telegram can omit events because of caching and documents feedback as statistical rather than a functional guarantee. Per-recipient accounting and subsequent message management cannot therefore be guaranteed for native/inline sends without the necessary identifiers. The original source post remains editable. [Telegram inline feedback documentation](https://core.telegram.org/api/bots/inline#4-inline-feedback).

A separate anonymous check using the installed official MCP TypeScript SDK `1.30.0` reached the production endpoint and passed initialize, discovery of 31 tools, `get_auth_status` returning `authorized: false`, `get_formatting_capabilities`, ping and close. Server metadata reported `postlyra-mcp` version `0.2.0`. It used no credentials and created no content. This establishes the observed protocol/read-only behavior; it is not a ChatGPT, Claude, Claude Code, Codex or Cursor acceptance result.

The Codex CLI's inspected MCP commands manage/list configuration and authorization; they did not provide a standalone network tool-list smoke command. A later authorized `codex exec` bearer test was blocked before launch and was not retried; this is not a server failure or native Codex OAuth result. Cursor documents `agent mcp list-tools <identifier>`, but that executable was not available in the inspected environment.

Separately, the maintainer completed the SDK OAuth/PKCE authorization flow and issued test credentials. This confirms that observed SDK authorization flow; it does not replace OAuth and publication acceptance in the five named AI clients. The blocked Codex attempt did not refresh, revoke or modify those credentials.

Official instructions reviewed on 2026-09-11: [ChatGPT](https://developers.openai.com/plugins/deploy/connect-chatgpt), [Claude](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), [Claude Code](https://code.claude.com/docs/en/mcp), [Codex](https://learn.chatgpt.com/docs/extend/mcp?surface=cli), [Cursor configuration](https://prod.cursor.com/docs/mcp) and [Cursor CLI](https://prod.cursor.com/docs/cli/mcp).

Replace a NOT RUN entry only with dated evidence including client version, account constraints and operations actually observed. Never include private post content or credentials. Protocol/unit tests are not substitutes for these client tests.

Use one dedicated test channel/group. Validate authorization, channel listing, draft creation/search, media transfer, schedule/reschedule/cancel, publication result, selected-message editing/deletion and revocation. Check the same post in the Mini App/browser.

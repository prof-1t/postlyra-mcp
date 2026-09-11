# Troubleshooting

- **Server configured but no tools:** finish OAuth; a saved URL alone is not a successful connection.
- **401:** reconnect. Expired or revoked credentials cannot be repaired by changing the publication recipient.
- **403 / missing scope:** check the consented permissions and current bot rights. New scopes require new consent.
- **No channels:** connect a destination in Postlyra and verify bot membership. Draft creation can work before that.
- **Local callback rejected:** use the current client and exact registered redirect. Supported native OAuth uses PKCE and a loopback callback; do not substitute a different callback host.
- **Revision conflict:** read the latest post and reapply the intended changes. Do not overwrite concurrent work blindly.
- **Wrong publication time:** specify an IANA time zone, for example `Europe/Moscow`, and inspect the returned date/time.
- **Uncertain delivery:** check the Telegram destination before a retry. Do not assume that a timeout means no message was sent.
- **Media inaccessible:** use the upload flow; the cloud server cannot access the client's local filesystem.
- **Quota exceeded:** inspect the workspace quota. A connected-channel delivery consumes one publication per destination.
- **Native share cannot be edited later:** Telegram may not have returned identifiers. The Postlyra draft is still editable.

Run `node scripts/diagnose.mjs` for read-only endpoint checks. The script prints status and safe booleans, never response bodies or tokens.

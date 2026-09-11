# Permissions

OAuth displays the requested scopes before access is granted. Old grants do not silently receive new rights; reconnect and consent when you need a newly added capability.

| Scope | Access |
| --- | --- |
| `postlyra:profile` | Safe account/authorization status |
| `postlyra:channels:read` | Connected, owner-bound channel metadata |
| `postlyra:templates:read` | Available templates |
| `postlyra:drafts:write` | Existing core draft-authoring tools |
| `postlyra:posts:read` | Workspace, content search, reading and publication status |
| `postlyra:posts:write` | Working content, archive/restore/copy and preferences |
| `postlyra:posts:publish` | Send, schedule, reschedule, cancel and apply a selected publication |
| `postlyra:posts:delete` | Delete a selected delivered Telegram publication |
| `postlyra:templates:write` | Manage owner templates |
| `postlyra:media:write` | Create upload intents and attach owner media |

Each operation rechecks ownership and channel permissions. A grant cannot turn an arbitrary Telegram identifier into an authorized target.

Publishing follows the author's explicit instruction; it does not require reopening the Mini App for each operation. Deleting a sent message is destructive. Draft editing does not publish or edit all channels implicitly.

Disconnecting the AI client in Postlyra revokes its credentials. The AI service has its own retention/privacy policy. Postlyra receives tool requests and does not request the entire AI-chat transcript. Private Telegram Business conversations and internal outreach tools are excluded from the public content toolset.

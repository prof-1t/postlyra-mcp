# Release record: 0.2.0-rc.1

The public integration repository is [prof-1t/postlyra-mcp](https://github.com/prof-1t/postlyra-mcp). The service remains a release candidate. The private SaaS backend is deployed; publishing metadata does not establish client compatibility.

## Confirmed on September 11, 2026

| Item | Evidence |
| --- | --- |
| Registry server | `io.github.prof-1t/postlyra-mcp` |
| Registry version | `0.2.0-rc.1` |
| Registry state | `active`, confirmed by the official version API |
| Published at | `2026-09-11T12:54:16.786176Z` |
| Remote endpoint | `https://postlyra.app/mcp`, Streamable HTTP |
| Public discovery | HTTP 200, 31 tool definitions |
| Public diagnostics | Protected-resource metadata, authorization-server metadata and tool discovery passed; `contentWorkspaceAvailable: true` |
| Manifest | Validated against its official JSON schema and with official `mcp-publisher` v1.8.1 |

The [published Registry entry](https://registry.modelcontextprotocol.io/v0.1/servers/io.github.prof-1t%2Fpostlyra-mcp/versions/0.2.0-rc.1) matches [server.json](../server.json), including the repository URL and remote endpoint. Publication used the official CLI after the maintainer completed GitHub device authorization. No GitHub Actions publication workflow is installed in this public repository.

## Pending acceptance

- Telegram OIDC for browser sign-in is being configured.
- End-to-end OAuth, authenticated content operations and delivery have not been verified in this public release record.
- All five live-client acceptance rows remain **NOT RUN** in [compatibility.md](compatibility.md).
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

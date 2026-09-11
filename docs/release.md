# Publication checklist

1. Verify that this directory contains only integration files and no SaaS source, credentials or private data.
2. Create the public repository `prof-1t/postlyra-mcp` from this directory after the review. Do not change the visibility of the SaaS repository.
3. Confirm the HTTPS endpoint has the current deployed content toolset and passes diagnostics.
4. Complete the live-client matrix in [compatibility.md](compatibility.md).
5. Validate `server.json` against its published schema.
6. Authenticate the MCP Registry publisher as the verified GitHub namespace owner, publish the manifest and verify the returned public listing.
7. Submit the matching OpenAI app/plugin package with the same tool snapshot and permission descriptions.
8. Record public repository URL, commit/tag, Registry version, listing URL and submission outcome. Prepared files are not proof of external publication.

MCP Registry publisher login and publication are external operations; no script here performs them automatically.

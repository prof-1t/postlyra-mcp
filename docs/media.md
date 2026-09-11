# Media transfer

A remote server cannot read a path on the AI client's computer. Giving it a local filename is not an upload.

For clients with file access:
1. Call `create_media_upload` with the file metadata.
2. Transfer the bytes using the returned upload instructions before expiry.
3. Call `finalize_media_upload`.
4. Attach the owner-bound `mediaId` using `attach_media`.
5. Preview the draft and inspect the result.

The server enforces owner binding, file type, size, expiry and storage limits. Do not publish signed upload/download URLs or credentials in logs or public issues.

The existing ChatGPT attachment adapter is preserved. Its file slots and URLs are specific to that client and are not portable local filesystem references.

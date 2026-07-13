---
name: Clerk social-login provider gaps
description: What Clerk Auth cannot deliver when a user asks for "Google or Facebook login" plus profile fields like age.
---

Clerk Auth (Replit-managed) only supports Google, GitHub, Apple, and X as built-in SSO providers — there is no Facebook option, confirmed via `searchReplitDocs`.

Neither Google nor Facebook expose "age"/birthday through standard OAuth profile scopes; only name, email, and photo are reliably available without app-review-gated extended permissions.

**Why:** users often ask for "sign in with Google or Facebook" and "grab their name, photo, and age" as one bundle, assuming all social logins are equivalent and profile data is uniformly rich. Building silently around the gap (e.g., quietly dropping Facebook or faking an age field) causes confusion later.

**How to apply:** when a request combines multiple social providers and/or profile fields beyond name/email/photo, surface the exact gap to the user (via AskQuestion) and let them choose a fallback (skip the field, ask manually, drop the unsupported provider) before implementing.

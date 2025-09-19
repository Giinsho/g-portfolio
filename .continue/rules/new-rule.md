---
description: Rule for auto-generating Git commit messages with Ollama
---

## Rule: Autogenerate commit message descriptions

When working in VS Code with uncommitted changes, you can use **Ollama** to automatically generate a meaningful commit message based on the diff.

### Behavior

- Gather all uncommitted changes using `git diff`.
- Pass the diff to Ollama with a prompt like:
- Use the returned text as the commit message suggestion.

### Example Workflow

1. Run:

```bash
git diff > changes.diff
ollama run commit-writer < changes.diff
git commit -F <(ollama run commit-writer < changes.diff)
```

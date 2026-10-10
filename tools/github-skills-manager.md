# GitHub Skills Manager

```json
{
  "toolId": "github-skills-manager",
  "name": "GitHub Skills Manager",
  "type": "rest_api",
  "description": "Fetch skill metadata and file listings from GitHub repositories.",
  "method": "GET",
  "url": "https://api.github.com/repos/{{repo}}/contents/{{path}}",
  "headers": {
    "Authorization": "Bearer {{GITHUB_TOKEN}}",
    "Accept": "application/vnd.github+json"
  },
  "authType": "api_key",
  "timeout": 30000,
  "parameters": [
    { "name": "repo", "type": "string", "required": true },
    { "name": "path", "type": "string", "required": false, "default": "skills" }
  ]
}
```

## Example use

- repo = `mattpocock/skills`
- path = `skills/engineering`

This returns the contents of the directory so the agent can find `SKILL.md` files.

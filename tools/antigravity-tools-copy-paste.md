# Antigravity Tools (copy-paste ready)

## 1) GitHub Skills Manager

```json
{
  "toolId": "github-skills-manager",
  "name": "GitHub Skills Manager",
  "type": "rest_api",
  "description": "Fetch repository contents and skill folders from GitHub repos.",
  "method": "GET",
  "url": "https://api.github.com/repos/{{repo}}/contents/{{path}}",
  "headers": {
    "Authorization": "Bearer {{GITHUB_TOKEN}}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  },
  "authType": "api_key",
  "timeout": 30000,
  "parameters": [
    { "name": "repo", "type": "string", "required": true },
    { "name": "path", "type": "string", "required": false, "default": "skills" }
  ]
}
```

## 2) Claude Skills Hub

```json
{
  "toolId": "claude-skills-hub",
  "name": "Claude Skills Hub",
  "type": "rest_api",
  "description": "Run a prompt through the Anthropic Claude API.",
  "method": "POST",
  "url": "https://api.anthropic.com/v1/messages",
  "headers": {
    "x-api-key": "{{ANTHROPIC_API_KEY}}",
    "anthropic-version": "2023-06-01",
    "Content-Type": "application/json"
  },
  "body": {
    "model": "claude-opus-5-5",
    "max_tokens": 4096,
    "messages": [
      { "role": "user", "content": "{{skillPrompt}}" }
    ]
  },
  "authType": "api_key",
  "timeout": 300000,
  "parameters": [
    { "name": "skillPrompt", "type": "string", "required": true },
    { "name": "model", "type": "string", "required": false, "default": "claude-opus-5-5" }
  ]
}
```

## 3) Gemini Skills

```json
{
  "toolId": "gemini-skills",
  "name": "Gemini Skills",
  "type": "rest_api",
  "description": "Run a prompt through Google Gemini API.",
  "method": "POST",
  "url": "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={{GOOGLE_API_KEY}}",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "contents": [
      {
        "role": "user",
        "parts": [
          { "text": "{{skillPrompt}}" }
        ]
      }
    ],
    "generationConfig": {
      "temperature": 0.7,
      "maxOutputTokens": 2048
    }
  },
  "authType": "api_key",
  "timeout": 300000,
  "parameters": [
    { "name": "skillPrompt", "type": "string", "required": true }
  ]
}
```

## 4) Skills Orchestrator

```javascript
async function orchestrateSkill(action, repo, path, prompt) {
  const githubToken = process.env.GITHUB_TOKEN;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  if (action === 'list') {
    const response = await fetch(
      `https://api.github.com/repos/${repo}/contents/${path || 'skills'}`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }
    );
    const data = await response.json();
    return data;
  }

  if (action === 'execute') {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': anthropicKey,
        'anthropic-version': '2023-06-01',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-opus-5-5',
        max_tokens: 4096,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    return await response.json();
  }

  throw new Error(`Unknown action: ${action}`);
}

module.exports = { orchestrateSkill };
```

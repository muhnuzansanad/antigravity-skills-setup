# Claude Skills Hub

```json
{
  "toolId": "claude-skills-hub",
  "name": "Claude Skills Hub",
  "type": "rest_api",
  "description": "Execute a Claude skill via the Anthropic Messages API.",
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

## Notes

- For direct skill execution, you can also wrap the skill instruction in an explicit prompt.
- Make sure your model string matches the available version in your Anthropic account.

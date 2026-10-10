# Gemini Skills

```json
{
  "toolId": "gemini-skills",
  "name": "Gemini Skills",
  "type": "rest_api",
  "description": "Execute a Google Gemini prompt for tasks where the Gemini model is preferred.",
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

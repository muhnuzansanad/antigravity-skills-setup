# Antigravity Skills Setup

This repository contains a ready-to-use setup package for connecting GitHub skill repositories and AI APIs to Google Antigravity.

## What is included

- `tools/` : custom tool definitions for GitHub, Anthropic Claude, Google Gemini, and adapters
- `agents/` : agent instruction templates for orchestrating skills
- `workflows/` : automation workflow examples
- `configs/` : environment variable and configuration examples
- `scripts/` : helper scripts to import skill metadata from GitHub repos

## Quick start

1. Copy the tool definitions into your Antigravity Tools section.
2. Add required environment variables.
3. Create an agent using the instructions in `agents/skills-executor.md`.
4. Import the workflow examples from `workflows/`.
5. Run a small test using the `Test Cases` section below.

## Required environment variables

Set these in Antigravity Settings > Environment Variables or Secret Manager:

```bash
ANTHROPIC_API_KEY=sk-...
GOOGLE_API_KEY=AIz...
GITHUB_TOKEN=ghp_...
SLACK_WEBHOOK=https://hooks.slack.com/services/...
```

## Recommended GitHub repositories to import

- `mattpocock/skills`
- `anthropics/skills`
- `ComposioHQ/awesome-claude-skills`
- `alirezarezvani/claude-skills`
- `mukul975/Anthropic-Cybersecurity-Skills`

## Recommended tool definitions in Antigravity

1. GitHub Skills Manager (REST API)
2. Claude Skills Hub (REST API)
3. Gemini Skills (REST API)
4. Skills Orchestrator (Custom Function)
5. Skills Validator (Custom Function)

## Test cases

- List available skills from a GitHub repo
- Execute `/grill-me` skill via Claude
- Execute a Gemini prompt
- Import skill metadata from GitHub repo
- Validate and print a summary of imported skills

## Notes

- The repo is a starter bundle.
- Some Antigravity UI details may vary by tenant version.
- Use the files in `tools/`, `agents/`, and `workflows/` as paste-ready examples for your UI.

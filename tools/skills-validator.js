# Skills validator helper

This is a simple helper pattern for validating imported skill metadata.

```javascript
async function validateSkills(input) {
  const items = Array.isArray(input) ? input : [input];
  const valid = items.filter(item => item && item.name && item.path);
  return {
    total: valid.length,
    valid: valid.length,
    invalid: items.length - valid.length,
    summary: `Validated ${valid.length} skill entries.`,
    items: valid
  };
}

module.exports = { validateSkills };
```

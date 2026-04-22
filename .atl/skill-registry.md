# Skill Registry

**Project**: coffe
**Generated**: 2026-04-19

## User-Level Skills (from ~/.config/opencode/skills/)

| Trigger | Description |
|---------|-------------|
| /sdd-new | Create a new change by launching explore + proposal |
| /sdd-init | Initialize SDD in a project |
| /sdd-explore | Investigate an idea before committing |
| /sdd-propose | Create a change proposal |
| /sdd-spec | Write specs in Given/When/Then format |
| /sdd-design | Create technical design with architecture decisions |
| /sdd-tasks | Break down into implementation tasks |
| /sdd-apply | Implement tasks |
| /sdd-verify | Validate implementation against specs |
| /sdd-archive | Close change and persist final state |
| /sdd-onboard | Guided end-to-end SDD walkthrough |
| /sdd-ff | Fast-forward: proposal → specs → design → tasks |
| issue-creation | Create GitHub issues following issue-first enforcement |
| branch-pr | Create PRs following issue-first enforcement |
| judgment-day | Parallel adversarial review |
| skill-creator | Create new AI agent skills |
| go-testing | Go testing patterns (not applicable to this stack) |

## Project-Level Skills

| Trigger | Description | Location |
|---------|-------------|----------|
| coffe-design | Design patterns for this project (Astro 6.x) | `.agent/skills/coffe-design/SKILL.md` |

## Compact Rules

```markdown
## Project Standards (auto-resolved)
- Stack: Astro 6.1.8 (TypeScript)
- Build: npm run build
- Dev: npm run dev
- Type check: astro check (via astro/tsconfigs/strict)
- No test runner configured
- No linting or formatting tools installed
```

## Testing Capabilities

See: `sdd/coffe/testing-capabilities` in Engram.
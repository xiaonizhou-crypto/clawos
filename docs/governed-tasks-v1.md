# Governed Tasks v1

This document introduces the first clawOS/OpenClaw governance slice for task lifecycle management.

## What lands in v1

- A new governed task domain, stored separately from sessions.
- Gateway methods:
  - `tasks.list`
  - `tasks.get`
- A Control UI `Tasks` tab for:
  - lifecycle board
  - task detail timeline
  - review / approval visibility

## Why tasks are separate from sessions

Sessions are runtime containers.
Tasks are governance objects.

A single task may span:

- one or more sessions
- one or more agents
- multiple human intervention points
- a longer lifecycle than a single chat thread

## Initial lifecycle

- `new`
- `triaged`
- `planned`
- `in_review`
- `awaiting_human`
- `approved`
- `dispatched`
- `running`
- `blocked`
- `completed`
- `cancelled`

## Initial task fields

- identity: `id`, `title`
- source: `sourceChannel`, `sourceSessionKey`, `sourceThreadId`, `sourceMessageId`
- governance: `riskLevel`, `state`, `approvalStatus`, `currentOwner`
- planning: `summary`, `plan`, `reviewerNote`
- outputs: `artifacts`
- audit: `auditEvents`

## Current storage

For v1 the store is local and intentionally simple:

`~/.openclaw/governance/tasks.json`

This keeps the first slice easy to inspect and iterate on before a larger persistence decision.

## Planned next steps

1. Feishu intake split: reply-only vs governed-task
2. Task creation from inbound messages
3. Human approval queue wired to risky actions
4. Manual controls: pause / resume / reroute / cancel
5. Theme-layer labeling on top of the neutral kernel

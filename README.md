# clawOS
### One governance kernel. Many worlds.

clawOS is a governed Agent OS that turns Feishu messages into reviewable, approvable, auditable workflows — with narrative theme packs.

Current supported theme: **Celestial Court**

## What this repository is

This repository is the current clawOS working snapshot for a governed multi-agent operating layer built on top of an existing OpenClaw foundation.

It is **not** positioned here as a generic assistant repo and **not** as a simple theme demo.
The focus of this snapshot is:

- governed task lifecycle management
- Feishu-native task intake
- human approval gates
- auditability
- narrative theme packs on top of one neutral governance kernel

## Current v1 snapshot: governed-task loop

This snapshot proves a minimum closed loop:

**Feishu message → governed task → approval queue → approve/reject → state change → Feishu notify**

### Included in this snapshot

- Feishu inbound split into `reply-only` vs `governed-task`
- governed task creation from Feishu inbound
- Control UI `Tasks` tab
- `Approval Queue` inside the governed-task view
- approve / reject actions from Control UI
- approval state transitions
- Feishu text notification after approval decision
- task audit timeline including notification delivery outcome

### Not included yet

- runtime auto execution
- planner auto re-plan
- Feishu-side approve/reject commands
- advanced classifier logic
- broader theme rollout beyond governed-task-related UI

## One kernel, many worlds

The core principle is simple:

**same governance kernel, different narrative worlds**

The governed-task kernel stays neutral.
Theme packs are display-only.

Theme packs may change:
- role labels
- role descriptions
- navigation names
- state aliases
- panel copy
- icons / avatars
- UI tokens
- narrative copy

Theme packs may **not** change:
- task state machine
- approval rules
- risk policy
- dispatch routing
- Feishu intake split
- gateway methods
- task schema
- audit logic

## Current supported themes

- **default** — neutral control-plane presentation of the governance kernel
- **celestial-court** — the first live theme pack wired into governed-task UI

## Celestial Court

Celestial Court is the first theme pack actually connected to UI.

It is meant to express:
- governance
- hierarchy
- legitimacy
- order
- approval and handoff clarity

It does **not** change the system rules. It only changes the way the same kernel is presented.

### Minimal role mapping

| Neutral role | Celestial Court |
| --- | --- |
| governor | 玉帝 |
| planner | 太上老君 |
| reviewer | 王母 |
| dispatcher | 托塔李天王 |
| auditor | 司命星君 |
| observer | 千里眼 / 顺风耳 |
| treasury | 财神 |
| executor_fast | 哪吒 |
| executor_heavy | 天蓬元帅 |

## Planned theme packs

These are planned at the README / docs / config-planning level. They are **not** wired into UI yet.

- **Strategist Court** — planning-heavy advisory framing
- **Grand Manor** — household hierarchy and record-keeping framing
- **Mission Control** — command-center framing for high-visibility operations
- **Urban Beasts** — sharper contemporary creature-team framing
- **Court Squad** — lighter social team-court framing
- **Investigation Bureau** — casework / detective framing for traceability-heavy workflows

## Demo path

To demo the current snapshot:

1. Send a high-risk task request in Feishu
2. Let the system create a governed task
3. Open the `Tasks` view in Control UI
4. Observe the task in `Approval Queue`
5. Approve or reject in Control UI
6. Observe state change, audit update, and Feishu notification
7. Switch the governed-task display between `default` and `celestial-court`

## Local verification

Recommended local validation before wider sharing:

```bash
git status
pnpm install
pnpm build
pnpm ui:build
```

Then manually verify:

1. lightweight Feishu message → reply-only
2. high-risk Feishu request → governed-task
3. approval queue appears
4. approve once and reject once
5. Feishu decision notifications are delivered
6. audit timeline shows approval + notification outcome events

## Current repo status

This repo is a **demo snapshot**, not a finished production release.

It is the current working base for:
- governed-task v1
- theme pack v1
- Celestial Court as the first UI-connected world

Further runtime wiring, planner automation, and broader theme rollout remain intentionally out of scope for this snapshot.

import { Type } from "@sinclair/typebox";
import { NonEmptyString } from "./primitives.js";

export const TaskRiskLevelSchema = Type.Union([
  Type.Literal("low"),
  Type.Literal("medium"),
  Type.Literal("high"),
]);

export const TaskApprovalStatusSchema = Type.Union([
  Type.Literal("not_needed"),
  Type.Literal("pending"),
  Type.Literal("approved"),
  Type.Literal("rejected"),
]);

export const TaskStateSchema = Type.Union([
  Type.Literal("new"),
  Type.Literal("triaged"),
  Type.Literal("planned"),
  Type.Literal("in_review"),
  Type.Literal("awaiting_human"),
  Type.Literal("approved"),
  Type.Literal("dispatched"),
  Type.Literal("running"),
  Type.Literal("blocked"),
  Type.Literal("completed"),
  Type.Literal("cancelled"),
]);

export const TaskAuditEventSchema = Type.Object(
  {
    id: NonEmptyString,
    at: Type.Integer(),
    actorKind: Type.Union([Type.Literal("system"), Type.Literal("agent"), Type.Literal("human")]),
    actorId: NonEmptyString,
    type: NonEmptyString,
    summary: NonEmptyString,
  },
  { additionalProperties: false },
);

export const GovernedTaskSchema = Type.Object(
  {
    id: NonEmptyString,
    title: NonEmptyString,
    sourceChannel: NonEmptyString,
    sourceSessionKey: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    sourceThreadId: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    sourceMessageId: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    intentType: NonEmptyString,
    riskLevel: TaskRiskLevelSchema,
    state: TaskStateSchema,
    approvalStatus: TaskApprovalStatusSchema,
    currentOwner: NonEmptyString,
    createdAt: Type.Integer(),
    updatedAt: Type.Integer(),
    summary: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    plan: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    reviewerNote: Type.Optional(Type.Union([Type.String(), Type.Null()])),
    labels: Type.Optional(Type.Array(NonEmptyString)),
    artifacts: Type.Optional(
      Type.Array(
        Type.Object(
          {
            kind: NonEmptyString,
            title: NonEmptyString,
            href: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          },
          { additionalProperties: false },
        ),
      ),
    ),
    auditEvents: Type.Array(TaskAuditEventSchema),
  },
  { additionalProperties: false },
);

export const TasksListParamsSchema = Type.Object(
  {
    limit: Type.Optional(Type.Integer({ minimum: 1 })),
    query: Type.Optional(Type.String()),
    states: Type.Optional(Type.Array(TaskStateSchema)),
    riskLevels: Type.Optional(Type.Array(TaskRiskLevelSchema)),
  },
  { additionalProperties: false },
);

export const TasksGetParamsSchema = Type.Object(
  {
    taskId: NonEmptyString,
  },
  { additionalProperties: false },
);

export const TasksListResultSchema = Type.Object(
  {
    path: NonEmptyString,
    tasks: Type.Array(GovernedTaskSchema),
    total: Type.Integer({ minimum: 0 }),
    generatedAt: Type.Integer(),
  },
  { additionalProperties: false },
);

export const TasksGetResultSchema = Type.Object(
  {
    path: NonEmptyString,
    task: Type.Union([GovernedTaskSchema, Type.Null()]),
    generatedAt: Type.Integer(),
  },
  { additionalProperties: false },
);

export type TaskRiskLevel = "low" | "medium" | "high";
export type TaskApprovalStatus = "not_needed" | "pending" | "approved" | "rejected";
export type TaskState =
  | "new"
  | "triaged"
  | "planned"
  | "in_review"
  | "awaiting_human"
  | "approved"
  | "dispatched"
  | "running"
  | "blocked"
  | "completed"
  | "cancelled";
export type TaskAuditEvent = typeof TaskAuditEventSchema.static;
export type GovernedTask = typeof GovernedTaskSchema.static;
export type TasksListParams = typeof TasksListParamsSchema.static;
export type TasksGetParams = typeof TasksGetParamsSchema.static;
export type TasksListResult = typeof TasksListResultSchema.static;
export type TasksGetResult = typeof TasksGetResultSchema.static;

import {
  ErrorCodes,
  errorShape,
  formatValidationErrors,
  validateTasksGetParams,
  validateTasksListParams,
} from "../protocol/index.js";
import { getGovernedTask, listGovernedTasks } from "../../tasks/store.js";
import type { GatewayRequestHandlers } from "./types.js";

export const tasksHandlers: GatewayRequestHandlers = {
  "tasks.list": ({ params, respond }) => {
    if (!validateTasksListParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid tasks.list params: ${formatValidationErrors(validateTasksListParams.errors)}`,
        ),
      );
      return;
    }
    const p = params as { limit?: number; query?: string; states?: string[]; riskLevels?: string[] };
    respond(
      true,
      listGovernedTasks({
        limit: p.limit,
        query: p.query,
        states: p.states,
        riskLevels: p.riskLevels,
      }),
      undefined,
    );
  },
  "tasks.get": ({ params, respond }) => {
    if (!validateTasksGetParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid tasks.get params: ${formatValidationErrors(validateTasksGetParams.errors)}`,
        ),
      );
      return;
    }
    const p = params as { taskId: string };
    respond(true, getGovernedTask(p.taskId), undefined);
  },
};

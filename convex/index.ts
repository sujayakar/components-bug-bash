import { QueryCtx } from "./_generated/server";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";

import { ActionRetrier } from "@convex-dev/action-retrier";
import { TableAggregate } from "@convex-dev/aggregate";
import { PushNotifications } from "@convex-dev/expo-push-notifications";
import { GeospatialIndex } from "@convex-dev/geospatial";
import { LaunchDarkly } from "@convex-dev/launchdarkly";
import { Migrations } from "@convex-dev/migrations";
import { MINUTE, RateLimiter } from "@convex-dev/ratelimiter";
import { Crons } from "@convex-dev/crons";
import { ShardedCounter } from "@convex-dev/sharded-counter";
import { Twilio } from "@convex-dev/twilio";
import { WorkflowManager } from "@convex-dev/workflow";

export const retrier = new ActionRetrier(components.actionRetrier);
export const messagesAggregate = new TableAggregate<
  number,
  DataModel,
  "messages"
>(components.aggregate, {
  sortKey: (d) => d._creationTime,
  sumValue: (d) => d.body.length,
});
export const pushNotifications = new PushNotifications(
  components.pushNotifications,
);
export const geospatial = new GeospatialIndex(components.geospatial);

export function launchdarklyClient(ctx: QueryCtx) {
  return new LaunchDarkly(components.launchdarkly, ctx);
}

export const migrations = new Migrations<DataModel>(components.migrations);
export const runMigrations = migrations.runFromCLI();
export const rateLimiter = new RateLimiter(components.ratelimiter, {
  sendMessage: {
    kind: "token bucket",
    rate: 10,
    period: MINUTE,
    capacity: 3,
  },
});
export const crons = new Crons(components.crons);
export const shardedCounter = new ShardedCounter(components.shardedCounter);

if (!process.env.TWILIO_PHONE_NUMBER) {
  throw new Error("TWILIO_PHONE_NUMBER is not set");
}
export const twilio = new Twilio(components.twilio, {
  defaultFrom: process.env.TWILIO_PHONE_NUMBER!,
});
export const workflow = new WorkflowManager(components.workflow);

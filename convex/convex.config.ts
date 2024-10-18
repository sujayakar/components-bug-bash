import actionRetrier from "@convex-dev/action-retrier/convex.config"
import actionCache from "@convex-dev/action-cache/convex.config"
import aggregate from "@convex-dev/aggregate/convex.config"
import expoPushNotifications from "@convex-dev/expo-push-notifications/convex.config"
import geospatial from "@convex-dev/geospatial/convex.config"
import launchdarkly from "@convex-dev/launchdarkly/convex.config"
import migrations from "@convex-dev/migrations/convex.config"
import ratelimiter from "@convex-dev/ratelimiter/convex.config"
import crons from "@convex-dev/crons/convex.config"
import shardedCounter from "@convex-dev/sharded-counter/convex.config"
import twilio from "@convex-dev/twilio/convex.config"
import workflow from "@convex-dev/workflow/convex.config"

import { defineApp } from "convex/server"

const app = defineApp();

app.use(actionRetrier);
app.use(actionCache);
app.use(aggregate);
app.use(expoPushNotifications);
app.use(geospatial);
app.use(launchdarkly);
app.use(migrations);
app.use(ratelimiter);
app.use(crons);
app.use(shardedCounter);
app.use(twilio);
app.use(workflow);

export default app;
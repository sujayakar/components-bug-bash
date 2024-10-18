/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as messages from "../messages.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  messages: typeof messages;
}>;
declare const fullApiWithMounts: typeof fullApi;

export declare const api: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApiWithMounts,
  FunctionReference<any, "internal">
>;

export declare const components: {
  actionRetrier: {
    public: {
      cancel: FunctionReference<
        "mutation",
        "internal",
        { runId: string },
        boolean
      >;
      cleanup: FunctionReference<
        "mutation",
        "internal",
        { runId: string },
        any
      >;
      start: FunctionReference<
        "mutation",
        "internal",
        {
          functionArgs: any;
          functionHandle: string;
          options: {
            base: number;
            initialBackoffMs: number;
            logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR";
            maxFailures: number;
            onComplete?: string;
          };
        },
        string
      >;
      status: FunctionReference<
        "query",
        "internal",
        { runId: string },
        | { type: "inProgress" }
        | {
            result:
              | { returnValue: any; type: "success" }
              | { error: string; type: "failed" }
              | { type: "canceled" };
            type: "completed";
          }
      >;
    };
  };
  actionCache: {
    cache: {
      get: FunctionReference<
        "mutation",
        "internal",
        { args: any; expiration: number | null; name: string },
        any | null
      >;
      put: FunctionReference<
        "mutation",
        "internal",
        { args: any; expiration: number | null; name: string; value: any },
        any
      >;
    };
    crons: {
      purge: FunctionReference<
        "mutation",
        "internal",
        { expiresAt?: number },
        null
      >;
    };
    public: {
      fetch: FunctionReference<
        "action",
        "internal",
        { args: any; expiration: number | null; fn: string; name: string },
        any
      >;
      remove: FunctionReference<
        "mutation",
        "internal",
        { args: any; name: string },
        null
      >;
      removeAll: FunctionReference<
        "mutation",
        "internal",
        { before?: number; name?: string },
        null
      >;
    };
  };
  aggregate: {
    btree: {
      aggregateBetween: FunctionReference<
        "query",
        "internal",
        { k1?: any; k2?: any },
        { count: number; sum: number }
      >;
      atNegativeOffset: FunctionReference<
        "query",
        "internal",
        { k1?: any; k2?: any; offset: number },
        { k: any; s: number; v: any }
      >;
      atOffset: FunctionReference<
        "query",
        "internal",
        { k1?: any; k2?: any; offset: number },
        { k: any; s: number; v: any }
      >;
      count: FunctionReference<"query", "internal", {}, any>;
      get: FunctionReference<
        "query",
        "internal",
        { key: any },
        null | { k: any; s: number; v: any }
      >;
      offset: FunctionReference<
        "query",
        "internal",
        { k1?: any; key: any },
        number
      >;
      offsetUntil: FunctionReference<
        "query",
        "internal",
        { k2?: any; key: any },
        number
      >;
      paginate: FunctionReference<
        "query",
        "internal",
        {
          cursor?: string;
          k1?: any;
          k2?: any;
          limit: number;
          order: "asc" | "desc";
        },
        {
          cursor: string;
          isDone: boolean;
          page: Array<{ k: any; s: number; v: any }>;
        }
      >;
      sum: FunctionReference<"query", "internal", {}, number>;
      validate: FunctionReference<"query", "internal", {}, any>;
    };
    inspect: {
      display: FunctionReference<"query", "internal", {}, any>;
      dump: FunctionReference<"query", "internal", {}, string>;
      inspectNode: FunctionReference<
        "query",
        "internal",
        { node?: string },
        null
      >;
    };
    public: {
      clear: FunctionReference<
        "mutation",
        "internal",
        { maxNodeSize?: number; rootLazy?: boolean },
        null
      >;
      deleteIfExists: FunctionReference<
        "mutation",
        "internal",
        { key: any },
        any
      >;
      delete_: FunctionReference<"mutation", "internal", { key: any }, null>;
      init: FunctionReference<
        "mutation",
        "internal",
        { maxNodeSize?: number; rootLazy?: boolean },
        null
      >;
      insert: FunctionReference<
        "mutation",
        "internal",
        { key: any; summand?: number; value: any },
        null
      >;
      makeRootLazy: FunctionReference<"mutation", "internal", {}, null>;
      replace: FunctionReference<
        "mutation",
        "internal",
        { currentKey: any; newKey: any; summand?: number; value: any },
        null
      >;
      replaceOrInsert: FunctionReference<
        "mutation",
        "internal",
        { currentKey: any; newKey: any; summand?: number; value: any },
        any
      >;
    };
  };
  pushNotifications: {
    public: {
      deleteNotificationsForUser: FunctionReference<
        "mutation",
        "internal",
        { logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR"; userId: string },
        any
      >;
      getNotification: FunctionReference<
        "query",
        "internal",
        { id: string; logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR" },
        null | {
          body?: string;
          data?: any;
          numPreviousFailures: number;
          sound?: string;
          state:
            | "awaiting_delivery"
            | "in_progress"
            | "delivered"
            | "needs_retry"
            | "failed"
            | "maybe_delivered"
            | "unable_to_deliver";
          title: string;
        }
      >;
      getNotificationsForUser: FunctionReference<
        "query",
        "internal",
        {
          limit?: number;
          logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR";
          userId: string;
        },
        Array<{
          body?: string;
          data?: any;
          id: string;
          numPreviousFailures: number;
          sound?: string;
          state:
            | "awaiting_delivery"
            | "in_progress"
            | "delivered"
            | "needs_retry"
            | "failed"
            | "maybe_delivered"
            | "unable_to_deliver";
          title: string;
        }>
      >;
      getStatusForUser: FunctionReference<
        "query",
        "internal",
        { logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR"; userId: string },
        { hasToken: boolean; paused: boolean }
      >;
      pauseNotificationsForUser: FunctionReference<
        "mutation",
        "internal",
        { logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR"; userId: string },
        null
      >;
      recordPushNotificationToken: FunctionReference<
        "mutation",
        "internal",
        {
          logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR";
          pushToken: string;
          userId: string;
        },
        null
      >;
      removePushNotificationToken: FunctionReference<
        "mutation",
        "internal",
        { logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR"; userId: string },
        null
      >;
      restart: FunctionReference<
        "mutation",
        "internal",
        { logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR" },
        boolean
      >;
      sendPushNotification: FunctionReference<
        "mutation",
        "internal",
        {
          allowUnregisteredTokens?: boolean;
          logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR";
          notification: {
            body?: string;
            data?: any;
            sound?: string;
            title: string;
          };
          userId: string;
        },
        string | null
      >;
      shutdown: FunctionReference<
        "mutation",
        "internal",
        { logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR" },
        { data?: any; message: string }
      >;
      unpauseNotificationsForUser: FunctionReference<
        "mutation",
        "internal",
        { logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR"; userId: string },
        null
      >;
    };
  };
  geospatial: {
    document: {
      get: FunctionReference<
        "query",
        "internal",
        { key: string },
        {
          coordinates: { latitude: number; longitude: number };
          filterKeys: Record<
            string,
            | string
            | number
            | boolean
            | null
            | bigint
            | Array<string | number | boolean | null | bigint>
          >;
          key: string;
          sortKey: number;
        } | null
      >;
      insert: FunctionReference<
        "mutation",
        "internal",
        {
          document: {
            coordinates: { latitude: number; longitude: number };
            filterKeys: Record<
              string,
              | string
              | number
              | boolean
              | null
              | bigint
              | Array<string | number | boolean | null | bigint>
            >;
            key: string;
            sortKey: number;
          };
          levelMod: number;
          maxCells: number;
          maxLevel: number;
          minLevel: number;
        },
        null
      >;
      remove: FunctionReference<
        "mutation",
        "internal",
        {
          key: string;
          levelMod: number;
          maxCells: number;
          maxLevel: number;
          minLevel: number;
        },
        boolean
      >;
    };
    query: {
      debugCells: FunctionReference<
        "query",
        "internal",
        {
          levelMod: number;
          maxCells: number;
          maxLevel: number;
          minLevel: number;
          rectangle: {
            east: number;
            north: number;
            south: number;
            west: number;
          };
        },
        Array<{
          token: string;
          vertices: Array<{ latitude: number; longitude: number }>;
        }>
      >;
      execute: FunctionReference<
        "query",
        "internal",
        {
          cursor?: string;
          levelMod: number;
          logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR";
          maxCells: number;
          maxLevel: number;
          minLevel: number;
          query: {
            filtering: Array<{
              filterKey: string;
              filterValue: string | number | boolean | null | bigint;
              occur: "should" | "must";
            }>;
            maxResults: number;
            rectangle: {
              east: number;
              north: number;
              south: number;
              west: number;
            };
            sorting: {
              interval: { endExclusive?: number; startInclusive?: number };
            };
          };
        },
        {
          nextCursor?: string;
          results: Array<{
            coordinates: { latitude: number; longitude: number };
            key: string;
          }>;
        }
      >;
    };
  };
  launchdarkly: {
    events: {
      storeEvents: FunctionReference<
        "mutation",
        "internal",
        {
          options?: {
            allAttributesPrivate?: boolean;
            eventsUri?: string;
            privateAttributes?: Array<string>;
          };
          payloads: Array<string>;
          sdkKey: string;
        },
        null
      >;
    };
    store: {
      get: FunctionReference<
        "query",
        "internal",
        { key: string; kind: "flags" | "segments" },
        string | null
      >;
      getAll: FunctionReference<
        "query",
        "internal",
        { kind: "flags" | "segments" },
        Array<string>
      >;
      initialized: FunctionReference<"query", "internal", {}, boolean>;
      write: FunctionReference<
        "mutation",
        "internal",
        { payload: string },
        null
      >;
    };
    tokens: {
      validate: FunctionReference<
        "query",
        "internal",
        { token?: string },
        { error?: string; success: boolean }
      >;
    };
  };
  migrations: {
    public: {
      cancel: FunctionReference<
        "mutation",
        "internal",
        { name: string },
        {
          batchSize?: number;
          cursor?: string | null;
          isDone: boolean;
          latestStart?: number;
          name: string;
          next?: Array<string>;
          processed: number;
          workerStatus?:
            | "pending"
            | "inProgress"
            | "success"
            | "failed"
            | "canceled";
        }
      >;
      cancelAll: FunctionReference<
        "mutation",
        "internal",
        { sinceTs?: number },
        Array<{
          batchSize?: number;
          cursor?: string | null;
          isDone: boolean;
          latestStart?: number;
          name: string;
          next?: Array<string>;
          processed: number;
          workerStatus?:
            | "pending"
            | "inProgress"
            | "success"
            | "failed"
            | "canceled";
        }>
      >;
      getStatus: FunctionReference<
        "query",
        "internal",
        { limit?: number; migrationNames?: Array<string> },
        Array<{
          batchSize?: number;
          cursor?: string | null;
          isDone: boolean;
          latestStart?: number;
          name: string;
          next?: Array<string>;
          processed: number;
          workerStatus?:
            | "pending"
            | "inProgress"
            | "success"
            | "failed"
            | "canceled";
        }>
      >;
      runMigration: FunctionReference<
        "mutation",
        "internal",
        {
          batchSize?: number;
          cursor?: string | null;
          dryRun: boolean;
          fnHandle: string;
          name: string;
          next?: Array<{ fnHandle: string; name: string }>;
        },
        {
          batchSize?: number;
          cursor?: string | null;
          isDone: boolean;
          latestStart?: number;
          name: string;
          next?: Array<string>;
          processed: number;
          workerStatus?:
            | "pending"
            | "inProgress"
            | "success"
            | "failed"
            | "canceled";
        }
      >;
    };
  };
  ratelimiter: {
    public: {
      checkRateLimit: FunctionReference<
        "query",
        "internal",
        {
          config:
            | {
                capacity?: number;
                kind: "token bucket";
                maxReserved?: number;
                period: number;
                rate: number;
                shards?: number;
              }
            | {
                capacity?: number;
                kind: "fixed window";
                maxReserved?: number;
                period: number;
                rate: number;
                shards?: number;
                start?: number;
              };
          count?: number;
          key?: string;
          name: string;
          reserve?: boolean;
          throws?: boolean;
        },
        { ok: true; retryAfter?: number } | { ok: false; retryAfter: number }
      >;
      rateLimit: FunctionReference<
        "mutation",
        "internal",
        {
          config:
            | {
                capacity?: number;
                kind: "token bucket";
                maxReserved?: number;
                period: number;
                rate: number;
                shards?: number;
              }
            | {
                capacity?: number;
                kind: "fixed window";
                maxReserved?: number;
                period: number;
                rate: number;
                shards?: number;
                start?: number;
              };
          count?: number;
          key?: string;
          name: string;
          reserve?: boolean;
          throws?: boolean;
        },
        { ok: true; retryAfter?: number } | { ok: false; retryAfter: number }
      >;
      resetRateLimit: FunctionReference<
        "mutation",
        "internal",
        { key?: string; name: string },
        null
      >;
    };
  };
  crons: {
    public: {
      del: FunctionReference<
        "mutation",
        "internal",
        { identifier: { id: string } | { name: string } },
        null
      >;
      get: FunctionReference<
        "query",
        "internal",
        { identifier: { id: string } | { name: string } },
        {
          args: Record<string, any>;
          functionHandle: string;
          id: string;
          name?: string;
          schedule:
            | { kind: "interval"; ms: number }
            | { cronspec: string; kind: "cron" };
        } | null
      >;
      list: FunctionReference<
        "query",
        "internal",
        {},
        Array<{
          args: Record<string, any>;
          functionHandle: string;
          id: string;
          name?: string;
          schedule:
            | { kind: "interval"; ms: number }
            | { cronspec: string; kind: "cron" };
        }>
      >;
      register: FunctionReference<
        "mutation",
        "internal",
        {
          args: Record<string, any>;
          functionHandle: string;
          name?: string;
          schedule:
            | { kind: "interval"; ms: number }
            | { cronspec: string; kind: "cron" };
        },
        string
      >;
    };
  };
  shardedCounter: {
    public: {
      add: FunctionReference<
        "mutation",
        "internal",
        { count: number; name: string; shards?: number },
        null
      >;
      count: FunctionReference<"query", "internal", { name: string }, number>;
    };
  };
  twilio: {
    messages: {
      create: FunctionReference<
        "action",
        "internal",
        {
          account_sid: string;
          auth_token: string;
          body: string;
          callback?: string;
          from: string;
          status_callback: string;
          to: string;
        },
        {
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }
      >;
      getByCounterparty: FunctionReference<
        "query",
        "internal",
        { account_sid: string; counterparty: string; limit?: number },
        Array<{
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }>
      >;
      getBySid: FunctionReference<
        "query",
        "internal",
        { account_sid: string; sid: string },
        {
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        } | null
      >;
      getFrom: FunctionReference<
        "query",
        "internal",
        { account_sid: string; from: string; limit?: number },
        Array<{
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }>
      >;
      getFromTwilioBySidAndInsert: FunctionReference<
        "action",
        "internal",
        {
          account_sid: string;
          auth_token: string;
          incomingMessageCallback?: string;
          sid: string;
        },
        {
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }
      >;
      getTo: FunctionReference<
        "query",
        "internal",
        { account_sid: string; limit?: number; to: string },
        Array<{
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }>
      >;
      list: FunctionReference<
        "query",
        "internal",
        { account_sid: string; limit?: number },
        Array<{
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }>
      >;
      listIncoming: FunctionReference<
        "query",
        "internal",
        { account_sid: string; limit?: number },
        Array<{
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }>
      >;
      listOutgoing: FunctionReference<
        "query",
        "internal",
        { account_sid: string; limit?: number },
        Array<{
          account_sid: string;
          api_version: string;
          body: string;
          counterparty?: string;
          date_created: string;
          date_sent: string | null;
          date_updated: string | null;
          direction: string;
          error_code: number | null;
          error_message: string | null;
          from: string;
          messaging_service_sid: string | null;
          num_media: string;
          num_segments: string;
          price: string | null;
          price_unit: string | null;
          rest?: any;
          sid: string;
          status: string;
          subresource_uris: { feedback?: string; media: string } | null;
          to: string;
          uri: string;
        }>
      >;
      updateStatus: FunctionReference<
        "mutation",
        "internal",
        { account_sid: string; sid: string; status: string },
        null
      >;
    };
    phone_numbers: {
      create: FunctionReference<
        "action",
        "internal",
        { account_sid: string; auth_token: string; number: string },
        any
      >;
      updateSmsUrl: FunctionReference<
        "action",
        "internal",
        {
          account_sid: string;
          auth_token: string;
          sid: string;
          sms_url: string;
        },
        any
      >;
    };
  };
  workflow: {
    functions: {
      start: FunctionReference<
        "mutation",
        "internal",
        {
          args: any;
          functionType:
            | { type: "query" }
            | { type: "mutation" }
            | { type: "action" };
          generationNumber: number;
          handle: string;
          journalId: string;
          workflowId: string;
        },
        null
      >;
    };
    journal: {
      load: FunctionReference<
        "query",
        "internal",
        { workflowId: string },
        Array<{
          _creationTime: number;
          _id: string;
          step:
            | {
                args: any;
                argsSize: number;
                completedAt?: number;
                functionType:
                  | { type: "query" }
                  | { type: "mutation" }
                  | { recoveryId?: string; type: "action" };
                handle: string;
                inProgress: boolean;
                outcome?:
                  | { result: any; resultSize: number; type: "success" }
                  | { error: string; type: "error" };
                startedAt: number;
                type: "function";
              }
            | {
                deadline: number;
                durationMs: number;
                inProgress: boolean;
                type: "sleep";
              };
          stepNumber: number;
          workflowId: string;
        }>
      >;
      pushEntry: FunctionReference<
        "mutation",
        "internal",
        {
          generationNumber: number;
          step:
            | {
                args: any;
                argsSize: number;
                completedAt?: number;
                functionType:
                  | { type: "query" }
                  | { type: "mutation" }
                  | { recoveryId?: string; type: "action" };
                handle: string;
                inProgress: boolean;
                outcome?:
                  | { result: any; resultSize: number; type: "success" }
                  | { error: string; type: "error" };
                startedAt: number;
                type: "function";
              }
            | {
                deadline: number;
                durationMs: number;
                inProgress: boolean;
                type: "sleep";
              };
          stepNumber: number;
          workflowId: string;
        },
        {
          _creationTime: number;
          _id: string;
          step:
            | {
                args: any;
                argsSize: number;
                completedAt?: number;
                functionType:
                  | { type: "query" }
                  | { type: "mutation" }
                  | { recoveryId?: string; type: "action" };
                handle: string;
                inProgress: boolean;
                outcome?:
                  | { result: any; resultSize: number; type: "success" }
                  | { error: string; type: "error" };
                startedAt: number;
                type: "function";
              }
            | {
                deadline: number;
                durationMs: number;
                inProgress: boolean;
                type: "sleep";
              };
          stepNumber: number;
          workflowId: string;
        }
      >;
    };
    sleep: {
      start: FunctionReference<
        "mutation",
        "internal",
        {
          durationMs: number;
          generationNumber: number;
          journalId: string;
          workflowId: string;
        },
        null
      >;
    };
    workflow: {
      blockedBy: FunctionReference<
        "query",
        "internal",
        { workflowId: string },
        {
          _creationTime: number;
          _id: string;
          step:
            | {
                args: any;
                argsSize: number;
                completedAt?: number;
                functionType:
                  | { type: "query" }
                  | { type: "mutation" }
                  | { recoveryId?: string; type: "action" };
                handle: string;
                inProgress: boolean;
                outcome?:
                  | { result: any; resultSize: number; type: "success" }
                  | { error: string; type: "error" };
                startedAt: number;
                type: "function";
              }
            | {
                deadline: number;
                durationMs: number;
                inProgress: boolean;
                type: "sleep";
              };
          stepNumber: number;
          workflowId: string;
        } | null
      >;
      cancel: FunctionReference<
        "mutation",
        "internal",
        { workflowId: string },
        null
      >;
      cleanup: FunctionReference<
        "mutation",
        "internal",
        { workflowId: string },
        boolean
      >;
      complete: FunctionReference<
        "mutation",
        "internal",
        {
          generationNumber: number;
          now: number;
          outcome:
            | { result: any; resultSize: number; type: "success" }
            | { error: string; type: "error" };
          workflowId: string;
        },
        null
      >;
      create: FunctionReference<
        "mutation",
        "internal",
        {
          logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR";
          workflowArgs: any;
          workflowHandle: string;
        },
        string
      >;
      load: FunctionReference<
        "query",
        "internal",
        { workflowId: string },
        {
          _creationTime: number;
          _id: string;
          args: any;
          generationNumber: number;
          logLevel: "DEBUG" | "INFO" | "WARN" | "ERROR";
          startedAt: number;
          state:
            | { type: "running" }
            | {
                completedAt: number;
                outcome:
                  | { result: any; resultSize: number; type: "success" }
                  | { error: string; type: "error" };
                type: "completed";
              }
            | { canceledAt: number; type: "canceled" };
          workflowHandle: string;
        }
      >;
    };
  };
};

/* prettier-ignore-end */

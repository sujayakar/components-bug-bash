import { query, mutation, action } from "./_generated/server";
import { v } from "convex/values";
import { ActionCache } from "@convex-dev/action-cache";
import { api, components } from "./_generated/api";
import { FunctionReference } from "convex/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const messages = await ctx.db.query("messages").order("desc").take(100);
    return messages;
  },
});

export const send = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async (ctx, { body, author }) => {
    // Send a new message.
    await ctx.db.insert("messages", { body, author });
  },
});

export const exampleAction = action({
  handler: async (ctx) => {
    return "Hello World";
  },
});

export const cachedExampleAction: ActionCache<FunctionReference<"action">> =
  new ActionCache(components.actionCache, {
    action: api.messages.exampleAction,
  });

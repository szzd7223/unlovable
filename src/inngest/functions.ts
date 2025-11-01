import { createAgent, openai } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const writer = createAgent({
      name: "writer",
      system: "You are an expert writer.  You write readable, concise, simple content.",
      model: openai({
        model: "x-ai/grok-code-fast-1", // Use OpenRouter's model format
        apiKey: process.env.OPENROUTER_API_KEY,
        baseUrl: "https://openrouter.ai/api/v1",
      }),
    });

    const { output } = await writer.run(
      `Summarize the following content: ${event.data.value}`,
    );

    return { output };
  },
);
import {AppRouter} from "@/server";
import {
  createTRPCClient,
  loggerLink,
  splitLink,
  unstable_httpBatchStreamLink,
  unstable_httpSubscriptionLink
} from "@trpc/client";
import {env} from "@/env/server.mjs";

// 服务对应的 Url
const url = `${env.NEXT_PUBLIC_DOMAIN_NAME}:${env.NEXT_PUBLIC_PORT}/api/trpc`

const trpcClient = createTRPCClient<AppRouter>({
    links: [
      splitLink({
        condition: (op) => op.type === 'subscription',
        true: unstable_httpSubscriptionLink({
          url: url,
        }),
        false: unstable_httpBatchStreamLink({
          url: url,
        }),
      }),
      loggerLink({
        enabled: (opts) =>
          (env.NODE_ENV === 'development' &&
            typeof window !== 'undefined') ||
          (opts.direction === 'down' && opts.result instanceof Error),
      })
    ]
  }
);

export default trpcClient;

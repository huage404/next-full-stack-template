import { appRouter } from '@/server';
import { createTRPCContext } from '@/server/trpc';
import {fetchRequestHandler} from "@trpc/server/adapters/fetch";
import {NextRequest} from "next/server";

const handle = (request: NextRequest ) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: appRouter,
    createContext: createTRPCContext as any
  })
}

export {
  handle as GET,
  handle as POST,
}

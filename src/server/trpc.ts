import { initTRPC } from '@trpc/server';
import {prisma} from "@/utils/prismaClient";
import {getSession} from "next-auth/react";

const t = initTRPC.create();

type TCreateContextOptions = Record<string, never>;

export const createTRPCContext = async (_opts: TCreateContextOptions) => {
  const session = await getSession();

  return {
    session,
    prisma
  };
};

export const router = t.router;
export const publicProcedure = t.procedure;

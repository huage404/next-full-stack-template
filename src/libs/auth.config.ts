import { prisma } from '@/utils/prismaClient';
import { NextAuthOptions } from 'next-auth';

import CredentialsProvider from "next-auth/providers/credentials";
import {z} from "zod";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/login'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "请输入用户名" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string().email().trim(), password: z.string().trim() })
          .safeParse(credentials);
        if (!parsedCredentials.success) {
          throw new Error('穿参格式错误')
        }

        const { username } = parsedCredentials.data;
        const user = await prisma.user.findUnique({
          where: {
            email: username
          }
        });

        if(!user) {
          throw new Error('用户不存在')
        }

        return {
          id: user.id.toString(),
          name: user.name,
          email: user.email,
        };
      }
    })
  ]
};

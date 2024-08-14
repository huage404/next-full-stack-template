import {NextAuthOptions} from 'next-auth';

import CredentialsProvider from "next-auth/providers/credentials";
import {z} from "zod";
import {env} from "@/env/server.mjs";

export const authOptions: NextAuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "请输入用户名" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 模拟返回数据
        return {
          id: '0',
          name: 'admin',
          email: 'test@qq.com',
        };
      }
    })
  ]
};

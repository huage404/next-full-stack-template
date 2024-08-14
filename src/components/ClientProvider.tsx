'use client'

import React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {SessionProvider} from "next-auth/react";
import { Toaster } from "react-hot-toast";

const ClientProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <NextUIProvider>
        {children}

        <Toaster />
      </NextUIProvider>
    </SessionProvider>
  )
}

export default ClientProvider;

'use client'

import React from "react";
import {NextUIProvider} from "@nextui-org/react";

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}

export default ClientProvider;

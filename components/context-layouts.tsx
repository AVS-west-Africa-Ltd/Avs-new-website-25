"use client";

import React, { createContext, FC, ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ComponentProps = {
  children: Readonly<ReactNode>;
};

// Create context
interface AppContextProps {
  sharedValue: any;
  setSharedValue: (value: any) => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

const ContextLayouts: FC<ComponentProps> = ({ children }) => {
  const [sharedValue, setSharedValue] = useState<any>({});
  return (
    <AppContext.Provider value={{ sharedValue, setSharedValue }}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AppContext.Provider>
  );
};

export default ContextLayouts;
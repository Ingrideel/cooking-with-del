import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "@tanstack/react-router";

import { router } from "src/routes/routes";
import { ContextProvider } from "src/context/provider";

import "@mantine/core/styles.css";
import "src/index.scss";
import "src/language/index";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        // fontFamily: "Shantell Sans, cursive",
        primaryColor: "violet",
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <RouterProvider router={router} />
        </ContextProvider>
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);

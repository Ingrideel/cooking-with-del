import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "react-query/devtools";
import { AppShell } from "@mantine/core";

import { Header } from "components/Header/Header";

const App: React.FC = () => {
  return (
    <>
      <AppShell header={{ height: 60 }} padding="md">
        <Header />
        <AppShell.Main style={{ overflow: "hidden" }}>
          <Outlet />
        </AppShell.Main>
      </AppShell>
      {import.meta.env.DEV ? (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools position="bottom-right" />
        </>
      ) : null}
    </>
  );
};

export default App;

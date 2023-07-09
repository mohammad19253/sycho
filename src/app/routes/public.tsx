import React from "react";
import { Home } from "../../features/Home/Home";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { Outlet, useRoutes } from "react-router-dom";
import { Game } from "../../features/Game/Game";
import { FeatureLayout } from "../../features/layout/feature-layout/feature-layout";

const FApp = () => {
  return (
    <FeatureLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <CircularProgress />
          </div>
        }
      >
        <Outlet />
      </Suspense>{" "}
    </FeatureLayout>
  );
};
const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];
const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <FApp />,

    children: [{ path: "/game", element: <Game /> }],
  },
];
export const AppRoutes = () => {
  const routes = false ? publicRoutes : privateRoutes;
  const element = useRoutes([...routes]);
  return element;
};

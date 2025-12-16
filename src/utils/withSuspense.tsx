import React, { Suspense } from "react";
import { LoadingLazyPage } from "@/pages/Loading";

export const withSuspense = (
  Component: React.LazyExoticComponent<any>,
  fallback = <LoadingLazyPage />,
) => (
  <Suspense fallback={fallback}>
    <Component />
  </Suspense>
);

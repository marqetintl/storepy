import React, { lazy } from "react";
import { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { ToastProvider, useToast, Loading } from "@miq/components";
import IndexView from "./IndexView";

import "./main.scss";

const ProductPublicView = lazy(() => import("./ProductView"));
const ProductsPublicView = lazy(() => import("./ProductsView"));
// const CategoryPublicView = lazy(() => import("./CategoryView"));

export default function PublicShopRoutes(props) {
  const toastCtx = useToast();
  // const { path } = props.match;

  return (
    <ToastProvider context={toastCtx}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/shop/:catSlug/:prodPublicSlug/" component={ProductPublicView} />
          {/* <Route path="/shop/:catPublicSlug/" component={CategoryPublicView} /> */}
          <Route path="/shop/:catPublicSlug/" component={ProductsPublicView} />
          <Route path="/shop/" component={ProductsPublicView} />
          <Route path="/" component={IndexView} />
        </Switch>
      </Suspense>
    </ToastProvider>
  );
}

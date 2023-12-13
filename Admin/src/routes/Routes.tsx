import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// Layout constants
import { LayoutType } from "../constants/layout";

// redux
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

// All layouts containers
import DefaultLayout from "../layouts/Default";
import VerticalLayout from "../layouts/Vertical";
import HorizontalLayout from "../layouts/Horizontal";

import { authProtectedFlattenRoutes, publicProtectedFlattenRoutes } from ".";
import { APICore } from "../helpers/api/apiCore";
interface IRoutesProps {}

const AllRoutes = (props: IRoutesProps) => {
  const { Layout } = useSelector((state: RootState) => ({
    Layout: state.Layout,
  }));

  const getLayout = () => {
    let layoutCls = VerticalLayout;

    switch (Layout.layoutType) {
      case LayoutType.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };

  let GotLayout = getLayout();
  const api = new APICore();

  return (
    <React.Fragment>
      <Routes>
        <Route>
          {publicProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <DefaultLayout {...props} layout={Layout}>
                  {route.element}
                </DefaultLayout>
              }
              key={idx}
            />
          ))}
          ;
        </Route>

        <Route>
          {authProtectedFlattenRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                api.isUserAuthenticated() === false ? (
                  <Navigate
                    to={{
                      pathname: "/auth/login",
                      search: "next=" + route.path,
                    }}
                  />
                ) : (
                  <GotLayout {...props}>{route.element}</GotLayout>
                )
              }
              key={idx}
            />
          ))}
          ;
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default AllRoutes;

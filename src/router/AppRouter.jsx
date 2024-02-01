// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./router";

function AppRouter() {
  return (
    <div>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            path={route.path}
            element={<route.component></route.component>}
            key={route.path}
          ></Route>
        ))}
      </Routes>
    </div>
  );
}

export default AppRouter;
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Product from "../components/product/Product";
import MainLayout from "../components/Layouts/MainLayout";
import UserContext from "../components/context/userContext";
import Login from "../components/Login/Login";
import Register from "./../components/Register/Register";

import Singleproduct from "./../components/product/SingleProduct";
import UserProfile from "./../components/Profile/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { paginate } from "./../utils/paginate";
import { addUser, clearUser } from "./../actions/user";
import { decodeToken } from "./../utils/decodeToken";
import Logout from "./../components/Login/Logout";
import { isEmpty } from "lodash";
import NotFound from "./../components/common/notfound";
import PrivateLayout from "./../components/Layouts/PrivateLayout";
import Dashboard from "../components/admin/Dashboard";
import ProductTable from "./../components/admin/ProductTable";
import AdminContext from "../components/context/AdminContext";
import Archive from './../components/product/Archive';

const Toplearn = () => {
  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const indexproducts = paginate(products, 1, 8);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      const dateNow = Date.now() / 1000;

      if (decodedToken.payload.exp < dateNow) {
        localStorage.removeItem("token");
        dispatch(clearUser());
      } else dispatch(addUser(decodedToken.payload.user));
    }
  }, []);

  return (
    <Switch>
      <Route path={["/dashboard"]}>
        <PrivateLayout>
          <Route
            path="/dashboard/products"
            render={() =>
              !isEmpty(user) && user.isAdmin ? (
                <AdminContext products={products}>
                  <ProductTable />
                </AdminContext>
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/dashboard"
            exact
            render={() =>
              !isEmpty(user) && user.isAdmin ? (
                <Dashboard products={products} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </PrivateLayout>
      </Route>

      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            <Route
              path="/login"
              render={() =>
                isEmpty(user) ? (
                  <UserContext>
                    <Login />
                  </UserContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              path="/logout"
              render={() => (isEmpty(user) ? <Redirect to="/" /> : <Logout />)}
            />
            <Route
              path="/register"
              render={() =>
                isEmpty(user) ? (
                  <UserContext>
                    <Register />
                  </UserContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route path="/Archivee" component={Archive} />
            <Route path="/product/:id" component={Singleproduct} />
            <Route path="/user-profile" component={UserProfile} />
            <Route
              path="/"
              exact
              render={() =>
                indexproducts.length > 0 ? (
                  <Product products={indexproducts} />
                ) : (
                  <h2>هیچ دوره ای جهت نمایش نیست</h2>
                )
              }
            />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Toplearn;

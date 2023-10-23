import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";

import { useAuthContext } from "./hooks/useAuthContext";
import "./App.css";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            render={() => {
              return user ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/login" />
              );
            }}
          ></Route>
          <Route
            exact
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="login" />}
          />
          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            exact
            path="/signup"
            element={user ? <Navigate to="/dashboard" /> : <SignUp />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

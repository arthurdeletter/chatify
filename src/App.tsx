import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useMe } from "./context/auth-context";
import React, { FC } from "react";

function App() {
  const user = useMe();

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

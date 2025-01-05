/*eslint-disable*/
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="fixed" style={{ width: "100%", margin: 0 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Job Portal
            </Link>
          </Typography>
          <Link to="/login" style={{ color: "inherit", marginRight: 15 }}>
            Login
          </Link>
          <Link to="/register" style={{ color: "inherit" }}>
            Register
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main content with padding to prevent overlap */}
      <main style={{ marginTop: "64px", padding: "16px" }}>
        {children}
      </main>
    </>
  );
}

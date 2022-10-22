import { Box } from "@mui/material";
import { FC } from "react";
import Router from "../../src/routes/Router";
import Navbar from "./Navbar/Navbar";

const Layout: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100vw" }}>
      <Navbar />
      <Router />
    </Box>
  );
};

export default Layout;

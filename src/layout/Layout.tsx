import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layout;

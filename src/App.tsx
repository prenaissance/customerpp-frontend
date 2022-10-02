import { Box } from "@mui/material";
import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import Router from "./routes/Router";

const App: FC = () => {
    return (
        <BrowserRouter>
            <Box sx={{ width: "100%", m: 0, p: 0 }}>
                <Navbar />
                <Router />
            </Box>
        </BrowserRouter>
    );
};

export default App;
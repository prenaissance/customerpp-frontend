import { createTheme, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      //light: will be calculated from palette.primary.main,
      main: "#404B69",
      dark: "#283149",
      //contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});

type ThemeWrapperProps = {
  children: ReactNode;
};

const ThemeWrapper: FC<ThemeWrapperProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;

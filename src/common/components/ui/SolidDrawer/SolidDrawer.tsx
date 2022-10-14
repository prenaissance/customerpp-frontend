import { Box, Drawer, styled, SxProps } from "@mui/material";
import { FC, ReactNode } from "react";

type SolidDrawerProps = {
  open?: boolean;
  children: ReactNode;
  sx?: SxProps;
};

const SolidDrawer: FC<SolidDrawerProps> = ({ open = true, children, sx = {} }) => {
  return open ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary.dark",
        borderRadius: "0 2rem 2rem 0",
        boxShadow: 1,
        color: "primary.contrastText",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 1,
          height: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          maxHeight: "400px",
          overflow: "visible",
          mt: "-100px",
        }}
      >
        {children}
      </Box>
    </Box>
  ) : null;
};

export default SolidDrawer;

import { Box, styled } from "@mui/material";

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
}))

export default FlexBox;
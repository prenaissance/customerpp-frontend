import { Paper, styled } from "@mui/material";
import sx from "@mui/system/sx";

const HoverableCard = styled(Paper)(({ theme }) =>
  sx({
    height: "100%",
    bgcolor: "primary.main",
    borderRadius: "1.5rem",
    p: "1rem 2.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transitionTimingFunction: theme.transitions.easing.easeInOut,
    transitionDelay: theme.transitions.duration.short,
    ":hover": {
      filter: "brightness(110%)",
      boxShadow: 20,
    },
  })
);

export default HoverableCard;

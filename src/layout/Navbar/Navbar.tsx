import { Link } from "react-router-dom";
import { Box, Container, Divider, Paper, Theme, Typography } from "@mui/material";
import { FC } from "react";
import { Settings as SettingsIcon } from "@mui/icons-material";
import { colors } from "@common/theme/utils/consts";

type PageLinkProps = {
  to: string;
  title: string;
};
const PageLink: FC<PageLinkProps> = ({ to, title }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography variant="h6" color="#fff">
        {title}
      </Typography>
    </Link>
  );
};

const Navbar: FC = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "53px",
          gap: "1rem",
          p: "0 1rem",
          overflow: "hidden",
          zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
          bgcolor: colors.BACKGROUND_MAIN,
        }}
      >
        <PageLink to="/" title="Home" />
        <PageLink to="/metrics" title="Metrics" />
        <PageLink to="/statistics" title="Statistics" />
        <PageLink to="/login" title="Login" />
        <Box sx={{ ml: "auto" }}>
          <Link to="/settings">
            <SettingsIcon sx={{ width: "3rem", height: "3rem", color: "primary.contrastText" }} />
          </Link>
        </Box>
      </Box>
      <Divider sx={{ bgcolor: "primary.light", m: "0 5px" }} />
    </>
  );
};

export default Navbar;

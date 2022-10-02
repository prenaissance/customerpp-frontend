import { Link } from "react-router-dom";
import { Box, Container, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { Settings as SettingsIcon } from "@mui/icons-material";
import FlexBox from "../../common/components/FlexBox/FlexBox";

type PageLinkProps = {
  to: string;
  title: string;
}
const PageLink: FC<PageLinkProps> = ({ to, title }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <Typography variant="h6" color="#fff">
        {title}
      </Typography>
    </Link>
  )
};

const Navbar: FC = () => {
  return (
    <FlexBox sx={{ width: "100%", backgroundColor: "primary.main", gap: "1rem", p: "0 1rem", boxShadow: 3 }}>
      <PageLink to="/" title="Home" />
      <PageLink to="/profile" title="Profile" />
      <PageLink to="/users" title="Users" />
      <PageLink to="/login" title="Login" />
      <Box sx={{ ml: "auto" }}>
        <Link to="/settings">
          <SettingsIcon sx={{ width: "3rem", height: "3rem", color: "#fff" }} />
        </Link>
      </Box>
    </FlexBox>
  )
};

export default Navbar;
import React, { FC, useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography, ListItem, Box, Tabs, Tab } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from "react-router-dom";

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

const DrawerComp = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Drawer PaperProps={{
                sx: { width: "40%", backgroundColor: "#222B42", borderRadius: "0 2rem 2rem 0" }
            }}
                open={open} onClose={() => setOpen(false)}>
                <List>
                    <ListItemButton onClick={() => setOpen(false)} >
                        <ListItemIcon >
                            <ListItemText>
                                <ListItem>
                                    <Typography style={{ fontWeight: 600 }} variant="h5" color="primary.contrastText" >Customers++</Typography>
                                </ListItem>

                                <ListItem button sx={{
                                    borderRadius: "2rem",
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}>
                                    <PageLink to="/" title="Home" />
                                </ListItem>

                                <ListItem button sx={{
                                    borderRadius: "2rem",
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}>
                                    <PageLink to="/metrics" title="Metrics" />
                                </ListItem>

                                <ListItem button sx={{
                                    borderRadius: "2rem",
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}>
                                    <PageLink to="/statistics" title="Statistics" />
                                </ListItem>
                                <ListItem button sx={{
                                    borderRadius: "2rem",
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}>
                                    <PageLink to="/login" title="Log In" />
                                </ListItem>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpen(!open)}>
                <MenuRoundedIcon sx={{
                    width: "3rem", height: "3rem", color: "primary.contrastText", '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }} />
            </IconButton>
        </>
    )
}

export default DrawerComp
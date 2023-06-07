
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" color='success'>
                <Toolbar sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                    <Box>
                        <Typography>Bus Search</Typography>
                    </Box>
                    <Box>
                        <NavLink className={"navlink"} to={"/"}>Home</NavLink>
                        <NavLink className={"navlink"} to={"/contact"}>Contact</NavLink>
                        <NavLink className={"navlink"} to={"/services"}>Services</NavLink>
                        <NavLink className={"navlink"} to={"/help"}>Help</NavLink>

                    </Box>


                    <Box>
                    <NavLink className={"navlink"} to={"/login"}>Login</NavLink>
                        {/* <Avatar  onClick={handleClick} alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </Box>
    );
};

export default Navbar;
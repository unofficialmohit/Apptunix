import React, { PropsWithoutRef, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Typography,
  Button,
} from "@mui/material";
import LockResetIcon from "@mui/icons-material/LockReset";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_WIDTH } from "../constants";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import "./Layout.scss";

interface Props {
  handleSidebarToggle: () => void;
}

function Topbar({ handleSidebarToggle }: PropsWithoutRef<Props>) {
  const navigate = useNavigate();

  useEffect(() => {
    if (window) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const [scroll, setScroll] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <Box className="container top_bar">
      <AppBar
        position="fixed"
        className="topbar"
        sx={{
          width: { lg: `calc(100% - ${SIDEBAR_WIDTH}px)` },
          ml: { lg: `${SIDEBAR_WIDTH}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open sidebar"
            edge="start"
            onClick={handleSidebarToggle}
            style={{ backgroundColor: "#72cedd" }}
            sx={{
              display: { xs: "flex", lg: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <Box sx={{ mr: 2 }}>
              <IconButton
                className="notification_btn"
                aria-controls={open1 ? "basic-menu1" : undefined}
                aria-haspopup="true"
                aria-expanded={open1 ? "true" : undefined}
                onClick={handleClick1}
              >
                <NotificationsActiveIcon 
                // style={{color:"grey"}}
                />
              </IconButton>
              <Menu
                className="notiDropdown_menu"
                id="basic-menu1"
                anchorEl={anchorEl1}
                open={open1}
                onClose={handleClose1}
                MenuListProps={{
                  "aria-labelledby": "basic-button1",
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 20,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <Box className="noti_head">
                  <Typography component="h2">Notifications</Typography>
                  <Button
                    className="btn btn_primary sm"
                    onClick={() => navigate("/recieved-notifications")}
                  >
                    See All
                  </Button>
                </Box>
                <ul className="noti_list">
                  <li>
                    <figure>
                      <img
                        src="/static/images/profile_placeholder.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="noti_info">
                      <Typography component="h3">
                        JohnDoe
                        <Typography component="span">1 Day ago</Typography>
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        dolor sit amet consectetur.
                      </Typography>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img
                        src="/static/images/profile_placeholder.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="noti_info">
                      <Typography component="h3">
                        JohnDoe
                        <Typography component="span">1 Day ago</Typography>
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        dolor sit amet consectetur.
                      </Typography>
                    </div>
                  </li>
                  <li>
                    <figure>
                      <img
                        src="/static/images/profile_placeholder.jpg"
                        alt=""
                      />
                    </figure>
                    <div className="noti_info">
                      <Typography component="h3">
                        JohnDoe
                        <Typography component="span">1 Day ago</Typography>
                      </Typography>
                      <Typography component="p">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        dolor sit amet consectetur.
                      </Typography>
                    </div>
                  </li>
                </ul>
              </Menu>
            </Box>

            <Box>
              <IconButton
                className="topbar_user_btn"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img src="/static/images/user_placeholder.png" alt="" />
                <span>Admin</span>
                <KeyboardArrowDownIcon />
              </IconButton>
              <Menu
                className="userDropdown_menu"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 10,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  className="userDropdown_menu_list"
                  onClick={() => navigate("/profile")}
                >
                  <IconButton className="drpdwn_icns">
                    <PersonIcon />
                  </IconButton>
                  My Profile
                </MenuItem>
                <MenuItem
                  className="userDropdown_menu_list"
                  onClick={() => navigate("/changepassword")}
                >
                  <IconButton className="drpdwn_icns">
                    <LockResetIcon />
                  </IconButton>
                  Change Password
                </MenuItem>

                <MenuItem
                  className="userDropdown_menu_list"
                  onClick={() => navigate("/")}
                >
                  <IconButton className="drpdwn_icns">
                    <LogoutIcon />
                  </IconButton>
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Topbar;

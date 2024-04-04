import {
    Drawer,
    Toolbar,
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Box,
    IconButton,
  } from "@mui/material";
  import { useLocation, useNavigate } from "react-router-dom";
  import CloseIcon from "@mui/icons-material/Close";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  
  import PeopleIcon from "@mui/icons-material/People";
  import { SIDEBAR_WIDTH } from "../constants";
  import { PropsWithoutRef } from "react";
  
  interface Props {
    mobileOpen: boolean;
    handleSidebarToggle: () => void;
  }
  
  export default function Sidebar({
    mobileOpen,
    handleSidebarToggle,
  }: PropsWithoutRef<Props>) {
    const location = useLocation();
    const navigate = useNavigate();
  
    const drawer = (
      <>
        <Toolbar className="sidebar-logo" sx={{ position: "relative" }}>
          <figure>
            <img
              src="/static/images/logo.png"
              alt=""
              style={{borderRadius:"50%"}}
              onClick={() => navigate("/dashboard")}
            />
          </figure>
          <IconButton
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "white",
              display: { lg: "none" },
            }}
            onClick={handleSidebarToggle}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
  
        <List sx={{ flexGrow: 1 }} className="sidebr-lst">
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/dashboard"}
            onClick={() => navigate("/dashboard")}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Dashboard" />
          </ListItemButton>
          {/* users */}
          <ListItemButton
            className="lst-itm"
            selected={location.pathname === "/manage-users"}
            onClick={() => navigate("/manage-users")}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText className="lstitm-txt" primary="Manage Users" />
          </ListItemButton>
          
        </List>
      </>
    );
  
    return (
      <Box
        component="nav"
        sx={{ flexShrink: { lg: 0 } }}
        className="sidebar-main-div"
      >
        <Drawer
          className="sidebar_drawer"
          variant="temporary"
          open={mobileOpen}
          onClose={handleSidebarToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: SIDEBAR_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          className="sidebar_drawer"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              width: SIDEBAR_WIDTH,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    );
  }
  
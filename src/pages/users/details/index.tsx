import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import MainContainer from "../../../layout/MainContainer";
import "../Users.scss";
import {
  Challenges,
  Details,
  
  PostsAndStories,
} from "../../../features";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserDetails = () => {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <MainContainer>
      <div className="main_loyout">
        <div className="dashboard">
          <h1 className="mn_hdng">View User Profile</h1>
          <Button
            className="btn btn_primary"
            onClick={() => {
              navigate("/manage-users");
            }}
          >
            Back
          </Button>
        </div>
        <Card className="cards">
          <Box className="custom_tabs">
            <Box className="flx_sc">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="basic tabs example"
                className="custom_tabs_links"
              >
                <Tab label="User Details" {...a11yProps(0)} />
                <Tab label="Activity History" {...a11yProps(1)} />
                {/* <Tab
                  label="Active and Completed Challenges"
                  {...a11yProps(2)}
                />
                <Tab label="Posts and Stories" {...a11yProps(3)} /> */}
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Details />
            </CustomTabPanel>
             
          </Box>
        </Card>
      </div>
    </MainContainer>
  );
};

export default UserDetails;

import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";
import LineChart from "../../components/LineChart";
import PaidIcon from "@mui/icons-material/Paid";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import PanoramaIcon from "@mui/icons-material/Panorama";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useNavigate } from "react-router-dom";
import FiberNewIcon from '@mui/icons-material/FiberNew';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MainContainer from "../../layout/MainContainer";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#204e33" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashBoard = () => {
  const graphOrderData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users",
        data: [
          "10",
          "20",
          "25",
          "15",
          "50",
          "10",
          "20",
          "25",
          "15",
          "50",
          "20",
          "25",
        ],
        borderColor: "black",
        backgroundColor: "#8A5FF7",
        color: "#FFFFF", 
      },
    ],
  };
  const graphRevenueData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          "10000",
          "20000",
          "25000",
          "15000",
          "50000",
          "10000",
          "20000",
          "25000",
          "15000",
          "50000",
          "20000",
          "25000",
        ],
        borderColor: "black",
        backgroundColor: "#8A5FF7",
      },
    ],
  };
  const graphDownloadsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Downloads",
        data: [
          "10",
          "20",
          "25",
          "15",
          "50",
          "10",
          "20",
          "25",
          "15",
          "50",
          "20",
          "25",
        ],
        borderColor: "#029be0",
        backgroundColor: "#029be0",
      },
    ],
  };

  const navigate = useNavigate();

  return (
   <MainContainer>
      <div className="main_loyout">
        <div className="dashboard">
          <h1 className="mn_hdng">Dashboard</h1>
        </div>
  
        <Grid container spacing={2} className="dashGrid" style={{justifyContent:"space-between"}}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Item
              className="cards dashGrid_item"
              onClick={() => navigate("/manage-users")}
            >
              <PeopleIcon className="svg_icn" />
              <div>
                <h3>Total Users</h3>
                <h4 className="mn_hdng">120</h4>
              </div>
            </Item>
          </Grid>
  
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Item
              className="cards dashGrid_item"
              // onClick={() => navigate("/manageservices")}
            >
              <SubscriptionsIcon className="svg_icn" />
              <div>
                <h3>Total Subscriptions</h3>
                <h4 className="mn_hdng">10</h4>
              </div>
            </Item>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Item
              className="cards dashGrid_item"
              // onClick={() => navigate("/manageservices")}
            >
              <PaidIcon className="svg_icn" />
              <div>
                <h3>Total Revenue</h3>
                <h4 className="mn_hdng">40000&#36;</h4>
              </div>
            </Item>
          </Grid>
          
 
        </Grid>
        
  
        <Grid container spacing={2} className="dashGraph" sx={{ pt: 4 }}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Item className="cards dashGraph_item">
              <h2 className="mn_hdng">Total Users</h2>
              <LineChart data={graphOrderData} />
            </Item>
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Item className="cards dashGraph_item">
              <h2 className="mn_hdng">Total Revenue</h2>
              <LineChart data={graphRevenueData} />
            </Item>
          </Grid>
          {/* <Grid item lg={6} md={6} sm={6} xs={12}>
            <Item className="cards dashGraph_item">
              <h2 className="mn_hdng">Total Downloads</h2>
              <LineChart data={graphDownloadsData} />
            </Item>
          </Grid> */}
        </Grid>
      </div>
   </MainContainer>
  );
};

export default DashBoard;

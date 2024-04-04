import React from "react";
import MainContainer from "../../layout/MainContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Box,
  Switch,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
const ManageUsers = () => {
  const navigate = useNavigate();
  function createData(
    picture:string,
    firstname: string,
    lastname: string,
    userName: string,
    customerId: string,
    phone: string,
    email: string,
    planName: string,
    planPrice: string,
    postedAds: string,
    earnings: string
  ) {
    return {
      picture,
      firstname,
      lastname,
      userName,
      customerId,
      phone,
      email,
      planName,
      planPrice,
      postedAds,
      earnings,
    };
  }
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const rows = [
    createData(
      "https://randomuser.me/api/portraits/men/49.jpg",
      "Abdul",
      "Hussian",
      "Abdul67",
      "12378678",
      "+971056734321",
      "abdulhussian67@gmail.com",
      "Starter",
      "1 Month / 600 SAR",
      "10",
      "600 SAR"
    ),
  ];
  return (
    <MainContainer>
      <div className="main_loyout">
        <div className="dashboard">
          <h1 className="mn_hdng">Manage Users</h1>
        </div>
        <Card className="cards">
          <Box className="cards_header">
            <SearchBar />
            <Box className="cards_header_right">
              <Button className="btn btn_primary">
                <FileDownloadIcon /> Export CSV
              </Button>
            </Box>
          </Box>
          <TableContainer className="table_container">
            <Box className="heading"></Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">S.No</TableCell>
                  <TableCell>Picture</TableCell>
                  <TableCell>Customer Id</TableCell>
                  <TableCell>First name</TableCell>
                  <TableCell>Last name</TableCell>
                  <TableCell>Phone No.</TableCell>
                  <TableCell>Email</TableCell>

                  <TableCell>Account Status</TableCell>

                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={row.firstname}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell><img style={{width:"70px",height:"70px",borderRadius:"50%"}} src={row.picture}/></TableCell>

                    <TableCell>{row.customerId}</TableCell>
                    <TableCell>{row.firstname}</TableCell>
                    <TableCell>{row.lastname}</TableCell>

                    <TableCell>{row.phone}</TableCell>
                    <TableCell>{row.email}</TableCell>

                    <TableCell>
                      <Switch {...label} defaultChecked size="small" />
                    </TableCell>

                    <TableCell>
                      <Box className="table_actions">
                        <IconButton
                          onClick={() => navigate("/manage-users/details")}
                        >
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton
                          onClick={() =>
                            navigate("/manage-users/usersform")
                          }
                        >
                          <ModeEditIcon />
                        </IconButton>
                        <IconButton>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </MainContainer>
  );
};

export default ManageUsers;

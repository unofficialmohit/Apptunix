import {
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ChatIcon from "@mui/icons-material/Chat";

import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoanHistory = () => {
  const navigate = useNavigate();
  return (
    <Card sx={{ mt: 4 }} className="cards">
      <Box className="custom_tabs">
        <h2 className="mn_hdng">Loan History</h2>
      </Box>
      <TableContainer className="table_container">
        <Box className="heading"></Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">S.No</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell>Car Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{1}</TableCell>
              <TableCell align="center">25/12/2023</TableCell>
              <TableCell>Maruti Baleno</TableCell>

              <TableCell>Hatchback</TableCell>
              <TableCell>$6000</TableCell>

              <TableCell>Pending</TableCell>
              <TableCell>
                {" "}
                <Box className="table_actions">
                  <IconButton
                    onClick={() =>
                      navigate("/manage-loans/details", {
                        state: { userStatus: "ACCEPTED" },
                      })
                    }
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton onClick={() => navigate("/chats")}>
                    <ChatIcon />
                  </IconButton>

                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default LoanHistory;

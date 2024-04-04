import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const Challenges = () => {
  return (
    <Card sx={{ mt: 4 }} className="cards">
      <Box className="custom_tabs">
        <h2 className="mn_hdng">Active And Completed Challenges</h2>
      </Box>
      <TableContainer className="table_container">
        <Box className="heading"></Box>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">S.No</TableCell>
              <TableCell align="center">Image/Video</TableCell>
              <TableCell>Challenge Title</TableCell>
              {/* <TableCell>Description</TableCell> */}
              <TableCell>Location</TableCell>
              <TableCell>Challenge List</TableCell>
              {/* <TableCell>Category</TableCell> */}
              <TableCell>Status</TableCell>

              {/* <TableCell>Target Date</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{1}</TableCell>
              <TableCell align="center">
                <figure className="user_img">
                  <img src="/static/images/post.png" alt="" />
                </figure>
              </TableCell>
              <TableCell>Climb Mountains</TableCell>
              {/* <TableCell>Lore</TableCell> */}
              <TableCell>Alaska</TableCell>
              <TableCell>
                <Typography>Challenge 1</Typography>
                <Typography>Challenge 2</Typography>
                <Typography>Challenge 3</Typography>
              </TableCell>
              {/* <TableCell>Travel</TableCell> */}

              <TableCell>Completed</TableCell>
              {/* <TableCell>Accepted</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default Challenges;

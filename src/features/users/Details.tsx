import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Details = () => {
  return (
    <Card className="cards">
      <CardContent sx={{ p: 1 }}>
        <Grid container spacing={2} className="view_box">
          <Grid item lg={2} md={2} sm={6} xs={12}>
            <figure className="profile_img">
              <img src="https://randomuser.me/api/portraits/men/49.jpg" alt="" />
            </figure>
          </Grid>
          <Grid item xs={10} className="view_box_list">
            <Grid container spacing={3}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">First Name</Typography>
                  <Typography component="p">Abdul</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Last Name</Typography>
                  <Typography component="p">Hussain</Typography>
                </Box>
              </Grid>

              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Phone no</Typography>
                  <Typography component="p">+91 77676756454</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Email</Typography>
                  <Typography component="p">abdul@yopmail.com</Typography>
                </Box>
              </Grid>

              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Account Status</Typography>
                  <Typography component="p">Active</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Role</Typography>
                  <Typography component="p">Business Owner</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Organization Name</Typography>
                  <Typography component="p">Apptunix</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">
                    Position within the Company
                  </Typography>
                  <Typography component="p">-</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Date of Birth</Typography>
                  <Typography component="p">25/12/1999</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Business Email</Typography>
                  <Typography component="p">abdul@yopmail.com</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Website</Typography>
                  <Typography component="p">-</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Tax Number</Typography>
                  <Typography component="p">-</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Full Address</Typography>
                  <Typography component="p">Mohali,Punjab</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Zip code</Typography>
                  <Typography component="p">116059</Typography>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Box>
                  <Typography component="h5">Credit Score</Typography>
                  <Typography component="p">500</Typography>
                </Box>
              </Grid>
              {/* <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box>
                  <Typography component="h5">Bio</Typography>
                  <Typography component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </Typography>
                </Box>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Details;

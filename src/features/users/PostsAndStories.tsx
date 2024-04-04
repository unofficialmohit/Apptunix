import { Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

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
const PostsAndStories = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Card sx={{ mt: 4 }} className="cards">
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
            <Tab label="Posts" {...a11yProps(0)} />
            <Tab label="Stories" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
                <div className="post_details">
                  <p>20 Likes</p>
                  <p>10 Comments</p>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
                <div className="post_details">
                  <p>20 Likes</p>
                  <p>10 Comments</p>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
                <div className="post_details">
                  <p>20 Likes</p>
                  <p>10 Comments</p>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
                <div className="post_details">
                  <p>20 Likes</p>
                  <p>10 Comments</p>
                </div>
              </Box>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <Box className="user_post">
                <figure>
                  <img src="/static/images/post.png" alt="" />
                </figure>
              </Box>
            </Grid>
          </Grid>
        </CustomTabPanel>
      </Box>
    </Card>
  );
};

export default PostsAndStories;

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { ChangeEvent, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import MainContainer from "../../layout/MainContainer";
import { Link } from "react-router-dom";

const Profile = () => {
  const [image, setImage] = useState<string>("");

  return (
    <>
      <MainContainer>
        <div className="main_loyout">
          <div className="dashboard">
            <h1>Edit User Profile</h1>
          </div>
          <Card className="cards">
            <form>
              <CardContent sx={{ p: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography className="custom_label">Image</Typography>
                    {image ? (
                      <div className="upload_image_preview">
                        <CardMedia component="img" image={image} alt="photo" />
                        <CancelIcon
                          onClick={() => {
                            setImage("");
                          }}
                        />
                      </div>
                    ) : (
                      <Box className="upload_image">
                        <label htmlFor="icon-button-file">
                          <Input
                            sx={{ display: "none" }}
                            id="icon-button-file"
                            type="file"
                            inputProps={{
                              accept: "image/png,image/jpeg",
                            }}
                            onChange={(
                              event: ChangeEvent<HTMLInputElement>
                            ) => {
                              const files = (event.target as HTMLInputElement)
                                .files;
                              if (files && files[0].type.includes("image")) {
                                setImage(URL.createObjectURL(files[0]));
                              }
                            }}
                          />
                          <Button component="span" className="upload_image_btn">
                            <img
                              src="/static/images/user_placeholder.png"
                              alt=""
                            />
                            <CameraAltIcon />
                          </Button>
                        </label>
                      </Box>
                    )}
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography className="custom_label">First Name</Typography>
                    <TextField
                      hiddenLabel
                      type={"text"}
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      placeholder="First Name"
                    ></TextField>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography className="custom_label">Last Name</Typography>
                    <TextField
                      hiddenLabel
                      type={"text"}
                      name="lastName"
                      variant="outlined"
                      fullWidth
                      placeholder="Last Name"
                    ></TextField>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography className="custom_label">Email</Typography>
                    <TextField
                      hiddenLabel
                      type={"email"}
                      name="email"
                      variant="outlined"
                      fullWidth
                      placeholder="Email"
                    ></TextField>
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography className="custom_label">
                      Phone Number
                    </Typography>
                    <PhoneInput
                      country={"us"}
                      placeholder="0 (000) 000-000"
                      enableSearch={true}
                      inputStyle={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <div className="form_btn">
                  <Button
                    size="large"
                    type="submit"
                    className="btn btn_primary"
                  >
                    Save
                  </Button>
                </div>
              </CardContent>
            </form>
          </Card>
        </div>
      </MainContainer>
    </>
  );
};

export default Profile;

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
import MainContainer from "../../../layout/MainContainer";
import { useNavigate } from "react-router-dom";

const UsersForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState(0);

  const [image, setImage] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const navigate = useNavigate();

  const handleClose = () => {
    setShowAlert(false);
  };
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files, "event.target.files");

      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <MainContainer>
        <div className="main_loyout">
          <div className="dashboard">
            <h1 className="mn_hdng"> Edit User Profile</h1>
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
            <form>
              <CardContent sx={{ p: 1 }}>
                <Grid container spacing={2}>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className="custom_label">Image</Typography>
                    {image ? (
                      <div className="upload_image_preview">
                        <CardMedia component="img" image={image} alt="photo" />
                        <CancelIcon
                          onClick={() => {
                            setImage("");
                            setFileName("");
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
                                setFileName(files[0].name);
                                setImage(URL.createObjectURL(files[0]));
                              } else {
                                setAlertType(0);
                                setShowAlert(true);
                                setAlertMessage(
                                  "This field only accepts images."
                                );
                              }
                            }}
                          />
                          <Button component="span" className="upload_image_btn">
                            <img
                              src="https://randomuser.me/api/portraits/men/49.jpg"
                              alt=""
                            />
                            <CameraAltIcon />
                          </Button>
                        </label>
                      </Box>
                    )}
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography className="custom_label">Full name</Typography>
                    <TextField
                      hiddenLabel
                      type={"text"}
                      name="firstName"
                      variant="outlined"
                      value="Abdul"
                      fullWidth
                      placeholder="First name"
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
                      value="Hussain"
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
                      value='abdulhussian67@gmail.com'
                      placeholder="Email"
                    ></TextField>
                    
                  </Grid>
                  <Grid item lg={6} md={6} sm={6} xs={12}>
                    <Typography className="custom_label">
                      Phone Number
                    </Typography>
                    <PhoneInput
                     value="+971056734321"
                      country={"us"}
                      placeholder="0 (000) 000-000"
                      enableSearch={true}
                      inputStyle={{ width: "100%" }}
                    />
                  </Grid>
                  {/* <Grid item xs={4}>
                    <Typography className="custom_label">Address</Typography>
                    <TextField
                      hiddenLabel
                      type={"text"}
                      name="address"
                      variant="outlined"
                      fullWidth
                      placeholder="Address"
                    ></TextField>
                  </Grid> */}
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

export default UsersForm;

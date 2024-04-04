import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

type InputTypes = {
  placeholder: string;
  clearBackground?: boolean;
  password?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  rows?: number;
  customIcon?: JSX.Element | null;
};

const Input = ({
  placeholder,
  clearBackground,
  password = false,
  multiline = false,
  disabled = false,
  rows = 1,
  customIcon = null,
}: InputTypes) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      variant="standard"
      style={{
        backgroundColor: clearBackground ? "#FFF" : "#F5F5F5",
        border: "1px solid #ECECEC",
        borderRadius: "5px",
        padding: "6px 14px",
        width: "100%",
      }}
      multiline={multiline}
      disabled={disabled}
      rows={rows}
      placeholder={placeholder}
      type={!showPassword ? "text" : "password"}
      InputProps={{
        disableUnderline: true,
        endAdornment: (
          <InputAdornment position="end">
            {password ? (
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(event) => event.preventDefault()}
                edge="end"
              >
                {!showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ) : customIcon ? (
              customIcon
            ) : null}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Input;

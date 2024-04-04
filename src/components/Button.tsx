import { Button as _Button } from "@mui/material";

type ButtonProps = {
  value: string;
  gradient?: boolean;
  fontSize?: number;
  onClick?: () => void;
};

const Button = ({
  value,
  onClick,
  gradient = false,
  fontSize = 18,
}: ButtonProps) => {
  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <_Button
      onClick={onClick}
      style={{
        background: gradient
          ? "linear-gradient(180deg, #FA6866 0%, #F7895A 100%)"
          : "#FA6866",
        fontFamily: "Poppins",
        fontWeight: 600,
        fontSize,
        width: "100%",
        textTransform: "capitalize",
      }}
      variant="contained"
    >
      {value}
    </_Button>
  );
};

export default Button;

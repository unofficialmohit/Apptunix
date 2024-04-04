import React from "react";

import PhoneInput from "react-phone-input-2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatDetail = () => {
  const options = ["Share Profile", "Report"];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  return (
    <div className="main">
      <div className="heading">
        <div className="userDetail">
          <figure>
            <img src="/static/images/user_placeholder.png" alt="" />
          </figure>
          <div className="username">
            <h3>John</h3>
          </div>
        </div>

        {/* <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          sx={{
            position: "relative",
          }}
        >
          <MoreVertIcon />
        </IconButton> */}
        {/* <Menu
          id="long-menu"
          className="account_item"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "12ch",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === "None"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu> */}
      </div>
      <div className="chat-div">
        <div className="chats_lst">
          <div className="time">
            <p>Today at 5:03 PM</p>
          </div>
          <div className="out-going">
            <p>Hello, are you nearby?</p>
          </div>
          <div className="incoming">
            <p>I'll be there in a few mins</p>
          </div>
          <div className="out-going">
            <p>OK, I'm in front of the bus stop</p>
          </div>
          <div className="time">
            <p>Today at 5:03 PM</p>
          </div>
          <div className="incoming">
            <p>Sorry , I’m stuck in traffic. Please give me a moment.</p>
          </div>
        </div>
        <div className="chat_foot">
          <TextField
            hiddenLabel
            placeholder="Type a message"
            fullWidth
            className="text_field"
            name="text"
            type="message"
            variant="outlined"
            // multiline
          />
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;

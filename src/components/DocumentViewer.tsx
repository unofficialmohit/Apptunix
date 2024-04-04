import { Box, Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { Dispatch, SetStateAction } from "react";

type props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DocumentViewer = ({ open, setOpen }: props) => {
  return (
    <Modal className="modal docs_modal" open={open} closeAfterTransition>
      <Box className="modalBox_body">
        <Box>
          <Button className="close_btn" onClick={() => setOpen(false)}>
            <CloseIcon />
          </Button>

          <figure style={{ height: "100%", width: "80%", margin: "0 auto" }}>
            <img
              src="/static/images/document.png"
              alt=""
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </figure>
        </Box>
      </Box>
    </Modal>
  );
};

export default DocumentViewer;

import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";

const MainFaq = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const faqs = [
    {
      id: 1,
      question: "ques1",
      answer: "ans1",
    },
    {
      id: 1,
      question: "ques1",
      answer: "ans1",
    },
  ];
  return (
    <Grid container spacing={2}>
      {faqs?.map((item, index) => {
        return (
          <Grid key={index} item xs={12}>
            <Box className="faq_box">
              <FormControl sx={{ mb: 2, width: "100%" }}>
                <Typography className="custom_label">Question</Typography>
                <TextField
                  hiddenLabel
                  type={"text"}
                  name="name"
                  variant="outlined"
                  value={item?.question}
                  placeholder="Question"
                ></TextField>
              </FormControl>
              <FormControl sx={{ width: "100%" }}>
                <Typography className="custom_label">Answer</Typography>
                <TextField
                  hiddenLabel
                  type={"text"}
                  name="name"
                  variant="outlined"
                  value={item?.answer}
                  placeholder="Answer"
                ></TextField>
              </FormControl>
              <Box className="faq_btn">
                <Button variant="contained" className="btn btn_primary sm">
                  Remove
                </Button>
              </Box>
            </Box>
          </Grid>
        );
      })}

      <Grid item xs={12}>
        <Box className="faq_box">
          <FormControl sx={{ mb: 2, width: "100%" }}>
            <Typography className="custom_label">Question</Typography>
            <TextField
              hiddenLabel
              type={"text"}
              name="name"
              variant="outlined"
              value={question}
              onChange={(val) => setQuestion(val.target.value)}
              placeholder="Question"
            ></TextField>
          </FormControl>
          <FormControl sx={{ width: "100%" }}>
            <Typography className="custom_label">Answer</Typography>
            <TextField
              hiddenLabel
              type={"text"}
              name="name"
              variant="outlined"
              value={answer}
              onChange={(val) => setAnswer(val.target.value)}
              placeholder="Answer"
            ></TextField>
          </FormControl>
          <Box className="faq_btn">
            <Button
              variant="contained"
              disabled={!question || !answer}
              className="btn btn_primary sm"
            >
              Add
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainFaq;

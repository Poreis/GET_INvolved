import { Anchor, Box, ResponsiveContext,Footer } from "grommet";
import React from "react";
import Divider from "@mui/material/Divider";
import { Instagram, Linkedin, Twitter } from "grommet-icons";
import zIndex from "@mui/material/styles/zIndex";

function getAnchorSize(size) {
  if (size == "small") return "10px";
  else if (size == "medium") return "xsmall";
  else return "medium";
}

function getDivSize(size) {
  if (size == "small") return "6px";
  else if (size == "medium") return "10px";
  else return "15px";
}

function getIconsSize(size) {
  if (size == "small") return "10px";
  else if (size == "medium") return "20px";
  else return "30px";
}

function EndBar(props) {
  const size = React.useContext(ResponsiveContext);
  return (
    <Footer  background="brand" direction="row" width="100%" height="5%">
      <Box width="50%" direction="row" alignSelf="center" height="100%">
        <Anchor
          size={getAnchorSize(size)}
          margin={{ horizontal: "small" }}
          alignSelf="center"
          color="#f9f7f3"
          href='/contacts'
        >
          Contact Us
        </Anchor>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            bgcolor: "#f9f7f3",
            marginTop: getDivSize(size),
            marginBottom: getDivSize(size),
          }}
        />
        <Anchor
          size={getAnchorSize(size)}
          margin={{ horizontal: "small" }}
          alignSelf="center"
          color="#f9f7f3"
        >
          Getting here
        </Anchor>
      </Box>
      <Box
        margin={{ horizontal: "small" }}
        width="50%"
        direction="row"
        alignSelf="center"
        gap="medium"
        direction="row-reverse"
      >
        <Linkedin
          style={{ cursor: "pointer" }}
          size={getIconsSize(size)}
          onClick={() => {
            window.open(
              "https://www.linkedin.com/showcase/fair-gsi-get-involved/",
              "Student/Researcher apply page"
            );
          }}
        />
        <Twitter
          style={{ cursor: "pointer" }}
          size={getIconsSize(size)}
          onClick={() => {
            window.open(
              "https://mobile.twitter.com/GETINvolvedFAIR",
              "Student/Researcher apply page"
            );
          }}
        />
        <Instagram
          style={{ cursor: "pointer" }}
          size={getIconsSize(size)}
          onClick={() => {
            window.open(
              "https://www.instagram.com/get_involved_with_fair/",
              "Student/Researcher apply page"
            );
          }}
        />
      </Box>
    </Footer>
  );
}

export { EndBar };

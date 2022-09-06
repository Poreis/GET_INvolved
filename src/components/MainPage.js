import React from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  Paragraph,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  List,
  Grid,
  Anchor,
  Header,
  Video,
  Image,
  ThemeContext,
  ResponsiveContext,
} from "grommet";
import { Info, Send, Workshop, Code, CaretDown } from "grommet-icons";
import { WelcomePage } from "./welcomePage";
import { SquareCard } from "./squareCard";
import Divider from "@mui/material/Divider";
import { ApplyPage } from "./ApplyPage";
import { LearnMorePage } from "./LearnMorePage";
import { EndBar } from "./EndBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grow from '@mui/material/Grow';


function getHeadingLevel(currentSize) {
  if (currentSize == "small") return 5;
  else if (currentSize == "medium") return 3;
  else return 2;
}

const theme = {
  global: {
    colors: {
      brand: "#5a0035",
      "accent-1": "#66033e",
      text: "white",
      background: "#f9f7f3",
      header: "#fedba8",
      focus: "#f9f7f3",
    },
    button: {
      hover: {
        primary: {
          background: { color: "#fedba8" },
        },
      },
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
    size: {
      xxsmall: "48px",
      xsmall: "96px",
      small: "192px",
      med_small: "288px",
      medium: "384px",
      xmedium: "576px",
      large: "768px",
      xlarge: "1152px",
      xxlarge: "1536px",
      full: "100%",
    },
  },
};

const scrollToApply = () => {
  document.getElementById("scroller").scroll({
    top: window.innerHeight,
    left: 0,
    behavior: "smooth",
  });
};

const scrollToInfo = () => {
  document.getElementById("scroller").scroll({
    top: window.innerHeight * 2.03,
    left: 0,
    behavior: "smooth",
  });
};


function MainPage(props) {
  const size = React.useContext(ResponsiveContext);
  return (
    <Grommet id="scroller" theme={theme} full>
      <WelcomePage nextPage={scrollToApply} infoPage={scrollToInfo} />
      <ApplyPage theme={theme} infoPage={scrollToInfo}></ApplyPage>
      <ThemeContext.Extend
        value={{
          global: {
            colors: {
              text: "#5a0035",
            },
          },
          accordion: {
            heading: {
              level: getHeadingLevel(size),
            },
          },
        }}
      >
        <LearnMorePage />
      </ThemeContext.Extend>
      <EndBar theme={theme} />
    </Grommet>
  );
      }

export { MainPage };

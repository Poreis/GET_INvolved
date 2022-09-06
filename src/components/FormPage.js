import { Grommet, Box, Page, PageContent, Paragraph } from "grommet";

import { Bar } from "./AppBar";
import { Widget } from "@typeform/embed-react";
import { EndBar } from "./EndBar";

const theme = {
  global: {
    colors: {
      brand: "#5a0035",
      "accent-1": "#66033e",
      text: "#f9f7f3",
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

function FormPage(props) {
  return (
    <Grommet theme={theme} full>
              <Bar></Bar>
      <Box background="background" fill={true} fill>
        <iframe height='100%' src="https://my.forms.app/form/62da9360971e3e097d4dc603#zoom=0.75"></iframe>
        <EndBar />
      </Box>
    </Grommet>
  );
}

export { FormPage };

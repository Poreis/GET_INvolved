import React from 'react';
import {Grommet,Box, Heading, Button} from  'grommet';
import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import { ServicesGrid } from './servivesGrid';
import Divider from "@mui/material/Divider";


const theme = {
global: {
  colors: {
    brand: "#5a0035",
    "accent-1": "#66033e",
    text: "#5a0035",
    background: "#f9f7f3",
    header: "#fedba8",
    focus: "#5a0035",
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
accordion: {
  heading: {
    level: 3,
  },
}
};


function ServicesPage(){
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.9+'px'}} background="background" flex='grow' >
            <Heading level='1' olor='brand' margin={{left:'medium'}}>What services do we offer?</Heading>
           
        <br/>
            <ServicesGrid></ServicesGrid>
      

            </Box>
            <EndBar/>

            </Grommet>
        );
}

export {ServicesPage}
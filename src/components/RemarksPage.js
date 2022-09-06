import React from 'react';
import {Grommet,Box, Heading, Button, Grid} from  'grommet';
import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import { WhoCanParticipateGrid } from './whoCanParticipateGrid';
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


function RemarksPage(){
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.9+'px'}} background="background" fill >
            <Heading level='1' olor='brand' margin={{left:'medium'}}>Notable Remarks</Heading>
            <Grid
            areas={[
              { name: 'one', start: [0, 0], end: [0, 0] },
              { name: 'two', start: [1, 0], end: [1, 0] },
              { name: 'three', start: [2, 0], end: [2, 0] },
              { name: 'four', start: [3, 0], end: [3, 0] },
            ]}
            columns={['1/4', '1/4','1/4','1/4']}
            rows={['fill']}
            pad={{left:'small',right:'small',top:'small',bottom:'small'}}
            alignSelf='center'
            align='center'
            alignContent="center"
            fill
          >
               
            </Grid>
            </Box>
            <EndBar/>
            </Grommet>
        );
}

export {RemarksPage}
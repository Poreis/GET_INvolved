import React from 'react';
import {Grommet,Box, Heading, Button} from  'grommet';
import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import { WhyToGrid } from './WhyToGrid';
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


function AchievementsPage(){
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.9+'px'}} background="background" flex='grow' >
            <Heading level='2' olor='brand' margin={{left:'medium'}}>Our achievements so far</Heading>
            <Divider
          variant="string"
          color={theme.global.colors.text}
          sx={{ width: "25%", bgcolor: "#66033e", height: "3px", marginLeft:'20px', borderRadius:'30px' }}
        />
        <br/>      
            <Box height='50%' fill='horizontal'>
            <Grid
            areas={[
              { name: 'oneone', start: [0, 0], end: [0, 0] },
              { name: 'onetwo', start: [1, 0], end: [1, 0] },
              { name: 'onethree', start: [2, 0], end: [2, 0] },
              { name: 'onefour', start: [3, 0], end: [3, 0] }
            ]}
            columns={['1/4', '1/4','1/4','1/4']}
            rows={['fill']}
            gap="small"
            pad={{left:'large',right:'large',top:'large',bottom:'large'}}
            alignSelf='center'
            align='center'
            alignContent="center"
            background='#CCDEEB'
            fill
          >



             </Grid>

            </Box>
            </Box>
            <EndBar/>

            </Grommet>
        );
}

export {AchievementsPage}
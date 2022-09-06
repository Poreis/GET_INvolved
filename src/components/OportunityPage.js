import React from 'react';
import {Grommet,Box, Heading, Button,AccordionPanel,Accordion,Image} from  'grommet';
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
    level: 2,
  },
}
};


function OportunityPage(){
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.9+'px'}} background="background" flex='grow' margin={{bottom:'large'}} full pad='medium' >
            <Heading level='1' olor='brand' >Oportunities by countries</Heading>
        <br/>
        <Accordion margin={{left:'small'}}>
            <AccordionPanel label="Canada" style={{ fontWeight: "bold" }}>
                <Box pad='medium' style={{maxHeight:window.innerHeight*0.6+'px'}}   background="background">
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/get_involved_canada.png")} />

                </Box>
            </AccordionPanel>
            <AccordionPanel label="China" style={{ fontWeight: "bold" }}>
            <Box pad='medium' style={{maxHeight:window.innerHeight*0.6+'px'}} gap='small' direction='row'   background="background">
            <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/china.png")} />
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/OCPC.png")} />
            </Box>
            </AccordionPanel>
            <AccordionPanel label="European Union Countries" style={{ fontWeight: "bold" }}>
            <Box pad='medium' style={{maxHeight:window.innerHeight*0.6+'px'}} gap='small' direction='row'   background="background">
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/erasmus+.png")} />
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Japan" style={{ fontWeight: "bold" }}>
            <Box pad='medium' style={{maxHeight:window.innerHeight*0.6+'px'}} gap='small' direction='row'   background="background">
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/JSPS.png")} />
            </Box>
            </AccordionPanel>
            <AccordionPanel label="India" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="background">
            <Box pad='medium' style={{maxHeight:window.innerHeight*0.6+'px'}} gap='small' direction='row'   background="background">
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/india1.png")} />
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/india2.png")} />
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/india3.png")} />
            </Box>
            <Box pad='medium' style={{maxHeight:window.innerHeight*0.6+'px'}} gap='small' direction='row'   background="background">
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/india4.png")} />
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/india5.png")} />
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/india6.png")} />
            </Box>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="South Africa" style={{ fontWeight: "bold" }}>
            <Box pad='medium' style={{maxHeight:window.innerHeight*0.6+'px'}} gap='small' direction='row'   background="background">
                <Image style={{cursor:'pointer'}} fit='contain' margin='none' className="transparentImage"  src={require("../assets/south_africa.png")} />
                </Box>
            </AccordionPanel>
            </Accordion>
            </Box>
            <EndBar/>

            </Grommet>
        );
}

export {OportunityPage}
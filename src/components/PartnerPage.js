import React from 'react';
import {Grommet,Box, Heading, Button, Text, Carousel, Image,Grid, Accordion, AccordionPanel} from  'grommet';
import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import Divider from "@mui/material/Divider";
import { Down } from 'grommet-icons';

const scrollToInfo = () => {
    document.getElementById("scroller").scroll({
      top: window.innerHeight * 2,
      left: 0,
      behavior: "smooth",
    });
  };

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

function mobileCheck() {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }


function PatnerPage(){
        return(
            <Grommet id='scroller' style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.9+'px'}} background="background" flex='grow' >
            {
                mobileCheck() ? 
                <Heading level='1' color='brand'  margin={{left:'medium',right:'medium'}}>GET_INvolved – become a Partner</Heading>      
                :
                <Heading level='1' color='brand' margin={{left:'medium'}}>GET_INvolved – become a Partner</Heading>      
            }
            <Heading level='3' color='brand' margin={{left:'medium'}}>What a partner is</Heading>
            <Text color='brand' margin={{left:'medium',right:'medium'}}>Partner institutions like universities or research institutes support a defined number of talented students or young scientists per year to allow them for an internship, traineeship, or research stay at the accelerator facilities GSI and FAIR in Darmstadt, Germany.</Text>      
            <br/>
            <Text color='brand' margin={{left:'medium',right:'medium'}}>This dedicated cooperation under the GET_INvolved umbrella programme is usually based on a bilateral or multilateral agreement between FAIR and GSI on one hand and the institute or university on the other hand which regulates the financial arrangements for scholarships.</Text>      
            <br/>
            <Heading level='3' color='brand' margin={{left:'medium'}}>GET_INvolved Partners so far:</Heading>
            <Box height="small" width="fill" overflow="hidden" margin={{left:'medium',right:'medium'}}>
            <Carousel controls='arrows' fill play='4500'          background='white'>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/mitacs.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/tud.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/usc.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/wut.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/tus.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/cr22.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c23.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c24.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c31.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c32.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c33.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c34.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c41.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c42.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c43.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c44.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c51.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c52.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c53.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c54.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c61.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c62.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c63.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c64.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c71.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c72.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c73.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c84.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c81.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c82.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c83.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c84.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c91.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c92.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c93.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c94.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c101.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c102.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c103.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c104.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c111.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c112.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c113.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c114.png")} ></Image>
            </Grid>
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
                <Image gridArea='one' fill={true} fit='cover' src={require("../assets/c121.png")} ></Image>
                <Image gridArea='two' fill={true} fit='cover' src={require("../assets/c122.png")} ></Image>
                <Image gridArea='three' fill={true} fit='cover' src={require("../assets/c123.png")} ></Image>
                <Image gridArea='four' fill={true} fit='cover' src={require("../assets/c74.png")} ></Image>
            </Grid>
            </Carousel>
            </Box>  
            <br/>   
            {mobileCheck()?
            <br/>
            :
            <Button
            size='small'
            label='Become a partner'
            primary={true}
            color="white"
            alignSelf="center"
            elevation='large'
            onClick={scrollToInfo}
            icon={<Down color="brand" size='small' />}
            className='transparentImage'
            reverse
          ></Button> 
             }      
            </Box>
            <Box style={{minHeight:window.innerHeight*0.45+'px'}} background="background" flex='grow' >
            <Accordion margin={{left:'medium',right:'medium'}}>
            <AccordionPanel label="Benefits and Opportunities for Partners" style={{ fontWeight: "bold" }}>
            <Box>
            <Text margin={{left:'medium',right:'medium'}} >• <b>Education</b>: Providing opportunities for students and young researchers to gain experience and to work in research projects of one of the world-leading institutions in particle and nuclear physics enriches their education and thereby will enhance partner institution’s attractiveness for potential students and researchers.</Text>
            <br/>
            <Text margin={{left:'medium',right:'medium'}} >• <b>Network</b>: The structured mobility opportunities of the GET_INvolved programme will support the partner institution’s international networking by profiting from the personal knowledge that the students and young researchers will gain and the contacts they will make with GSI/FAIR.</Text>
            <br/>
            <Text margin={{left:'medium',right:'medium'}} >• <b>Next Generation</b>: Existing research collaborations with FAIR and GSI at the partner institution in FAIR shareholder countries and beyond will profit from the higher mobility of young researchers to build up the next generation of researchers that could profit from the enormous research potential the new FAIR accelerator facility will offer.</Text>
            <br/>
            </Box>
            </AccordionPanel>
            </Accordion>
            <Accordion margin={{left:'medium',right:'medium'}}>
            <AccordionPanel label="What a partner usually provides" style={{ fontWeight: "bold" }}>
            <Box>
            <Text margin={{left:'medium',right:'medium'}} >Institutional GET_INvolved programmes usually include funding for:</Text>
            <br/>
            <Text margin={{left:'large',right:'medium'}} >• Travel (return trip home institute to FAIR/GSI)</Text>
            <Text margin={{left:'large',right:'medium'}} >• Local costs (Accommodation, Subsistence) and</Text>
            <Text margin={{left:'large',right:'medium'}} >• Mandatory health and Liability insurance.</Text>
            <br/>
            <Text margin={{left:'medium',right:'medium'}} >In addition, the programme provides administrative support, such as in advertising the programme, selecting the most talented candidates for the dedicated programme.</Text>
            <br/>
            </Box>
            </AccordionPanel>
            </Accordion>
            <br/>
            <Box background='#CCDEEB' margin='medium'>
            <Heading level='3' color='brand' margin={{left:'medium'}}>Interested to be a Partner?</Heading>
            <Text margin={{left:'medium',right:'medium'}} >Send us your <b>Letter of Intent (LOI)</b> that should serve as a basis for discussion. Please include following information in the letter, your existing collaboration with GSI or FAIR, topic of interest in GSI/FAIR research fields.</Text>
            <br/>
            <Text margin={{left:'medium',right:'medium'}} >An appropriate person at your University/Institute/Company must sign LOI.</Text>
            <br/>
            <br/>
            </Box>
            </Box>
            <EndBar/>

            </Grommet>
        );
}

export {PatnerPage}
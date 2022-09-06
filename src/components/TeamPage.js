import React from 'react';
import {Grommet,Box, Heading, Button, Grid,Image, Paragraph} from  'grommet';
import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import { WhoCanParticipateGrid } from './whoCanParticipateGrid';
import Divider from "@mui/material/Divider";
import { maxWidth } from '@mui/system';


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



function TeamPage(){
        if(!mobileCheck())
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.9+'px'}} background="background" fill >
            <Heading level='1' alignSelf='center'>Meet the Team</Heading>
            <Box  style={{marginBottom:'100px',marginTop:'50px'}} flex='grow' direction='column' gap='medium' >
            <Grid
            areas={[
              { name: 'one', start: [0, 0], end: [0, 0] },
              { name: 'two', start: [1, 0], end: [1, 0] },
              { name: 'three', start: [2, 0], end: [2, 0] },
              { name: 'four', start: [3, 0], end: [3, 0] },
              { name: 'five', start: [1, 1], end: [1, 1] },
              { name: 'six', start: [2, 1], end: [2, 1] },
              { name: 'seven', start: [1, 2], end: [2, 2] },

            ]}
            columns={['1/5', '1/5','1/5','1/5']}
            rows={['1/3','1/3','1/3']}
            pad={{left:'small',right:'small',top:'none',bottom:'small'}}
            alignSelf='center'
            align='center'
            alignContent="center"
            gap='large'
            fill
            style={{lineHeight:'0px'}} 
            margin={{top:'none',left:'medium',right:'medium'}}
          >
            <Heading level='1' alignSelf='center'></Heading>
            <Box gridArea='one' background='white' round>
            <Image fit='cover' src={require("../assets/Pradeep.jpeg")}  style={{
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            maxHeight:window.innerHeight*0.5,
            maxWidth:window.innerWidth*0.25
                      }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Pradeep Ghosh<br/><i>Programme Manager</i></Heading>
            </Box> 
            <Box gridArea='two' background='white' round>
            <Image fit='cover' src={require("../assets/Frieda.jpeg")}  style={{
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            maxHeight:window.innerHeight*0.5,
            maxWidth:window.innerWidth*0.25
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Seda Stepanyan<br/><i>Administrative Executive</i></Heading>
            </Box> 
            <Box gridArea='three' background='white' round >
            <Image fit='cover' src={require("../assets/Pradeep.jpeg")}  style={{
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            maxHeight:window.innerHeight*0.5,
            maxWidth:window.innerWidth*0.25
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Sabrina Schulte<br/><i>Working Student</i></Heading>
            </Box> 
            <Box gridArea='four' background='white' round >
            <Image fit='cover' src={require("../assets/Frieda.jpeg")}  style={{
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            maxHeight:window.innerHeight*0.5,
            maxWidth:window.innerWidth*0.25
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Friederike Holfeld<br/><i>Working Student</i></Heading>
            </Box> 
            <Box gridArea='five' background='white' round>
            <Image fit='cover' src={require("../assets/Pradeep.jpeg")}  style={{
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            maxHeight:window.innerHeight*0.5,
            maxWidth:window.innerWidth*0.25
                      }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Pedro Gouveia<br/><i>Project Associate</i></Heading>
            </Box> 
            <Box gridArea='six' background='white' round>
            <Image fit='cover' src={require("../assets/Frieda.jpeg")}  style={{
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            maxHeight:window.innerHeight*0.5,
            maxWidth:window.innerWidth*0.25
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Elena Lopez<br/><i>Project Associate</i></Heading>
            </Box> 
            <Box alignSelf='center' gridArea='seven' style={{
            maxWidth:window.innerWidth*0.25,
            marginLeft:'200px',
            marginRight:'200px',
          }} background='white' round>
            <Image fit='cover' src={require("../assets/Frieda.jpeg")}  style={{
            borderTopLeftRadius: "23px",
            borderTopRightRadius: "23px",
            maxHeight:window.innerHeight*0.5,
            maxWidth:window.innerWidth*0.25
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Luis<br/><i>School Intern</i></Heading>
            </Box> 
            </Grid>
            </Box>
            <EndBar/>
            </Box>
            </Grommet>
        );
        else
        return (
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box  style={{minHeight:window.innerHeight*0.9+'px'}} background="background" fill >
            <Heading level='1' alignSelf='center'>Meet the Team</Heading>
            <Box  style={{marginBottom:'20px',marginTop:'0px'}} flex='grow' direction='column' gap='medium' >
            <Heading level='1' alignSelf='center'></Heading>
            <Box alignSelf='center' background='white' round fill='vertical'>
            <Image fit='cover' alignSelf='center' src={require("../assets/Pradeep.jpeg")}  style={{
            maxHeight:window.innerHeight*0.5,
            marginTop:'5px'
                      }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Pradeep Ghosh<br/><i>Programme Manager</i></Heading>
            </Box> 
            <Box alignSelf='center' background='white' round fill='vertical'>
            <Image fit='cover'  alignSelf='center' src={require("../assets/Frieda.jpeg")}  style={{
                maxHeight:window.innerHeight*0.5,
                marginTop:'5px'
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Seda Stepanyan<br/><i>Administrative Executive</i></Heading>
            </Box> 
            <Box alignSelf='center' background='white' round fill='vertical' >
            <Image fit='cover' alignSelf='center' src={require("../assets/Pradeep.jpeg")}  style={{
            maxHeight:window.innerHeight*0.5,
            marginTop:'5px'
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Sabrina Schulte<br/><i>Working Student</i></Heading>
            </Box> 
            <Box alignSelf='center' background='white' round fill='vertical' >
            <Image fit='cover' alignSelf='center' src={require("../assets/Pradeep.jpeg")}  style={{
            maxHeight:window.innerHeight*0.5,
            marginTop:'5px'
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Pedro Gouveia<br/><i>Project Associate</i></Heading>
            </Box> 
            <Box alignSelf='center' background='white' round fill='vertical' >
            <Image fit='cover' alignSelf='center' src={require("../assets/Pradeep.jpeg")}  style={{
            maxHeight:window.innerHeight*0.5,
            marginTop:'5px'
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Elena Lopez<br/><i>Project Associate</i></Heading>
            </Box> 
            <Box alignSelf='center' background='white' round fill='vertical' >
            <Image fit='cover' alignSelf='center' src={require("../assets/Pradeep.jpeg")}  style={{
            maxHeight:window.innerHeight*0.5,
            marginTop:'5px'
          }}></Image>
            <Heading alignSelf='center' color='brand' style={{textAlign:'center'}} level='3'>Luis<br/><i>School Intern</i></Heading>
            </Box> 
            </Box>
                   <EndBar/> 
            </Box>
            </Grommet>
        );
}

export {TeamPage}
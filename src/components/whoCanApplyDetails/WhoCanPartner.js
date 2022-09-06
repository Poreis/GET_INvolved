import React from 'react';
import {Grommet,Box, Heading, Button,Grid,Text, Paragraph} from  'grommet';
import {Bar} from '../AppBar'
import {EndBar} from '../EndBar'
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


function WhoCanPartner(){
  if(!mobileCheck())
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.9+'px'}} margin={{bottom:'large'}} background="background" full >
            <Grid
            areas={[
              { name: 'top', start: [0, 0], end: [0, 0] },
              { name: 'bottom', start: [0, 1], end: [0, 1] },
            ]}
            columns={['fill']}
            rows={['1/4','3/4']}
            gap="small"
            pad={{left:'large',right:'large',top:'large',bottom:'large'}}
            alignSelf='center'
            align='center'
            alignContent="center"
            fill
          >
        <Box gridArea='top'  background="url('who4.jpg')" direction="ROW"  align="end" fill ><Heading level='1' color='white' margin='medium' pad='medium' style={{fontWeight:'bold',backgroundColor:'#00599c',borderRadius:'5px'}}>&nbsp;PARTNER PROGRAMME&nbsp;</Heading></Box>
        <Box  gridArea='bottom' background="light-1"  fill >
        <Heading level='2' margin='medium'>GET_INvolved Partner Programme (Fully funded)</Heading>
<Paragraph margin='medium' size='large' fill>For those who are affiliated to our GET_INvolved partners can find opportunities directly with Partner funded Programme. Applicants can visit our GET_INvolved Partners page where all partner Programme are listed according to the Country of origin. This includes calls for application, partner funding and also contact person from each partner to help applicants submission.&emsp; 
</Paragraph>
        </Box>
       
             </Grid>
      

            </Box>
            <EndBar/>

            </Grommet>
        );
        else
        return(
          <Grommet style={{overflowY:'scroll'}} theme={theme} full>
          <Bar/>
          <Box style={{minHeight:window.innerHeight*0.9+'px'}} background="background" fill >
          <Grid
          areas={[
            { name: 'top', start: [0, 0], end: [0, 0] },
            { name: 'bottom', start: [0, 1], end: [0, 1] },
          ]}
          columns={['fill']}
          rows={['1/4','3/4']}
          gap="small"
          pad={{left:'large',right:'large',top:'large',bottom:'large'}}
          alignSelf='center'
          align='center'
          alignContent="center"
          margin='medium'
          fill
        >
      <Box gridArea='top'  background="url('who4.jpg')" direction="ROW"  align="end" fill ><Heading level='2' color='white' margin='medium' pad='medium' style={{fontWeight:'bold',backgroundColor:'#00599c',borderRadius:'5px'}}>&nbsp;PARTNER PROGRAMME&nbsp;</Heading></Box>
      <Box           style={{overflowY:'scroll'}}gridArea='bottom' background="light-1"  fill >
      <Heading level='4' margin='medium'>GET_INvolved Partner Programme (Fully funded)</Heading>
<Paragraph margin='medium' size='small' fill>For those who are affiliated to our GET_INvolved partners can find opportunities directly with Partner funded Programme. Applicants can visit our GET_INvolved Partners page where all partner Programme are listed according to the Country of origin. This includes calls for application, partner funding and also contact person from each partner to help applicants submission.&emsp; 
</Paragraph>
      </Box>
     
           </Grid>
    

          </Box>
          <EndBar/>

          </Grommet>
        );
}

export {WhoCanPartner}
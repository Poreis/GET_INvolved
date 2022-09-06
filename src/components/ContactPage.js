import React from "react";
import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import {Grommet,Box,ResponsiveContext,Heading,Text, Paragraph,PageHeader, Anchor} from 'grommet'
import {MailOption,CircleAlert,Phone, UserManager} from 'grommet-icons'
import Divider from "@mui/material/Divider";
import { List, ListItem, ListItemText } from '@mui/material';
import { ChooseApplyPage } from './ChooseApplyPage';



function getHeadingLevel(currentSize) {
    if (currentSize == "small") return 5;
    else if (currentSize == "medium") return 2;
    else return 2;
  }

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

  function getTextSize(currentSize) {
    if (currentSize == "small") return 'small';
    else if (currentSize == "medium") return 'medium';
    else return 'large';
  }

  function getIconSize(currentSize){
    if (currentSize == "small") return 'small';
    else if (currentSize == "medium") return 'medium';
    else return 'large';
  }

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

function ContactPage(props) {
    const size = React.useContext(ResponsiveContext);
    if(!mobileCheck())
    return(
        <Grommet theme={theme} full>
        <Box background="background" fill>
            <Bar/>
            <Box
        background="#f9f7f3" flex='grow'
        pad={{ left: "medium", right: "medium" }}
      >
        <Heading
          margin={{ top: "large", bottom:'small' }}
          level={getHeadingLevel(size)}
          color="brand"
          height="20%"
          level='1'
        >
          Contacts
        </Heading>
     
        <br />
        <Box
          height="80%"
          alignSelf="center"
          align="center"
          fill="horizontal"
          alignContent="center"
          justify="around"
          direction="row"
          pad={{ left: "medium", right: "medium"}}
          gap="medium"
        >
          <Box direction="column" overflow='hidden' alignContent="center" align='center'  width='30%' height='90%' background='text' elevation='medium' border={{
          color: "brand",
          size: "medium",
          side: "all"
        }}>
            <Text  margin={{top:'large'}} alignSelf='center' align='center'><UserManager size={getIconSize(size)} /></Text>
            <Heading level='3' color='brand'>Programme Coordinator</Heading>
            <Text  size={getTextSize(size)} margin={{left:'medium'}} size='medium' alignSelf='center' color='brand'><b>Dr. Pradeep Ghosh</b></Text>
            <List >
                <ListItem sx={{ display: 'list-item', color:'red'}}>
                    <ListItemText sx={{ color:'#66033e'}}><b>•</b> Email: <Anchor>international@fair-center.eu</Anchor> and <Anchor>international@gsi.de</Anchor> </ListItemText>
                </ListItem>
            </List>
        </Box>
        <Box direction="column" overflow='hidden' alignContent="center" align='center'  width='30%' height='90%' background='text' elevation='medium' border={{
          color: "brand",
          size: "medium",
          side: "all"
        }}>
            <Text  margin={{top:'large'}} alignSelf='center' align='center'><Phone size={getIconSize(size)} /></Text>
            <Heading level='3' color='brand'>General Enquiries</Heading>
            <Text  size={getTextSize(size)} margin={{left:'medium'}} size='medium' alignSelf='center' color='brand'>All central enquiries and request related to International student programmes and GET_INvolved Programme are handled via our central email address listed below:</Text>
            <List >
                <ListItem sx={{ display: 'list-item', color:'red'}}>
                    <ListItemText sx={{ color:'#66033e'}}><b>•</b> Email: <Anchor>international@fair-center.eu</Anchor> and <Anchor>international@gsi.de</Anchor>
</ListItemText>
                    <ListItemText sx={{ color:'#66033e'}}><b>•</b> Web: <Anchor>www.fair-center.eu/get_involved</Anchor> and <Anchor>www.gsi.de/get_involved</Anchor>
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
        <Box direction="column" overflow='hidden' alignContent="center" align='center'  width='30%' height='90%' background='text' elevation='medium' border={{
          color: "brand",
          size: "medium",
          side: "all"
        }}>
            <Text  margin={{top:'large'}} alignSelf='center' align='center'><MailOption size={getIconSize(size)} /></Text>
            <Heading level='3' color='brand'>Correspondence address</Heading>
            <Text size={getTextSize(size)} margin={{left:'medium'}} size='medium' alignSelf='left' color='brand'><b>Postal Adress:</b></Text>
            <List >
                <ListItem sx={{ display: 'list-item', color:'red'}}>
                    <ListItemText sx={{ color:'#66033e'}}>International Programme for Students and Reseacrhers
                    <br/>GSI Helmholtz Center for Heavy Ion Research GmbH and Facility for Antiproton and Ion Research in Europe GmbH (FAIR GmbH)
                    <br/>Planckstrasse 1, 64291 Darmstadt
                    <br/>GERMANY
                    </ListItemText>
                </ListItem>
            </List>
        </Box>
        </Box>
        </Box>
        <EndBar/>
           </Box>
           </Grommet>

    );
    else{
        return(
            <Grommet theme={theme} full>
            <Box background="background" justify="stretch"             fill>
                <Bar/>
                <Box
            fill={true}
            background="#f9f7f3"
            pad={{ left: "medium", right: "medium" }}
            overflow='scroll'
            margin={{bottom:'small'}}
          >
            <Heading
              margin={{ top: "large", bottom:'small' }}
              level={getHeadingLevel(size)}
              color="brand"
              height="20%"
            >
              Contacts
            </Heading>
          
            <br />
            <Box
              alignSelf="center"
              align="center"
              alignContent="center"
              justify="between"
              direction="column"
              pad={{ left: "medium", right: "medium"}}
              gap="medium"
            >
            <Box direction="column" flex='grow' alignContent="center" align='center'  width='100%'  background='text' elevation='medium' border={{
              color: "brand",
              size: "medium",
              side: "all"
            }}>
                <Text  margin={{top:'large'}} alignSelf='center' align='center'><MailOption size='medium' /></Text>
                <Heading level='3' color='brand'>Correspondence address</Heading>
                <Text size={getTextSize(size)}  size='medium' alignSelf='left' color='brand'><b>Postal Adress:</b></Text>
                <List >
                    <ListItem sx={{display: 'list-item', color:'red'}}>
                        <ListItemText sx={{color:'#66033e'}}><b>•</b> International Programme for Students and Reseacrhers
                        <br/>GSI Helmholtz Center for Heavy Ion Research GmbH and Facility for Antiproton and Ion Research in Europe GmbH (FAIR GmbH)
                        <br/>Planckstrasse 1, 64291 Darmstadt
                        <br/>GERMANY
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
            <Box direction="column" alignContent="center" align='center' flex='grow'  width='100%'background='text' elevation='medium' border={{
              color: "brand",
              size: "medium",
              side: "all"
            }}>
                <Text  margin={{top:'large'}} alignSelf='center' align='center'><Phone size='medium' /></Text>
                <Heading level='3' color='brand'>General Enquiries</Heading>
                <Text  size={getTextSize(size)} margin={{left:'medium',right:'medium'}} size='medium' alignSelf='center' color='brand'>All central enquiries and request related to International student programmes and GET_INvolved Programme are handled via our central email address listed below:</Text>
                <List >
                    <ListItem sx={{ display: 'list-item', color:'red'}}>
                        <ListItemText sx={{ color:'#66033e'}}><b>•</b> Phone: +49 6159 71-3257</ListItemText>
                        <ListItemText sx={{ color:'#66033e'}}><b>•</b> Fax: +49 6159 71-3916</ListItemText>
                        <ListItemText sx={{ color:'#66033e'}}><b>•</b> Email: <Anchor>international@fair-center.eu</Anchor> and <Anchor>international@gsi.de</Anchor>
    </ListItemText>
                        <ListItemText sx={{ color:'#66033e'}}><b>•</b> Web: <Anchor>www.fair-center.eu/get_involved</Anchor> and <Anchor>www.gsi.de/get_involved</Anchor>
                        </ListItemText>
                    </ListItem>
                </List>
            </Box>
            <Box direction="column" alignContent="center" align='center'  flex='grow'  width='100%' background='text' elevation='medium' border={{
              color: "brand",
              size: "medium",
              side: "all"
            }}>
                <Text  margin={{top:'large'}} alignSelf='center' align='center'><UserManager size='medium' /></Text>
                <Heading level='3' color='brand'>Programme Coordinator</Heading>
                <Text  size={getTextSize(size)} size='medium' alignSelf='center' color='brand'><b>Dr. Pradeep Ghosh</b></Text>
                <List >
                    <ListItem sx={{ display: 'list-item', color:'red'}}>
                        <ListItemText sx={{ color:'#66033e'}}><b>•</b> Email: <Anchor>international@fair-center.eu</Anchor> and <Anchor>international@gsi.de</Anchor> </ListItemText>
                        <ListItemText sx={{ color:'#66033e'}}><b>•</b> Phone: +49 (0) 6159 71 3257</ListItemText>
                    </ListItem>
                </List>
            </Box>
            </Box>
            </Box>
            <EndBar />
               </Box>
               </Grommet>
        );
    }
}

export {ContactPage} 
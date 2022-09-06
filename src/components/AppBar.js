import React from "react";
import {
  Box,
  Button,
  Heading,
  Anchor,
  Header,
  Video,
  ResponsiveContext,
  Menu,
  Carousel,
  Image,
  Paragraph,
  Collapsible,
  Text,
} from "grommet";
import { Down } from "grommet-icons";
import { Menu as MenuIcon } from "grommet-icons";
import {
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const AppBar = (props) => (
  <Header
    sticky="scrollUp"
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="background"
    pad={{ left: "small", right: "small", vertical: "small" }}
    elevation={props.elevation}
    style={{ zIndex: "1" }}
    {...props}
  />
);

function getAnchorSize(currentSize) {
  if (currentSize == "small") return "xsmall";
  else if (currentSize == "medium") return "medium";
  else return "large";
}

function getHeadingLevel(currentSize) {
  if (currentSize == "small") return 5;
  else if (currentSize == "medium") return 2;
  else return 1;
}

function getSecAnchorSize(currentSize) {
  if (currentSize == "small") return "xsmall";
  else if (currentSize == "medium") return "medium";
  else return "large";
}

function redirectProgramme(text){
  if(text=="Why to GET_INvolved?")
    return function(){window.location.href='/whyToApply'}
  else if(text=="Find your Programme")
    return function(){window.location.href='/form'}
  else if(text=='Opportunities')
    return function(){window.location.href='/opportunities'}
  else if(text=='Application Status')
  return function(){window.location.href='/applicationStatus'}
  else if(text=='Services')
  return function(){window.location.href='/services'}
  else if(text=='Notable Remarks')
  return function(){window.location.href='/remarks'}
  else if(text=='Partners')
  return function(){window.location.href='/partners'}
  else if(text=='Meet the Team')
  return function(){window.location.href='/team'}
  else if(text=='Contact Us')
  return function(){window.location.href='/contacts'}

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

function Bar(props) {
  const size = React.useContext(ResponsiveContext);
  const [open, setOpen] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);
  const [openT, setOpenT] = React.useState(false);
  const [openAboutUs, setOpenAboutUs ] = React.useState(false);


  if (!mobileCheck())
    return (

      <Box  direction="column">
        <AppBar elevation="medium">
        <a style={{ textDecoration: "none" }} href="/">
              <Heading
                level={getHeadingLevel(size)}
                margin="none"
                color="brand"
              >
<Image fit='cover' style={{maxHeight:window.innerHeight*0.08+'px'}} src={require("../assets/icon.png")} fit/>
              </Heading>
            </a>
          <AppBar elevation="none">
            <Anchor
              onClick={function () {setOpenAboutUs(false); setOpen(!open)}}
              icon={<Down size="small" color="brand"></Down>}
              size={getAnchorSize(size)}
              color="brand"
              label="Programme"
              reverse
            />
            <Anchor size={getAnchorSize(size)} color="brand" label="Projects" />
            <Anchor size={getAnchorSize(size)} color="brand" label="News" />
            <Anchor
                icon={<Down size="small" color="brand"></Down>}
                onClick={function () {setOpenAboutUs(!openAboutUs); setOpen(false)}}
                size={getAnchorSize(size)}
                color="brand"
                label="About Us"
                reverse
              />
              </AppBar>
        </AppBar>
        <Collapsible open={openAboutUs}>
            <Box
              direction="row"
              background="#66033e"
              pad="medium"
              align="center"
              justify="end"
              gap="medium"
            >
              <Anchor
                size={getSecAnchorSize(size)}
                color="white"
                label="Services"
                href='/services'
              />
              <Anchor
                size={getSecAnchorSize(size)}
                color="white"
                label="Key Numbers"
                href='/remarks'
              />
              <Anchor
                size={getSecAnchorSize(size)}
                href='/partners'
                color="white"
                label="Partners"
              />
              <Anchor
                size={getSecAnchorSize(size)}
                color="white"
                href='/team'
                label="Meet the Team"
              />
              <Anchor
                size={getSecAnchorSize(size)}
                href='/contacts'
                color="white"
                label="Contact Us"
              />
            </Box>
          </Collapsible>
        <Collapsible open={open}>
          <Box
            direction="row"
            background="brand"
            pad="medium"
            align="center"
            justify="end"
            gap="medium"
          >
            <Anchor
              size={getSecAnchorSize(size)}
              color="white"
              label="Why to GET_INvolved?"
              href='/whyToApply'
            />
            <Menu
              dropBackground="brand"
              icon={<Down size="small" color="white"></Down>}
              size={getSecAnchorSize(size)}
              dropProps={{
                align: { top: "bottom", left: "left" },
                elevation: "xlarge",
              }}
              items={[
                {
                  color: "white",
                  label: (
                    <Box align="center">
                      <Anchor href='chooseApply' size={getSecAnchorSize(size)} color='#f9f7f3' style={{textDecoration:'none'}}> 
                        As a Student/Researcher
                      </Anchor>
                    </Box>
                  ),
                  onClick: () => {},
                },
                {
                  color: "white",
                  label: (
                    <Box align="center">
                      <Anchor href='applyAsPartner' size={getSecAnchorSize(size)} color='#f9f7f3' style={{textDecoration:'none'}}>As a Partner</Anchor>
                    </Box>
                  ),
                  onClick: () => {},
                },
              ]}
              color="white"
              label="Apply"
              style={{ fontWeight: "bold" }}
              alignSelf="center"
            />
            <Anchor
              size={getSecAnchorSize(size)}
              color="white"
              label="Opportunities"
              href='/opportunities'
            />
            <Anchor
              size={getSecAnchorSize(size)}
              color="white"
              href="/form"
              label="Find your Programme"
            />
            <Anchor
              size={getSecAnchorSize(size)}
              href='/applicationStatus'
              color="white"
              label="Application Status"
            />
          </Box>
        </Collapsible>
      </Box>
    );
  else
    return (
      <AppBar elevation="medium">
         <a style={{ textDecoration: "none" }} href="/">
              <Heading
                level={getHeadingLevel(size)}
                margin="none"
                color="brand"
              >
<Image fit='cover' style={{maxHeight:window.innerHeight*0.08+'px'}} src={require("../assets/icon.png")} fit/>
              </Heading>
            </a>
        <AppBar elevation="none">
            <MenuIcon color="brand" onClick={() => setOpen(true)} />
            <Drawer
              onClose={() => setOpen(false)}
              anchor="right"
              open={open}
              children={
                <Box fill={true} background="#f9f7f3">
                  <List sx={{ backgroundColor: "#f9f7f3" }}>
                    <ListItemButton onClick={() => setOpenS(!openS)}>
                      <ListItemText
                        sx={{ color: "#5a0035" }}
                        primary="Programme"
                      />
                      {openS ? (
                        <ExpandLess sx={{ color: "#5a0035" }} />
                      ) : (
                        <ExpandMore sx={{ color: "#5a0035" }} />
                      )}
                    </ListItemButton>
                    <Collapse in={openS} timeout="auto" unmountOnExit>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => setOpenT(!openT)}
                      >
                        <ListItemText
                          sx={{ color: "#5a0035" }}
                          primary="Apply"
                        />
                        {openT ? (
                          <ExpandLess sx={{ color: "#5a0035" }} />
                        ) : (
                          <ExpandMore sx={{ color: "#5a0035" }} />
                        )}
                      </ListItemButton>
                      <Collapse in={openT} timeout="auto" unmountOnExit>
                        <ListItemButton onClick={function(){ window.location.href='/chooseApply'}} sx={{ pl: 8 }}>
                          <ListItemText
                            sx={{ color: "#5a0035" }}
                            primary="As a Student/Researcher"
                          />
                        </ListItemButton>
                        <ListItemButton onClick={function(){ window.location.href='/applyAsPartner'}} sx={{ pl: 8 }}>
                          <ListItemText
                            sx={{ color: "#5a0035" }}
                            primary="As a Partner"
                          />
                        </ListItemButton>
                      </Collapse>
                      <List component="div" disablePadding>
                        {[
                          "Why to GET_INvolved?",
                          "Opportunities",
                          "Find your Programme",
                          "Application Status",
                        ].map((text) => (
                          <ListItemButton onClick={redirectProgramme(text)} sx={{ pl: 4 }}>
                            <ListItemText
                              sx={{ color: "#5a0035" }}
                              primary={text}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                    {["Projects", "News"].map((text) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemText
                            sx={{ color: "#5a0035" }}
                            primary={text}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItemButton onClick={() => setOpenAboutUs(!openAboutUs)}>
                      <ListItemText
                        sx={{ color: "#5a0035" }}
                        primary="About Us"
                      />
                      {openAboutUs ? (
                        <ExpandLess sx={{ color: "#5a0035" }} />
                      ) : (
                        <ExpandMore sx={{ color: "#5a0035" }} />
                      )}
                    </ListItemButton>
                    <Collapse in={openAboutUs} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {[
                          "Services",
                          "Notable Remarks",
                          "Partners",
                          "Meet the Team",
                          "Contact Us"
                        ].map((text) => (
                          <ListItemButton onClick={redirectProgramme(text)} sx={{ pl: 4 }}>
                            <ListItemText
                              sx={{ color: "#5a0035" }}
                              primary={text}
                            />
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </List>
                </Box>
              }
            ></Drawer>
          </AppBar>
      </AppBar>
    );
}

export { Bar };

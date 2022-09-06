import React, { useState } from 'react';
import {Layer,Image,Text,Tip,Grommet,Box, Heading, Button, Paragraph,Page,PageContent, Accordion,AccordionPanel,Anchor} from  'grommet';
import {Bar} from '../AppBar'
import {EndBar} from '../EndBar'
import Divider from "@mui/material/Divider";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import ReactTooltip from "react-tooltip";
import { Close } from 'grommet-icons';



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
    level: 4,
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

const geoUrl =
"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const listOfCountries = ['Azerbaijan','Canada','Bulgaria','China','Cyprus','Czech Republic','France','Germany','India','Ireland','Latvia','Mexico','Montenegro','Poland','Romania','Russia','South Africa','Spain','Thailand','United Kingdom','Ukraine']

function PartnersMainPage(){
    const [showDetails, setShowDetails] = React.useState(false);
    const [currentCountry, setCurrentCountry] = React.useState();

    if(!mobileCheck())
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box background="background" flex='grow' >
            <Heading level='1' olor='brand' margin={{left:'medium'}}>Discover our partners</Heading>
        <ComposableMap>
      <Geographies style={{zIndex:'0', position:'absolute'}} geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            (listOfCountries.includes(geo.properties.name)) ?
            <Tip plain style={{zIndex:'1', position:'absolute'}}  content={
                        <Box background='#5a0035'  align='center' alignSelf='end' style={{maxWidth:window.innerWidth*0.25+'px'}} margin={{ bottom: 'xlarge' }} pad="xsmall" round>
                         <Text color='white'>{geo.properties.name}</Text>
                        </Box>
                      }>
                 <Geography onClick={function(){setShowDetails(true);setCurrentCountry(geo.properties.name);console.log(geo.properties.name)}} key={geo.rsmKey} geography={geo}  fill="#66033e" stroke='white'
              style={{
                default: {
                  fill: "#66033e",
                  outline: "none"
                },
                hover: {
                  fill: "#ea7465",
                  outline: "white",
                  cursor:'pointer'
                },
                pressed: {
                  fill: "#66033e",
                  outline: "none"
                }
              }}/>
            </Tip> :
            <Geography onClick={()=>{console.log(geo.properties.name)}} key={geo.rsmKey} geography={geo}  fill="#fedba8" stroke='white'/>
            ))
        }
        </Geographies>
         </ComposableMap>
         {showDetails && 
         <Layer
          onEsc={() => setShowDetails(false)}
          onClickOutside={() => setShowDetails(false)}
          full='horizontal'
          
          margin={{right:window.innerWidth*0.1+'px',left:window.innerWidth*0.1+'px'}}
        >
         { (currentCountry=='Canada') ?
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>Canada 🇨🇦</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>
            </Box>
            <br/>
            <Box overflow='auto'>
            <Accordion>
            <AccordionPanel label="GET_INvolved Programme under the Mitacs Globalink Research Award (GRA) and with the Saint Mary's University (SMU) in Halifax, Canada." style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >&emsp;• In August 2021, GSI and Mitacs signed a coopeation agreement for an international mobility programme. The Mitacs-GSI exchange mobility program will boost existing partnerships and help build future scientists and leaders for the operation of science facilities like the Facility for Antiproton and Ion Research (FAIR). GSI has been cooperating with and benefiting from scientific and technical collaboration with Canadian institutions for years in several research projects. The Mitacs Globalink Research Award (GRA) supports research collaborations between Canada and select partner organizations and eligible countries and regions.
            <br/><br/>
            &emsp;• Under the joint supervision of a home and host professor, successful senior undergraduate students, graduate students, as well as postdoctoral fellows will receive a CAD $6,000 research award to conduct a 12- to 24-week research project in the other country. Awards are offered in partnership with Mitacs’s Canadian academic partners (and, in some cases, with Mitacs’s international partners) and are subject to available funding. </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Programme overview" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>MITACS Programme</Text>
            <br/>
            <Text>&emsp;<b>1.</b> Applicants (student or postdoctoral fellow, home and host supervisors) submit application to partner organization or to Mitacs. </Text>
            <Text>&emsp;<b>2.</b> Within 12 weeks of submission, Mitacs will contact participants about the outcome of the application. Travel must take place within a year from the date of the outcome. </Text>
            <Text>&emsp;<b>3.</b> The intern provides the completed Mitacs Code of Conduct and Ethics and International Pre-Departure forms. </Text>
            <Text>&emsp;<b>4.</b> Mitacs forwards the Globalink Research Award funds to the Canadian institution. In some cases, interns may receive a portion of the funds from Mitacs’s partner organization.  </Text>
            <Text>&emsp;<b>5.</b> The intern departs to the destination and begins the research project.</Text>
            <Text>&emsp;<b>6.</b> Upon project completion, the intern submits a final report that summarizes the project. </Text>
            <Text>&emsp;<b>7.</b> All participants (student or postdoctoral fellow, home and host supervisors) submit a final survey. </Text>
            <Text>
                <br/>
            Partnership with Saint Mary´s University, Halifax<br/>The aim is to outline the progress of the civil construction and the achievements of the FAIR's precursor program FAIR Phase 0 and exchange how the scientific collaboration can be ramped up and offer more training and research possibilities to young researchers affiliated with SMU Halifax.
            </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='grey' style={{fontWeight:'bolder'}}>Mitacs, Canada</Text>
            <br/>
            <Text>Mitacs is a not-for-profit organization that fosters growth and innovation in Canada by solving business challenges with research solutions from academic institutions. Mitacs is funded by the Government of Canada along with the Government of Alberta, the Government of British Columbia, Research Manitoba, the Government of New Brunswick, the Government of Newfoundland and Labrador, the Government of Nova Scotia, the Government of Ontario, Innovation PEI, the Government of Quebec, the Government of Saskatchewan, and the Government of Yukon. </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>Mitacs:</Text>
            <Text>Étienne Pineault</Text>
            <Text>Director, International Business Development,</Text>
            <Text>Mitacs</Text>
            <Text>email: <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=epineault@mitacs.ca')}}>Étienne Pineault</Anchor></Text>
            <br/>
            <Anchor onClick={()=>{window.open('https://www.mitacs.ca/en')}}>Mitacs, Canada</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='Azerbaijan') ? 
            <Page kind='full' >
            <PageContent background="light-3" fill>
            <Box direction='row' justify='between'>
            <Heading level='2'>Azerbaijan 🇦🇿</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto' fill>
            <Accordion>
            <AccordionPanel label="Programme with ANAS, Baku, Azerbaijan" style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Based on the bilateral agreement between FAIR/GSI and Azerbaijan National Academy of Sciences (ANAS), an Internship and training program between FAIR/GSI and ANAS Azerbaijan. The program is currently limited to the students registered with ANAS, Baku Azerbaijan.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Call for <b>GET_INvolved Azerbaijan</b> FAIR/GSI - ANAS, Azerbaijan 2022 to be announced soon.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text><Anchor onClick={()=>{window.open('http://science.gov.az/')}}>Azerbaijan National Academy of Sciences</Anchor> (ANAS) located in Baku, is the main state research organization and the primary body that conducts research and coordinates activities in the fields of science and social sciences in Azerbaijan. </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>ANAS, Azerbaijan:</Text>
            <Text>Dr. Anar Rustamov</Text>
            <Text>email: <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=a.rustamov(at)cern.ch')}}>a.rustamov(at)cern.ch</Anchor></Text>
            <br/>
            <Anchor onClick={()=>{window.open('http://science.gov.az/')}}>Azerbaijan National Academy of Sciences (ANAS)</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='Bulgaria') ? 
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>Bulgaria 🇧🇬</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto'>
            <Accordion>
            <AccordionPanel label="Programme with EUt+, Sofia, Bulgaria" style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Up to ten students and doctoral candidates per year will profit from this new partnership: in the framework of short-term internships or research visits lasting several years, they will be able to learn and work in the pioneering research environment at GSI/FAIR, which will, among others, nominate mentors for them and help them, if required, to find accommodation for the duration of their stay. The participants of the programme can also take part in GSI/FAIR events. These include symposia and lectures as well as the GSI’s summer programme for students.
                <br/>
                The partners will form a joint jury for the selection procedure. Internships can last between three and six months and require at least a bachelor’s degree. Applicants for research visits must hold a master’s degree, be a doctoral candidate or produce evidence of at least two years’ research experience. Such visits can last up to two years.
            </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Call for <b>GET_INvolved Azerbaijan</b> FAIR/GSI - ANAS, Azerbaijan 2022 to be announced soon.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text><Anchor onClick={()=>{window.open('http://science.gov.az/')}}>Azerbaijan National Academy of Sciences</Anchor> (ANAS) located in Baku, is the main state research organization and the primary body that conducts research and coordinates activities in the fields of science and social sciences in Azerbaijan. </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>ANAS, Azerbaijan:</Text>
            <Text>Dr. Anar Rustamov</Text>
            <Text>email: <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=a.rustamov(at)cern.ch')}}>a.rustamov(at)cern.ch</Anchor></Text>
            <br/>
            <Anchor onClick={()=>{window.open('http://science.gov.az/')}}>Azerbaijan National Academy of Sciences (ANAS)</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='China') ? 
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>China 🇨🇳</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto'>
            <Accordion>
            <AccordionPanel label="Programme with MoHRSS, OCPC China" style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Based on the multilateral agreement between Helmholtz Association and other Helmholtz Centers including GSI for a Postdoctoral fellowship is established. The programme is open to Chinese postdoctoral students who did not graduate more than five years ago and who are working in a research institute or a university in China. With a scholarship, they can research two years at a Helmholtz centre. Both Host centres of the Helmholtz Association and the Office of China Postdoctoral Council (OCPC) of the Ministry of Human Resources and Social Security (MoHRSS) share the Scholarship.
            </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="More information" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Programme Coordinator: Dr. Pradeep Ghosh (<Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pradeep.ghosh@fair-center.eu')}}>Email</Anchor>)</Text>
            <br/>
            <Text>The Programme information about the present call are available at <Anchor onClick={()=>{window.open('https://www.helmholtz.de/cn/homepage/all-news/')}}>Helmholtz website – Beijing Office</Anchor> (in Chinese)</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Office of the China Postdoctoral Council (OCPC) of the Ministry of Human Resources and Social Security (MoHRSS), China. <br/>The official webpage (in Chinese): <Anchor onClick={()=>{window.open('http://www.chinapostdoctor.org.cn')}}>http://www.chinapostdoctor.org.cn</Anchor></Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Anchor onClick={()=>{window.open('http://www.chinapostdoctor.org.cn/')}}>Office of the China Postdoctoral Council</Anchor>
            <Anchor onClick={()=>{window.open('http://www.mohrss.gov.cn/')}}>Ministry of Human Resources and Social Security</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='Cyprus') ? 
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>Cyprus 🇨🇾</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto'>
            <Accordion>
            <AccordionPanel label="Programme with EUt+, Limassol, Cyprus" style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Up to ten students and doctoral candidates per year will profit from this new partnership: in the framework of short-term internships or research visits lasting several years, they will be able to learn and work in the pioneering research environment at GSI/FAIR, which will, among others, nominate mentors for them and help them, if required, to find accommodation for the duration of their stay. The participants of the programme can also take part in GSI/FAIR events. These include symposia and lectures as well as the GSI’s summer programme for students.
                <br/>
                <br/>
                The partners will form a joint jury for the selection procedure. Internships can last between three and six months and require at least a bachelor’s degree. Applicants for research visits must hold a master’s degree, be a doctoral candidate or produce evidence of at least two years’ research experience. Such visits can last up to two years.
                <br/>
                <br/>
                More information:
                <br/>
            </Text>
            <Text>&emsp;<b>1.</b> Obligatory Internships (Individual application possible) → <Anchor href='/internship'>GET_INvolved Short-Term Internships</Anchor></Text>
            <Text>&emsp;<b>2.</b> Erasmus+ Traineeships (Individual application possible) → <Anchor href='/erasmusplus'>GET_INvolved ERASMUS+ Traineeships</Anchor></Text>
            <Text>&emsp;<b>3.</b> Study Tours (application via Coordinator) → Contact the <Anchor href='contacts'>Programme Manager</Anchor> via email</Text>
            <Text>&emsp;<b>4.</b> Access to Lectures →  <Anchor  onClick={()=>{window.open('/lectures')}}>Follow the link to access the coming lectures</Anchor> </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Call for <b>GET_INvolved Cyprus</b> FAIR/GSI - EUt+, Cyprus 2022 to be announced soon</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>EUt+ stands for “European University of Technology”, a joint project between h_da and seven partner universities throughout the whole of Europe. The European Commission is supporting the alliance in the framework of the European Universities Initiative, which aims to strengthen the European Education Area (EEA). Step by step, the universities want to grow closer together. EUt+ helps students to spend part of their studies at one of the partner universities. It is also increasing staff mobility as well as the number and volume of joint research projects. The European University of Technology unites 100,000 students and 12,000 staff. The participating institutions are connected by their shared focus on technologies that centre on human and environmental needs.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the University" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>An applied sciences research-orientated university, promoting research excellence and innovation for the benefit of science and society. Recently developed strategic plan gives emphasis on campus life, student experience and sustainable development within the 17 UNSDG’s framework.</Text>
            <br/>
            <Text>CUT is young, public university, established in 2004, first outside the capital city, attracted high-caliber researchers and students.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>EUT+:</Text>
            <Text>Dr Jorge Medina</Text>
            <Text>EUt+ Coordinator</Text>
            <Anchor  onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=coordinator-eutplus@h-da.de')}}>coordinator-eutplus@h-da.de</Anchor>
            <br/>
            <Anchor onClick={()=>{window.open('https://www.cut.ac.cy/?languageId=1')}}>Cyprus University of Technology</Anchor>
            <Anchor onClick={()=>{window.open('https://univ-tech.eu/')}}>European University of Technology</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='Czech Republic') ? 
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>Czechia 🇨🇿</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto'>
            <Accordion>
            <AccordionPanel label="GET_INvolved Programme under the ERASMUS+ umbrella programme of the European Union." style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Erasmus+ is the EU's programme to foster education, training, youth and sport in Europe. Erasmus+ supports, for example, traineeships and internships abroad for students currently enrolled in higher education institutions in programme countries at Bachelor and Master level as well as for doctoral candidates. These opportunities are also open to recent graduates.
                <br/>
                <br/>
                Please look at our <Anchor href='erasmusplus'>GET_INvolved Erasmus+ Traineeship Programme</Anchor> page for more information on the process.
                <br/>
                <br/>
                So far, the Charles University Prague agreed to list GSI/FAIR as receiving organization for their students participating into the Erasmus+ scholarship programme. More information about the <Anchor onClick={()=>{window.open('https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/traineeships-for-students-abroad')}}>Erasmus+ traineeships.</Anchor>             
                 <br/>
            </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Calls and Application:" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Applications can be sent at any time, there is no specific deadline.</Text>
            <br/>
            <Text>&emsp;<b>1.</b> In a first step, interestented students should transmit their application for the GET_INvolved programme.</Text>
            <Text>&emsp;<b>2.</b> After getting feedback from GSI/FAIR International Office (IO), the candidate should contact the university’s international office (addresses see below) for the Erasmus+ Learning Agreement (Student Mobility for Traineeships), which is a formal agreement between the sending and the receiving organziation.</Text>
            <Text>&emsp;<b>3.</b> Then, the candidate should submit the Learning Agreement, approved by the university’s Erasmus+ office, for final acceptance by GSI/FAIR IO.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text >Charles University</Text>
            <Text >Founded in 1348, Charles University (50,000 students, 17 faculties) is one of the oldest universities in the world and the largest, most renowned and best-rated Czech university.</Text>
            <Text ><Anchor onClick={()=>{window.open('https://cuni.cz/UKEN-49.html')}}>Information about Erasmus+ at Charles University</Anchor></Text>

            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>Charles University Prague:</Text>
            <Text>Dr. Andrej Kugler</Text>
            <Text>EUt+ Coordinator</Text>
            <Anchor  onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kugler(at)ujf.cas.cz')}}>kugler(at)ujf.cas.cz</Anchor>
            <br/>
            <Anchor onClick={()=>{window.open('https://cuni.cz/uken-1.html')}}>Charles University</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='France') ?  
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>France 🇫🇷</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto'>
            <Accordion>
            <AccordionPanel label="Programme with EUt+, Troyes, France" style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Up to ten students and doctoral candidates per year will profit from this new partnership: in the framework of short-term internships or research visits lasting several years, they will be able to learn and work in the pioneering research environment at GSI/FAIR, which will, among others, nominate mentors for them and help them, if required, to find accommodation for the duration of their stay. The participants of the programme can also take part in GSI/FAIR events. These include symposia and lectures as well as the GSI’s summer programme for students.
                <br/>
                <br/>
                The partners will form a joint jury for the selection procedure. Internships can last between three and six months and require at least a bachelor’s degree. Applicants for research visits must hold a master’s degree, be a doctoral candidate or produce evidence of at least two years’ research experience. Such visits can last up to two years.
                <br/>
                <br/>
                More information:
                <br/>
            </Text>
            <Text>&emsp;<b>1.</b> Obligatory Internships (Individual application possible) → <Anchor href='/internship'>GET_INvolved Short-Term Internships</Anchor></Text>
            <Text>&emsp;<b>2.</b> Erasmus+ Traineeships (Individual application possible) → <Anchor href='/erasmusplus'>GET_INvolved ERASMUS+ Traineeships</Anchor></Text>
            <Text>&emsp;<b>3.</b> Study Tours (application via Coordinator) → Contact the <Anchor href='contacts'>Programme Manager</Anchor> via email</Text>
            <Text>&emsp;<b>4.</b> Access to Lectures →  <Anchor  onClick={()=>{window.open('/lectures')}}>Follow the link to access the coming lectures</Anchor> </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Call for <b>GET_INvolved France</b> FAIR/GSI - EUt+, France 2022 to be announced soon</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text >EUt+ stands for “European University of Technology”, a joint project between h_da and seven partner universities throughout the whole of Europe. The European Commission is supporting the alliance in the framework of the European Universities Initiative, which aims to strengthen the European Education Area (EEA). Step by step, the universities want to grow closer together. EUt+ helps students to spend part of their studies at one of the partner universities. It is also increasing staff mobility as well as the number and volume of joint research projects. The European University of Technology unites 100,000 students and 12,000 staff. The participating institutions are connected by their shared focus on technologies that centre on human and environmental needs.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the University" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>The Université de technologie de Troyes is a public institution awarding degrees mainly in technology and engineering from bachelor to PhD and longlife learning. It carries out coherently the missions of higher education, research and transfer of technology. UTT was established in 1995 in the south of the Champagne county (now Région Grand Est). The university's main building reveals a futuristic elliptic-shaped facility that includes first rate equipment. The campus is located next to a sports complex, at the heart of the "Technopole de l'Aube en Champagne", less than five kilometers from the city center.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>EUT+:</Text>
            <Text>Dr Jorge Medina</Text>
            <Text>EUt+ Coordinator</Text>
            <br/>
            <Anchor onClick={()=>{window.open('https://www.utt.fr/')}}>Université de technologie de Troyes</Anchor>
            <Anchor onClick={()=>{window.open('https://univ-tech.eu/')}}>European University of Technology</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='Germany') ?  
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>Germany 🇩🇪</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto'>
            <Accordion>
            <AccordionPanel label="Programme with Darmstadt Univesity of Applied Science Darmstadt, Germany, a Member of EUt+ Alliance." style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Up to ten students and doctoral candidates per year will profit from this new partnership: in the framework of short-term internships or research visits lasting several years, they will be able to learn and work in the pioneering research environment at GSI/FAIR, which will, among others, nominate mentors for them and help them, if required, to find accommodation for the duration of their stay. The participants of the programme can also take part in GSI/FAIR events. These include symposia and lectures as well as the GSI’s summer programme for students.
                <br/>
                <br/>
                The partners will form a joint jury for the selection procedure. Internships can last between three and six months and require at least a bachelor’s degree. Applicants for research visits must hold a master’s degree, be a doctoral candidate or produce evidence of at least two years’ research experience. Such visits can last up to two years.
                <br/>
                <br/>
                More information:
                <br/>
            </Text>
            <Text>&emsp;<b>1.</b> Obligatory Internships (Individual application possible) → <Anchor href='/internship'>GET_INvolved Short-Term Internships</Anchor></Text>
            <Text>&emsp;<b>2.</b> Erasmus+ Traineeships (Individual application possible) → <Anchor href='/erasmusplus'>GET_INvolved ERASMUS+ Traineeships</Anchor></Text>
            <Text>&emsp;<b>3.</b> Study Tours (application via Coordinator) → Contact the <Anchor href='contacts'>Programme Manager</Anchor> via email</Text>
            <Text>&emsp;<b>4.</b> Access to Lectures →  <Anchor  onClick={()=>{window.open('/lectures')}}>Follow the link to access the coming lectures</Anchor> </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Call for <b>GET_INvolved Germany</b> FAIR/GSI - EUt+, Germany 2022 to be announced soon</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="News and Media" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>04 April 2022 Partnership agreement signed.</Text>
            <Anchor onClick={()=>{window.open('https://www.gsi.de/en/start/news/details/2022/04/05/hochschule-darmstadt-eut-plus-und-gsi-fair-arbeiten-enger-zusammen')}}>Closer cooperation between Darmstadt University of Applied Sciences, EUt+ and GSI/FAIR</Anchor>
            <Text>Echo: <Anchor onClick={()=>{window.open('https://www.echo-online.de/lokales/darmstadt/hochschule-darmstadt-und-gsi-bauen-forschungskooperation-aus_25467482')}}>Hochschule Darmstadt und GSI bauen Forschungskooperation aus</Anchor></Text>
            <Text>IDW: <Anchor onClick={()=>{window.open('https://nachrichten.idw-online.de/2022/04/05/hochschule-darmstadt-eut-und-gsi-fair-arbeiten-enger-zusammen/?groupcolor=6')}}>Hochschule Darmstadt, EUt+ und GSI/FAIR arbeiten enger zusammen</Anchor></Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text >EUt+ stands for “European University of Technology”, a joint project between h_da and seven partner universities throughout the whole of Europe. The European Commission is supporting the alliance in the framework of the European Universities Initiative, which aims to strengthen the European Education Area (EEA). Step by step, the universities want to grow closer together. EUt+ helps students to spend part of their studies at one of the partner universities. It is also increasing staff mobility as well as the number and volume of joint research projects. The European University of Technology unites 100,000 students and 12,000 staff. The participating institutions are connected by their shared focus on technologies that centre on human and environmental needs.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the University" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>The h_da has a unique spectrum of STEM, economic and social sciences as well as artistic and creative subjects. Our broad applied sciences scope in addition to the inter- and transdisciplinary work enable us to identify and analize current and future social challenges and develop adequate solutions. Fusing several well established higher education institutions (some as old as 1843) h_da was founded in 1971 under the name FHD- Fachhochschule Darmstadt and renamed in 2006 as h_da - Darmstadt University of Applied Sciences.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>EUT+:</Text>
            <Text>Dr Jorge Medina</Text>
            <Text>EUt+ Coordinator</Text>
            <br/>
            <Anchor onClick={()=>{window.open('https://h-da.de/en/')}}>Darmstadt University of Applied Sciences</Anchor>
            <Anchor onClick={()=>{window.open('https://univ-tech.eu/')}}>European University of Technology</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='India') ?  
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>India 🇮🇳</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
<Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
            <br/>
            <Box overflow='auto'>
            <Text color='grey' style={{fontWeight:'bolder'}}>Within the GET_INvolved INDIA we have dedicated partner programme from Mody University of Science and Technology (MUST) Rajasthan and Amity University, Uttar Pradesh. More information about each programme is listed below.</Text><br/>
            <br/>
            <Accordion>
            <AccordionPanel label="GET_INvolved MUST, India" style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="&emsp;&emsp;Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Based on a bilateral agreement GSI has initiated an internship, traineeship and research experience programme between GSI and Mody University of Science and Technology in Lakshmangarh, Rajasthan, India (MUST). The programme is currently limited to students enrolled in educational programmes at MUST, India.
            </Text>

            </Box>
            </AccordionPanel>
            <AccordionPanel label="&emsp;&emsp;Call for 2022" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Application deadline for 2022 will be announced soon.<br/><br/>For further information on the announcement of next call please see <Anchor href='/news'>News and Calls</Anchor> or our <Anchor onClick={()=>{window.open('https://www.linkedin.com/showcase/fair-gsi-get-involved/')}}>Linkedin-page</Anchor> or contact us directly.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="&emsp;&emsp;About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text ><Anchor onClick={()=>{window.open('http://www.modyuniversity.ac.in/')}}>Mody University of Science and Technology</Anchor>, Lakshmangarh, Rajasthan, India</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="&emsp;&emsp;Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>Amity University, India:</Text>
            <Text>Dr. R. K. Shivpuri</Text>
            <Anchor  onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=rshivpuri(at)gmail.com')}}>rshivpuri(at)gmail.com</Anchor>
            <br/>
            <Anchor onClick={()=>{window.open('http://www.modyuniversity.ac.in/')}}>Mody University of Science and Technology</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel>
            <AccordionPanel label="GET_INvolved Amity University, India" style={{ fontWeight: "bold" }}>
            <Accordion>
            <AccordionPanel label="&emsp;&emsp;Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >Based on a bilateral agreement GSI has initiated an internship, traineeship and research experience programme between GSI and Mody University of Science and Technology in Lakshmangarh, Rajasthan, India (MUST). The programme is currently limited to students enrolled in educational programmes at MUST, India.
            </Text>

            </Box>
            </AccordionPanel>
            <AccordionPanel label="&emsp;&emsp;Call for 2022" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>Application deadline for 2022 will be announced soon.<br/><br/>For further information on the announcement of next call please see <Anchor href='/news'>News and Calls</Anchor> or our <Anchor onClick={()=>{window.open('https://www.linkedin.com/showcase/fair-gsi-get-involved/')}}>Linkedin-page</Anchor> or contact us directly.</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="&emsp;&emsp;About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text ><Anchor onClick={()=>{window.open('https://www.amity.edu/index.aspx')}}>Amity University</Anchor>, Noida, Uttar Pradesh, India</Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="&emsp;&emsp;Contacts" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
            <Text>Dr. Pradeep Ghosh</Text>
            <Anchor href='/contacts'>Programme Coordinator</Anchor>
            <br/>
            <Text color='black' style={{fontWeight:'bolder'}}>Amity University, India:</Text>
            <Text>Dr. Alpana Goel</Text>
            <Text>Director & Head</Text>
            <Anchor  onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=agoel1(at)amity.edu')}}>agoel1(at)amity.edu</Anchor>
            <br/>
            <Anchor onClick={()=>{window.open('https://www.amity.edu/')}}>Amity University</Anchor>
            </Box>
            </AccordionPanel>
            </Accordion>
            </AccordionPanel> 
            </Accordion>   
            <br/>
            </Box>
            </PageContent>
            </Page> 
:  (currentCountry=='Ireland') ?          <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Ireland 🇮🇪</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Programme with EUt+, Dublin, Ireland" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Up to ten students and doctoral candidates per year will profit from this new partnership: in the framework of short-term internships or research visits lasting several years, they will be able to learn and work in the pioneering research environment at GSI/FAIR, which will, among others, nominate mentors for them and help them, if required, to find accommodation for the duration of their stay. The participants of the programme can also take part in GSI/FAIR events. These include symposia and lectures as well as the GSI’s summer programme for students.
                    <br/>
                    <br/>
                    The partners will form a joint jury for the selection procedure. Internships can last between three and six months and require at least a bachelor’s degree. Applicants for research visits must hold a master’s degree, be a doctoral candidate or produce evidence of at least two years’ research experience. Such visits can last up to two years.
                    <br/>
                    <br/>
                    More information:
                    <br/>
                </Text>
                <Text>&emsp;<b>1.</b> Obligatory Internships (Individual application possible) → <Anchor href='/internship'>GET_INvolved Short-Term Internships</Anchor></Text>
                <Text>&emsp;<b>2.</b> Erasmus+ Traineeships (Individual application possible) → <Anchor href='/erasmusplus'>GET_INvolved ERASMUS+ Traineeships</Anchor></Text>
                <Text>&emsp;<b>3.</b> Study Tours (application via Coordinator) → Contact the <Anchor href='contacts'>Programme Manager</Anchor> via email</Text>
                <Text>&emsp;<b>4.</b> Access to Lectures →  <Anchor  onClick={()=>{window.open('/lectures')}}>Follow the link to access the coming lectures</Anchor> </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Call for <b>GET_INvolved Ireland</b> FAIR/GSI - EUt+, Ireland 2022 to be announced soon</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >EUt+ stands for “European University of Technology”, a joint project between h_da and seven partner universities throughout the whole of Europe. The European Commission is supporting the alliance in the framework of the European Universities Initiative, which aims to strengthen the European Education Area (EEA). Step by step, the universities want to grow closer together. EUt+ helps students to spend part of their studies at one of the partner universities. It is also increasing staff mobility as well as the number and volume of joint research projects. The European University of Technology unites 100,000 students and 12,000 staff. The participating institutions are connected by their shared focus on technologies that centre on human and environmental needs.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the University" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>TU Dublin, the first Technological University in Ireland, was formally established on January 1st 2019, under the Technological Universities Act 2018, building on the distinguished past of Institute of Technology Blanchardstown, Dublin Institute of Technology and Institute of Technology Tallaght. With a history stretching back over one hundred and thirty years, TU Dublin is a leader in STEM disciplines; it also supports the largest cohorts of students in business, media, culinary arts, and the creative and performing arts. TU Dublin has five Faculties: Faculty of Engineering & Built Environment, Faculty of Business, Faculty of Arts & Humanities, Faculty of Science, and Faculty of Digital & Data.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>EUT+:</Text>
                <Text>Dr Jorge Medina</Text>
                <Text>EUt+ Coordinator</Text>
                <br/>
                <Anchor onClick={()=>{window.open('https://www.tudublin.ie/')}}>Technological University Dublin</Anchor>
                <Anchor onClick={()=>{window.open('https://univ-tech.eu/')}}>European University of Technology</Anchor>
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page> 
                :  (currentCountry=='Latvia') ? 
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Latvia 🇱🇻</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Programme with Riga Technical Univesity, Latvia, a Member of EUt+ Alliance." style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Up to ten students and doctoral candidates per year will profit from this new partnership: in the framework of short-term internships or research visits lasting several years, they will be able to learn and work in the pioneering research environment at GSI/FAIR, which will, among others, nominate mentors for them and help them, if required, to find accommodation for the duration of their stay. The participants of the programme can also take part in GSI/FAIR events. These include symposia and lectures as well as the GSI’s summer programme for students.
                    <br/>
                    <br/>
                    The partners will form a joint jury for the selection procedure. Internships can last between three and six months and require at least a bachelor’s degree. Applicants for research visits must hold a master’s degree, be a doctoral candidate or produce evidence of at least two years’ research experience. Such visits can last up to two years.
                    <br/>
                    <br/>
                    More information:
                    <br/>
                </Text>
                <Text>&emsp;<b>1.</b> Obligatory Internships (Individual application possible) → <Anchor href='/internship'>GET_INvolved Short-Term Internships</Anchor></Text>
                <Text>&emsp;<b>2.</b> Erasmus+ Traineeships (Individual application possible) → <Anchor href='/erasmusplus'>GET_INvolved ERASMUS+ Traineeships</Anchor></Text>
                <Text>&emsp;<b>3.</b> Study Tours (application via Coordinator) → Contact the <Anchor href='contacts'>Programme Manager</Anchor> via email</Text>
                <Text>&emsp;<b>4.</b> Access to Lectures →  <Anchor  onClick={()=>{window.open('/lectures')}}>Follow the link to access the coming lectures</Anchor> </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Call for <b>GET_INvolved Latvia</b> FAIR/GSI - EUt+, Latvia 2022 to be announced soon</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >EUt+ stands for “European University of Technology”, a joint project between h_da and seven partner universities throughout the whole of Europe. The European Commission is supporting the alliance in the framework of the European Universities Initiative, which aims to strengthen the European Education Area (EEA). Step by step, the universities want to grow closer together. EUt+ helps students to spend part of their studies at one of the partner universities. It is also increasing staff mobility as well as the number and volume of joint research projects. The European University of Technology unites 100,000 students and 12,000 staff. The participating institutions are connected by their shared focus on technologies that centre on human and environmental needs.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the University" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>RTU is a modern internationally recognized university. It is the only polytechnic university in Latvia and the largest university in the country – it educates and trains almost 15 thousand students.  RTU is focused on becoming a third generation university that not only provides high quality education, but also conducts advanced research and ensures innovation and technology transfer, practically implementing scientific discoveries. In the nine faculties of RTU it is possible to obtain high quality education not only in engineering, but also in social sciences and humanities.  Study programs implemented by RTU have been positively evaluated by international experts and are officially accredited. RTU is constantly developing its infrastructure by constructing a campus on Ķīpsala Island. On completion, the campus will be the most advanced engineering study centre in the Baltic Region.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>EUT+:</Text>
                <Text>Dr Jorge Medina</Text>
                <Text>EUt+ Coordinator</Text>
                <br/>
                <Anchor onClick={()=>{window.open('https://www.rtu.lv/en')}}>Riga Technical University</Anchor>
                <Anchor onClick={()=>{window.open('https://univ-tech.eu/')}}>European University of Technology</Anchor>
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page> 
    :           (currentCountry=='Mexico') ? 
                    <Page kind='full' >
                    <PageContent background="light-3" >
                    <Box direction='row' justify='between'>
                    <Heading level='2'>Mexico 🇲🇽</Heading>
                    <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                    <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                    <br/>
                    <Box overflow='auto'>
                    <Accordion>
                    <AccordionPanel label="Programme with CINVESTAV, Mexico" style={{ fontWeight: "bold" }}>
                    <Accordion>
                    <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                    <Box pad="small"  background="light-3">
                    <Text >Based on the bilateral MOU and successive agreement between FAIR-GSI and Centro de Investigación y de Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV) Mexico, an Internship and training program was initiated in the year 2017. The program is currently limited to students enrolled in educational programs at CINVESTAV, Mexico.
                    </Text>
                    </Box>
                    </AccordionPanel>
                    <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                    <Box  pad="small"  background="light-3">
                    <Text>2020 Call for Cinvestav-GSI-FAIR Internship Program at the Helmholtz Center for Heavy-Ion Research (GSI), Germany is now open for application. Please refer to the call document for eligibility condition, timeline and other related information. </Text>
                    <Text>&emsp;• Announcement of the call: 06th February 2020</Text>
                    <Text>&emsp;• Deadline for application: extended up to <b>30th March 2020 (23:59 CET)</b>.</Text>
                    <Text>&emsp;• Application page [opens in new window]: <Anchor onClick={()=>{window.open('http://www.gsi.de/get-involved-application')}}>www.fair-center.eu/get-involved-application</Anchor></Text>
                    <Text>&emsp;• Applicants are requested to submit their updated CV in europas CV format</Text>
                    </Box>
                    </AccordionPanel>
                    <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
                    <Box  pad="small"  background="light-3">
                    <Text >CINVESTAV is a research center created by presidential decree in 1961 as a decentralized public institution dependent on the Ministry of Education. More information on the partner CIVESTAV - CORI here: <Anchor onClick={()=>{window.open('www.cori.cinvestav.mx/en-us/')}}>www.cori.cinvestav.mx/en-us/</Anchor></Text>
                    </Box>
                    </AccordionPanel>
                    <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                    <Box  pad="small"  background="light-3">
                    <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                    <Text>Dr. Pradeep Ghosh</Text>
                    <Anchor href='/contacts'>Programme Coordinator</Anchor>
                    <br/>
                    <Text color='black' style={{fontWeight:'bolder'}}>Cinestav, Mexico:</Text>
                    <Text>Dr. Martha Espinosa Cantellano,</Text>
                    <Anchor  onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=mespinosac(at)cinvestav.mx')}}>mespinosac(at)cinvestav.mx</Anchor>
                    <br/>
                    <Anchor onClick={()=>{window.open('https://www.cinvestav.mx/')}}>Center for Research and Advanced Studies [CINVESTAV]</Anchor>
                    </Box>
                    </AccordionPanel>
                    </Accordion>
                    </AccordionPanel>
                    </Accordion>
                    <br/>
                    </Box>
                    </PageContent>
                    </Page>
    :
    (currentCountry=='Montenegro') ? 
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Montenegro 🇲🇪</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Programme with the Ministry of Science, Montenegro" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >To promote the cooperation between GSI/FAIR and the Scientific community in Montenegro a programme calls in launched. This GET_INvolved: Montenegro Programme shall mark the beginning, allowing student mobility, academic training and opportunity for young students to have the possibility to perform an internship and young research to perform research projects for 3 months at FAIR/GSI.
                </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Application deadline for 2022 will be announced soon.<br/><br/>For further information on the announcement of next call please see <Anchor href='/news'>News and Calls</Anchor> or our <Anchor onClick={()=>{window.open('https://www.linkedin.com/showcase/fair-gsi-get-involved/')}}>Linkedin-page</Anchor> or contact us directly.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >The partner for this Programme is the <Anchor onClick={()=>{window.open('http://www.mna.gov.me/en/ministry')}}>Ministry of Science of Montenegro</Anchor>.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the University" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>RTU is a modern internationally recognized university. It is the only polytechnic university in Latvia and the largest university in the country – it educates and trains almost 15 thousand students.  RTU is focused on becoming a third generation university that not only provides high quality education, but also conducts advanced research and ensures innovation and technology transfer, practically implementing scientific discoveries. In the nine faculties of RTU it is possible to obtain high quality education not only in engineering, but also in social sciences and humanities.  Study programs implemented by RTU have been positively evaluated by international experts and are officially accredited. RTU is constantly developing its infrastructure by constructing a campus on Ķīpsala Island. On completion, the campus will be the most advanced engineering study centre in the Baltic Region.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>Ministry of Science,</Text>
                <Text color='black' style={{fontWeight:'bolder'}}>Montenegro:</Text>
                <Text>Mrs. Marijeta Barjaktarovic Lanzardi</Text>
                <br/>
                <Anchor onClick={()=>{window.open('http://www.mna.gov.me/en/ministry')}}>Ministry of Science of Montenegro</Anchor>
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
                :  (currentCountry=='Poland') ? 
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Poland 🇵🇱</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="GET_INvolved Programme under the ERASMUS+ umbrella of the European Union" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Erasmus+ is the EU's programme to foster education, training, youth and sport in Europe. Erasmus+ supports, for example, traineeships and internships abroad for students currently enrolled in higher education institutions in programme countries at Bachelor and Master level as well as for doctoral candidates. These opportunities are also open to recent graduates.
                    <br/>
                    <br/>
                    More information about the <Anchor href='/erasmusplus'>Erasmus+ traineeships</Anchor>.
                    <br/>
                    <br/>
                    So far, three Polish partner universities – Warsaw University of Technology,  Wrocław University of Science and Technology, and Białystok University of Technology – agreed to list GSI/FAIR as receiving organization for their students participating into the Erasmus+ scholarship programme.                    <br/>
                </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Calls and Application:" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Applications can be sent at any time, there is no specific deadline.</Text>
                <Text>&emsp;<b>1.</b> In a first step, interestented students should transmit their application for the GET_INvolved programme.</Text>
                <Text>&emsp;<b>2.</b> After getting feedback from GSI/FAIR International Office (IO), the candidate should contact the university’s international office (addresses see below) for the Erasmus+ Learning Agreement (Student Mobility for Traineeships), which is a formal agreement between the sending and the receiving organziation.</Text>
                <Text>&emsp;<b>3.</b> Then, the candidate should submit the Learning Agreement, approved by the university’s Erasmus+ office, for final acceptance by GSI/FAIR IO.</Text>                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the Partners" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>Warsaw University of Technology (WUT)</Text>
                <Text >Founded in 1826, WUT (36,000 students, 23 faculties) is the oldest Polish university and has taken the first place for nine years in its category in the ranking of Polish universities.</Text>
                <Anchor onClick={()=>{window.open('https://www.cwm.pw.edu.pl/en/Education-programmes/Erasmus/Outgoing-students/Traineeships')}}>Information about Erasmus+ for outgoing students at WUT</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>Wrocław University of Science and Technology (WUST)</Text>
                <Text >Founded in 1945 when inheriting the tangible property of Königliche Technische Hochschule Breslau, today WUST is one of the biggest and most renowned technical universities of Poland with 16 faculties and 27,000 students.</Text>
                <Anchor onClick={()=>{window.open('http://dsm.pwr.edu.pl/en/international-students/exchange-erasmus/outgoing/student-exchange-programme-for-outgoing-students')}}>Information about Erasmus# for outgoing students at WUST</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>Białystok University of Technology (BUT)</Text>
                <Text >Established in 1949, BUT now has 8,500 students and 7 departments. BUT is internationally well connected and established more than 260 Erasmus+ bilateral agreements and 13 double-degree agreements.</Text>
                <Anchor onClick={()=>{window.open('http://iro.pb.edu.pl/iro')}}>Contact to BUT International Relations Office</Anchor>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>WUT, Poland:</Text>
                <Anchor onClick={()=>{window.open('https://www.cwm.pw.edu.pl/en')}}>Centre for International Cooperation</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>WUT, Poland:</Text>
                <Anchor onClick={()=>{window.open('http://dsm.pwr.edu.pl/en/contact')}}>Office of International Affairs</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>WUT, Poland:</Text>
                <Anchor onClick={()=>{window.open('http://iro.pb.edu.pl/iro')}}>International Relations Office</Anchor>
                <br/>
                <Anchor onClick={()=>{window.open('https://www.pw.edu.pl/engpw')}}>Warsaw University of Technology</Anchor>
                <Anchor onClick={()=>{window.open('http://pwr.edu.pl/en/')}}>Wrocław University of Science and Technology</Anchor>
                <Anchor onClick={()=>{window.open('https://pb.edu.pl/en/')}}>Białystok University of Technology</Anchor>

                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
                :  (currentCountry=='Romania') ? 
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Romania 🇷🇴</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Text color='grey' style={{fontWeight:'bolder'}}>Within the GET_INvolved Romania we have dedicated partner programme under ERASMUS+ umbrella and with the Universitatea Tehnică din Cluj-Napoca (with in EZt+ Programme). More information about each programme is listed below.</Text><br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="GET_INvolved Romania - ERASMUS+" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Erasmus+ is the EU's programme to foster education, training, youth and sport in Europe. Erasmus+ supports, for example, traineeships and internships abroad for students currently enrolled in higher education institutions in programme countries at Bachelor and Master level as well as for doctoral candidates. These opportunities are also open to recent graduates.
                    <br/>
                    <br/>
                    More information about the <Anchor href='/erasmusplus'>Erasmus+ traineeships</Anchor>.
                    <br/>
                    <br/>
                    So far, one Romanian partner university – University of Bucharest – agreed to list GSI/FAIR as receiving organization for their students participating into the Erasmus+ scholarship programme.
                </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Calls and Application:" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Applications can be sent at any time, there is no specific deadline.</Text>
                <Text>&emsp;<b>1.</b> In a first step, interestented students should transmit their application for the GET_INvolved programme.</Text>
                <Text>&emsp;<b>2.</b> After getting feedback from GSI/FAIR International Office (IO), the candidate should contact the university’s international office (addresses see below) for the Erasmus+ Learning Agreement (Student Mobility for Traineeships), which is a formal agreement between the sending and the receiving organziation.</Text>
                <Text>&emsp;<b>3.</b> Then, the candidate should submit the Learning Agreement, approved by the university’s Erasmus+ office, for final acceptance by GSI/FAIR IO.</Text>                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >The University of Bucharest (32,000 students and 20 faculties and departments) was founded in 1864. Together with 7 European universities it joined forces to build a European Academic Alliance called CIVIS which is supported by Erasmus+.</Text>
                <Text>Information about <Anchor onClick={()=>{window.open('https://unibuc.ro/international/programul-erasmus/?lang=en')}}>ERASMUS+ at University of Bucharest.</Anchor></Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>University of Bucharest, Romania:</Text>
                <Anchor onClick={()=>{window.open('https://unibuc.ro/international/programul-erasmus/despre-programul-erasmus/?lang=en')}}>Erasmus+ Office</Anchor>
                <br/>
                <Anchor onClick={()=>{window.open('https://unibuc.ro/?lang=en')}}>University of Bucharest</Anchor>

                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                <AccordionPanel label="GET_INvolved Romania - EUt+ Programme" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >EUt+ stands for “European University of Technology”, a joint project between h_da and seven partner universities throughout the whole of Europe. The European Commission is supporting the alliance in the framework of the European Universities Initiative, which aims to strengthen the European Education Area (EEA). Step by step, the universities want to grow closer together. EUt+ helps students to spend part of their studies at one of the partner universities. It is also increasing staff mobility as well as the number and volume of joint research projects. The European University of Technology unites 100,000 students and 12,000 staff. The participating institutions are connected by their shared focus on technologies that centre on human and environmental needs.
                </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Calls and Application:" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Call for <b>GET_INvolved Romania</b> FAIR/GSI - EUt+, Romania 2022 to be announced soon</Text>
               </Box>
                </AccordionPanel>
                <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >A modern, diverse and complex HE institution with a well-defined identity, actively involved in the local, regional and national ecosystem, recognized and appreciated as a provider of high quality of education, research, artistic creation, technology transfer and innovation.</Text>
                <Text>TUCN offers a wide range of subjects, from engineering to architecture, fundamental sciences, social sciences and arts, at Bachelor, Master and PhD level.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>University Cluj-Napoca:</Text>
                <Text>For out going: <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=andreea.popa@staff.utcluj.ro')}}>Andreea Popa</Anchor></Text>
                <Text>For incoming students: <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=Ludmila.LUTENCU@staff.utcluj.ro')}}>Ludmila Lutencu</Anchor></Text>
                <br/>
                <Anchor onClick={()=>{window.open('https://www.utcluj.ro/')}}>Universitatea Tehnică din Cluj-Napoca</Anchor>
                <Anchor onClick={()=>{window.open('European University of Technology')}}>European University of Technology</Anchor>
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
                : (currentCountry=='Russia') ? 
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Russia 🇷🇺</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Text color='grey' style={{fontWeight:'bolder'}}>Within the GET_INvolved Romania we have dedicated partner programme under ERASMUS+ umbrella and with the Universitatea Tehnică din Cluj-Napoca (with in EZt+ Programme). More information about each programme is listed below.</Text><br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Programme with DAAD" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Within the GET_INvolved Russia, we have a dedicated partner Programme from DAAD under Young Talents Programme for short Line B and long term Line A stays for students (natural science and engineering), recent graduates and researchers. More information about each Programme is listed below. The projects can be performed at GSI/FAIR (Darmstadt) or Institutes in Jena (HIJ) and Mainz (HIM).
                    <br/>
                    <br/>
                    In 2021, GSI/FAIR attracted 14 young researchers to perform their research projects with senior researchers in the last call. Most of them participated in the ongoing FAIR Phase0 Programme with beam time at GSI.                    <br/>
                    <br/>
                    <i>IMPORTANT</i>: The candidates who received funding from DAAD YTP in 2021 are allowed to submit again.
                    </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Overview of Young Talents Programme" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>The "Young Talents Programme" is intended to contribute to the expansion of German-Russian academic exchange in the field of large-scale research. Especially talented young researchers from Russia, also beyond already established.</Text>
                <Accordion>
                <AccordionPanel label="Programme Goal" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Outstanding young Russian scientists, graduates and students have the opportunity to do a short research stay at one of the large research facilities of the MLZ / FZJ and GSI / FAIR on an innovative research topic as part of a DAAD scholarship.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Who is eligible?" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Highly qualified Russian postdocs, doctoral students, graduates (including engineers) and MA students. Applicants must be enrolled or working at a Russian university, a non-university research institution or an institute of the Academy of Sciences (AdW).</Text>
                <Text>&emsp;• DAAD Young Talents Programme Line A [Call open until April 01, 2022]</Text>
                <Text>&emsp;• DAAD Young Talents Programme Line B [Call open until April 01, 2022]</Text>                
                </Box>
                </AccordionPanel>
                <AccordionPanel label="DAAD Young Talents Programme Line A" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>What is funded?</Text>
                <Text>A scientific research project carried out in coordination with a scientific supervisor at a large-scale research facility of the research institutes listed below:</Text>
                <Text>&emsp;<b>1.</b> GSI Helmholtzzentrum für Schwerionenforschung, Planckstr. 1, 64291 Darmstadt</Text>
                <Text>&emsp;<b>2.</b> Helmholtz-Institut Mainz, Staudingerweg 18, 55128 Mainz</Text>
                <Text>&emsp;<b>3.</b> Helmholtz Institut Jena, Fröbelstieg 3, 07743 Jena</Text> 
                <br/>
                <Text>&emsp;• Duration of stay: 1-9 months</Text>
                <Text>&emsp;• Application and selection process: see programme page</Text>
                <Text>&emsp;• Deadline: 01 April, 2022</Text> 
                <Text>&emsp;• Category: Postdocs, PhD Students, Graduates (incl. Engineers) and Master students.</Text>             
                <Text>&emsp;• Scholarship: monthly award, depending on the level of training + Health, accident and liability insurance benefits+ Grant for travel expenses</Text>             
                <Text>&emsp;&emsp;• 1200 EUR for doctoral students, graduates and MA students;</Text>
                <Text>&emsp;&emsp;• 2150 EUR for postdocs</Text>                          
                <Text>&emsp;• Start date: The first stay must take place in the period from 1 August 2022 to 31 January 2023.</Text>             
                <Text>&emsp;• Programme page: <Anchor onClick={()=>{window.open('http://daad.de/go/en/stipa57584847')}}>Click here</Anchor> (in English), <Anchor onClick={()=>{window.open('https://www.daad.ru/ru/stipendien/molodye-talanty-a/')}}>Click here</Anchor> (in Russian), <Anchor onClick={()=>{window.open('http://daad.de/go/de/stipa57584847')}}>Click here</Anchor> (in German)</Text>             
            
                </Box>
                </AccordionPanel>
                <AccordionPanel label="DAAD Young Talents Programme Line B" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>What is funded?</Text>
                <Text>&emsp;<b>1.</b> Summer/Winter schools: Highly qualified Russian postdocs, doctoral students, graduates (including engineers) and MA students. (Please contact Programme Coordinator for more information on Summer and Winter Schools at GSI and its Institutes)t</Text>
                <Text>&emsp;<b>2.</b> Short stays: Highly qualified Russian postdocs, doctoral students, graduates (including engineers).</Text>
                <br/>
                <Text>&emsp;• Duration of stay: 1-4 weeks</Text>
                <Text>&emsp;• Application and selection process: see programme page</Text>
                <Text>&emsp;• Funding includes: Flat rate for accommodation and meals + Health, accident and liability insurance benefits + Contribution to the international travel costs (Russia-Germany) + Participation fee flat rate</Text>
                <Text>&emsp;• Category: Postdocs, PhD Students, Graduates (incl. Engineers) and Master students.</Text>             
                <Text>&emsp;• Programme page: <Anchor onClick={()=>{window.open('http://daad.de/go/en/stipa57584849')}}>Click here</Anchor> (in English), <Anchor onClick={()=>{window.open('https://www.daad.ru/ru/stipendien/molodye-talanty-b/')}}>Click here</Anchor> (in Russian), <Anchor onClick={()=>{window.open('http://daad.de/go/de/stipa57584849')}}>Click here</Anchor> (in German)</Text>             
                <Text>&emsp;• Applications submitted by Young Talents Programme Line A grantees are highly appreciated.</Text>                          
                </Box>
                </AccordionPanel>
                </Accordion>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="More about the Partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >The German Academic Exchange Service, or DAAD is the world’s largest funding organisation for the international exchange of students and researchers. More information at their <Anchor onClick={()=>{window.open('https://www.daad.de/en/study-and-research-in-germany/scholarships/')}}>official webpage</Anchor>.</Text>
                <Text>Information about <Anchor onClick={()=>{window.open('https://unibuc.ro/international/programul-erasmus/?lang=en')}}>ERASMUS+ at University of Bucharest.</Anchor></Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>Partner (DAAD):</Text>
                <Text>Programme YTP (Line A and Line B)</Text>
                <Text>DAAD, ST22 /DAAD's Moscow office:</Text>
                <Text>Elena Schmid</Text>
                <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=e.schmidt@daad.de')}}>e.schmidt(at)daad.de</Anchor>

                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
                : (currentCountry=='South Africa') ? 
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>South Africa 🇿🇦</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Programme with iThemba LABS" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Based on the tri-lateral agreement between GSI, FAIR and iThemba LABS, an internship and training programme was initiated in 2019. The programme is open for South African students who hold a bachelor degree (internship) or a master degree with at least 2 years of research experience in the field (training). The students and researchers will stay between 3 and 6 month on GSI/FAIR campus. iThemba LABS will cover local and travel expenses as well as insurances (health and liability).
                    </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>GET_Involved: South Africa SAINTS/iThemba LABS Programme 2022 is open and call for application from eligible candidates.</Text>
                <br/>
                <Text><b>27 Jan 2022: Call opens (see scope, eligiblity, instruction, timeline and selection process)</b></Text>
                <Text><b>25 Feb 2022: Deadline for submission of application</b></Text>
                <br/>
                <Text><b>Download the Call for Application : <Anchor onClick={()=>{window.open('https://fair-center.eu/fileadmin/FAIR/departments/getinvolved/images/countries/south_africa/2022_Call_GET_INvolved-SAINTS-GSI-FAIR_20220126.pdf')}}>(click here)</Anchor></b></Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Objectives and Scope" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>This program offers iThemba LABS graduates, PhD students and researchers the possibility to participate in the Internship and Research Programme offered at the Facility for Antiproton and Ion Research in Europe Darmstadt, Germany. The selected candidates will have a unique opportunity to work on a specific project during an internship and research stay with one GSI/FAIR researcher during their stay.</Text>
                <br/><Text>&emsp;&emsp;• Offer an opportunity to the young students and early stage researchers from iThemba LABS to be part of the International Project FAIR by performing internships and gain first hand research experience.</Text>
                <Text>&emsp;&emsp;• Creating synergies between iThemba LABS and GSI/FAIR by allowing mobility opportunities for students and researchers and contributing to the research and development project.</Text>
                <Text>&emsp;&emsp;• Building capacities for research groups at GSI/FAIR and iThemba LABS that are already collaborating to allow mobility of students and researchers to be more effective within the framework of the project.</Text>
                <br/><Text><b>The GET_INvolved iThemba LABS Programme offers opportunities for a maximum of three (3) candidates. The research stay will be up to 6 months. This internship will take place at GSI/FAIR Darmstadt, Germany.</b></Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Topics" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>GSI-FAIR offers projects associated with the list of topics given at the link:  <Anchor href='/subjects'>https://fair-center.eu/career/get_involved/subjects</Anchor></Text>
                <br/><Text>The following high-priority research areas for iThemba LABS have been identified for 2022:</Text>
                <Text>&emsp;&emsp;• <b>Application-Oriented Research</b>:  materials science, radiobiology</Text>
                <Text>&emsp;&emsp;• <b>Services, Developments and New Technologies</b>: detector development, accelerator physics</Text>
                <br/><Text><b>The GET_INvolved iThemba LABS Programme offers opportunities for a maximum of three (3) candidates. The research stay will be up to 6 months. This internship will take place at GSI/FAIR Darmstadt, Germany.</b></Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Timeline" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>&emsp;&emsp;• 27 Jan 2022 &emsp;&emsp; Publication of the call </Text>
                <Text>&emsp;&emsp;• 25 Feb 2022 &emsp;&emsp; Deadline for candidate application at Programme Coordinator SAINTS (iThemba LABS), South Africa and Submission of the required documents  </Text>
                <Text>&emsp;&emsp;• 01 Mar 2022 &emsp;&emsp; Announcement: First stage selection of qualified candidates     </Text>
                <Text>&emsp;&emsp;• 02 Mar 2022 &emsp;&emsp; Second stage: Interviews of qualified conducted in English language </Text>
                <Text>&emsp;&emsp;• 14 Mar 2022 &emsp;&emsp; Announcement: Publication of selected candidates </Text>
                <Text>&emsp;&emsp;• 14 Mar 2022 &emsp;&emsp; Invitation letters will be sent to selected candidates </Text>
                <Text>&emsp;&emsp;• 15 April 2022 onwards &emsp;&emsp; Project start for Internship and Research Programme  </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Eligibility requirements" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >In order to receive financial support under this Call for Internship and Research programme the candidates must satisfy following conditions.</Text>
                <Text >To be enrolled in a graduate or research programme in the areas of exact and Natural Sciences, Biological and Health Sciences or Technology and/or Engineering Sciences at iThemba LABS.</Text>
                <Text>&emsp;<b>1.</b> Initial candidate registration at iThemba LABS SAINTS Office. </Text>
                <Text>&emsp;<b>2.</b> Follow the application procedure from GSI/FAIR as provided at the application page (<Anchor onClick={()=>{window.open('http://www.fair-center.eu/get-involved-application')}}>www.fair-center.eu/get-involved-application</Anchor>). Please choose iThemba LABS programme.</Text>
                <Text>&emsp;<b>3.</b> Helmholtz Institut Jena, Fröbelstieg 3, 07743 Jena</Text>                 
                <br/>
                <Text>&emsp;<b>1.</b> Curriculum vitae. </Text>
                <Text>&emsp;<b>2.</b> Transcripts of educational qualifications (in the English language). </Text>
                <Text>&emsp;<b>3.</b> A motivation letter stating their interest in pursuing the GSI/FAIR Germany research work. </Text>
                <Text>&emsp;<b>4.</b> Support Letter from the Head of the Department and the thesis supervisor (if relevant), addressed to Programme Coordinator (Dr. Pradeep Ghosh). </Text>
                <Text>&emsp;<b>5.</b> Travel document or Passport </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Selection process" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text >The selection process shall include three stages:</Text>
                <Text color='black' style={{fontWeight:'bolder'}}>First stage: (registration)</Text>
                <Text>&emsp;<b>1.</b> Candidates must liaise and register with the iThemba LABS SAINTS Office to be included in the selection process.</Text>
                <Text>&emsp;<b>2.</b> The candidates will have to be first submit all relevant documents as mentioned in the call for being eligible to be in the process. The list of documents to be submitted is prescribed in the section “Eligibility requirements” (see above)</Text>
                <Text>&emsp;<b>3.</b> The Programme Coordinator will announce the selected candidates after they have qualified for the second stage. </Text>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>Second Stage: (Selection)</Text>
                <Text>&emsp;<b>1.</b> The selected student will receive the scholarship certificate from the iThemba LABS. This document will include the following information: during the GET_INvolved IThemba LABS Programme</Text>
                <Text>&emsp;<b>2.</b> This interview intends to measure ease of communication and knowledge in the area of application. Up to three candidates will be selected.</Text>
                <Text>&emsp;<b>3.</b> The programme coordinator will announce the final selected candidates who will receive a scholarship for pursuing their Internship at FAIR/GSI. </Text>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>Third stage: (Invitation and Project)</Text>
                <Text>&emsp;<b>1.</b> An International selection committee for this Programme will interview and assess the candidates selected in the previous stage.</Text>
                <Text>&emsp;&emsp;&emsp;• Financial support (including accommodation daily allowance and health and liability insurances)</Text>
                <Text>&emsp;&emsp;&emsp;• Travel support (to and fro) cost from SAINTS/iThemba LABS South Africa</Text>
                <Text>&emsp;<b>2.</b> The awarded students will be provided an invitation letter to apply the VISA for the duration of stay in Germany.</Text>
                <Text>&emsp;<b>3.</b> The awarded student will be granted the following during the stay in Germany: </Text>
                <Text>&emsp;&emsp;&emsp;• Supervision/mentoring of the student/researcher during their stay</Text>
                <Text>&emsp;&emsp;&emsp;• One scientific project within one of the GSI/FAIR research topics</Text>
                <Text>&emsp;&emsp;&emsp;• Office space and access to equipment necessary for project realization</Text>
                <Text>&emsp;&emsp;&emsp;• Administrative support during the stay</Text>
                <Text>&emsp;&emsp;&emsp;• Lodging in the GSI guest house (if available)</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">

                <Text>For more information or details, please contact via Email or telephone the office of International students and researchers in FAIR/GSI Germany or the office of SAINTS at iThemba LABS.</Text>
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>iThema LABS, South Africa:</Text>
                <Text>PDr. Rudzani Nemutudi</Text>
                <Text>SAINTS Programme Director</Text>
                <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=saints@tlabs.ac.zae')}}>saints(at)tlabs.ac.za</Anchor>
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
                : (currentCountry=='Spain') ?
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Spain 🇪🇸</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Programme with EUt+, Cartagena, Spain" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Up to ten students and doctoral candidates per year will profit from this new partnership: in the framework of short-term internships or research visits lasting several years, they will be able to learn and work in the pioneering research environment at GSI/FAIR, which will, among others, nominate mentors for them and help them, if required, to find accommodation for the duration of their stay. The participants of the programme can also take part in GSI/FAIR events. These include symposia and lectures as well as the GSI’s summer programme for students.
                      <br/>
                      <br/>
                      The partners will form a joint jury for the selection procedure. Internships can last between three and six months and require at least a bachelor’s degree. Applicants for research visits must hold a master’s degree, be a doctoral candidate or produce evidence of at least two years’ research experience. Such visits can last up to two years.
                      <br/>
                      <br/>
                      More information:
                      <br/>
                    </Text>
                    <Text>&emsp;<b>1.</b> Obligatory Internships (Individual application possible) → <Anchor href='/internship'>GET_INvolved Short-Term Internships</Anchor></Text>
                <Text>&emsp;<b>2.</b> Erasmus+ Traineeships (Individual application possible) → <Anchor href='/erasmusplus'>GET_INvolved ERASMUS+ Traineeships</Anchor></Text>
                <Text>&emsp;<b>3.</b> Study Tours (application via Coordinator) → Contact the <Anchor href='contacts'>Programme Manager</Anchor> via email</Text>
                <Text>&emsp;<b>4.</b> Access to Lectures →  <Anchor  onClick={()=>{window.open('/lectures')}}>Follow the link to access the coming lectures</Anchor> </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Call for <b>GET_INvolved Spain</b> FAIR/GSI - EUt+, Spain 2022 to be announced soon </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>EUt+ stands for “European University of Technology”, a joint project between h_da and seven partner universities throughout the whole of Europe. The European Commission is supporting the alliance in the framework of the European Universities Initiative, which aims to strengthen the European Education Area (EEA). Step by step, the universities want to grow closer together. EUt+ helps students to spend part of their studies at one of the partner universities. It is also increasing staff mobility as well as the number and volume of joint research projects. The European University of Technology unites 100,000 students and 12,000 staff. The participating institutions are connected by their shared focus on technologies that centre on human and environmental needs.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the University" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>The Technical University of Cartagena is a technological university in the region of Murcia featuring degrees in multiple fields of engineering, architecture, economy and tourism.</Text>
                <Text>Key figures</Text>
                <Text>&emsp;&emsp;• 308 Phd </Text>
                <Text>&emsp;&emsp;• 612 Master  </Text>
                <Text>&emsp;&emsp;• 4,476 Bachelor</Text>
                <Text>&emsp;&emsp;• 128 Researchers</Text>
                <Text>&emsp;&emsp;• 576 Teaching & Research Staff</Text>
                <Text>&emsp;&emsp;• 368 Administration Staff </Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>UPCT, Cartagena, Spain:</Text>
                <Text>ERASMUS+ Trainership officer</Text>
                <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=Tati.Portela@upct.es')}}>Tati Portela</Anchor>
                <Text>Technical Coordinator</Text>
                <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=jose.abad@upct.es')}}>jose.abad(at)upct.es</Anchor>
               <br/>
               <Anchor onClick={()=>{window.open('https://www.upct.es/')}}>Universidad Politécnica de Cartagena</Anchor>
                <Anchor onClick={()=>{window.open('European University of Technology')}}>European University of Technology</Anchor>
               
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
                : (currentCountry=='Thailand') ?
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>Thailand 🇹🇭</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Bilateral cooperation between FAIR/GSI and Suranaree University of Technology, Thailand (SUT)" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Based on a bilateral agreement GSI has initiated an internship, traineeship and research experience programme between GSI and the Suranaree University of Technology (SUT). The programme is currently limited to students enrolled in educational programmes at SUT, Thailand.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Application deadline for 2022 will be announced soon.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}>SUT, Thailand:</Text>
                <Text>Dr. Chinorat Kobdaj,</Text>
                <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kobdaj@g.sut.ac.th')}}>kobdaj(at)g.sut.ac.th</Anchor>
               <br/>
               <Anchor onClick={()=>{window.open('http://www.sut.ac.th/2012/en/')}}>Suranaree University of Technology</Anchor>         
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
              : (currentCountry=='United Kingdom') ?
              <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='2'>United Kingdom 🇬🇧</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'>    <Button onClick={function(){window.open('http://www.gsi.de/get-involved-application')}} alignSelf='center' margin={{right:'large'}} size='medium' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Apply for a programme'></Button>
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>
                <br/>
                <Box overflow='auto'>
                <Accordion>
                <AccordionPanel label="Bilateral cooperation between FAIR/GSI and University of Liverpool and the University of York" style={{ fontWeight: "bold" }}>
                <Accordion>
                <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
                <Box pad="small"  background="light-3">
                <Text >Based on a bilateral agreement GSI has initiated an internship, traineeship and research experience programme between GSI and the University of Liverpool and the University of York. The programmes are currently limited to students enrolled in educational programmes at University of Liverpool or York.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Call for 2022" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text>Call for <b>GET_INvolved UK FAIR/GSI 2022</b> to be announced soon</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}><Anchor onClick={()=>{window.open('https://www.liverpool.ac.uk/')}}>University of Liverpool</Anchor></Text>
                <Text>Associated with nine Nobel Laureates, the University is recognised for its high-quality teaching and research. Our research collaborations extend worldwide and address many of the grand challenges facing mankind today. There aim is a Teaching delivered by leading experts. There are around 22,000+ students on campus actual.</Text>
                <br/>
                <Text color='black' style={{fontWeight:'bolder'}}><Anchor onClick={()=>{window.open('https://www.york.ac.uk/')}}>University of York</Anchor></Text>
                <Text>A member of the prestigious Russell Group, we are a dynamic, research-intensive university.<br/>
We work collaboratively in partnership with institutions across the world to develop life-saving discoveries and new technologies that tackle some of the most pressing global challenges. Our 30+ academic departments undertake groundbreaking research that underpins our inspiring teaching and challenges students to dream big, think critically and change the world.</Text>
                </Box>
                </AccordionPanel>
                <AccordionPanel label="Contacts" style={{ fontWeight: "bold" }}>
                <Box  pad="small"  background="light-3">
                <Text color='black' style={{fontWeight:'bolder'}}>FAIR/GSI, Germany:</Text>
                <Text>Dr. Pradeep Ghosh</Text>
                <Anchor href='/contacts'>Programme Coordinator</Anchor>
                </Box>
                </AccordionPanel>
                </Accordion>
                </AccordionPanel>
                </Accordion>
                <br/>
                </Box>
                </PageContent>
                </Page>
                :
                <Page kind='full' >
                <PageContent background="light-3" >
                <Box direction='row' justify='between'>
                <Heading level='3'>No information currently available for {currentCountry}, please stay tunned.</Heading>
                <Text style={{cursor:'pointer'}} alignSelf='center'> 
                <Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>            </Box>                </PageContent>
                </Page>

        }
        </Layer>    }
                 </Box>
            <EndBar/>

            </Grommet>
        );
        else
        return(
            <Grommet style={{overflowY:'scroll'}} theme={theme} full>
            <Bar/>
            <Box style={{minHeight:window.innerHeight*0.88+'px'}} background="background" flex='grow' >
            <Heading level='2' olor='brand' margin={{left:'medium'}}>Discover our partners</Heading>
            <Divider
          variant="string"
          color={theme.global.colors.text}
          sx={{ width: "25%", bgcolor: "#66033e", height: "3px", marginLeft:'20px', borderRadius:'30px' }}
        />
        <ComposableMap>
      <Geographies style={{zIndex:'0', position:'absolute'}} geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            (listOfCountries.includes(geo.properties.name)) ?
            <Tip plain style={{zIndex:'1', position:'absolute'}}  content={
                        <Box background='#5a0035'  align='center' alignSelf='end' style={{maxWidth:window.innerWidth*0.25+'px'}} margin={{ bottom: 'xlarge' }} pad="xsmall" round>
                         <Text color='white'>{geo.properties.name}</Text>
                        </Box>
                      }>
                 <Geography onClick={function(){setShowDetails(true);setCurrentCountry(geo.properties.name)}} key={geo.rsmKey} geography={geo}  fill="#66033e" stroke='white'
              style={{
                default: {
                  fill: "#66033e",
                  outline: "none"
                },
                hover: {
                  fill: "#ea7465",
                  outline: "white",
                  cursor:'pointer'
                },
                pressed: {
                  fill: "#66033e",
                  outline: "none"
                }
              }}/>
            </Tip> :
            <Geography key={geo.rsmKey} geography={geo}  fill="#fedba8" stroke='white'/>
            ))
        }
        </Geographies>
         </ComposableMap>
         {showDetails && 
         <Layer
         background='transparent'
          onEsc={() => setShowDetails(false)}
          onClickOutside={() => setShowDetails(false)}
          fit
        >
        { (currentCountry=='Canada') ?
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>Canada 🇨🇦</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'><Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>
            </Box>
            <br/>
            <Box overflow='auto'>
            <Text color='grey' style={{fontWeight:'bolder'}}>GET_INvolved Programme under the Mitacs Globalink Research Award (GRA) and with the Saint Mary's University (SMU) in Halifax, Canada.</Text>
            <br/>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >&emsp;• In August 2021, GSI and Mitacs signed a coopeation agreement for an international mobility programme. The Mitacs-GSI exchange mobility program will boost existing partnerships and help build future scientists and leaders for the operation of science facilities like the Facility for Antiproton and Ion Research (FAIR). GSI has been cooperating with and benefiting from scientific and technical collaboration with Canadian institutions for years in several research projects. The Mitacs Globalink Research Award (GRA) supports research collaborations between Canada and select partner organizations and eligible countries and regions.
            <br/><br/>
            &emsp;• Under the joint supervision of a home and host professor, successful senior undergraduate students, graduate students, as well as postdoctoral fellows will receive a CAD $6,000 research award to conduct a 12- to 24-week research project in the other country. Awards are offered in partnership with Mitacs’s Canadian academic partners (and, in some cases, with Mitacs’s international partners) and are subject to available funding. </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Programme overview" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>MITACS Programme</Text>
            <br/>
            <Text>&emsp;<b>1.</b> Applicants (student or postdoctoral fellow, home and host supervisors) submit application to partner organization or to Mitacs. </Text>
            <Text>&emsp;<b>2.</b> Within 12 weeks of submission, Mitacs will contact participants about the outcome of the application. Travel must take place within a year from the date of the outcome. </Text>
            <Text>&emsp;<b>3.</b> The intern provides the completed Mitacs Code of Conduct and Ethics and International Pre-Departure forms. </Text>
            <Text>&emsp;<b>4.</b> Mitacs forwards the Globalink Research Award funds to the Canadian institution. In some cases, interns may receive a portion of the funds from Mitacs’s partner organization.  </Text>
            <Text>&emsp;<b>5.</b> The intern departs to the destination and begins the research project.</Text>
            <Text>&emsp;<b>6.</b> Upon project completion, the intern submits a final report that summarizes the project. </Text>
            <Text>&emsp;<b>7.</b> All participants (student or postdoctoral fellow, home and host supervisors) submit a final survey. </Text>
            <Text>
                <br/>
            Partnership with Saint Mary´s University, Halifax<br/>The aim is to outline the progress of the civil construction and the achievements of the FAIR's precursor program FAIR Phase 0 and exchange how the scientific collaboration can be ramped up and offer more training and research possibilities to young researchers affiliated with SMU Halifax.
            </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='grey' style={{fontWeight:'bolder'}}>Mitacs, Canada</Text>
            <br/>
            <Text>Mitacs is a not-for-profit organization that fosters growth and innovation in Canada by solving business challenges with research solutions from academic institutions. Mitacs is funded by the Government of Canada along with the Government of Alberta, the Government of British Columbia, Research Manitoba, the Government of New Brunswick, the Government of Newfoundland and Labrador, the Government of Nova Scotia, the Government of Ontario, Innovation PEI, the Government of Quebec, the Government of Saskatchewan, and the Government of Yukon. </Text>
            </Box>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : (currentCountry=='Azerbaijan') ? 
            <Page kind='full' >
            <PageContent background="light-3" >
            <Box direction='row' justify='between'>
            <Heading level='2'>Azerbaijan 🇦🇿</Heading>
            <Text style={{cursor:'pointer'}} alignSelf='center'><Close color='brand' className='transparentImage' onClick={()=>{setShowDetails(false)}}/></Text>
            </Box>
            <br/>
            <Box overflow='auto'>
            <Text color='grey' style={{fontWeight:'bolder'}}>GET_INvolved Programme under the Mitacs Globalink Research Award (GRA) and with the Saint Mary's University (SMU) in Halifax, Canada.</Text>
            <br/>
            <Accordion>
            <AccordionPanel label="Information on the Programme" style={{ fontWeight: "bold" }}>
            <Box pad="small"  background="light-3">
            <Text >&emsp;• In August 2021, GSI and Mitacs signed a coopeation agreement for an international mobility programme. The Mitacs-GSI exchange mobility program will boost existing partnerships and help build future scientists and leaders for the operation of science facilities like the Facility for Antiproton and Ion Research (FAIR). GSI has been cooperating with and benefiting from scientific and technical collaboration with Canadian institutions for years in several research projects. The Mitacs Globalink Research Award (GRA) supports research collaborations between Canada and select partner organizations and eligible countries and regions.
            <br/><br/>
            &emsp;• Under the joint supervision of a home and host professor, successful senior undergraduate students, graduate students, as well as postdoctoral fellows will receive a CAD $6,000 research award to conduct a 12- to 24-week research project in the other country. Awards are offered in partnership with Mitacs’s Canadian academic partners (and, in some cases, with Mitacs’s international partners) and are subject to available funding. </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="Programme overview" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text>MITACS Programme</Text>
            <br/>
            <Text>&emsp;<b>1.</b> Applicants (student or postdoctoral fellow, home and host supervisors) submit application to partner organization or to Mitacs. </Text>
            <Text>&emsp;<b>2.</b> Within 12 weeks of submission, Mitacs will contact participants about the outcome of the application. Travel must take place within a year from the date of the outcome. </Text>
            <Text>&emsp;<b>3.</b> The intern provides the completed Mitacs Code of Conduct and Ethics and International Pre-Departure forms. </Text>
            <Text>&emsp;<b>4.</b> Mitacs forwards the Globalink Research Award funds to the Canadian institution. In some cases, interns may receive a portion of the funds from Mitacs’s partner organization.  </Text>
            <Text>&emsp;<b>5.</b> The intern departs to the destination and begins the research project.</Text>
            <Text>&emsp;<b>6.</b> Upon project completion, the intern submits a final report that summarizes the project. </Text>
            <Text>&emsp;<b>7.</b> All participants (student or postdoctoral fellow, home and host supervisors) submit a final survey. </Text>
            <Text>
                <br/>
            Partnership with Saint Mary´s University, Halifax<br/>The aim is to outline the progress of the civil construction and the achievements of the FAIR's precursor program FAIR Phase 0 and exchange how the scientific collaboration can be ramped up and offer more training and research possibilities to young researchers affiliated with SMU Halifax.
            </Text>
            </Box>
            </AccordionPanel>
            <AccordionPanel label="About the Partner" style={{ fontWeight: "bold" }}>
            <Box  pad="small"  background="light-3">
            <Text color='grey' style={{fontWeight:'bolder'}}>Mitacs, Canada</Text>
            <br/>
            <Text>Mitacs is a not-for-profit organization that fosters growth and innovation in Canada by solving business challenges with research solutions from academic institutions. Mitacs is funded by the Government of Canada along with the Government of Alberta, the Government of British Columbia, Research Manitoba, the Government of New Brunswick, the Government of Newfoundland and Labrador, the Government of Nova Scotia, the Government of Ontario, Innovation PEI, the Government of Quebec, the Government of Saskatchewan, and the Government of Yukon. </Text>
            </Box>
            </AccordionPanel>
            </Accordion>
            <br/>
            </Box>
            </PageContent>
            </Page> 
            : <Box>Construction hapening here, please some privacy.</Box>


        }
        </Layer>    }
                 </Box>
            <EndBar/>

            </Grommet>
        );
}

export {PartnersMainPage}
import React from "react";
import { Accordion,AccordionPanel,Box,Anchor, Paragraph,Image,ResponsiveContext,Grid,Tab,Tabs,Text, Heading} from 'grommet'




function genBetween(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
  }


function InfoBigDisplayTraineeShip(props){
    const size = React.useContext(ResponsiveContext);
    return(
        <Grid
            fill
            areas={[
              { name: 'left', start: [0, 0], end: [0, 0] },
              { name: 'right', start: [1, 0], end: [1, 0] },
              { name: 'bottom', start: [0, 1], end: [1, 1] }
            ]}
            columns={['flex', 'flex']}
            rows={['medium','flex']}
            gap="small"
          >
            <Box gridArea="left" background="brand" >
            <Image  fill={true} fit='cover' src={require("../../assets/st"+ genBetween(1,7) +".jpg")} />
            </Box>
           <Box elevation='small' gridArea="right" background="light-2" overflow='hidden' >
           <Heading color='brand' margin={{left:'medium',right:'medium',bottom:'none'}} level='3' fill={true}>What is Traineeship with ERASMUS+ Programme?</Heading>
           <Paragraph size={size} style={{fontWeight:'500'}} fill={true} color='brand' margin={{left:'medium',right:'medium'}}>Erasmus+ supports traineeships (work placements, internships, etc) abroad for students currently enrolled in higher education institutions from Programme countries at their Bachelor and Master level as well as for doctoral candidates. <b>These opportunities are also open to recent graduates.</b>
<br/>By doing this traineeship within the GET_INvolved framework supported with ERASMUS+, you have an opportunity to work at an excellent science research center and GET_INvolved into a structured international Project environment. Not only your communication, language and inter-cultural skills will be improved but also hard and soft skills.</Paragraph>
           </Box>
           <Box  gridArea="bottom" background="background"  margin={{left:'medium',right:'medium',top:'medium',bottom:'medium'}}>
           <Accordion>
            <AccordionPanel label="Who is eligible?" style={{ fontWeight: "bold" }}>
            <Box pad="medium" margin={{top:'medium',bottom:'medium'}} background="light-2">
                <Text style={{fontWeight:'bolder'}}>Eligible countries:</Text>
                <Text >&emsp;• The individuals from Programme countries are [see here] if your country is included in Key Action 1 Mobility for Individuals. </Text>
                <br/>
                <Text style={{fontWeight:'bolder'}}>Required educational qualification:</Text>
                <Text >&emsp;• Students in their higher education cycle [EQF 5 and above] Bachelors, Masters or Doctoral Programme. "Cycle" refers to the level of study as defined by the European Qualifications Framework (EQF):</Text>
                <Text >&emsp;&emsp;&emsp;■ First cycle (Bachelor or equivalent) EQF 5/6 – from 5th semester onwards only!</Text>
                <Text >&emsp;&emsp;&emsp;■ Second cycle (Master or equivalent) EQF 7</Text>
                <Text >&emsp;&emsp;&emsp;■ Third cycle (Doctoral or equivalent) EQF 8</Text>
                <Text >&emsp;• You can also go for a traineeship abroad as a recent graduate. In this case, your traineeship must occur within one year of your graduation and you must apply while still being enrolled in your higher education institution. </Text>
                <Text >&emsp;• The individuals (students and recent graduates) must be affiliated to a University or Educational Institution out of Germany. German nationals from foreign Universities are eligible. </Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Is there any funding and support?" style={{ fontWeight: "bold" }}>
            <Box pad="medium" margin={{top:'medium',bottom:'medium'}} background="light-2">
                <Text >&emsp;• <b>From ERASMUS+:</b> The financial support is primarily from the ERASMUS+ Programme. This includes subsistence and travel grant from the European Union. The value of this funding depends on ERASMUS+ funding regulations.</Text>
                <br/>
                <Text >&emsp;• <b>From GET_INvolved Programme:</b> In addition to the ERASMUS+ support, the Programme may decide to support a few students with help in organizing the accommodation. Not every trainee qualifies for this support. This decision will be based on their merit and availability of the accommodation at our Guesthouse.</Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Internships available" style={{ fontWeight: "bold" }}>
                <Box pad="medium" background="light-2">
                <Text>In 2022, the Programme plans to accept up to 25 ERASMUS+ trainees. An application through the Programme does not guarantee a traineeship position</Text>
                <br/>
                <Text style={{fontWeight:'bolder'}}>Statistics:</Text>
                <Text >&emsp;• Until 2020, the GET_INvolved Programme recieved 20 ERASMUS+ Trainees from 08 different countries.</Text>
                <Text >&emsp;• In 2021, the Programme accepted more than 25 ERASMUS+ trainees from over 10 countries. </Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Duration" style={{ fontWeight: "bold" }}>
                <Box pad="medium" background="light-2">
                <Text>You can benefit of an exchange Programme with ERASMUS+ multiple times,either as a student trainee or a recent graduate, but your total time may not exceed <b>12 months</b> within one cycle of study. A typical ERASMUS+ trainee spends a minimum of 3 months and a maximum of 12 months. This duration has to be agreed prior to the start of the traineeship.</Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Selection procedure" style={{ fontWeight: "bold" }}>
                <Box pad="medium" background="light-2">
                <Text>There are <b>three</b> phases of selection. The process can take 4-6 weeks to provide a confirmation on a Internship project.</Text><br/>
                <Text >&emsp;<Heading level='2' style={{display:'inline'}}>1. </Heading> <Heading style={{display:'inline'}} level='4'>Application stage:</Heading> checking the completeness of the application with required documents. Incomplete applications are not considered.</Text><br/>
                <Text >&emsp;<Heading level='2'  style={{display:'inline'}}>2. </Heading> <Heading style={{display:'inline'}} level='4'>Matchmaking stage:</Heading> interview [telephonic/video] with your potential hosting department and a project mentor. Confirmation on a defined traineeship project including the agreed duration from GET_INvolved Programme Coordinator.</Text><br/>
                <Text >&emsp;<Heading level='2' style={{display:'inline'}}>3.  </Heading><Heading style={{display:'inline'}} level='4'>Confirmation stage:</Heading> final confirmation from International Office and from respective Authority in Germany for permission to perform an Internship. This includes a invitation letter and internship agreement for the mobility.</Text><br/>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Process steps" style={{ fontWeight: "bold" }}>
                <Box pad="medium" background="light-2">
                <Text style={{fontWeight:'bolder'}}>1. Application stage:</Text>
                <Text>Applications are accepted from two types of applicants only through the application portal.</Text>
                <br/>
                <Text >&emsp;1. applicants who have agreed with a local supervisor at GSI/FAIR and already know their potential internship project.</Text>
                <Text >&emsp;2. applicants who would like to just apply speculative without any prior knowledge of the specific internship project.</Text>
                <br/>
                <Text>Application portal: <Anchor href='http://www.gsi.de/get-involved-application'>www.gsi.de/get-involved-application</Anchor>. Please use Latin letters for filling the application!</Text>
                <br/>
                <Text>In every case, upload the following documents:</Text>
                <Text >&emsp;• the latest curriculum vitae (CV) (we recommend to use EUROPASS <Anchor href='https://fair-center.de/fileadmin/FAIR/downloads/EuropasCV_template_en.doc' download={true}>CV template</Anchor> and <Anchor href='https://fair-center.de/fileadmin/FAIR/downloads/How_To_Curriculum_Vitae_2018-07-27.pdf'>suggestions how to fill it</Anchor>)</Text>
                <Text >&emsp;• enrollment certificate issued by your higher educational institution</Text>
                <Text >&emsp;• proof of academic records (mark sheets and transcripts in English language)</Text>
                <Text >&emsp;• other optional documents: recommendation letters (at least one), other certificates about your hard and soft skills</Text>
                <br/>
                <Text style={{fontWeight:'bolder'}}>2. Matchmaking stage:</Text>
                <Text margin={{left:'small'}} style={{fontWeight:'bolder'}}>Matchmaking is not required for those applicants who have been:</Text>
                <Text >&emsp;• either asked by an employee or researcher at GSI/FAIR to apply through the portal [they must mention the contact person in the comment section of the application]</Text>
                <Text >&emsp;• or you have been informed about your tentative Internship project [they must enter the hosting department or contact person’s name in the comment section]</Text>
                <Text margin={{left:'small'}} style={{fontWeight:'bolder'}}>Matchmaking of your profile is performed by the International Office and there are two outcomes:</Text>
                <Text >&emsp;• when an appropriate internship project is found, you are notified for next steps and a confirmation letter is sent [the candidate may have telephonic/video interview with one or more potential project mentors].</Text>
                <Text >&emsp;• when there is no internship project found in 6 weeks or a candidate does not qualify to the expectation of potential project mentors during the remote interview, we have to reject the application.</Text>
                <br/>
                <Text style={{fontWeight:'bolder'}}>3. Confirmation stage:</Text>
                <Text >&emsp;• Confirmation of funding from your higher education institution where you applied the ERASMUS+. This step is mandatory to prepare the Learning agreement and clarify the project goals, duration and confirmation from the sending institution.</Text>
                <Text >&emsp;• Your higher education institution and the receiving organization must sign a learning agreement [see links below] for traineeships to ensure a transparent and efficient preparation of the exchange abroad. This document sets out rights and responsibilities of the various parties, a detailed Program of the traineeship, information on insurance, and how your traineeship will be recognized upon successful completion.</Text>
                <Text >&emsp;• Please read the ERASMUS+ Student Charter, explaining your rights and obligations with respect to your traineeship abroad.</Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Administration and coordination" style={{ fontWeight: "bold" }}>
                <Box pad="medium" background="light-2">
                <Text>Programme Coordinator</Text>
                <Text>International Office for students and researchers</Text>
                <Text>Contact our team via mail: international(at)fair-center.eu or international(at)gsi.de.</Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="Useful links and downloads" style={{ fontWeight: "bold" }}>
                <Box pad="medium" background="light-2">
                <Text >&emsp;• <Anchor href='https://fair-center.eu/fileadmin/FAIR/downloads/EuropasCV_template_en.doc' download={true}>Curriculum Vitae (CV) in EUROPASS Format</Anchor></Text>
                <Text >&emsp;• <Anchor href='https://fair-center.eu/fileadmin/FAIR/downloads/How_To_Curriculum_Vitae_2018-07-27.pdf' download={true}>Guidelines to fill your CV</Anchor></Text>
                <Text >&emsp;• Traineeship Learning Agreement for Mobility: Contact ERASMUS OFFICE of your University/institution for an updated version.</Text>
                <Text >&emsp;&emsp;• Portable Document Format (.pdf)</Text>
                <Text >&emsp;&emsp;• WORD (.doc)</Text>
                <Text >&emsp;&emsp;• OpenOffice (.odt)</Text>
                <Text >&emsp;&emsp;• <Anchor onClick={function(){window.location='https://ec.europa.eu/programmes/erasmus-plus/sites/default/files/learning-traineeships-guidelines_en.pdf'}}>Guidelines on how to use the learning agreements for traineeships</Anchor> (students and recent graduates) !BROKEN LINK!</Text>
                <Text >&emsp;• <Anchor onClick={function(){window.location='https://ec.europa.eu/programmes/erasmus-plus/sites/default/files/learning-traineeships-guidelines_en.pdf'}}>Programme eligible countries !BROKEN LINK!</Anchor></Text>
                <Text >&emsp;• <Anchor onClick={function(){window.location='https://ec.europa.eu/programmes/erasmus-plus/sites/default/files/learning-traineeships-guidelines_en.pdf'}}>EQF: European Qualifications Framework !BROKEN LINK!</Anchor></Text>
                </Box>
            </AccordionPanel>
            <AccordionPanel label="FAQ" style={{ fontWeight: "bold" }}>
                <Box pad="medium" background="light-2">
                <Text>Still have questions? Please check out answers to Frequently Asked Questions. Link to our FAQ.</Text>
                </Box>
            </AccordionPanel>
            </Accordion>
           </Box>
          </Grid>
    );
}

export {InfoBigDisplayTraineeShip}
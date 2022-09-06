import React from "react";
import { Accordion,AccordionPanel,Box,Anchor, Paragraph,Image,ResponsiveContext,Grid,Tab,Tabs,Text, Heading} from 'grommet'




function genBetween(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
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



function InfoBigDisplayErasmus(props){
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
            {mobileCheck() ?  
        <Box elevation='small' gridArea="right" background="light-2" overflow='scroll' >
           <Heading color='brand' margin={{left:'medium',right:'medium',bottom:'none'}} level='3' fill={true}>What is Traineeship with ERASMUS+ Programme?</Heading>
           <Paragraph size={size} style={{fontWeight:'500'}} fill={true} color='brand' margin={{left:'medium',right:'medium'}}>Erasmus+ supports traineeships (work placements, internships, etc) abroad for students currently enrolled in higher education institutions from Programme countries at their Bachelor and Master level as well as for doctoral candidates. <b>These opportunities are also open to recent graduates.</b>
<br/>By doing this traineeship within the GET_INvolved framework supported with ERASMUS+, you have an opportunity to work at an excellent science research center and GET_INvolved into a structured international Project environment. Not only your communication, language and inter-cultural skills will be improved but also hard and soft skills.</Paragraph>
           </Box> :  <Box elevation='small' gridArea="right" background="light-2" overflow='hidden' >
           <Heading color='brand' margin={{left:'medium',right:'medium',bottom:'none'}} level='3' fill={true}>What is Traineeship with ERASMUS+ Programme?</Heading>
           <Paragraph size={size} style={{fontWeight:'500'}} fill={true} color='brand' margin={{left:'medium',right:'medium'}}>Erasmus+ supports traineeships (work placements, internships, etc) abroad for students currently enrolled in higher education institutions from Programme countries at their Bachelor and Master level as well as for doctoral candidates. <b>These opportunities are also open to recent graduates.</b>
<br/>By doing this traineeship within the GET_INvolved framework supported with ERASMUS+, you have an opportunity to work at an excellent science research center and GET_INvolved into a structured international Project environment. Not only your communication, language and inter-cultural skills will be improved but also hard and soft skills.</Paragraph>
           </Box>}
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

export {InfoBigDisplayErasmus}


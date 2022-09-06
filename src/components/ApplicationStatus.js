import {React, useState,useEffect} from "react";
import {Grommet,Box,Button,Heading,TextInput,DateInput,Text,ThemeContext, Paragraph,Anchor} from 'grommet'
import { Search } from "grommet-icons";
import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import Papa from 'papaparse';
import $, { each } from "jquery";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';




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
  };

function searchT1(t1Data,refCode,birthday,lenght){
  for(let j=0;j<lenght;j++){
    if(t1Data[j][0]==refCode && t1Data[j][2]==birthday)
      return t1Data[j][1];
  }
    return 'na';
}

function searchT2(t2Data, t1Out){
  for(let j=0;j<7;j++){
    if(t2Data[j][1]==t1Out){
      return t2Data[j][2];
    }
  }
    return 'na';
}

const steps = [
  'RECEIVED',
  'INCOMPLETE',
  'COMPLETE',
  'WAITLISTED',
  'UNDER-EVALUATION',
  'SUCESSFULL'
];

const stepsBad = [
  'RECEIVED',
  'INCOMPLETE',
  'COMPLETE',
  'WAITLISTED',
  'UNDER-EVALUATION',
  'REJECTED/OBSELETE'
];


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



function ApplyStatus(){
    const [ t1Data, setT1 ] = useState([]);
    const [t2Output, setT2Out] = useState();
    const [t1Out, setT1Out] = useState();
    const [accepted, setAccepted] = useState();
    const [ t2Data, setT2 ] = useState();
    const [ref, setRef] = useState('');
    const [date, setDate] = useState();
    const [datePickerValue, setValue] = useState();
    const [displayStepper, setDisplayStepper] = useState('none');
    const [foundApplication, setFoundApplication] = useState(false);

    useEffect(() => {
      fetch( './t1_TrackerApplications.csv' )
                      .then( response => response.text() )
                      .then( responseText => {
                          var data = Papa.parse(responseText);
                          setT1(data.data);
                      });

      fetch( './t2_TrackerStatusMessage.csv' )
                      .then( response => response.text() )
                      .then( responseText => {
                          // -- parse csv
                          var data = Papa.parse(responseText);
                          setT2(data.data);
                      });
    },[]);
    

    const onDateChange = (event) => {
          const nextValue = event.value;
          let dateChoosen = new Date(nextValue);
          setValue(nextValue);

          setDate((parseInt(dateChoosen.getDate())).toLocaleString('en-US',
                {minimumIntegerDigits: 2,
                useGrouping: false})
                +'.'+(dateChoosen.getMonth()+1).toLocaleString('en-US',
                {minimumIntegerDigits: 2,
                useGrouping: false})+'.'+dateChoosen.getFullYear())
        };
    
    if(!mobileCheck())
    return(
        <Grommet theme={theme} full>
            <Bar></Bar>
            <Box  style={{minHeight:window.innerHeight*0.9+'px'}} background="background"  >
            <Heading level='2' color='#66033e' margin='medium'>Application Status</Heading>
            <Text margin={{left:'medium',right:'medium'}}>Insert your data:</Text>
            <Box margin='medium' width='65%' direction="row" gap='small'>
            <TextInput
                placeholder="Application ref"
                value={ref}
                onChange={event => setRef(event.target.value)}
                
              />
              <ThemeContext.Extend
        value={{
          global: {
            colors: {
              brand: "#ffb446",
            },
          },
        }}
      >
      <DateInput
                placeholder="Your birthday (mm/dd/yyyy)"
                value={datePickerValue}
                format="mm/dd/yyyy"
                onChange={onDateChange}
              />
      </ThemeContext.Extend>
          <Button alignSelf='center' onClick={function(){
          
          let t1 = searchT1(t1Data,ref,date,t1Data.length);
          let t2 = setT2Out(searchT2(t2Data,t1));
          setT1Out(t1);
          
          setDisplayStepper('inline');

          if(t1!='na' && typeof t1 !== 'undefined'){
            setFoundApplication(true);
          }else{
            setDisplayStepper(false);
          }



          }} margin={{right:'large'}} size='large' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Search' icon={<Search color='white'/>} reverse></Button>
            </Box>
            {
              foundApplication ? 
              <Box style={{display:displayStepper}}>
              <br/>
              <Heading level='3' margin='medium'>Progress:</Heading>
              <br/>
              <br/>
              {
              t1Out!='REJECTED/OBSOLETE'?
              <Stepper iconColor='green' sx={{color:'red'}}  activeStep={(t1Out=='RECEIVED')? 0 : (t1Out=='INCOMPLETE')? 1 : (t1Out=='COMPLETE')? 2 : (t1Out=='WAITLISTED')? 3 : (t1Out=='UNDER-EVALUATION')? 4 : 5} alternativeLabel>
              {steps.map((label) => (
                <Step sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#66033e', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                    {
                      color: 'grey.500', // Just text label (COMPLETED)
                    },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: '#ffb446', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                    {
                      color: '#66033e', // Just text label (ACTIVE)
                    },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: '#66033e', // circle's number (ACTIVE)
                  },
                }} key={label}>
                  <StepLabel sx={{color:'red'}} StepIconProps={{ color:'red' }}>{label}</StepLabel>
                </Step>
              ))}
          </Stepper>
              : 
              <Stepper iconColor='green' sx={{color:'red'}}  activeStep={(t1Out=='RECEIVED')? 0 : (t1Out=='INCOMPLETE')? 1 : (t1Out=='COMPLETE')? 2 : (t1Out=='WAITLISTED')? 3 : (t1Out=='UNDER-EVALUATION')? 4 : 5} alternativeLabel>
              {stepsBad.map((label) => (
                <Step sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#66033e', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                    {
                      color: 'grey.500', // Just text label (COMPLETED)
                    },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: '#ffb446', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                    {
                      color: '#66033e', // Just text label (ACTIVE)
                    },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: '#66033e', // circle's number (ACTIVE)
                  },
                }} key={label}>
                  <StepLabel sx={{color:'red'}} StepIconProps={{ color:'red' }}>{label}</StepLabel>
                </Step>
              ))}
          </Stepper>
               }
            <br/>
            <br/>
            <Paragraph fill margin='medium' style={{fontWeight:'bold'}}>{t2Output}</Paragraph>

              </Box>
              :
              <Box style={{display:displayStepper}}>         
            <Paragraph fill margin='medium' style={{fontWeight:'bold'}}>
            Your application could not be found. Please make sure that you have inserted the correct information. <br/>If you are sure that all information is correct and you receive this message, please send an email to <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=international-office@gsi.de')}}>international-office@gsi.de</Anchor>.
            </Paragraph>
              </Box>
              
            }
            </Box>
            <EndBar />
        </Grommet>
    );
    else
    return(
      <Grommet theme={theme} full>
      <Bar></Bar>
      <Box  style={{minHeight:window.innerHeight*0.9+'px'}} background="background"  >
      <Heading level='2' color='#66033e' margin='medium'>Application Status</Heading>
      <Text margin={{left:'medium',right:'medium'}}>Insert your data:</Text>
      <Box gap='medium' margin='medium' width='65%' direction="column" >
      <TextInput
          placeholder="Application ref"
          value={ref}
          onChange={event => setRef(event.target.value)}
          
        />
        <ThemeContext.Extend
  value={{
    global: {
      colors: {
        brand: "#ffb446",
      },
    },
  }}
>
<DateInput
          placeholder="Your birthday (mm/dd/yyyy)"
          value={datePickerValue}
          format="mm/dd/yyyy"
          onChange={onDateChange}
        />
</ThemeContext.Extend>
    <Button alignSelf='center' onClick={function(){
    
    let t1 = searchT1(t1Data,ref,date,t1Data.length);
    let t2 = setT2Out(searchT2(t2Data,t1));
    setT1Out(t1);
    
    setDisplayStepper('inline');

    if(t1!='na' && typeof t1 !== 'undefined'){
      setFoundApplication(true);
    }else{
      setDisplayStepper(false);
    }



    }} margin={{right:'large'}} size='large' style={{background:'#66033e', color:'#f9f7f3'}} className='transparentImage' label='Search' icon={<Search color='white'/>} reverse></Button>
      </Box>
      {
        foundApplication ? 
        <Box  direction='row' style={{display:displayStepper}}>
        <br/>
        <br/>
        <Heading level='2' fill margin={{right:'medium',left:'medium',top:'none',bottom:'none'}} style={{fontWeight:'bold'}}>Result: <u>{t1Out}</u></Heading>
      <Paragraph fill margin='medium' style={{fontWeight:'bold'}}>{t2Output}</Paragraph>
        </Box>
        :
        <Box style={{display:displayStepper}}>         
      <Paragraph fill margin='medium' style={{fontWeight:'bold'}}>
      Your application could not be found. Please make sure that you have inserted the correct information. <br/>If you are sure that all information is correct and you receive this message, please send an email to <Anchor onClick={()=>{window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=international-office@gsi.de')}}>international-office@gsi.de</Anchor>.
      </Paragraph>
        </Box>
        
      }
      </Box>
      <EndBar />
  </Grommet>

    );
}

export {ApplyStatus}
import React from 'react';

import { MainPage } from './components/MainPage';
import { ContactPage } from './components/ContactPage';
import { ChooseApplyPage } from './components/ChooseApplyPage';
import { WhyToApplyPage } from './components/whyToApplyPage';
import { ProgrammeInfoPage } from './components/programmeInfoPage/programmeInfoPage'
import { ServicesPage } from './components/servicesPage';
import { FormPage } from './components/FormPage';
import { PartnersMainPage } from './components/partnersPage/partnersMainPage';
import { BrowserRouter as Router, Route, Link,Routes } from "react-router-dom";
import {ResponsiveContext} from 'grommet'
import {ApplyStatus} from './components/ApplicationStatus'
import {WhoCanParticipate} from './components/whoCanParticipatePage'
import { WhoCanStudentResearcher } from './components/whoCanApplyDetails/WhoCanStudentResearcher';
import { WhoCanDoctoral } from './components/whoCanApplyDetails/WhoCanDoctoral';
import { WhoCanVisiting } from './components/whoCanApplyDetails/WhoCanVisiting';
import { WhoCanPartner } from './components/whoCanApplyDetails/WhoCanPartner';
import { WhoCanSpeculative } from './components/whoCanApplyDetails/WhoCanSpeculative';
import { OportunityPage } from './components/OportunityPage';
import { PatnerPage } from './components/PartnerPage'
import { TeamPage } from './components/TeamPage'
import { RemarksPage } from './components/RemarksPage'


function App() {
  const size = React.useContext(ResponsiveContext);
  return (
      <Router>
      <Routes>
      <Route exact path="/" element={<MainPage/>} />
      <Route exact path="/form" element={<FormPage/>} />
      <Route exact path="/contacts" element={<ContactPage/>} />
      <Route exact path="/chooseApply" element={<ChooseApplyPage/>} />
      <Route exact path='/internship' element={<ProgrammeInfoPage section='internship'/>}/>
      <Route exact path='/erasmusplus' element={<ProgrammeInfoPage section='erasmus'/>}/>
      <Route exact path='/traineeship' element={<ProgrammeInfoPage section='traineeship'/>}/>
      <Route exact path='/sandwich' element={<ProgrammeInfoPage section='sandwich'/>}/>
      <Route exact path='/services' element={<ServicesPage/>}/>
      <Route exact path='/whyToApply' element={<WhyToApplyPage/>}/>
      <Route exact path='/applicationStatus' element={<ApplyStatus/>}/>
      <Route exact path='/partners' element={<PartnersMainPage/>} ></Route>
      <Route exact path='/whoCanApply' element={<WhoCanParticipate/>} ></Route>
      <Route exact path='/whoCanStResearcher' element={<WhoCanStudentResearcher/>} ></Route>
      <Route exact path='/whoCanDoctoral' element={<WhoCanDoctoral/>} ></Route>
      <Route exact path='/whoCanVisiting' element={<WhoCanVisiting/>} ></Route>
      <Route exact path='/whoCanPartner' element={<WhoCanPartner/>} ></Route>
      <Route exact path='/whoCanSpeculative' element={<WhoCanSpeculative/>} ></Route>
      <Route exact path='/opportunities' element={<OportunityPage/>} ></Route>
      <Route exact path='/applyAsPartner' element={<PatnerPage/>} ></Route>
      <Route exact path='/team' element={<TeamPage/>} ></Route>
      <Route exact path='/remarks' element={<RemarksPage/>} ></Route>
      </Routes>
  </Router>
  );
}

export default App;

import React from "react";
import {
  Box,
  Accordion,
  AccordionPanel,
  Text,
  ThemeContext,
  Paragraph,
  ResponsiveContext,
  Heading,
} from "grommet";
import { Info, Send, Workshop, Code, CaretDown, Down } from "grommet-icons";
import { InfoBox } from "./InfoBox.js";

function getHeadingLevel(currentSize) {
  if (currentSize == "small") return 5;
  else if (currentSize == "medium") return 2;
  else return 1;
}

const visionText1 =
  "provides international students and early stage researchers with opportunities to perform internships, traineeships and early-stage research experience in order to get involved in the international FAIR acclerator project while receiving scientific and technical training.";
const programme = "GET_INvolved Programme ";
const visionText2 =
  "Professional training, mentorship and research projects are available for a broad range of topics, e.g. biophysics, material research (incl. NANO), high-performance computing, radiation therapy and protection, accelerator technology, superconducting magnets, atomic physics, plasma physics, nuclear physics and chemistry.";

function LearnMorePage(props) {
  const size = React.useContext(ResponsiveContext);
  return (
    <Box
      flex="grow"
      margin={{ top: "medium" }}
      background="#fedba8"
      pad={{ left: "medium", right: "medium" }}
    >
      <Heading
          margin={{ top: "medium" }}
          level={getHeadingLevel(size)}
          color="brand"
          height="20%"
          level='1'
        >
        About the programme
        </Heading>
      <Accordion>
        <AccordionPanel label="Vision" style={{ fontWeight: "bold" }}>
          <Box pad="medium" background="background" border='all'>
            <Text size={size}>
              {"The "}
              <b>{programme}</b>
              {visionText1}
              <br />
              <br />
              {visionText2}
            </Text>
          </Box>
        </AccordionPanel>
      </Accordion>
      <hr />
      <Heading level="2">Objectives</Heading>
      <InfoBox
        src="https://fair-center.eu/fileadmin/FAIR/departments/getinvolved/images/pictures/SIS100Dipole_youngScientists_Hosan.jpg"
        align="start"
        number="1"
        title="Offering training opportunities"
        text=" with mobility to university students and early stage researchers to support their education and scientific career."
      />
      <InfoBox
        src="https://fair-center.eu/fileadmin/FAIR/departments/getinvolved/images/pictures/Working_2YoungScientists_Hosan.jpg"
        align="end"
        number="2"
        title="Creating synergies"
        text=" between collaborating universities and advanced technical institutes in FAIR shareholder countries to contribute to the FAIR project in research and development."
      />
      <InfoBox
        src="https://fair-center.eu/fileadmin/FAIR/departments/getinvolved/images/pictures/Experiment_MaleYoungScientist_Ernsting.jpg"
        align="start"
        number="3"
        title="Building capacities"
        text=" for research groups and partner institutes working together within the FAIR collaborations."
      />
    </Box>
  );
}

export { LearnMorePage };

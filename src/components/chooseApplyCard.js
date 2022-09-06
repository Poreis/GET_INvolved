import React from 'react';
import {
    Box,
    Button,
    Heading,
    Grommet,
    Paragraph,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Avatar,
    List,
    Grid,
    Anchor,
    Header,
    Image,
    Video,
    ResponsiveContext,
    Text,
  } from "grommet";

  import {Bar} from './AppBar'
import {EndBar} from './EndBar'
import {FormPreviousLink,FormNext} from 'grommet-icons'


function getHeadingLevel(currentSize) {
    if (currentSize == "small") return 4;
    else if (currentSize == "medium") return 3;
    else return 2;
  }

function getCardSize(currentSize) {
  if (currentSize == "small") return 'small';
  else if (currentSize == "medium") return 'medium';
  else return 'xmedium';
}


function ChooseApplyCard(props){
    const size = React.useContext(ResponsiveContext);
    return(
        <Card onClick={props.onClick} height={getCardSize(size)} width={getCardSize(size)} background="light-1" style={{cursor:'pointer'}}>
        <CardBody >
        <Image className='transparentImage' fill={true} fit='cover' src={require("../assets/"+props.img)} />
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Heading level={getHeadingLevel(size)} color="brand">
            <b>{props.title}</b>
          </Heading>
          <Button
            size={size}
            icon={<FormNext color="brand" />}
            hoverIndicator
          ></Button>
        </CardFooter>
        </Card>
    );
}


export {ChooseApplyCard}
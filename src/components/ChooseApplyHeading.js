import React from 'react';
import {Heading, ResponsiveContext} from 'grommet'
import { height } from '@mui/system';

function getHeadingLevel(currentSize) {
    if (currentSize == "small") return 3;
    else if (currentSize == "medium") return 2;
    else return 1;
  }

function ChooseApplyHeading(props){
    const size = React.useContext(ResponsiveContext);
    return (<Heading margin={{left:'large',top:'large',bottom:'none',right:'medium'}} color='brand' level={getHeadingLevel(size)}>{props.label}</Heading>);
}

export {ChooseApplyHeading}
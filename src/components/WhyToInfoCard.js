import React from "react";
import { Card, Paragraph,Image,ResponsiveContext,Grid,Tab,Tabs,Text, Heading, CardBody,CardFooter, CardHeader, Button} from 'grommet'
import {Down,FormAdd,Up} from 'grommet-icons'




class WhyToInfoCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: true,
          };
    }


    cardSize (currentSize) {
        if(currentSize=='small')
            return 'xsmall'
        else if(currentSize=='medium')
            return 'small_med'
        else
            return 'medium'
    }

    toggleIsActive = () => {
        this.setState({isActive: !this.state.isActive});
      };

    render(){
        if(this.state.isActive)
        return(
            <Card onClick={this.toggleIsActive} style={{cursor:'pointer'}} align='center' alignSelf='center'  gridArea={this.props.place} width='medium' height='medium' >
        <CardHeader>
                <Paragraph style={{fontWeight:'bold'}} color='brand'>{this.props.title}</Paragraph>
                <Button icon={<Down color='brand'/>} ></Button>
            </CardHeader>
            <CardBody >
            {this.props.image}
            </CardBody>
        </Card> 
        );
        else
        return(
        <Card onClick={this.toggleIsActive} style={{cursor:'pointer'}} align='center' alignSelf='center'  gridArea={this.props.place} width='medium' height='medium'>
        <CardHeader>
                <Paragraph style={{fontWeight:'bold'}} color='brand'>{this.props.title}</Paragraph>
                <Button icon={<Up color='brand'/>} ></Button>
            </CardHeader>
            <CardBody style={{overflowY:'scroll'}} >
            <Paragraph margin={{right:'small',left:'small'}} fill>{this.props.text}</Paragraph>
            </CardBody>
        </Card> 
        );
    }

}

export {WhyToInfoCard}
import React from "react";
import { FormNext } from "grommet-icons";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Paragraph,
  ResponsiveContext,
  Image,
} from "grommet";

function getCardSize(currentSize) {
  if (currentSize == "small") return "med_small";
  else if (currentSize == "medium") return "medium";
  else return "xmedium";
}

function SquareCard(props) {
  const size = React.useContext(ResponsiveContext);
  return (
    <a  href={props.href} style={{cursor:'pointer'}}>
      <Card
        height={getCardSize(size)}
        width={getCardSize(size)}
        background="background"
        flex={false}
      >
        <CardBody pad="medium">
          <Image className="transparentImage" fill={true} src={require("../assets/" + props.imgSrc)} />
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light-2">
          <Paragraph size={size} color="brand">
            <b>{props.label}</b>
          </Paragraph>
          <Button
            size={size}
            icon={<FormNext color="brand" />}
            hoverIndicator
          ></Button>
        </CardFooter>
      </Card>
    </a>
  );
}

export { SquareCard };

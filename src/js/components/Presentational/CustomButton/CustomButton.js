import React from "react";

import { Button } from "react-bootstrap";

const CustomButton = props => {
  const {
    variant,
    buttonText,
    textClass,
    onClick,
    iconClass,
    className,
    id
  } = props;
  const hasIcon = iconClass !== undefined > 0 ? true : false;
  if (hasIcon) {
    return (
      <Button variant={variant} onClick={onClick} className={className} id={id}>
        <i className={"d-inline " + { iconClass }} />
        <p className={"d-inline p-0 " + { textClass }}>{buttonText}</p>
      </Button>
    );
  } else {
    return (
      <Button variant={variant} onClick={onClick} className={className} id={id}>
        <p className={"d-inline p-0 " + { textClass }}>{buttonText}</p>
      </Button>
    );
  }
};

export default CustomButton;

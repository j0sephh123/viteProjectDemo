import { Button } from "@mantine/core";
import {
  borderDefault,
  border4px,
  border8px,
  backgroundDefault,
  backgroundRed,
  backgroundOrange,
  small,
  large,
} from "./ButtonComponent.module.css";

function ButtonComponent(props) {
  const vrnt = props.variant ? "outline" : "filled";

  return (
    <Button
      variant={vrnt}
      className={
        (borderDefault,
        backgroundDefault,
        small,
        props.border4px ? border4px : "",
        props.border8px ? border8px : "",
        props.backgroundRed ? backgroundRed : "",
        props.backgroundOrange ? backgroundOrange : "",
        props.large ? large : "")
      }
    >
      {props.uppercase ? props.children.toUpperCase() : props.children}
    </Button>
  );
}

export default ButtonComponent;

import styles from "./ButtonComponent.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

const {
  noVariantProp,
  noRadiusProp,
  noBackgroundProp,
  noSizeProp,
  outlineVariantProp,
  fourRadiusProp,
  eightRadiusProp,
  redBackgroundProp,
  orangeBackgroundProp,
  largeSizeProp,
} = styles;

function ButtonComponent({
  variant,
  borderRadius,
  backgroundColor,
  size,
  children,
}) {
  const [defaultVariant, setDefaultVariant] = useState(noVariantProp);
  const [defaultRadius, setDefaultRadius] = useState(noRadiusProp);
  const [defaultBackground, setDefaultBackground] = useState(noBackgroundProp);
  const [defaultSize, setDefaultSize] = useState(noSizeProp);

  useEffect(() => {
    if (variant === "outline") {
      setDefaultVariant(outlineVariantProp);
    } else {
      setDefaultVariant(noVariantProp);
    }

    if (borderRadius === "4px") {
      setDefaultRadius(fourRadiusProp);
    } else if (borderRadius === "8px") {
      setDefaultRadius(eightRadiusProp);
    } else {
      setDefaultRadius(noRadiusProp);
    }

    if (backgroundColor === "red") {
      setDefaultBackground(redBackgroundProp);
    } else if (backgroundColor === "orange") {
      setDefaultBackground(orangeBackgroundProp);
    } else {
      setDefaultBackground(noBackgroundProp);
    }

    if (size === "large") {
      setDefaultSize(largeSizeProp);
    } else {
      setDefaultSize(noSizeProp);
    }
  });
  return (
    <button
      className={clsx(
        defaultVariant,
        defaultRadius,
        defaultBackground,
        defaultSize
      )}
    >
      {children}
    </button>
  );
}

export default ButtonComponent;

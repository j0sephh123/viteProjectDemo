import clsx from "clsx";
import styles from "./ButtonComponent.module.css";

export const buttonVariants = {
  outline: "outline",
};

export const buttonBorderRadiusses = {
  "4px": "4px",
  "8px": "8px",
};

export const buttonBackgroundColors = {
  red: "red",
  orange: "orange",
};

export const buttonSizes = {
  large: "large",
};

const mapButtonVariantsToClassName = {
  [buttonVariants.outline]: styles.variantOutline,
};

const mapBorderRadiusToClassName = {
  [buttonBorderRadiusses["4px"]]: styles.borderRadiusFour,
  [buttonBorderRadiusses["8px"]]: styles.borderRadiusEight,
};

const mapBackgroundColorToClassName = {
  [buttonBackgroundColors.orange]: styles.backgroundColorOrange,
  [buttonBackgroundColors.red]: styles.backgroundColorRed,
};

const mapButtonSizesToClassName = {
  [buttonSizes.large]: styles.sizeLarge,
};

function Button({
  variant,
  borderRadius,
  backgroundColor,
  size,
  uppercase,
  children,
}) {
  return (
    <button
      className={clsx(
        styles.base,
        variant && mapButtonVariantsToClassName[variant],
        borderRadius && mapBorderRadiusToClassName[borderRadius],
        backgroundColor && mapBackgroundColorToClassName[backgroundColor],
        size && mapButtonSizesToClassName[size]
      )}
    >
      {children}
    </button>
  );
}

export default Button;

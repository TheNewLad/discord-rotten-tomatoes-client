import { classNames } from "@/lib/utils.ts";
import React from "react";

interface TypographyProps {
  variant: keyof typeof elements;
  children: React.ReactNode;
  className?: string;
}

export const Typography = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  const Element = elements[variant];
  return (
    <Element className={classNames(styles[variant], className)}>
      {children}
    </Element>
  );
};

const styles = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  subtitle1: "text-lg",
  subtitle2: "text-base",
  body1: "text-base",
  body2: "text-sm",
  caption: "text-xs",
  overline: "text-xs uppercase",
};

type Elements = {
  [key in keyof typeof styles]: keyof React.JSX.IntrinsicElements;
};

const elements: Elements = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  caption: "p",
  overline: "p",
};

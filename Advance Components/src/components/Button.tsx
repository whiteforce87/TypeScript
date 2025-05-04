import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {abc:string,
    href?: never
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = ComponentPropsWithoutRef<"a"> & {
    href? : string
};

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

function Button(props: ButtonProps | AnchorProps) {
  // const {el, ...otherProps} = props;
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Button;

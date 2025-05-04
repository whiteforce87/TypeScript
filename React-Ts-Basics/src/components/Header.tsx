import { type ReactNode } from "react";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

function Header(props: HeaderProps) {
  return (
    <header>
      {/*         <img src={props.image.src} alt={props.image.alt}>
       */}
      <img {...props.image}></img>
        {props.children}
    </header>
  );
}

export default Header;

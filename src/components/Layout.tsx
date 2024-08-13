import { ReactNode } from "react";
import Topbar from "./Topbar";

type ChildrenPropsType = {
  children: ReactNode;
};

const Layout = ({ children }: ChildrenPropsType) => {
  return (
    <>
      <Topbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;

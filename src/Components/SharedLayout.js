import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  );
};

export default SharedLayout;

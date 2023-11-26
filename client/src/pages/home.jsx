import { Outlet } from "react-router-dom";

function homePage() {
  return (
    <>
      <p>Home!</p>
      <div id="detail"></div>
      <Outlet />
    </>
  );
}

export default homePage;

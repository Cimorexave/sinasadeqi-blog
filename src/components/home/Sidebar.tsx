import React from "react";
interface SidebarInterface {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: Function;
}
const Sidebar = ({ sidebarIsOpen, setSidebarIsOpen }: SidebarInterface) => {
  return (
    <>
      {/* desktop  */}
      <aside className="sidebar sidebar-desktop hidden lg:flex fixed top-0 h-screen w-max">
        Sidebar
      </aside>

      {/* mobile */}
      <aside
        className={
          "sidebar sidebar-mobile lg:hidden flex h-screen w-screen absolute top-0 right-0" +
          sidebarIsOpen
            ? "hidden"
            : "flex"
        }
      >
        <div
          onClick={() => setSidebarIsOpen(false)}
          className="backdrop basis-1/3 bg-black opacity-50"
        ></div>
        <div className="sidebar-content basis-2/3">Sidebar</div>
      </aside>
    </>
  );
};

export default Sidebar;

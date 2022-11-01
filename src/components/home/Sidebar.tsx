import React from 'react'

const Sidebar = () => {
  return (
    <>
    {/* desktop  */}
    <aside className='sidebar sidebar-desktop hidden lg:flex fixed top-0 h-screen w-max'>
      Sidebar 
    </aside>

    {/* mobile */}
    <aside className='sidebar sidebar-mobile lg:hidden flex'>
      Sidebar
    </aside>
    
    </>
  )
}

export default Sidebar
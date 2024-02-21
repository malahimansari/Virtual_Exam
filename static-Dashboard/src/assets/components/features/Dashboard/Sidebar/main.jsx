import React from "react";
import { 
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } 
    from "react-icons/bs";

import { FaRegClock } from "react-icons/fa";
import { MdDoneOutline, MdIncompleteCircle } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

function Sidebar({openSidebarToggle, OpenSidebar}){
    return (
        // openSidebarToggle simply means that if true then execute CSS styling, otherwise do nothing.
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className="sidebar-title">
                {/* Add official icon here. */}
                <div className="sidebar-brand">
                    {/* <BsCart3 className="icon_header"/> Quizify */}
                    <img src="{require('/backpack2-fill.svg)')}" alt="Quizify" />
                </div>

                <span className="icon close_icon" onClick={OpenSidebar}>X</span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    {/* <Link></Link> You can use Link autodown */}
                    <a href="">
                        <BsGrid1X2Fill className="icon"/>Dashboard
                    </a>
                </li>

                <li className="sidebar-list-item">
                    {/* <Link></Link> You can use Link autodown */}
                    <a href="">
                        <FaRegClock className="icon"/>Study hours
                    </a>
                </li>

                <li className="sidebar-list-item">
                    {/* <Link></Link> You can use Link autodown */}
                    <a href="">
                        <MdDoneOutline className="icon"/>Courses completed
                    </a>
                </li>

                <li className="sidebar-list-item">
                    {/* <Link></Link> You can use Link autodown */}
                    <a href="">
                        <GoChecklist className="icon"/>Test & practices taken
                    </a>
                </li>

                <li className="sidebar-list-item">
                    {/* <Link></Link> You can use Link autodown */}
                    <a href="">
                        <MdIncompleteCircle className="icon"/>Courses left
                    </a>
                </li>

                <li className="sidebar-list-item">
                    {/* <Link></Link> You can use Link autodown */}
                    <a href="">
                        <BsMenuButtonWideFill className="icon"/>Reports
                    </a>
                </li>

                <li className="sidebar-list-item">
                    {/* <Link></Link> You can use Link autodown */}
                    <a href="">
                        <BsFillGearFill className="icon"/>Setting
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar
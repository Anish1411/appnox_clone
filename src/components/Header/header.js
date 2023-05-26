import React from "react";
import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircle, faGear, faMagnifyingGlass, faShuffle, faXmark, faGrip } from "@fortawesome/free-solid-svg-icons";
import Side2 from "../Third-Side/Side2";
import Side3 from "../fourth-side/Side3";

function Header() {
    return (
        <>
            <div className="main">
                <div className="header">
                    <div className="search_bar">
                        <div className="left-search-div">
                            <FontAwesomeIcon className="allIcons" icon={faMagnifyingGlass} />
                            <p className="search_Text">copy.ai</p>
                        </div>
                        <div className="right-search-div">
                            <FontAwesomeIcon className="icons allIcons" icon={faShuffle} />
                            <FontAwesomeIcon className="icons allIcons" icon={faXmark} />
                        </div>
                    </div>
                    <div className="right-head">
                        <div className="active-div">
                            <span>
                                <FontAwesomeIcon className="allIcons" icon={faCircle} style={{ color: "green" }} />
                            </span>
                            <p>Active</p>
                            <span>
                                <FontAwesomeIcon className="allIcons" icon={faCaretDown} />
                            </span>
                        </div>
                        <p className="que">?</p>
                        <FontAwesomeIcon className="serach-icons allIcons" icon={faGear} />
                        <FontAwesomeIcon className="serach-icons allIcons" icon={faGrip} />
                        <p className="user">A</p>
                    </div>
                </div >
                <div>
                    <Side2 />
                </div>
                <div>
                    <Side3 />
                </div>
            </div>

        </>
    )
}

export default Header;
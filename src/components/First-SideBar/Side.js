import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import first from "../../image/eighth.png"
import sec from "../../image/side_2.png"
import third from "../../image/side1_7.png"
import four from "../../image/side_4.png"
import "./Side.css"

function Side() {
    return (
        <div className="Side">
            <div className="mainSide">
                <div className="menuBarIcon">
                    <FontAwesomeIcon icon={faBars} className="bars" />
                </div>
                <div className="divBottom">
                    <div className="icons1">
                        <img src={first} alt="image" />
                        <p className="SideBar1Text"> Mail</p>
                    </div>
                    <div className="icons1">
                        <img src={sec} alt="image" />
                        <p className="SideBar1Text"> Chat</p>
                    </div>
                    <div className="icons1">
                        <img src={third} alt="image" />
                        <p className="SideBar1Text"> Spaces</p>
                    </div>
                    <div className="icons1">
                        <img src={four} alt="image" />
                        <p className="SideBar1Text"> Meet</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Side;
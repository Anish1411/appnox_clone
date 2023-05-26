import React from "react";
import "./Side2.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import first from "../../image/first.png"
import second from "../../image/second.png"
import third from "../../image/third.png"
import fourth from "../../image/fourth.png"
import fifth from "../../image/fifth.png"
import sixth from "../../image/sixth.png"
import seventh from "../../image/seventh.png"
import eighth from "../../image/eighth.png"
import ninth from "../../image/ninth.png"
import tenth from "../../image/tenth.png"
import eleventh from "../../image/eleventh.png"
import twelth from "../../image/twelth.png"
import thirteen from "../../image/thirteen.png"
import fourteen from "../../image/fourteen.png"



function Side2() {
    return (
        <div className="side2">
            <div className="icons">
                <div className="leftIcon">
                    <img src={sixth} />
                    <img src={second} />
                    <img src={first} />
                    <img src={seventh} />
                    <img src={eighth} />
                    <img src={ninth} />
                    <img src={third} />
                    <img src={fourth} />
                    <img src={fifth} />
                    <img src={tenth} />
                </div>
                <div className="rightIcon">
                    <p>31 of 38</p>
                    <img src={eleventh} />
                    <img src={twelth} />
                </div>
            </div>
            <hr className="hr" />
            <div className="userBar">
                <div className="leftUser">
                    <FontAwesomeIcon className="users search-icons allIcons" icon={faUser} />
                    <div className="mailTo">
                        <p> <span className="bold">Copy.ai </span>&lt; hi@copy.ai &gt; <span className="subs">Unsubscribe</span></p>
                        <p>to me <span>
                            <FontAwesomeIcon className="allIcons" icon={faCaretDown} />
                        </span></p>
                    </div>
                </div>
                <div className="rightUser">
                    <p>oct 13, 2021, 8:27 PM</p>
                    <img src={thirteen} />
                    <img src={fourteen} />
                    <img src={tenth} />
                </div>


            </div>
        </div>
    )
}

export default Side2;
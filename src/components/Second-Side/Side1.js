import React from "react";
import logo from "../../image/Gmail_Logo.png"
import "./Side1.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faPen, faCaretDown, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import first from "../../image/side1_1.png"
import sec from "../../image/side1_2.png"
import third from "../../image/ninth.png"
import four from "../../image/side1_4.png"
import five from "../../image/side1_5.png"
import six from "../../image/side1_6.png"
import seven from "../../image/fifth.png"
import eight from "../../image/side1_7.png"
import nine from "../../image/side1_8.png"
import ten from "../../image/side1_9.png"
import eleven from "../../image/side1_10.png"


function Side1() {
    return (
        <div className="Side1">
            <div className="logo">
                <img src={logo} />
                <p>Gmail</p>
            </div>
            <div className="compose">
                <FontAwesomeIcon icon={faPen} className="pen" />
                <p> Compose</p>
            </div>
            <div className="options">
                <div className="upperOption">
                    <div className="items3">
                        <div className="items2">
                            <img src={first} />
                            <p> Inbox</p>
                        </div>
                        <p>21,990</p>
                    </div>
                    <div className="items2">
                        <img src={sec} />
                        <p>Star</p>
                    </div>
                    <div className="items2">
                        <img src={third} />
                        <p> Snoozed</p>
                    </div>
                    <div className="items2">
                        <img src={four} />
                        <p> Important</p>
                    </div>
                    <div className="items2">
                        <img src={five} />
                        <p> Sent</p>
                    </div>
                    <div className="items3">
                        <div className="items2">
                            <img src={six} />
                            <p> Drafts</p>
                        </div>
                        <p>21,990</p>
                    </div>
                </div>
                <div className="category">
                    <div className="icon">
                        <FontAwesomeIcon className="icon1" icon={faCaretDown} />
                        <img src={seven} />
                    </div>

                    <p> Categories</p>
                </div>
                <div className="categoryOption">
                    <div className="items3">
                        <div className="items2">
                            <img src={eight} />
                            <p> Inbox</p>
                        </div>
                        <p>21,990</p>
                    </div>
                    <div className="items3">
                        <div className="items2">
                            <img src={nine} />
                            <p> Inbox</p>
                        </div>
                        <p>21,990</p>
                    </div>
                    <div className="items3">
                        <div className="items2">
                            <img src={ten} />
                            <p> Inbox</p>
                        </div>
                        <p>21,990</p>
                    </div>
                    <div className="items3">
                        <div className="items2">
                            <img src={eleven} />
                            <p> Inbox</p>
                        </div>
                        <p>21,990</p>
                    </div>
                </div>
                <div className="more">
                    <FontAwesomeIcon className="icon1" icon={faAngleDown} />
                    <p> More</p>
                </div>
                <div className="label">
                    <h4>Labels</h4>
                    <h4>+</h4>
                </div>

            </div>
        </div>
    )
}

export default Side1;
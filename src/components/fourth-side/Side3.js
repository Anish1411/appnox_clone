import React from "react";
import "./Side3.css"
import owner from "../../image/owner.jpg"

function Side3() {
    return (
        <div className="side3">
            <div className="mainDiv">
                <div className="mainDivs">
                    <h3>Say 👋 Hello to SEO enabled</h3>
                    <h1><span className="yamak">Yamak</span>.ai</h1>
                    <p className="firstPara">That's right, you can now use Yamak.ai for making your content SEO optimized and get higher renking on the google.</p>
                    <p>You'll keep getting 10 tokens per day. And unlimited hits on SEO keyword tool.</p>
                    <p>SEO tool is fully <span className="free">FREE. Try now.</span></p>
                    <h1> What else is new?</h1>
                    <p>Since you last tried Yamak.ai, we've added some thrilling new features:</p>
                    <ul>
                        <li>SEO in Google headline and description</li>
                        <li>SEO in Blog intros and section</li>
                        <li>SEO in Blog titles and expander</li>
                    </ul>
                    <p className="lastPara">These new features, and all our copywriting tools, are available to all of our users. SO come back and write more great copy with us for free!</p>
                    <div className="links">
                        <a href="support@yamak.ai">support@yamak.ai</a>
                        <button className="btn" placeholder="">Get Back to Yamak.ai</button>
                    </div>

                    <div className="cbo">
                        <img src={owner} alt="owner" />
                        <div className="cboDetails">
                            <p className="ownerName">Shailendra Sharma</p>
                            <p>CBO</p>
                            <h1><span className="yamak">Yamak</span>.ai</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side3;
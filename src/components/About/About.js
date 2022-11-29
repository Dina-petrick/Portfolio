import "./About.css";
import Award from "../../img/award.png";

const About = () => {
    return(
        <div className = "a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.unsplash.com/photo-1554595666-19ceabf46a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNvZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className = "a-img" />
                </div>
            </div>
            <div className="a-right">
                <div className="a-title">About me</div>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Awards 2021</h4>
                    <p className="a-award-desc">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                        and fugit.
                    </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;
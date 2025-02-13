import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span>{" "}
                            MYSELF
                        </h1>
                        <p className="home-about-body">
                            {" "}
                            Programming is not just a job for me.{" "}
                            <b className="purple">
                                It's a passion and a way to make a difference.
                            </b>{" "}
                            <br /> <br />I have a deep love for coding and have
                            gained expertise in{" "}
                            <i>
                                {" "}
                                <b className="purple">
                                    {" "}
                                    Python and TypeScript.{" "}
                                </b>{" "}
                            </i>{" "}
                            <br /> <br /> My focus is on developing innovative
                            solutions in{" "}
                            <i>
                                {" "}
                                <b className="purple">
                                    {" "}
                                    Web, Mobile, and AI development,{" "}
                                </b>{" "}
                            </i>{" "}
                            striving to push boundaries and create impactful
                            products. <br /> <br /> I am always eager to prove
                            myself and make a difference through my work,
                            leveraging technologies like{" "}
                            <b className="purple"> Node.js </b> and{" "}
                            <i>
                                {" "}
                                <b className="purple">
                                    {" "}
                                    modern frameworks like React.js and Next.js.{" "}
                                </b>{" "}
                            </i>{" "}
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img
                                src={myImg}
                                className="img-fluid"
                                alt="avatar"
                            />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to{" "}
                            <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/phuocnguyen2412"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://viblo.asia/u/nguyen.dev.2412"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/nguyen-huynh-530389170/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.facebook.com/phuocnguyen2412/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillFacebook />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;

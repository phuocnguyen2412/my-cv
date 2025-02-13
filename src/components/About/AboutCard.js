import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "left" }}>
                        Hi, I am{" "}
                        <span className="purple">Huynh Phuoc Nguyen</span>, from{" "}
                        <span className="purple">Danang, Vietnam. </span>
                        Being an undergraduate student majoring in{" "}
                        <span className="purple">Information Technology </span>,
                        I am looking for an internship in the Web Development
                        field in order to gain hands-on experience. I have
                        gathered background knowledge and done some projects in
                        this field, so I extremely desire to work in a
                        professional team. I hope to be offered a chance to
                        apply what I have learnt into a real working environment
                        as well as contribute to business software projects for.
                        Therefore, I want to find a positive, supportive and
                        productive job environment with growth opportunities.
                    </p>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Soumyajit</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;

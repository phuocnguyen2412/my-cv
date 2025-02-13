import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
    SiPycharm,
    SiJupyter,
    SiMongodb,
} from "react-icons/si";

function Toolstack() {
    const stacks = [
        {
            id: 1,
            name: "MacOS",
            icon: <SiMacos />,
        },
        {
            id: 2,
            name: "VS Code",
            icon: <SiVisualstudiocode />,
        },
        {
            id: 3,
            name: "Postman",
            icon: <SiPostman />,
        },
        {
            id: 4,
            name: "Slack",
            icon: <SiSlack />,
        },
        {
            id: 5,
            name: "Vercel",
            icon: <SiVercel />,
        },
        {
            id: 6,
            name: "PyCharm",
            icon: <SiPycharm />,
        },
        {
            id: 7,
            name: "Jupyter",
            icon: <SiJupyter />,
        },
        {
            id: 8,
            name: "Jupyter",
            icon: <SiMongodb />,
        },
    ];
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {stacks.map((stack) => (
                <Col xs={4} md={2} className="tech-icons" key={stack.id}>
                    {stack.icon}
                </Col>
            ))}
        </Row>
    );
}

export default Toolstack;

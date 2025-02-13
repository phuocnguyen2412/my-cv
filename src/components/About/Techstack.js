import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiMysql,
  SiNestjs,
  SiPython,
  SiRedis,
  SiTypescript
} from "react-icons/si";
import {
  TbBrandReactNative
} from "react-icons/tb";

function Techstack() {
    const techstack = [
        {
            id: 1,
            icon: <CgCPlusPlus />,
        },
        {
            id: 2,
            icon: <DiJavascript1 />,
        },
        {
            id: 3,
            icon: <SiTypescript />,
        },
        {
            id: 4,
            icon: <DiNodejs />,
        },
        {
            id: 5,
            icon: <DiReact />,
        },
        {
            id: 6,
            icon: <SiPython />,
        },
        {
            id: 7,
            icon: <DiMongodb />,
        },
        {
            id: 8,
            icon: <SiMysql />,
        },
        {
            id: 9,
            icon: <DiGit />,
        },
        {
            id: 10,
            icon: <DiPython />,
        },
        {
            id: 11,
            icon: <SiRedis />,
        },
        {
            id: 12,
            icon: <TbBrandReactNative />,
        },
        {
            id: 13,
            icon: <SiNestjs />,
        },
        {
            id: 14,
            icon: <DiJava />,
        },
        {
          id: 15,
          icon: <SiExpress />,
      },
    ];
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            {techstack.map((tech) => (
                <Col xs={4} md={2} className="tech-icons" key={tech.id}>
                    {tech.icon}
                </Col>
            ))}
        </Row>
    );
}

export default Techstack;

import React from "react";
import "./Header.css";

import { Container, Row } from "reactstrap";

const Header = () => {
    return (
        <Header className="header">
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src="" alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
        </Header>
    );
};

export default Header;

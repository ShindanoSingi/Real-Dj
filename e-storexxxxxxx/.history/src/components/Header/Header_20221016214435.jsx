import React from "react";
import "./Header.css";

import logo from "../../assets/images/eco-logo.png";

import { Container, Row } from "reactstrap";

const Header = () => {
    return (
        <Header className="header">
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                            <div>
                                <h1>Safi Store</h1>
                            </div>
                        </div>

                        <div className="navigation">
                            <ul className="manu">
                                <li className="nav__item">
                                    <NavLink to={path}>Home</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </Header>
    );
};

export default Header;

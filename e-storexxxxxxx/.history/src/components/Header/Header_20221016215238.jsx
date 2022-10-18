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
                                    <NavLink to={home}>Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to={home}>Shop</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to={home}>Cart</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span>
                                <i class="ri-heart-line" />
                            </span>
                            <span className="cart__icon">
                                <i class="ri-shopping-bag-line" />
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </Header>
    );
};

export default Header;

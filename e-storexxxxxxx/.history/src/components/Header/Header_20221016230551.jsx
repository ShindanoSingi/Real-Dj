import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user.svg";

import { Container, Row } from "reactstrap";

const Header = () => {
    return (
        <header className="header">
            <Container>
                <Row>
                    <div className="nav_wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" className="w-16" />
                            <div>
                                <h1>Safi Store</h1>
                            </div>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                <li className="nav__item">
                                    <NavLink to="home">Home</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="home">Shop</NavLink>
                                </li>
                                <li className="nav__item">
                                    <NavLink to="home">Cart</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="nav__icons">
                            <span className="fav__icon">
                                <i class="ri-heart-line" />
                            </span>
                            <span className="cart__icon">
                                <i class="ri-shopping-bag-line" />
                            </span>
                            <span>
                                <img src={user_icon} alt="" />
                            </span>
                        </div>
                    </div>
                    <div class="mobile__menu">
                        <span>
                            <i class="ri-menu-line" />
                        </span>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;

import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
    const year = new Date().getFullYear();
    return (
        <Helmet title={"Home"}>
            <section class="hero_section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div class="hero_content">
                                <p class="hero_subtitle">
                                    Trending product in {year}
                                </p>
                                <h2>
                                    Make your Interior More Minimalistic &
                                    Modern
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.temporibus molestiae
                                    ratione!
                                </p>
                                <button class="buy_btn">SHOP NOW</button>
                            </div>
                        </Col>
                        <Row lg="6" md="6">
                            <p>dfdfd</p>
                            <p>dsdsdsds</p>
                            <p>ddfdfdfdfd</p>
                        </Row>
                    </Row>
                </Container>
            </section>;
        </Helmet>
    );
};

export default Home;

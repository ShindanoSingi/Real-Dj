import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

const Home = () => {
    return (
        <Helmet title={"Home"}>
            <section class="hero_section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div class="hero_content">
                                <p class="hero_subtitle">Trending</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>;
        </Helmet>
    );
};

export default Home;

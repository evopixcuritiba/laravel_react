import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import lottie404 from '../../components/animations/7774-loading.json'
import {Col, Container, Row} from "reactstrap"

export default function Spinner(){
    const bodyMovieOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: lottie404
    }
    return (
        <Container className={'h-100'}>
            <Row className={'h-100 justify-content-center align-items-center'}>
                <Col md={3}>
                    <ReactBodymovin options={bodyMovieOptions} />
                </Col>
            </Row>
        </Container>
    )
}

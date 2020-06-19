import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import lottie404 from '../../../components/animations/404.json'
import {Col, Container, Row} from "reactstrap"

export default function Page404(){
    const bodyMovieOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: lottie404
    }
    return (
        <Container className={'h-100'}>
            <Row className={'h-100 justify-content-center align-items-center'}>
                <Col md={6}>
                    <ReactBodymovin options={bodyMovieOptions} />
                </Col>
            </Row>
        </Container>
    )
}

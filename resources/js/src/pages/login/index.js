import React from 'react'
import useClass from '../../hooks/add-class-body'
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather'
import {
    Container,
    Col,
    Row,
    Form,
    Input,
    InputGroup,
    Card,
    CardBody,
    Button
} from 'reactstrap'

import ReactBodymovin from 'react-bodymovin'
import loginAnim from '../../../components/animations/login.json'

export default function Login(){
    useClass('login-page')
    const bodyMovieOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: loginAnim
    }
    return (
        <Container className={'h-100'}>
            <Row className={'h-100 justify-content-center align-items-center'}>
                <Col md={10}>
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md={4}>
                                    <ReactBodymovin options={bodyMovieOptions} />
                                </Col>
                                <Col md={8}>
                                    <Form>
                                        <h1>{<Icon.User size={30}/>} Login</h1>
                                        <p>Entre com suas credenciais de acesso</p>
                                        <InputGroup className={'mb-3'}>
                                            <Input type={'email'} name={'email'} placeholder={'E-mail'} />
                                        </InputGroup>
                                        <InputGroup className={'mb-3'}>
                                            <Input type={'password'} name={'password'} placeholder={'Senha'} />
                                        </InputGroup>
                                        <InputGroup className={'mb-3'}>
                                            <Button color={'secondary'}>Login {<Icon.LogIn size={16}/>}</Button>
                                            <Link to={'forgot'}>
                                                <Button color={'link'}>Esqueceu a senha?</Button>
                                            </Link>
                                        </InputGroup>
                                    </Form>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

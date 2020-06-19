import React, {useContext} from 'react'
import useClass from '../../hooks/add-class-body'
import {Controller, useForm} from "react-hook-form"
import {Link} from 'react-router-dom'
import * as Icon from 'react-feather'
import Loader from 'react-loader-spinner'
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
import loginAnim from '../../../components/animations/fingerprint.json'

import {AuthContext} from '../../../components/context/auth'

export default function Login(){
    useClass('login-page')
    const { handleSubmit, control } = useForm()

    const auth = useContext(AuthContext)

    const bodyMovieOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: loginAnim
    }

    function onSubmitLogin(data){
        return auth.login(data)
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
                                    <Form onSubmit={handleSubmit(onSubmitLogin)}>
                                        <h1>{<Icon.Lock size={30}/>} Login</h1>
                                        <p>Entre com suas credenciais de acesso</p>
                                        <InputGroup className={'mb-3'}>
                                            <Controller
                                                control={control}
                                                as={Input}
                                                type={'email'}
                                                name={'email'}
                                                placeholder={'E-mail'}
                                                defaultValue={''}
                                                required
                                            />
                                        </InputGroup>
                                        <InputGroup className={'mb-3'}>
                                            <Controller
                                                control={control}
                                                as={Input}
                                                type={'password'}
                                                name={'password'}
                                                placeholder={'Senha'}
                                                defaultValue={''}
                                                required
                                            />
                                        </InputGroup>
                                        <InputGroup className={'mb-3'}>
                                            <Button disabled={auth.isLoggin} type={'submit'} color={'secondary'}>
                                                {auth.isLoggin ? (
                                                    <Loader type="TailSpin" color="#FFFFFF" height={20} width={20} />
                                                ) : (
                                                    <>Login {<Icon.LogIn size={16}/>}</>
                                                )}
                                            </Button>
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

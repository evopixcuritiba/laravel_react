import React from 'react'
import useClass from '../../hooks/add-class-body'
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

export default function Login(){
    useClass('login-page')
    return (
        <Container className={'h-100'}>
            <Row className={'h-100 justify-content-center align-items-center'}>
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <Form>
                                <h1>Login</h1>
                                <p>Entre com suas credenciais de acesso</p>
                                <InputGroup className={'mb-3'}>
                                    <Input type={'email'} name={'email'} placeholder={'E-mail'} />
                                </InputGroup>
                                <InputGroup className={'mb-3'}>
                                    <Input type={'password'} name={'password'} placeholder={'Senha'} />
                                </InputGroup>
                                <InputGroup className={'mb-3'}>
                                    <Button color={'primary'}>Login</Button>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

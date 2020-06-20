import React from 'react'
import useClass from '../../hooks/add-class-body'
import {Link} from 'react-router-dom'
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

export default function Forgot(){
    useClass('login-page')
    return (
        <Container className={'h-100'}>
            <Row className={'h-100 justify-content-center align-items-center'}>
                <Col md={6}>
                    <Card>
                        <CardBody>
                            <Form>
                                <h1>Recuperar senha</h1>
                                <p>Informe o seu e-mail cadastrado</p>
                                <InputGroup className={'mb-3'}>
                                    <Input type={'email'} name={'email'} placeholder={'E-mail'} />
                                </InputGroup>
                                <InputGroup className={'mb-3'}>
                                    <Button color={'primary'}>Recuperar senha</Button>
                                    <Link to={'login'}>
                                        <Button color={'link'}>Login</Button>
                                    </Link>
                                </InputGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

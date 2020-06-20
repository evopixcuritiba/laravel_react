import React from 'react'
import { Breadcrumb, BreadcrumbItem, Row, Col, Card, CardBody } from 'reactstrap'
import {Link} from "react-router-dom";
import * as Icon from 'react-feather'
import Widget from "../../../components/widget"

export default function Home(){
    return (<>
        <Row className={'mb-3'}>
            <Col>
                <h3>Dashboard</h3>
            </Col>
        </Row>
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem><Link to={'/'}>Dashboard</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Início</BreadcrumbItem>
                </Breadcrumb>
            </Col>
        </Row>
        <Row className={'mb-5'}>
            <Col md={3}>
                <Widget
                    color={'success'}
                    title={'126.2562'}
                    subtitle={'bla bla bla'}
                    icon={<Icon.User size={32}/>}
                />
            </Col>
            <Col md={3}>
                <Widget
                    color={'warning'}
                    title={'126.2562'}
                    subtitle={'bla bla bla'}
                    icon={<Icon.Clipboard size={32}/>}
                />
            </Col>
            <Col md={3}>
                <Widget
                    color={'danger'}
                    title={'126.2562'}
                    subtitle={'bla bla bla'}
                    icon={<Icon.FastForward size={32}/>}
                />
            </Col>
            <Col md={3}>
                <Widget
                    color={'info'}
                    title={'126.2562'}
                    subtitle={'Database'}
                    icon={<Icon.Database size={32}/>}
                />
            </Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        lorem ipsum
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </>)
}

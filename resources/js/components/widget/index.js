import React from 'react'
import {Card, CardBody} from "reactstrap";

export default function Widget({icon, color, title, subtitle}){
    return (
        <Card className={`widget ${color}`}>
            <CardBody>
                <div>
                    <span>{icon}</span>
                    <span>{title}</span>
                </div>
                <div className={'divider'} />
                <span>{ subtitle }</span>
            </CardBody>
        </Card>
    )
}

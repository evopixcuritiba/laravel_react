import React from 'react'
import {Link} from 'react-router-dom'

export default function Page2(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">meu ovo - page 2</div>
                        <div className="card-body">
                            <Link to={'/'}>Voltar para página 1</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

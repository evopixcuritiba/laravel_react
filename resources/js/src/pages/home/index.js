import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";

export default function Home(){
    return (
        <Link to={'/page2'}>Ir para página 2</Link>
    )
}

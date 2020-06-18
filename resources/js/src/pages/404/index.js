import React from 'react'
import ReactBodymovin from 'react-bodymovin'
import lottie404 from '../../../components/animations/404.json'

export default function Page404(){
    const bodyMovieOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: lottie404
    }
    return (
        <div><ReactBodymovin options={bodyMovieOptions} /></div>
    )
}

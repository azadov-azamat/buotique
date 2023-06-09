import React from 'react'
import "../../styles/animation.scss"

export default function Spinner(): JSX.Element {
    return (
        <div className='fallback-spinner app-loader'>
            <div className='loading'>
                <div className='effect-1 effects'></div>
                <div className='effect-2 effects'></div>
                <div className='effect-3 effects'></div>
            </div>
        </div>
    )
}
import React from 'react'
import "../../styles/animation.scss"
import {RefreshProps} from "./anim.props";

export default function Refresh({loading}: RefreshProps): JSX.Element {
    return (
        <div id={"main-page"}>
            <div className={`div-main ${loading}`}>
                {/*<Spinner/>*/}
            </div>
        </div>
    )
}
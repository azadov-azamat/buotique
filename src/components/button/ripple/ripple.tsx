import React from 'react';
import {RippleProps} from "./ripple.props";
import {Button, Menu} from "@material-tailwind/react";
import classes from "../../../styles/button.module.scss"

function Ripple({children, onClick, color, disable = false, outline}: RippleProps) {

    const [coords, setCoords] = React.useState({x: -1, y: -1});
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    React.useEffect(() => {
        if (!isRippling) setCoords({x: -1, y: -1});
    }, [isRippling]);


    return (
        <>
            <button
                disabled={disable}
                className={classes['ripple-button'] + ' ' + classes[`${color}`]}
                onClick={(e: any) => {
                    const rect = e.target.getBoundingClientRect();
                    setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
                    onClick();
                }}
            >
                {outline ?
                    <span className={classes.span}></span> :
                    isRippling ? (
                        <span
                            className={classes.ripple}
                            style={{
                                left: coords.x,
                                top: coords.y
                            }}
                        />
                    ) : (
                        ''
                    )
                }
                <Menu>{children}</Menu>
            </button>
        </>
    )
}

export default Ripple;
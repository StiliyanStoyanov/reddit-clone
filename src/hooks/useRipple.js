/** @jsxImportSource @emotion/react */
import React, {useRef, useState} from "react";
import {css, keyframes} from "@emotion/react";

export function useRipple(duration = 700, scaleGrow = 4, backgroundColor = 'rgba(255, 255, 255, 0.3)', className) {
    const counter = useRef(0);
    const [ripples, setRipples] = useState([]);

    function createRipple(event) {
        const {width, height, left, top} = event.currentTarget.getBoundingClientRect();
        const size = Math.max(width, height)
        const x = event.clientX - left - size / 2
        const y = event.clientY - top - size / 2
        const style = {
            width: size,
            height: size,
            left: x,
            top: y
        }
        const clearRipple = ripple => {
            setRipples(state => state.filter(stateRipple => stateRipple !== ripple))
        }
        const ripple = <span
            key={counter.current}
            css={ripple_box(backgroundColor, duration, scaleGrow)}
            style={style}
            className={className || null}
            onAnimationEnd={() => {
                clearRipple(ripple)
            }}
        />
        setRipples([...ripples, ripple])
        counter.current++;
    }

    return {ripples, createRipple}
}

const ripple_keyframes = scaleGrow => keyframes`
  to {
    transform: scale(${scaleGrow});
    opacity: 0;
  }
`
const ripple_box = (backgroundColor, duration, scaleGrow) => css`
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ${ripple_keyframes(scaleGrow)} ${duration}ms linear;
  background-color: ${backgroundColor};
`
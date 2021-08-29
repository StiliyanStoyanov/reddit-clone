/** @jsxImportSource @emotion/react */
import {css, keyframes} from "@emotion/react";
// Credit to https://github.com/lukehaas/css-loaders Awesome thanks!
export const Spinner = ({absoluteCenter = true, className = null, spinnerRGB = '255, 255, 255'}) => {
    return (
        <div css={relative}>
            <div
                css={
                    theme => [
                        spinner(theme, spinnerRGB),
                        absoluteCenter && absolute_center
                    ]
                }
                className={className}
            />
        </div>
    )
}
const relative = css`position: relative`
const absolute_center = css`position: absolute; left: 50%; transform: translate(-50%, 0);`
export const spinner = (theme, rgb) => css`
  margin: 0 auto;
  font-size: 10px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${spinner_keyframes(rgb)} 1.1s infinite ease;
  transform: translateZ(0);
`
const spinner_keyframes = (rgb) => keyframes`
  0%,
  100% {
    box-shadow:0em -2.6em 0em 0em rgba(${rgb},1),
    1.8em -1.8em 0 0em rgba(${rgb},0.2),
    2.5em 0em 0 0em rgba(${rgb},0.2),
    1.75em 1.75em 0 0em rgba(${rgb},0.2),
    0em 2.5em 0 0em rgba(${rgb},0.2),
    -1.8em 1.8em 0 0em rgba(${rgb},0.2),
    -2.6em 0em 0 0em rgba(${rgb},0.5),
    -1.8em -1.8em 0 0em rgba(${rgb},0.7);
  }
  
  12.5% {
    box-shadow:0em -2.6em 0em 0em rgba(${rgb},0.7),
    1.8em -1.8em 0 0em rgba(${rgb},1),
    2.5em 0em 0 0em rgba(${rgb},0.2),
    1.75em 1.75em 0 0em rgba(${rgb},0.2),
    0em 2.5em 0 0em rgba(${rgb},0.2),
    -1.8em 1.8em 0 0em rgba(${rgb},0.2),
    -2.6em 0em 0 0em rgba(${rgb},0.2),
    -1.8em -1.8em 0 0em rgba(${rgb},0.5);
  }

  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(${rgb},0.5),
    1.8em -1.8em 0 0em rgba(${rgb},0.7),
    2.5em 0em 0 0em rgba(${rgb},1),
    1.75em 1.75em 0 0em rgba(${rgb},0.2),
    0em 2.5em 0 0em rgba(${rgb},0.2),
    -1.8em 1.8em 0 0em rgba(${rgb},0.2),
    -2.6em 0em 0 0em rgba(${rgb},0.2),
    -1.8em -1.8em 0 0em rgba(${rgb},0.2);
  }

  37.5% {
    box-shadow:0em -2.6em 0em 0em rgba(${rgb},0.2),
    1.8em -1.8em 0 0em rgba(${rgb},0.5),
    2.5em 0em 0 0em rgba(${rgb},0.7),
    1.75em 1.75em 0 0em rgba(${rgb},1),
    0em 2.5em 0 0em rgba(${rgb},0.2),
    -1.8em 1.8em 0 0em rgba(${rgb},0.2),
    -2.6em 0em 0 0em rgba(${rgb},0.2),
    -1.8em -1.8em 0 0em rgba(${rgb},0.2);
  }

  50% {
    box-shadow:0em -2.6em 0em 0em rgba(${rgb},0.2),
    1.8em -1.8em 0 0em rgba(${rgb},0.2),
    2.5em 0em 0 0em rgba(${rgb},0.5),
    1.75em 1.75em 0 0em rgba(${rgb},0.7),
    0em 2.5em 0 0em rgba(${rgb},1),
    -1.8em 1.8em 0 0em rgba(${rgb},0.2),
    -2.6em 0em 0 0em rgba(${rgb},0.2),
    -1.8em -1.8em 0 0em rgba(${rgb},0.2);
  }

  62.5% {
    box-shadow:0em -2.6em 0em 0em rgba(${rgb},0.2),
    1.8em -1.8em 0 0em rgba(${rgb},0.2),
    2.5em 0em 0 0em rgba(${rgb},0.2),
    1.75em 1.75em 0 0em rgba(${rgb},0.5),
    0em 2.5em 0 0em rgba(${rgb},0.7),
    -1.8em 1.8em 0 0em rgba(${rgb},1),
    -2.6em 0em 0 0em rgba(${rgb},0.2),
    -1.8em -1.8em 0 0em rgba(${rgb},0.2);
  }

  75% {
    box-shadow:0em -2.6em 0em 0em rgba(${rgb},0.2),
    1.8em -1.8em 0 0em rgba(${rgb},0.2),
    2.5em 0em 0 0em rgba(${rgb},0.2),
    1.75em 1.75em 0 0em rgba(${rgb},0.2),
    0em 2.5em 0 0em rgba(${rgb},0.5),
    -1.8em 1.8em 0 0em rgba(${rgb},0.7),
    -2.6em 0em 0 0em rgba(${rgb},1),
    -1.8em -1.8em 0 0em rgba(${rgb},0.2);
  }

  87.5% {
    box-shadow:0em -2.6em 0em 0em rgba(${rgb},0.2),
    1.8em -1.8em 0 0em rgba(${rgb},0.2),
    2.5em 0em 0 0em rgba(${rgb},0.2),
    1.75em 1.75em 0 0em rgba(${rgb},0.2),
    0em 2.5em 0 0em rgba(${rgb},0.2),
    -1.8em 1.8em 0 0em rgba(${rgb},0.5),
    -2.6em 0em 0 0em rgba(${rgb},0.7),
    -1.8em -1.8em 0 0em rgba(${rgb},1);
  }
`




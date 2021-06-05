/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const About = ({about}) => {
    return (
        <p css={[p]}>
            {about}
        </p>
    );
};
const p = css`
  margin: 0;
  label: community-info-about
`

export default About;

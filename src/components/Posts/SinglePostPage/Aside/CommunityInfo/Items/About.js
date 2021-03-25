/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import ItemContainer from "../Containers/ItemContainer";

const About = ({about}) => {
    return (
        <ItemContainer>
            <p css={[p]}>
                {about}
            </p>
        </ItemContainer>
    );
};
const p = css`
  margin: 0;
  label: community-info-about-p
`

export default About;

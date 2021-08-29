/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import EmptyQueryBackground from "../../shared/EmptyQuery/EmptyQueryBackground";
import {useCustomParams} from "../../../hooks/useCustomRoutes";

const NoPostsByUser = ({type = 'compact', opacity= 0.4, compactLength = 10, cardLength = 3}) => {
    const {username} = useCustomParams();
    return (
        <EmptyQueryBackground type={type} opacity={opacity} compactLength={compactLength} cardLength={cardLength}>
            <div css={message_container}>
                <p>{`hmm... u/${username} hasn't posted anything`}</p>
            </div>
        </EmptyQueryBackground>
    );
};

const message_container = css`
  font-size: 32px;
  font-weight: 700;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 180px;
  z-index: 2;
  opacity: 0.8;
`

export default NoPostsByUser;

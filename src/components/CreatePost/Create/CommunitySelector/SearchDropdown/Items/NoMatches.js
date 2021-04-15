/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMeh} from "@fortawesome/free-solid-svg-icons";

const NoMatches = ({isFetching, isLoading}) => {
    return (
        <div css={[container]}>
            {(isFetching || isLoading)
                ? <p>Fetching communities...</p>
                : <>
                    <p css={[p]}>No communities found</p>
                    <FontAwesomeIcon icon={faMeh}/>
                </>
            }
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  label: no-matches-container
`
const p = css`
  margin: 0 4px;
  label: no-matches
`

export default NoMatches;

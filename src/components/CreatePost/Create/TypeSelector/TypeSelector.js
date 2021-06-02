/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faImage} from "@fortawesome/free-solid-svg-icons/faImage";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import Button from "./Button";

const TypeSelector = () => {
    return (
        <div css={[container]}>
            <Button forForm="post" icon={faFileAlt}>Post</Button>
            <Button forForm="image" icon={faImage}>Image</Button>
            <Button forForm="link" icon={faLink}>Link</Button>
        </div>
    )
}

const container = css`
  display: flex;
  height: 55px;
  margin-bottom: 12px;
  border-radius: inherit;
  label: type-selector-container;
`

export default TypeSelector
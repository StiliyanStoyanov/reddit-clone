/** @jsxImportSource @emotion/react */
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm';
import {css} from "@emotion/react";
// https://github.com/remarkjs/react-markdown#install
// https://github.com/remarkjs/remark-gfm
export const ReactMarkdownGFM = ({children, ...props}) => {
    return (
        <ReactMarkdown
            remarkPlugins={[gfm]}
            components={{
                h1: ({node, children, ...props}) => <h2 css={p_and_headings} {...props} >{children}</h2>,
                p: ({node, ...props}) => <p css={p_and_headings} {...props} />,
                h2: ({node, children, ...props}) => <h2 css={p_and_headings} {...props} >{children}</h2>,
                h3: ({node, children, ...props}) => <h3 css={p_and_headings} {...props} >{children}</h3>,
                h4: ({node, children, ...props}) => <h4 css={p_and_headings} {...props} >{children}</h4>,
                h5: ({node, children, ...props}) => <h5 css={p_and_headings} {...props} >{children}</h5>,
                h6: ({node, children, ...props}) => <h6 css={p_and_headings} {...props} >{children}</h6>,

            }}
            {...props}
        >
            {children}
        </ReactMarkdown>
    )
}

const p_and_headings = css`&:first-of-type, &:last-of-type {
  margin: 0
}
;`

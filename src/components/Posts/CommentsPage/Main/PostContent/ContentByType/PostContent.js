/** @jsxImportSource @emotion/react */
import {ReactMarkdownGFM} from "../../../../../shared/ReactMarkdownGFM/ReactMarkdownGFM";
// const markdown = `A paragraph with *emphasis* and **strong importance**.
//
// > A block quote with ~~strikethrough~~ and a URL: https://reactjs.org.
// [link to website](http://www.website.com)
// * Lists
// * [ ] todo
// * [x] done
// `
const PostContent = ({content, className}) => {
    return (
        <div className={className || null}>
            <ReactMarkdownGFM children={content}/>
        </div>
    );
};

export default PostContent;

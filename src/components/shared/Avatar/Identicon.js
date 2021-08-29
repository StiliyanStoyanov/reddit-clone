/** @jsxImportSource @emotion/react */
import ReactIdenticon from "react-identicons"

// https://github.com/tuhnik/react-identicons
const Identicon = ({string, className, ...rest}) => {
    return (
        <ReactIdenticon className={className || null} string={string} {...rest}/>
    );
};

export default Identicon;

/** @jsxImportSource @emotion/react */
import {type_select_and_fields_container} from "../styles/fields_styles";

const Container = ({children}) => {
    return (
        <div css={[type_select_and_fields_container]}>
            {children}
        </div>
    );
};
export default Container;

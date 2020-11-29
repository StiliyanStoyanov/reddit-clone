/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import SortSelect from "./SortSelect/SortSelect";
import ViewTypeSelect from "./ViewTypeSelect/ViewTypeSelect";

const ViewSelector = ({viewType, setViewType}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
            <SortSelect/>
            <ViewTypeSelect viewType={viewType} setViewType={setViewType}/>
        </div>
    );
};

const container = theme => css`
  display: flex;
  background-color: ${theme.nav.backgroundColor};
  border: 1px solid ${theme.borderColor};
  border-radius: 8px;
  padding: 0 12px;
  margin: 16px 0;
  height: 56px;
`;

export default ViewSelector;

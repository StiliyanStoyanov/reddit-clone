/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import SortSelect from "./SortSelect/SortSelect";
import ViewSelect from "./ViewSelect/ViewSelect";

const ViewSelector = ({view, setView, sort, setSort}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
            <SortSelect sort={sort} setSort={setSort}/>
            <ViewSelect viewType={view} setView={setView}/>
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

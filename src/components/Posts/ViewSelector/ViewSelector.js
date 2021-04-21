/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";
import SortSelect from "./SortSelect/SortSelect";
import ViewSelect from "./ViewSelect/ViewSelect";

const ViewSelector = React.memo(({view, setView, sort, setSort}) => {
    return (
        <div css={[container]}>
            <SortSelect sort={sort} setSort={setSort}/>
            <ViewSelect view={view} setView={setView}/>
        </div>
    );
});

const container = theme => css`
  display: flex;
  background-color: ${theme.background1};
  border: 1px solid ${theme.border1};
  border-radius: 8px;
  padding: 0 12px;
  margin: 16px 0;
  height: 56px;
  label: view-selector
`;

export default ViewSelector;

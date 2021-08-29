/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useFetchCollection} from "../../hooks/useFetchCollection/useFetchCollection";
import {useEffect} from "react";
import {useLocation, useMatch} from "react-router";
import AtoZ from "./AtoZ/AtoZ";
import Categories from "./ShowByCategory/Categories";
import Cards from "./Card/Cards";
import {firestore} from "../../firebase";
import {fetchCollectionActions} from "../../hooks/useFetchCollection/useFetchCollection";
import {Spinner} from "../Loaders/Spinner";
const {setOptions} = fetchCollectionActions

// TODO: Edge case no communities
const ContentContainer = () => {
    const [{data, isLoading, isFetching, isError}, dispatch] = useFetchCollection(null, 10);
    const location = useLocation();
    const {params: {category}} = useMatch('/leaderboards/category/:category') || {params: {category: null}}
    const {params: {letter}} = useMatch('/leaderboards/letter/:letter') || {params: {letter: null}}
    useEffect(() => {
        if (location.pathname === "/leaderboards") {
            dispatch({
                type: setOptions,
                payload: {
                    path: firestore.collection('/communities'),
                    orderBy: 'subscribers',
                    order: 'desc',
                    where: {
                        key: null,
                    }
                }
            });
        } else if (category) {
            dispatch({
                type: setOptions,
                payload: {
                    path: firestore.collection('/communities'),
                    orderBy: 'subscribers',
                    order: 'desc',
                    where: {
                        key: "categories",
                        operator: "array-contains",
                        value: category
                    }
                }
            });
        } else if (letter) {
            dispatch({
                type: setOptions,
                payload: {
                    path: firestore.collection('/communities'),
                    orderBy: 'subscribers',
                    order: 'desc',
                    where: {
                        key: "queryParam",
                        operator: "==",
                        value: letter
                    }
                }
            });
        }
    }, [location.pathname, category, letter, dispatch]);

    return (
        <div css={main_container}>
            <div css={container_az_small}>
                <AtoZ activeLetter={letter}/>
            </div>
            <div css={left_container}>
                <Categories activeCategory={category}/>
            </div>
            <div css={central_container}>
                {isLoading && <Spinner css={{top: '40px'}}/>}
                {!isLoading && data.length === 0 && <div>No Communities</div>}
                <Cards data={data}/>
            </div>
            <div css={right_container}>
                <AtoZ activeLetter={letter}/>
            </div>
        </div>

    );
};
const main_container = css`
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  @media (max-width: 800px) {
    flex-flow: row wrap;
  }
  padding: 8px;
`
const left_container = css`
  flex-basis: 20%;
  flex-grow: 1;
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`
const central_container = css`
  position: relative;
  flex-basis: 60%;
  flex-grow: 1;
`
const right_container = css`
  flex-basis: 20%;
  flex-grow: 1;
  @media (max-width: 800px) {
    display: none;
  }
`
const container_az_small = css`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`

export default ContentContainer;

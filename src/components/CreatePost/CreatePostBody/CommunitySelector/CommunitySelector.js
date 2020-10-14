/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React, {useEffect, useRef, useState} from "react";
import firebase from "../../../../firebase";
import styled from "@emotion/styled";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {css, jsx} from "@emotion/core";
import {usePostDispatch} from "../../../../store/PostStoreProvider";
import {useStore} from "../../../../store/StoreProvider";
import CommunityList from "./CommunityList";
import YourProfileItem from "./YourProfileItem";
import SearchIcon from "./SearchIcon";
import { useTheme } from "emotion-theming";

//TODO: More new code than refactoring done LOL - REFACTOR MORE!
const CommunitySelector = () => {
    const theme = useTheme();
    const {userExtraData: {communitiesFollowed, username}, loadingUserData} = useStore();
    const postDispatch = usePostDispatch();
    const inputRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [focused, setFocused] = useState(false);
    const [queryParamList, setQueryParamList] = useState([]);
    const [[arrowsSelectedCommunity, arrowSelectedIndex], setArrowSelectedCommunity] = useState([null, null]);
    const [userInput, setUserInput] = useState('');
    // Optimization instead of using the store selectedCommunity adding an additional state even though its the same
    // helps to prevent additional re-renders of this component while typing or updating the other fields
    // since only the post dispatch is used and not the the post store provider is not used
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [queriedCommunities, setQueriedCommunities] = useState([]);
    const [queriedCommunitiesFiltered, setQueriedCommunitiesFiltered] = useState([]);
    const [userCommunitiesFiltered, setUserCommunitiesFiltered] = useState([]);
    const communitiesCollection = firebase.firestore().collection('communities');

    useEffect(() => {
        if (!userInput) {
            return;
        }
        //TODO: Optimize filtering triggering
        // Triggers on every keypress and re-renders twice to filter
        // A comparison for difference while filtering before updating the filtered result might help?
        const filterQueriedCommunities = queriedCommunities.filter(community => community.name.startsWith(userInput));
        const filterUserCommunities = communitiesFollowed.filter(community => community.name.startsWith(userInput));
        setUserCommunitiesFiltered(filterUserCommunities);
        setQueriedCommunitiesFiltered(filterQueriedCommunities);
    },[queriedCommunities, communitiesFollowed, userInput, loadingUserData]);
    const handleChange = async (event) => {
        //TODO: Look up Debounce - https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js
        // Adding a loadingState for userExtraData helps but prevents fetching for new communities until after the user data is loaded
        // and then needs a new keypress to trigger the fetch.
        // The reason the loadingState is needed is because we need to filter the userCommunities out of the fetched ones
        // but if the userCommunities are not yet fetched it causes a problem where it stores the community in the others category
        // even though the user is subscribed to this community, this happened when opening the create page
        // and typing instantly in the community search field debounce might help but it is still not a guarantee that this wont happen.
        // this is not as big as of problem if you are coming from another page
        // since the userCommunity list is highly likely to be already fetched in the background.
        // As firebase websocket feature is used to listen for user subscription updates in the firestore database
        // waiting for the userExtraData to fetch on the initial load not optimal since the subscriptions may change
        // and a new loading screen will appear while fetching them. Adding a loadingState to prevent
        // the problem described above seems like a better solution than debouncing
        // but presents some extra renders as well as the problem described above.
        // Since firebase currently cannot fetch based on !not values. the db currently stores the first letter of each community
        // since its really easy to fetch based on exact value parameters
        // (Validate first letter of the user input to be valid letter or number then match it to the firebase queryParam field
        // which is exactly one letter and fetch all the communities matching this letter
        // for this reason there is a query param list because there is no need to fetch again if the same letter is present
        // we have already stored all the communities for this letter in the memory

        setUserInput(event.target.value);
        // Case when the dropdown content is hidden but input is still focused expand the dropdown
        if (!open) {
            setOpen(true);
        }
        // Clean up the arrows selected if it exist on any input because the content will be filtered
        if (arrowsSelectedCommunity) {
            setArrowSelectedCommunity([null, null]);
        }
        //
        if (!event.target.value || loadingUserData) {
            setUserCommunitiesFiltered([]);
            setQueriedCommunitiesFiltered([]);
            return false;
        }
        // check for valid word
        const matchLetter = /[A-Za-z0-9]+/g.exec(event.target.value);
        // if the word is valid proceed
        if (matchLetter) {
            // get the first letter of the word
            const letter = matchLetter[0][0];
            // if the matching letter was already used return
            if (queryParamList.includes(letter)) {
                return false;
            }
            // add the new letter to the query parameters list
            setQueryParamList(prevState => [...prevState, letter]);
            // query for communities based on the new letter
            const query = (await communitiesCollection.where("queryParam", "==", letter).get());
            if (query.empty) {
                return false;
            }
            // filter the result from the query out of the communitiesFollowed by the user
            const queryResult = query.docs.reduce((accumulator, currentQuerySnapshot) => {
                const queriedCommunity = currentQuerySnapshot.data();
                const isUserFollowedCommunity = communitiesFollowed.some(userFollowedCommunity => {
                    return userFollowedCommunity.name === queriedCommunity.name
                });
                if (!isUserFollowedCommunity) {
                    return [...accumulator, queriedCommunity];
                }
                return [...accumulator];
            }, []);
            // update the query list if there are new communities different from the user ones
            if (queryResult.length > 0) {
                // there is not need for filtering since each query fires only once on a letter,
                // so its guaranteed that the new result will be unique
                setQueriedCommunities(prevState => [...prevState, ...queryResult]);
            }
        }
    };
    const selectCommunity = (community) => () => {
        postDispatch({type: "SELECT_COMMUNITY", payload: community});
        setUserInput(community.name);
        setOpen(false);
        setFocused(false);
    }
    const handleBlur = (event) => {
        if (!selectedCommunity) {
            const allCommunities = [...communitiesFollowed, ...queriedCommunities];
            const communityFound = allCommunities.find(community => community.name === event.target.value);
            if (communityFound) {
                postDispatch({type: "SELECT_COMMUNITY", payload: communityFound});
                setUserInput(communityFound.name);
                setSelectedCommunity(communityFound)
            }
        } else if (selectedCommunity && selectedCommunity.name !== userInput) {
            const allCommunities = [...communitiesFollowed, ...queriedCommunities];
            const communityFound = allCommunities.find(community => community.name === event.target.value);
            if (communityFound) {
                postDispatch({type: "SELECT_COMMUNITY", payload: communityFound});
                setUserInput(communityFound.name);
                setSelectedCommunity(communityFound)
            } else {
                postDispatch({type: "CLEAR_COMMUNITY"});
                setSelectedCommunity(null)
            }
        }
        setOpen(false);
        setFocused(false);
        setArrowSelectedCommunity([null, null]);
    }
    const handleFocus = () => {
        setFocused(true);
        setOpen(true);
    }
    const handleCaretMouseDown = (event) => {
        event.preventDefault();
        setOpen(prevState => !prevState);
        if (!focused) {
            setFocused(true);
        }
        return inputRef?.current.focus();
    }
    const handleKeyDown = (event) => {
        if (event.key === "Down" || event.key === "ArrowDown"
            || event.key === "Up" || event.key === "ArrowUp"
            || event.key === "Esc" || event.key === "Escape"
            || event.key === "Enter") {
            event.preventDefault();
            // if no input add the user communities to the array, otherwise add the filtered result to the array
            const allCommunitiesList = [...(userInput.length > 0 ? userCommunitiesFiltered : communitiesFollowed), ...queriedCommunitiesFiltered];
            console.log(allCommunitiesList);
            if (allCommunitiesList.length > 0) {
                switch (event.key) {
                    case "Down": // IE/Edge specific value
                    case "ArrowDown":
                        // Do something for "down arrow" key press.
                        // Go one community down from the current  dropdown community list combined array if its possible
                        if (!arrowsSelectedCommunity) {
                            setArrowSelectedCommunity([allCommunitiesList[0].name, 0]);
                        } else if (arrowsSelectedCommunity) {
                            const lastIndex = allCommunitiesList.length - 1;
                            const nextIndex = arrowSelectedIndex + 1;
                            if (lastIndex >= nextIndex) {
                                setArrowSelectedCommunity([allCommunitiesList[nextIndex].name, nextIndex]);
                            }
                        }
                        break;
                    case "Up": // IE/Edge specific value
                    case "ArrowUp":
                        // Do something for "up arrow" key press.
                        // Go one community up from the current dropdown community list combined array if its possible
                        if (!arrowsSelectedCommunity) {
                            setArrowSelectedCommunity([allCommunitiesList[0].name, 0]);
                        } else if (arrowsSelectedCommunity) {
                            const previousIndex = arrowSelectedIndex - 1;
                            if (previousIndex >= 0) {
                                setArrowSelectedCommunity([allCommunitiesList[previousIndex].name, previousIndex]);
                            }
                        }
                        break;
                    case "Enter":
                        setOpen(false);
                        break;
                    case "Esc": // IE/Edge specific value
                    case "Escape":
                        setOpen(false);
                        break;
                    // Do something for "esc" key press.
                    default:
                        return; // Quit when this doesn't handle the key event.
                }
            }
        }
    }
    return (
        <CommunitySelectorContainer>
            <SearchCommunityContainer open={open}>
                <SearchIcon focused={focused} selectedCommunity={selectedCommunity}/>
                <input
                    css={css`
                        ${searchInputStyle};
                        color: ${theme.color};
                        background-color: ${theme.navBackgroundColor};
                    `}
                    ref={inputRef}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    value={arrowsSelectedCommunity ? arrowsSelectedCommunity : userInput}
                    type="search"
                    placeholder="Choose a community"
                    spellCheck="false"
                />
                <CaretDown icon={faCaretDown} onMouseDown={handleCaretMouseDown}/>
            </SearchCommunityContainer>
            <SearchCommunityDropdownContent open={open}>
                <CommunityList
                    type={"My Communities"}
                    communityList={userInput.length > 0 ? userCommunitiesFiltered : communitiesFollowed}
                    selectCommunity={selectCommunity}
                    currentlySelectedCommunity={arrowsSelectedCommunity ? arrowsSelectedCommunity : userInput}
                />
                <CommunityList
                    type={"Other Communities"}
                    communityList={queriedCommunitiesFiltered}
                    selectCommunity={selectCommunity}
                    currentlySelectedCommunity={arrowsSelectedCommunity ? arrowsSelectedCommunity : userInput}
                />
            </SearchCommunityDropdownContent>
        </CommunitySelectorContainer>
    );
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const CommunitySelectorContainer = styled.div`
  position: relative;
  margin-bottom: 8px;
`
const SearchCommunityContainer = styled.div`
  position:relative;
  display: flex;
  align-items: center;
  height: 40px;
  min-width: 300px;
  width: 50%;
  background-color: ${({theme}) => theme.navBackgroundColor};
  border: 1px solid #343536;
  border-radius: 4px;
  border-bottom-left-radius: ${props => props.open ? 0 : '4px'};
  border-bottom-right-radius: ${props => props.open ? 0 : '4px'};
  padding: 0 12px;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
const CaretDown = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  &:hover {
    cursor:pointer;
  }
`
const searchInputStyle = css`
  outline: none;
  border: none;
  max-height: 26px;
  margin: 0 5px;
  width: 100%;
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration { display: none }
`
const SearchCommunityDropdownContent = styled.div`
  display: block;
  position: absolute;
  max-height: 300px;
  padding: 3px;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  z-index: 3;
  background-color: #1a1a1b;
  overflow: auto;
  width: 50%;
  border: 1px solid #343536;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`

export default CommunitySelector

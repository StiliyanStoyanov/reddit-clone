/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React, {useEffect, useRef, useState} from "react";
import firebase from "../../../../firebase";
import styled from "@emotion/styled";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {css, jsx} from "@emotion/core";
import {useClickOutside} from "../../../../hooks/useClickOutside";
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";
import {useStore} from "../../../../store/StoreProvider";

//TODO: Refactor the entire component into smaller ones for code readability
const CommunitySelector = () => {
    const dropdownRef = useRef();
    const [open, setOpen] = useState(false);
    const {user, userExtraData: {communitiesFollowed, username}} = useStore();
    const {queriedCommunities} = usePostStore();
    const postDispatch = usePostDispatch();
    const [queryParamList, setQueryParamList] = useState([]);
    const [queriedCommunitiesFiltered, setQueriedCommunitiesFiltered] = useState([]);
    const [userCommunitiesFiltered, setUserCommunitiesFiltered] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [dropdownHeight, setDropdownHeight] = useState(0);
    const communitiesCollection = firebase.firestore().collection('communities');
    useEffect(() => {
        if (!userInput) {
            setUserCommunitiesFiltered([]);
            return;
        }
        // TODO: Optimize filtering triggering probably with useMemo
        const filterQueriedCommunities = queriedCommunities.filter(community => {
            return community.name.startsWith(userInput);
        });
        const filterUserCommunities = communitiesFollowed.filter(community => {
            return community.name.startsWith(userInput);
        });
        setUserCommunitiesFiltered(filterUserCommunities);
        setQueriedCommunitiesFiltered(filterQueriedCommunities);
    },[queriedCommunities, communitiesFollowed, userInput]);
    useEffect(() => {
        if (dropdownRef.current && open) {
            setTimeout(() => {
                // Why this works well I don't know
                // https://github.com/facebook/react/issues/13108
                const height = dropdownRef.current.getBoundingClientRect().height
                setDropdownHeight(height >= 300 ? 300 : height)
            }, 1);
        }
    }, [dropdownRef, open])

    const handleClick = () => {
        setOpen(prevState => !prevState);
    };
    const handleChange = async (e) => {
        setUserInput(e.target.value);
        if (!e.target.value) {return false;}
        const match = /[A-Za-z0-9]/g.exec(e.target.value)
        if (match) {
            if (queryParamList.includes(match[0])) {return false;}
            const query = (await communitiesCollection.where("queryParam", "==", match[0]).get());
            if (query.empty) {
                setQueryParamList(prevState => [...prevState, match[0]]);
                return null;
            }
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
            postDispatch({type: "SET_QUERY_RESULT", payload: queryResult});
            setQueryParamList(prevState => [...prevState, match[0]]);
        }
    }

    const selectCommunity = (event) => {
        setUserInput(event.target.textContent);
        postDispatch({type: "SELECT_COMMUNITY", payload: event.target.textContent});
        setOpen(false);
    }

    const onClickOutside = () => {setOpen(false)};
    useClickOutside(dropdownRef, onClickOutside, open);
    return (
        <CommunitySelectorContainer>
            <SearchCommunityContainer>
                {open ? <SearchIcon icon={faSearch}/> :
                    <span css={css`width: 24px; height: 20px; border: 1px dashed cornflowerblue; border-radius: 50%`}/>}
                <InputSearch
                    onClick={handleClick}
                    onChange={handleChange}
                    value={userInput}
                    type="search"
                    placeholder="Choose a community"
                    spellCheck="false"
                />
                <CaretDown icon={faCaretDown} onClick={handleClick}/>
            </SearchCommunityContainer>
            <SearchCommunityDropdownContent active={open} dropdownHeight={dropdownHeight} ref={dropdownRef}>
                <div css={css({
                    backgroundColor: '#1a1a1b',
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "0"
                })}>
                    <div css={css({paddingLeft: '5px', userSelect: "none"})}>Your Profile</div>
                    <div css={css({display: "flex", alignItems: "center", cursor: "pointer", padding: "5px"})}>
                        <div css={css({
                            width: '40px',
                            height: '40px',
                            backgroundColor: 'blue',
                            borderRadius: '5px',
                            border: 0
                        })}/>
                        <div css={css({paddingLeft: '5px'})}>u/{username}</div>
                    </div>
                    {communitiesFollowed && communitiesFollowed.length > 0 &&
                    <>
                        <div>My Communities</div>
                        {userCommunitiesFiltered.length === 0 && communitiesFollowed.map(community => {
                            return (
                                <div css={myCommunitiesContainerCss} key={community.name} onClick={selectCommunity}>
                                    <img css={myCommunitiesImageCss} src={community.imageUrl} alt="NOT FOUND"/>
                                    <div css={css`padding-left: 5px;`}>
                                        <div css={css`font-size: 16px`}>{community.name}</div>
                                        <div css={css`font-size: 12px; color: darkgray`}>{community.membersCount.toLocaleString()} members</div>
                                    </div>
                                </div>
                            );
                        })}
                        {userCommunitiesFiltered.length > 0 && userCommunitiesFiltered.map(community => {
                            return (
                                <div css={myCommunitiesContainerCss} key={community.name} onClick={selectCommunity}>
                                    <img css={myCommunitiesImageCss} src={community.imageUrl} alt="NOT FOUND"/>
                                    <div css={css`padding-left: 5px;`}>
                                        <div css={css`font-size: 16px`}>{community.name}</div>
                                        <div css={css`font-size: 12px; color: darkgray`}>{community.membersCount.toLocaleString()} members</div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                    }

                    {userInput && queriedCommunitiesFiltered.length > 0 &&
                    <>
                        <div>Other Communities</div>
                        {queriedCommunitiesFiltered.map(community => {
                            return (
                                <div css={myCommunitiesContainerCss} key={community.name} onClick={selectCommunity}>
                                    <img css={myCommunitiesImageCss} src={community.imageUrl} alt="NOT FOUND"/>
                                    <div css={css`padding-left: 5px;`}>
                                        <div css={css`font-size: 16px`}>{community.name}</div>
                                        <div css={css`font-size: 12px; color: darkgray`}>{community.membersCount.toLocaleString()} members</div>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                    }
                </div>
            </SearchCommunityDropdownContent>
        </CommunitySelectorContainer>
    );
}
const myCommunitiesContainerCss = css`
  display: flex;
  align-items: center;
  width: 100%;
`
const myCommunitiesImageCss = css`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%; 
`

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
  padding: 0 12px;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
const SearchIcon = styled(FontAwesomeIcon)`
  height: 22px;
  width: 22px;
`
const CaretDown = styled(FontAwesomeIcon)`
  height: 20px;
  width: 20px;
  &:hover {
    cursor:pointer;
  }
`
const InputSearch = styled.input`
  outline: none;
  border: none;
  max-height: 26px;
  margin: 0 5px;
  width: 100%;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.navBackgroundColor};
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration { display: none }

`
const SearchCommunityDropdownContent = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  height: ${props => props.dropdownHeight};
  position: absolute;
  z-index: 3;
  background-color: dimgray;
  overflow: auto;
  width: 50%;
  border: 1px solid;
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`

export default CommunitySelector

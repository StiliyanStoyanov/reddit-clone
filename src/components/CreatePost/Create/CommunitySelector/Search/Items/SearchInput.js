/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef, useState} from "react";
import SearchCaretDown from "./SearchCaretDown";
import {useDebouncedCallback} from "use-debounce";
import {useCommunitySelectorDispatch, useCommunitySelectorStore} from "../../CommunitySelector";
import {communitySelectorActions} from "../../../../../../hooks/useCommunitySelector/communitySelectorReducer";
import {createPostStoreActions, usePostDispatch} from "../../../../../../store/CreatePostStoreProvider";
const {updateInput, openDropdown, closeDropdown} = communitySelectorActions
const {setCommunity} = createPostStoreActions

const SearchInput = () => {
    const inputRef = useRef(null);
    const svgRef = useRef(null);
    const postDispatch = usePostDispatch();
    const {dispatch, highlightMethods} = useCommunitySelectorDispatch();
    const {highlight, communities, subscriptions} = useCommunitySelectorStore();
    const {moveNext, movePrevious, clearHighlight} = highlightMethods
    const handleChange = useDebouncedCallback(event => {
        clearHighlight();
        dispatch({type: updateInput, payload: {event, userInput: event.target.value}});
    }, 200)

    const [keys] = useState(["ArrowDown", "ArrowUp", "Enter", "Escape"]);
    const [ArrowDown, ArrowUp, Enter, Esc] = keys

    const handleKeyDown = event => {
        if (keys.some(key => key === event.key)) {
            event.preventDefault();
            switch (event.key) {
                case ArrowDown: {
                    moveNext(event);
                    if (highlight.content) {
                        inputRef.current.value = highlight.content.id
                    }
                    break;
                }
                case ArrowUp: {
                    movePrevious(event);
                    if (highlight.content) {
                        inputRef.current.value = highlight.content.id
                    }
                    break;
                }
                case Enter: {
                    inputRef.current.blur();
                    dispatch({type: closeDropdown});
                    break;
                }
                case Esc: {
                    clearHighlight();
                    dispatch({type: closeDropdown});
                    break;
                }
                default:
                    break;
            }
        }
    }

    const handleBlur = event => {
        if (event.relatedTarget !== svgRef.current) {
            if (!highlight.content) {
                const searchOthers = communities.find(community => {
                    return community.name === inputRef.current.value
                });
                const searchSubscriptions = subscriptions.find(subscription => {
                    return subscription.name === inputRef.current.value
                });

                if (searchOthers || searchSubscriptions) {
                    postDispatch({
                        type: setCommunity,
                        payload: {
                            community: searchSubscriptions ? searchSubscriptions : searchOthers
                        }
                    });
                } else {
                    postDispatch({type: setCommunity, payload: {community: null}});
                }
            } else {
                inputRef.current.value = highlight.content.id;
                postDispatch({type: setCommunity, payload: {community: highlight.content}});
                clearHighlight();
            }
            dispatch({type: closeDropdown});
        }
    }
    const handleFocus = event => {
        if (event.relatedTarget !== svgRef.current) {
            dispatch({type: openDropdown});
        }
    }
    return (
        <>
            <input
                css={input}
                ref={inputRef}
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                type="search"
                placeholder="Choose a community"
                spellCheck="false"
            />
            <SearchCaretDown inputRef={inputRef} svgRef={svgRef}/>
        </>
    );
};

const input = theme => css`
  color: ${theme.color1};
  background-color: ${theme.background1};
  outline: none;
  border: none;
  max-height: 26px;
  margin: 0 5px;
  width: 100%;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none
  }

  label: search-input
`;


export default SearchInput;

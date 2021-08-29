/** @jsxImportSource @emotion/react */
import {useMemo, useRef, useState} from "react";
import {useClickOutside} from "../../../hooks/useClickOutside";
import ReactFocusLock from "react-focus-lock";
import {dropdown_content, dropdown_content_visible} from "../../../styles/dropdown_styles";
import {menu_input} from "../styles/searchable_styles/lists_styles";
import GenericList from "./Lists/GenericList";
import SubscriptionsList from "./Lists/SubscriptionsList";
import {useSubscriptionsStore} from "../../../store/SubscriptionsStoreProvider";
import useHighlight from "../../../hooks/useHighlight";
import {text_overflow_ellipsis} from "../../../styles/general_styles";
import SearchableButton from "./SearchableButton/SearchableButton";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";
import ModeratingList from "./Lists/ModeratingList";

const Searchable = () => {
    const inputRef = useRef();
    const containerRef = useRef();
    const ignoreFocus = useRef(false);
    const {subscriptions, administrated} = useSubscriptionsStore();
    const {user} = useUserStore();
    const [visible, setVisible] = useState(false);
    const favourites = useMemo(() => subscriptions.filter(sub => sub.isFavourite), [subscriptions]);
    const [userInput, setUserInput] = useState("");
    const {highlight, movePrevious, moveNext, clearHighlight, setHighlight, addToRefs} = useHighlight();
    const [keys] = useState(["ArrowDown", "ArrowUp", "Enter", "Escape"]);
    const [ArrowDown, ArrowUp, Enter] = keys

    const toggleDropdown = event => {
        if (visible) {
            setUserInput("");
            clearHighlight(event);
        }
        setVisible(prevState => !prevState);
    }
    const closeDropdown = event => {
        setUserInput("");
        clearHighlight(event);
        setVisible(false);
    }
    const handleFocus = event => {
        if (!ignoreFocus.current && event.relatedTarget !== inputRef.current) {
            setVisible(prevState => !prevState);
        }
    }

    const handleSelectClick = event => {
        const {content} = highlight.current
        if (content) closeDropdown(event)
    }
    const handleKeyDown = event => {
        if (event.key === "Tab") {
            closeDropdown(event)
        }
        if (keys.some(key => key === event.key)) {
            event.preventDefault();
            switch (event.key) {
                case ArrowDown: return moveNext(event);
                case ArrowUp: return movePrevious(event);
                case Enter: {
                    const {ref} = highlight.current
                    if (ref) ref.click();
                    break;
                }
                default: break;
            }
        }
    }
    const handleChange = event => {
        setUserInput(event.target.value);
    }
    useClickOutside(containerRef, closeDropdown, visible);
    if (!user) return null;
    return (
        <div ref={containerRef} css={{label: 'searchable-dropdown'}}>
            <SearchableButton ignoreFocus={ignoreFocus} handleFocus={handleFocus} toggleDropdown={toggleDropdown} />
            <div css={[dropdown_content, visible && dropdown_content_visible]}>
                <ReactFocusLock disabled={!visible} returnFocus={true}>
                    <input
                        css={[menu_input]}
                        spellCheck="false"
                        placeholder="Filter"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        ref={inputRef}
                    />
                </ReactFocusLock>
                <div css={text_overflow_ellipsis} onClick={handleSelectClick}>
                    <GenericList
                        heading={"general"}
                        userInput={userInput}
                        addToRefs={addToRefs}
                        setHighlight={setHighlight}
                        clearHighlight={clearHighlight}
                    />
                    <ModeratingList
                        list={administrated}
                        heading={"moderating"}
                        userInput={userInput}
                        addToRefs={addToRefs}
                        setHighlight={setHighlight}
                        clearHighlight={clearHighlight}
                    />
                    <SubscriptionsList
                        list={favourites}
                        heading={"favourites"}
                        userInput={userInput}
                        addToRefs={addToRefs}
                        setHighlight={setHighlight}
                        clearHighlight={clearHighlight}
                    />
                    <SubscriptionsList
                        list={subscriptions}
                        heading={"my communities"}
                        userInput={userInput}
                        addToRefs={addToRefs}
                        setHighlight={setHighlight}
                        clearHighlight={clearHighlight}
                    />
                </div>
            </div>
        </div>

    );
};

export default Searchable;

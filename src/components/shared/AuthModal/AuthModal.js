/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React, {useCallback, useRef} from "react";
import {
    useAuthModalDispatch,
    useAuthModalStore,
    authModalActions
} from "../../../store/AuthModalStoreProvider";
import {useClickOutside} from "../../../hooks/useClickOutside";
import useCreatePortal from "../../../hooks/useCreatePortal";
import ReactFocusLock from "react-focus-lock";
import Heading from "./Heading";
import FormSelect from "./FormSelect";
import FormsWrapper from "./FormsWrapper";
import CloseButton from "./CloseButton";
import {pageOverlay} from "../../../styles/general_styles";
const {openModal, closeModal} = authModalActions

const AuthModal = () => {
    const {isOpen} = useAuthModalStore();
    const dispatch = useAuthModalDispatch();
    const formContainerRef = useRef();
    const {Portal} = useCreatePortal({id: 'auth-modal'});
    const closeModalCb = useCallback(event => {
        dispatch({type: closeModal, payload: {event}});
    }, [dispatch])
    const openModalCb = useCallback(event => {
        dispatch({type: openModal, payload: {event}})
    }, [dispatch]);

    useClickOutside(formContainerRef, closeModalCb, isOpen);
    return (
        <>
            <button onClick={openModalCb}>Open Modal</button>
            {isOpen && (
                <Portal>
                    <div css={[pageOverlay(`rgba(0, 0, 0, 0.5)`, 99)]}>
                        <div ref={formContainerRef} css={[formContainer]}>
                            <ReactFocusLock disabled={!isOpen} returnFocus={true}>
                                <CloseButton closeModal={closeModalCb}/>
                                <Heading/>
                                <FormSelect/>
                                <FormsWrapper/>
                            </ReactFocusLock>
                        </div>
                    </div>
                </Portal>
            )}
        </>

    );
};
const formContainer = theme => css`
  min-width: 340px;
  max-width: 440px;
  position: absolute;
  top: 22%;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${theme.background1};
  padding: 30px 20px;
  border-radius: 8px;
  label: auth-modal-form-container
`

export default AuthModal;
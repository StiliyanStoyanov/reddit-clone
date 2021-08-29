/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useEffect, useRef} from "react";
import {
    useAuthModalDispatch,
    useAuthModalStore,
} from "../../../store/AuthModal/AuthModalProvider";
import {useClickOutside} from "../../../hooks/useClickOutside";
import useCreatePortal from "../../../hooks/useCreatePortal";
import ReactFocusLock from "react-focus-lock";
import Heading from "./Heading";
import FormSelect from "./FormSelect";
import FormsWrapper from "./FormsWrapper";
import CloseButton from "./CloseButton";
import {page_overlay} from "../../../styles/general_styles";
import {closeModal} from "../../../store/AuthModal/authModalActions";

const AuthModal = () => {
    const containerRef = useRef();
    const {Portal} = useCreatePortal({id: 'auth-modal'});
    const {isOpen} = useAuthModalStore();
    const dispatch = useAuthModalDispatch();
    const close = () => dispatch(closeModal());

    useEffect(() => {
        if (!isOpen) return;
        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden"
        return () => {
            body.style.overflow = null
        }
    }, [isOpen]);

    useClickOutside(containerRef, close, isOpen);
    return (
        <>
            {isOpen && (
                <Portal>
                    <div css={[page_overlay(99)]}>
                        <div ref={containerRef} css={[container]}>
                            <ReactFocusLock disabled={!isOpen} returnFocus={true}>
                                <CloseButton closeModal={close}/>
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
const container = theme => css`
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
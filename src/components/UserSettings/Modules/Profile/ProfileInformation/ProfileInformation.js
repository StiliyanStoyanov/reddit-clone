/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import SubPanelHeading from "../../../ModulesItems/SubPanelHeading";
import DescriptionContainer from "../../../ModulesItems/Field/DescriptionContainer";
import DescriptionHeading from "../../../ModulesItems/Field/DescriptionHeading";
import Description from "../../../ModulesItems/Field/Description";
import {firestore} from "../../../../../firebase";
import {useUserStore} from "../../../../../store/UserStore/UserStoreProvider";
import {toast} from "react-toastify";
import {useState} from "react";
import TextareaAutosize from "react-textarea-autosize";

const ProfileInformation = () => {
    const {user, about} = useUserStore();
    const [currentAbout, setCurrentAbout] = useState(about);
    const hasChanged = currentAbout !== about;

    const handleCancel = () => setCurrentAbout(about);
    const handleChange = event => setCurrentAbout(event.target.value);
    const handleSave = event => {
        firestore.doc(`users/${user.uid}`).update('about', currentAbout)
            .then(() => {
                toast.success('About information updated')
            })
            .catch(err => {
                console.log(err);
                toast.error('Failed to update about')
        })
    }

    return (
        <div>
            <SubPanelHeading>Profile information</SubPanelHeading>
            <DescriptionContainer>
                <DescriptionHeading>About</DescriptionHeading>
                <Description>A brief description of yourself shown on your profile.</Description>
            </DescriptionContainer>
            <div css={css`margin-top: 8px; margin-bottom: 64px; position: relative`}>
                <TextareaAutosize
                    css={textarea}
                    onChange={handleChange}
                    minRows={6}
                    placeholder="About (optional)"
                    value={currentAbout}
                    name="about"
                    id="about"
                />
                {hasChanged &&
                <>
                    <button css={cancel_button} type="button" onClick={handleSave}>cancel</button>
                    <button css={save_button} type="button" onClick={handleSave}>save</button>
                </>}
            </div>
        </div>
    );
};
const buttons_base = css`
  
`
const cancel_button = css`
  position: absolute;
  bottom: -20px;
  left: 0;
`
const save_button = css`
  position: absolute;
  bottom: -20px;
  left: 60px;
`
const textarea = theme => css`
  width: 100%;
  background-color: transparent;
  padding: 8px;
  margin-bottom: 8px;
  color: ${theme.colorGlobal};
  border-color: ${theme.border1};
  &:focus-visible {
    outline: 0;
    border-color: ${theme.colorHighlight1};
  }
  border-radius: 4px;
  resize: vertical;
  min-height: 22px
`

export default ProfileInformation;


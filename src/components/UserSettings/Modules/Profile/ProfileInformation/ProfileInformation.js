/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import SubPanelHeading from "../../../ModulesItems/SubPanelHeading";
import DescriptionContainer from "../../../ModulesItems/Field/DescriptionContainer";
import DescriptionHeading from "../../../ModulesItems/Field/DescriptionHeading";
import Description from "../../../ModulesItems/Field/Description";
import {firestore} from "../../../../../firebase";
import {useUserStore} from "../../../../../store/UserStoreProvider";
import {toast} from "react-toastify";

const ProfileInformation = () => {
    const {user} = useUserStore();

    const handleAboutSubmit = event => {
        firestore.doc(`users/${user.uid}`).update('about', event.target.value)
            .then(() => {
                toast.dark('🚀 About information updated')
            })
            .catch(err => {
                toast.error(err.message)
            })
    }
    return (
        <div css={css`display: block;`}>
            <SubPanelHeading>Profile information</SubPanelHeading>
            <DescriptionContainer>
                <DescriptionHeading>About</DescriptionHeading>
                <Description>A brief description of yourself shown on your profile.</Description>
            </DescriptionContainer>
            <div css={css`margin-top: 8px;`}>
                <textarea
                    placeholder="About (optional)"
                    css={textArea}
                    name="about" id="about" cols="30" rows="10"
                />
                <button css={css`margin-bottom: 64px;`} type="button" onClick={handleAboutSubmit}>update</button>
            </div>
        </div>
    );
};
const textArea = css`
  width: 100%;
  background-color: transparent;
  padding: 8px;
  margin-bottom: 8px;
  color: white;
  border-radius: 4px;
  resize: vertical;
  min-height: 22px
`

export default ProfileInformation;


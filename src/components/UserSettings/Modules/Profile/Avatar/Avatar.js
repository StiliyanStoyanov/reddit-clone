/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import SubPanelHeading from "../../../ModulesItems/SubPanelHeading";
import DescriptionContainer from "../../../ModulesItems/Field/DescriptionContainer";
import DescriptionHeading from "../../../ModulesItems/Field/DescriptionHeading";
import Description from "../../../ModulesItems/Field/Description";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudUploadAlt} from "@fortawesome/free-solid-svg-icons/faCloudUploadAlt";
import {useUserStore} from "../../../../../store/UserStore/UserStoreProvider";
import {validateImage} from "../../../../../utils/validateImage";
import {toast} from "react-toastify";
import {useRef, useState} from "react";
import ProfileAvatar from "../../../../shared/Avatar/ProfileAvatar";
import {uploadAvatar, getAvatarDownloadURL} from "../../../../../apis/storage-api";
import {updateAvatarUrl} from "../../../../../apis/user-api";
import FileInput from "../../../../shared/FileInput";

const Avatar = () => {
    const {user} = useUserStore();
    const inputRef = useRef();
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async event => {
        const file = event.target.files[0];
        if (!file) return;

        const [,imageError] = await validateImage(file);
        if (imageError) return toast.error(imageError.message);

        setUploading(true);
        const [,uploadError] = await uploadAvatar(user.uid, file);
        if (uploadError) return console.error(imageError);

        const [url, getUrlError] = await getAvatarDownloadURL(user.uid);
        if (getUrlError) return console.error(getUrlError);

        const [,updateUrlError] = await updateAvatarUrl(user.uid, url);
        if (updateUrlError) console.error(updateUrlError);
        setUploading(false);
    }
    return (
        <div>
            <SubPanelHeading>Avatar</SubPanelHeading>
            <DescriptionContainer>
                <DescriptionHeading>Upload Avatar</DescriptionHeading>
                <Description>Images must be .png or .jpg format</Description>
            </DescriptionContainer>
            <div css={container}>
                <ProfileAvatar size={80}/>
                <FileInput handleFileChange={handleFileChange}>
                    Upload Avatar <FontAwesomeIcon icon={faCloudUploadAlt}/>
                </FileInput>
            </div>
        </div>
    );
};
const container = css`margin-top: 16px; display: flex; align-items: center`;

export default Avatar;


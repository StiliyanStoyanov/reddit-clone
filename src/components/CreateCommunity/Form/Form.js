/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import CommunityNameInput from "./InputFields/CommunityNameInput";
import SelectTopics from "./InputFields/Topics/SelectTopics";
import CommunityDescriptionInput from "./InputFields/CommunityDescriptionInput";
import SubmitInput from "./InputFields/SubmitInput";
import {useUserStore} from "../../../store/UserStoreProvider";
import {useForm} from "react-hook-form";

const Form = () => {
    const {user} = useUserStore();
    const {register, control, handleSubmit, setError, formState, setValue} = useForm();
    const {errors} = formState

    const onSubmit = async data => {
        // TODO: Submit community with cloud function
    };

    return (
        <form css={form} onSubmit={handleSubmit(onSubmit)}>
            <CommunityNameInput
                register={register}
                error={errors.communityName}
            />
            <SelectTopics
                register={register}
                control={control}
                setError={setError}
                setValue={setValue}
                error={errors.primaryTopic || errors.selectedOptions}
            />
            <CommunityDescriptionInput
                register={register}
                error={errors.descriptionText}
            />
            <SubmitInput/>
        </form>
    );
};

const form = css`
  display: block;
  max-width: 600px;
  padding-right: 10px;
`

export default Form;

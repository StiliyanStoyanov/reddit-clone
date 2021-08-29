/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import CommunityNameInput from "./InputFields/CommunityNameInput";
import SelectTopics from "./InputFields/Topics/SelectTopics";
import CommunityDescriptionInput from "./InputFields/CommunityDescriptionInput";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";
import {useForm} from "react-hook-form";
import FormButton from "../../shared/Buttons/FormButton";
import {functions} from "../../../firebase";
import {toast} from "react-toastify";
import {Spinner} from "../../Loaders/Spinner";
import {useNavigate} from "react-router";
import {useSubscriptionsDispatch, subscriptionsActions} from "../../../store/SubscriptionsStoreProvider";
const {addAdministrated, addSubscription} = subscriptionsActions

const Form = () => {
    const subscriptionsDispatch = useSubscriptionsDispatch();
    const {user} = useUserStore();
    const navigate = useNavigate();
    const {register, control, handleSubmit, setError, formState, setValue} = useForm();
    const {isSubmitting, errors} = formState;

    const onSubmit = async data => {
        if (!user) {
            return toast.info('Only authenticated users are able to create a community');
        }
        // TODO: Submit community with cloud function
        const createCommunity = functions.httpsCallable('createCommunity');
        const {communityName, communityDescription, primaryTopic, options} = data
        const community = {
            id: communityName,
            name: communityName,
            about: communityDescription,
            primaryTopic: primaryTopic,
            options: options,
        }
        await createCommunity(data).then(({data}) => {
            subscriptionsDispatch({type: addAdministrated, payload: data})
            subscriptionsDispatch({type: addSubscription, payload: data})
            navigate(`/e/${communityName}`)
        }).catch(e => {
            console.error(e);
            toast.error(e.message);
        })
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
                error={errors.communityDescription}
            />
            {isSubmitting && <Spinner/>}
            <FormButton
                css={form_button}
                type={'submit'}
                disabled={isSubmitting}
            >
                Submit
            </FormButton>
        </form>
    );
};
const form = css`
  display: block;
  max-width: 600px;
  padding-right: 10px;
`
const form_button = css`
  display: block;
  width: 140px;
  margin: 40px auto 8px;
`

export default Form;

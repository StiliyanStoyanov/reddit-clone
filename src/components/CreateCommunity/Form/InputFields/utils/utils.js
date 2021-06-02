import {validateCommunityName} from "../../../../../utils/validateCommunityName";

export const rules = {
    communityName: {
        required: {value: true, message: "Community name is required"},
        minLength: {value: 3, message: "Community name must be at least 3 characters long"},
        maxLength: {value: 24, message: "Community name cannot exceed 24 characters"},
        validate: validateCommunityName
    },
    communityDescription: {
        required: {value: true, message: "Description is required"}
    },
    communityPrimaryTopic: {
        required: {value: true, message: "A primary topic is required please select one"}
    }
}

export const descriptions = {
    communityName: 'Community names including capitalization cannot be changed',
    communityTopics: 'This will help relevant users find your community.',
    communityDescription: 'This is how new members come to understand your community.'
}
export const tooltips = {
    communityName: "Community name must be between 3 and 24 characters. The only special character allowed is underscore",
    communityTopics: 'At least one main topic must be selected'
}
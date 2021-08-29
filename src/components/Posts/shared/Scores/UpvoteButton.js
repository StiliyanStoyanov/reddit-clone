/** @jsxImportSource @emotion/react */
import {useTheme} from "@emotion/react";
import {arrow_svg_active, arrow_svg_base, scores_button} from "../../../../styles/scores_styles";
import {rotate} from "../../../../styles/general_styles";
import ArrowSvg from "./ArrowSvg";
import {useUserStore} from "../../../../store/UserStore/UserStoreProvider";
import {useAuthModalDispatch} from "../../../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../../../store/AuthModal/authModalActions";
import {useScoresDispatch, scoresActions} from "../../../../store/ScoresStoreProvider";

const {updateScore} = scoresActions

const UpvoteButton = ({initialScores, score, debouncedScore}) => {
    const theme = useTheme();
    const {scoresRed} = theme
    const {user} = useUserStore();
    const scoresDispatch = useScoresDispatch();
    const authModalDispatch = useAuthModalDispatch();

    const handleUpvoteClick = event => {
        if (!user) return authModalDispatch(openModal());
        // Starts 0
        // On upvote set +1
        // On downvote set -1
        // Starts -1
        // On upvotes set +2
        // On downvote set +1
        // Starts 1
        // On upvotes set -1
        // On downvote set -2
        if (score.score === 0) {
            debouncedScore(1);
            scoresDispatch({type: updateScore, payload: {score, amount: 1, initialScores}});
        } else if (score.score === 1) {
            debouncedScore(0);
            scoresDispatch({type: updateScore, payload: {score, amount: -1, initialScores}});
        } else if (score.score === -1) {
            debouncedScore(1);
            scoresDispatch({type: updateScore, payload: {score, amount: 2, initialScores}});
        }

    };

    return (
        <button
            css={[scores_button(theme, scoresRed)]}
            onClick={handleUpvoteClick}
        >
            <ArrowSvg css={[
                arrow_svg_base, rotate(180),
                score.score === 1 && arrow_svg_active(scoresRed)
            ]}/>
        </button>
    );
};

export default UpvoteButton;

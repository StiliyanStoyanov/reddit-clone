/** @jsxImportSource @emotion/react */
import {useTheme} from "@emotion/react";
import {arrow_svg_active, arrow_svg_base, scores_button} from "../../../../styles/scores_styles";
import ArrowSvg from "./ArrowSvg";
import {useUserStore} from "../../../../store/UserStore/UserStoreProvider";
import {useAuthModalDispatch} from "../../../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../../../store/AuthModal/authModalActions";
import {useScoresDispatch, scoresActions} from "../../../../store/ScoresStoreProvider";
const {updateScore} = scoresActions

const DownvoteButton = ({initialScores, score, debouncedScore}) => {
    const theme = useTheme();
    const {scoresBlue} = theme
    const {user} = useUserStore();
    const scoresDispatch = useScoresDispatch();
    const authModalDispatch = useAuthModalDispatch();
    const handleDownvoteClick = event => {
        if (!user) return authModalDispatch(openModal());
        // Starts -1
        // On up set +2
        // On down set +1
        // Starts 1
        // On up set -1
        // On down set -2
        // Starts 0
        // On up set +1
        // On down set -1
        if (score.score === 0) {
            scoresDispatch({type: updateScore, payload: {score, amount: -1, initialScores}});
            debouncedScore(-1);
        } else if (score.score === 1) {
            scoresDispatch({type: updateScore, payload: {score, amount: -2, initialScores}});
            debouncedScore(-1);
        } else if (score.score === -1) {
            scoresDispatch({type: updateScore, payload: {score, amount: 1, initialScores}});
            debouncedScore(0);
        }
    }

    return (
        <button
            css={[scores_button(theme, scoresBlue)]}
            onClick={handleDownvoteClick}
        >
            <ArrowSvg css={[
                arrow_svg_base,
                score.score === -1 && arrow_svg_active(scoresBlue)
            ]}/>
        </button>
    );
};

export default DownvoteButton;

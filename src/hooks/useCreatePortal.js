import {useCallback, useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import {css} from "@emotion/react";

const useCreatePortal = ({id}) => {
    const portalEl = useMemo(() => {
        const element = document.createElement('div');
        element.setAttribute('id', id);
        const portalStyles = css`position: absolute; left: 0; top: 0; width: 100%;`
        element.style = portalStyles.styles
        return element;
    }, []);
    useEffect(() => {
        document.body.appendChild(portalEl);
        return () => {
            document.body.removeChild(portalEl);
        };
    }, [portalEl]);

    const Portal = useCallback(
        ({ children }) => {
            return createPortal(children, portalEl);
        },
        [portalEl]
    );
    return {Portal}
};

export default useCreatePortal;

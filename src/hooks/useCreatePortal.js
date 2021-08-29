import {useCallback, useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import {css} from "@emotion/react";

const useCreatePortal = ({id}) => {
    const portalEl = useMemo(() => {
        const element = document.createElement('div');
        element.setAttribute('id', id);
        return element;
    }, [id]);
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

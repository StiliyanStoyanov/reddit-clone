import {useCallback, useEffect, useMemo, useState} from "react";
import { createPortal } from "react-dom";
import {useClickOutside} from "./useClickOutside";

export function usePortal({id, closeOnOutsideClickRef}) {
    const [isOpen, setOpen] = useState(false);
    const portalElRef = useMemo(() => {
        const element = document.createElement('div');
        element.setAttribute('id', id);
        return element;
    }, [id]);
    const closePortal = useCallback((e) => {
        setOpen(false);
    }, [])
    const openPortal = useCallback((e) => {
        setOpen(true);
    }, []);
    useEffect(() => {
        document.body.appendChild(portalElRef);
        return () => {
            document.body.removeChild(portalElRef);
        };
    }, [portalElRef]);

    useClickOutside(closeOnOutsideClickRef, closePortal, isOpen);
    const portalPropsToExpose = useMemo(() => {
        return {
            isOpen,
            openPortal,
            closePortal,
        }
    }, [isOpen, closePortal, openPortal, portalElRef]);
    const Portal = useCallback(
        ({ children }) => {
            return createPortal(children, portalElRef);
        },
        [portalElRef]
    );
    return {...portalPropsToExpose, Portal}
}
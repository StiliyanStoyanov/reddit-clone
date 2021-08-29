import {useEffect} from "react";
import {useNavigate} from "react-router";

const useRedirect = (to, redirect=false) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (redirect) {
            navigate(to);
        }
    }, [redirect, navigate]);

    return redirect;
};

export default useRedirect;

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useEffect, useMemo, useState} from "react";
import {firestore} from "../firebase";

const useListener = (path, limit) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const location = useMemo(() => {
        return limit ? firestore.collection(path).limit(limit) : firestore.collection(path);
    }, [path, limit]);

    useEffect(() => {
        const unsubscribe = location.onSnapshot(snapshot => {
            setData(snapshot);
        }, err => {
            setError(err);
        });
        return () => {
            unsubscribe();
        };
    }, [path, limit]);
};

const container = theme => css`

`

export default useListener;

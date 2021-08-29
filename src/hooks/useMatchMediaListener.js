// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
// https://dev.to/yanns1/how-to-render-different-components-based-on-screen-size-2p35
// https://betterprogramming.pub/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
import {useEffect, useState} from "react";
export const useMatchMediaListener = (minOrMax = 'max', size = 1000) => {
    const [mql, setMql] = useState(window.matchMedia(`(${minOrMax}-width: ${size}px)`));

    useEffect(() => {
        mql.addEventListener('change', setMql);
        return () => {
            mql.removeEventListener('change', setMql)
        };
    }, [minOrMax, size]);

    return mql
}
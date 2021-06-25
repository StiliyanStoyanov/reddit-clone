import {matchPath, matchRoutes, useLocation, createRoutesFromChildren} from "react-router";
import {createContext, useContext, useMemo, useRef} from "react";
// https://github.com/ReactTraining/react-router/blob/6e13acf6b9c0101bcffb67a236f29226c18c2a6b/packages/react-router/index.tsx#L502
// https://github.com/ReactTraining/react-router/issues/7117
const RouteContext = createContext({
    outlet: null,
    params: ({}),
    pathname: '',
    route: null
});
export function CustomRoutes({basename = '', excludePath = null, children}) {
    let routes = createRoutesFromChildren(children);
    return useCustomRoutes(routes, basename, excludePath)
}

export const useCustomRoutes = (routes = [], basename = '', excludePath = null) => {
    let {
        route: parentRoute,
        pathname: parentPathname,
        params: parentParams

    } = useContext(RouteContext);
    basename = basename ? joinPaths([parentPathname, basename]) : parentPathname;
    let location = useLocation();
    let currentLocation = useRef(location);

    let excluded = typeof excludePath === "string" ? matchPath(excludePath, location.pathname) : null

    if (!excluded && currentLocation.current.key !== location.key) currentLocation.current = location


    let current = currentLocation.current;
    let matches = useMemo(() => matchRoutes(routes, current, basename), [
        routes,
        current,
        basename
    ]);

    if (!matches) return null;

    return matches.reduceRight((outlet, { params, pathname, route }) => {
        return (
            <RouteContext.Provider
                children={route.element}
                value={{
                    outlet,
                    params: ({ ...parentParams, ...params }),
                    pathname: joinPaths([basename, pathname]),
                    route
                }}
            />
        );
    }, null);
}
export function useCustomParams() {
    return useContext(RouteContext).params;
}

const normalizeSlashes = (path) => path.replace(/\/\/+/g, '/');
const joinPaths = (paths) => normalizeSlashes(paths.join('/'));




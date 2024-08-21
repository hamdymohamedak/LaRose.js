import React, { createContext, useState, useContext, useEffect } from "react";

const RouterContext = createContext();

export const useRouter = () => useContext(RouterContext);

export const RoseRouter = ({ children, customStyles = "" }) => {
    const [route, setRoute] = useState(window.location.pathname);

    const navigate = (path) => {
        if (path !== route) {
            setRoute(path);
            window.history.pushState({}, '', path);
        }
    };

    useEffect(() => {
        const handlePopState = () => setRoute(window.location.pathname);
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    return (
        <>
            <style>{`
                .route {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }

                .route-active {
                    opacity: 1;
                    transform: translateY(0);
                }

                ${customStyles}
            `}</style>
            <RouterContext.Provider value={{ route, navigate }}>
                {children}
            </RouterContext.Provider>
        </>
    );
};

export const Route = ({ path, element }) => {
    const { route } = useRouter();
    return (
        <div className={`route ${route === path ? 'route-active' : ''}`}>
            {route === path ? element : null}
        </div>
    );
};

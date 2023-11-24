import React from "react";

interface DrawerContextProps {
    children: React.ReactElement;
}

export const MenuDrawerContext = React.createContext({ isDrawerOpen: false, toggleIsDrawerOpen: () => {}});

export const DrawerContext = (props: DrawerContextProps) => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleIsDrawerOpen = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const drawerValue = {
        isDrawerOpen,
        toggleIsDrawerOpen,
    };

    return (
        <MenuDrawerContext.Provider value={drawerValue}>
            {props.children}
        </MenuDrawerContext.Provider>
    );
}
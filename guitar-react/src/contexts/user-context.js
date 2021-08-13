import React from 'react';

export const UserContext = React.createContext({
    logged: 'false',
    handleLogin: () => { },
    handleLogout: () => { },
});  
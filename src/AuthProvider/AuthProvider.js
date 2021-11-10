import React, { createContext } from 'react';
import UseHooks from '../UseHooks/UseHooks';

export const authContext = createContext()

const AuthProvider = ({ children }) => {

    const auth = UseHooks()
    return (
        <authContext.Provider value={auth}>
        {children}
      </authContext.Provider>
    );
};

export default AuthProvider;
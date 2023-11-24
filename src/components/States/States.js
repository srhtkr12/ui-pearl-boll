import React, { useState } from 'react';
import { HandleChange } from '../Actions/HandleChange';

export const UserState = () => {
    const [user, setUser] = useState();
    return (
        <>
        
        </>
    )
};

export const useSalerState = () => {
    const [saler, setSaler] = useState();
    return { saler, setSaler };
};
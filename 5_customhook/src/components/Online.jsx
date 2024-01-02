import React from 'react';
import useOnlineStatus from '../hooks/UseOnlineStatus';

export default function Online() {
    const isOnline = useOnlineStatus(navigator.onLine);

    return (
        <p>
            Atualmente, você está {isOnline ? 'Online' : 'Offline'}.
        </p>
    );
}

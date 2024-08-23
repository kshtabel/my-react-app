import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // Importieren Sie den AuthContext

const UserBoard = () => {
    const [userData, setUserData] = useState(null);
    const { token } = useAuth(); // Verwenden Sie den AuthContext

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('api/data', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setUserData(response.data);
            } catch (error) {
                console.error('Fehler beim Abrufen der Benutzerdaten: ', error);
            }
        };

        fetchUserData();
    }, [token]);

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Willkommen {userData.name}</h1>
            <p>Hier sind Ihre Benutzerdaten: {userData.message}</p>
        </div>
    );
};

export default UserBoard;

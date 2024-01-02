import { useEffect } from 'react'

export default function UserInfo({ userInfo }) {
    useEffect(() => {
        document.title = `${userInfo.name} - ${userInfo.job}`
    }, [userInfo])

    return (
        <div>
            <h1>Nome: {userInfo.name}</h1>
            <p>Profissão: {userInfo.job}</p>
        </div>
    );
}
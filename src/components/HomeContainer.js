import React, {useState, useEffect} from 'react';
import ProfileCard from './ProfileCard'



const HomeContainer = () => {

    const [name, setName] = useState("")
    
    useEffect(() => {
        fetch('/geohunt').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => setName(data.name))
    }, [])

    return (
        <>
            <ProfileCard name={name}></ProfileCard>
        </>
    )
}

export default HomeContainer
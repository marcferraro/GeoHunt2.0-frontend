import React, { useState }  from 'react';

const NewUserForm = ({setName}) => {
    const [form, setForm] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const reqObj = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: form})
        }

        fetch('/users', reqObj)
        .then(resp => resp.json())
        .then(user => {
            console.log(user)
            setName(user.name)
            setForm("")
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={form} onChange={(e) => setForm(e.target.value)}></input>
                <input type='submit'></input>
            </form> 
        </>
    )
}

export default NewUserForm
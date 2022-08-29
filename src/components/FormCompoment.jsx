import React, { useState } from 'react'

const FormCompoment = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [list, setLista] = useState([])
    const saveUser = (e) => {
        e.preventDefault()//Prevent defaul behavior of get method 
        //Validations
        if (!name.trim()) {
            alert('Please, input name')
            return
        }
        if (!lastname.trim()) {
            alert('Please, input lastname')
            return
        }
        //Save object in list
        setLista(
            [
                ...list,
                { name: name, lastname: lastname }
            ]
        )
        //Clear states
        setName('')
        setLastname('')
        //Clear inputs
        e.target.reset()

    }

    //Delete object of list
    const deleteUser = () => {
        setLista(
            [
                ...list,
                { name: name, lastname: lastname }
            ]
        )

        remainingArr = objArr.filter((name, lastname) => data.name != );
    }


    return (
        <div>
            <hr />
            <h2>Registration Form</h2>
            <form onSubmit={saveUser}>
                <input type="text"
                    placeholder='User name'
                    className='form-control m-3'
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                    placeholder='User lastname'
                    className='form-control m-3'
                    onChange={(e) => setLastname(e.target.value)}
                />
                <div className='d-grid gap2'>
                    <button type='submit' className='m-3 btn btn-outline-info'>Save</button>
                </div>
            </form>
            <hr />
            <h2>List of registred users</h2>
            <ul>
                {
                    list.map((item, index) => (<li key={index}>{item.name} {item.lastname}
                        <button type='submit' onClick={() => deleteUser()} className='m-3 btn btn-outline-danger'>Delete</button>
                    </li>))
                }
            </ul>
            <hr />
        </div>
    )
}

export default FormCompoment
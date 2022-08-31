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
    /*    const deleteUser = (e) => {
            setLista(
                [
                    ...list,
                    { name: name, lastname: lastname }
                ]
            )
    
            remainingArr = objArr.filter((name, lastname) => data.name != );
        }
    */

    return (
        <div className="container-main container">
            <hr />
            <h2 className="secundary-titles">Registration Form</h2>
            <div className="form-container container-fluid">
                <form onSubmit={saveUser} className="container">
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
                        <button type='submit' className='btn btn btn-success m-3'>Save</button>
                    </div>
                </form>
            </div>

            <hr />

            <h2 className="secundary-titles">List of registred users</h2>
            <div className="list-container">
                <ul className="list-group">
                    {
                        list.map((item, index) => (
                            <li className='list-element mb-2 bg-light text-dark' key={index}>
                                <div className="col-8"><span>{item.name} {item.lastname}</span></div>
                                <div className="col-4"><button type='submit' id="btn-delete" className='btn btn-danger m-3' color="danger">Delete</button></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <hr />
        </div>
    )
}
export default FormCompoment
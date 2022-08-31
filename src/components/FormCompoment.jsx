import React, { useState } from 'react'

const FormCompoment = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [list, setList] = useState([])
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
        setList(
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

    //Delete object in list
    const deleteUser = (index) => {
        //Get items to remove
        let nameToRemove = list[index].name;
        let lastnameToRemove = list[index].lastname;
        //Remove elemento from list and update state
        setList(list.filter(user => user.name !== nameToRemove && user.lastname !== lastnameToRemove))
    }


    return (
        /*Begin of main container*/
        <div className="container-main container col-12 col-sm-12 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <hr />
            <h2 className="secundary-titles">Registration Form</h2>
            {/* Begin of form container */}
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
                        <button type='submit' className='btn-success btn btn btn-success m-3'>Save</button>
                    </div>
                </form>
            </div>
            {/* End of form container */}
            <hr />
            <h2 className="secundary-titles">List of registred users</h2>
            {/* Begin of list container */}
            <div className="list-container container col-12 col-sm-8 col-md-8 col-lg-7 col-xl-7 col-xxl-7">
                <ul className="list-group container">
                    {
                        list.map((item, index) => (
                            <li className='list-element mb-2 bg-light text-dark' key={index}>
                                <div className="col-8"><span>{item.name} {item.lastname}</span></div>
                                <div key={index} className="col-4"><button type='submit' onClick={() => deleteUser(index)} id="btn-delete" className='btn-delete btn btn-danger m-1' color="danger">Delete</button></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* End of list container */}
            <hr />
        </div>
        /*End of main container*/
    )
}
export default FormCompoment
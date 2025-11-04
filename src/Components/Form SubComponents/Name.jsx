import React from 'react'

const Name = ({ updateForm }) => {
    return (
        <>
            <label>Name</label>
            <div className="form-row">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={updateForm}
                />
                <input
                    type="text"
                    name="middleInitial"
                    placeholder="Middle Initial"
                    onChange={updateForm}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={updateForm}
                />
            </div>
        </>
    )
}

export default Name
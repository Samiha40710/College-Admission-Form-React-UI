import React from 'react'

const Gender = ({updateForm}) => {
    return (
        <div className='radio-group'>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={updateForm}
                />
                Male
            </label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={updateForm}
                />
                Female
            </label>
        </div>
    )
}

export default Gender
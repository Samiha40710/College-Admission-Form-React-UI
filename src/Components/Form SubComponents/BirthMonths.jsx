import React from 'react'

const BirthMonths = ({ updateForm }) => {

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <select name="birthMonth" onChange={updateForm}>
            <option value="">Please select a month</option>
            {months.map((month, index) => (
                <option key={index} value={month}>
                    {month}
                </option>
            ))}
        </select>
    )
}

export default BirthMonths
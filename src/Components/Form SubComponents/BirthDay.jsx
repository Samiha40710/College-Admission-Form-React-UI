import React from 'react'

const BirthDay = ({ updateForm }) => {

    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(i);
    }

    return (
        <select name="birthDay" onChange={updateForm}>
            <option value="">Please select a day</option>
            {days.map((day) => (
                <option key={day} value={day}>
                    {day}
                </option>
            ))}
        </select>
    )
}

export default BirthDay
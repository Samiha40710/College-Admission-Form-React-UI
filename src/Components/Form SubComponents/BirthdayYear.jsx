import React from 'react'

const BirthdayYear = ({ updateForm }) => {

    const years = [];
    for (let year = 2025; year >= 1920; year--) {
        years.push(year);
    }

    return (
        <select name="birthYear" onChange={updateForm}>
            <option value="">Please select a year</option>
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    )
}

export default BirthdayYear
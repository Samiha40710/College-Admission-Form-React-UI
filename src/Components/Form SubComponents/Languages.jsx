import React from 'react'

const Languages = ({ updateForm }) => {
    return (
        <>
            <label>Do you speak any languages other than English?</label>
            <div className="radio-group">
                <label>
                    <input type="radio" name="speakLanguages" value="yes" onChange={updateForm} /> Yes
                </label>
                <label>
                    <input type="radio" name="speakLanguages" value="no" onChange={updateForm} /> No
                </label>
            </div>
        </>
    )
}

export default Languages
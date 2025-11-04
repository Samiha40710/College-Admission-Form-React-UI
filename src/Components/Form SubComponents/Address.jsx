import React from 'react'

const Address = ({updateForm}) => {
    return (
        <>
            <h3>Mailing Address</h3>
            <input
                type="text"
                name="address1"
                placeholder=""
                onChange={updateForm}
            />
            <label>Street Address</label>
            <input
                type="text"
                name="address2"
                placeholder=""
                onChange={updateForm}
            />
            <label>Street Address Line 2</label>
            <div className="form-row">
                <input 
                    type="text" 
                    name="city" 
                    placeholder="City" 
                    onChange={updateForm} 
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State/Province"
                    onChange={updateForm}
                />
                <input
                    type="text"
                    name="postalCode"
                    placeholder="Postal/Zip Code"
                    onChange={updateForm}
                />
            </div>
        </>
    )
}

export default Address
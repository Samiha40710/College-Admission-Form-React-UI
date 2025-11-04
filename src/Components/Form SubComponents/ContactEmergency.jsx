import React from 'react'

const ContactEmergency = ({updateForm}) => {
    return (
        <>
            <h3>Emergency Contact</h3>
            <div className="form-row">
                <input 
                    type="text" 
                    name="emergencyFirst" 
                    placeholder="First Name" 
                    onChange={updateForm} 
                />
                <input 
                    type="text" 
                    name="emergencyLast" 
                    placeholder="Last Name" 
                    onChange={updateForm} 
                />
                <input 
                    type="text" 
                    name="emergencyRelation" 
                    placeholder="Relationship" 
                    onChange={updateForm} 
                />
            </div>
            <div className="form-row">
                <div className='contactemergency'>
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="emergencyEmail" 
                        placeholder="" 
                        onChange={updateForm} 
                    />
                    <label>example@example.com</label>
                </div>
                <div className='contactemergency'>
                    <label>Phone Number</label>
                    <input 
                        type="tel" 
                        name="emergencyPhone" 
                        placeholder="(000) 000-0000" 
                        onChange={updateForm} 
                    />
                    <label>Please enter a valid phone number.</label>
                </div>
            </div>
        </>
    )
}

export default ContactEmergency
import React from 'react'

const ContactInfo = ({ updateForm }) => {
    return (
        <div className='contactinfo'>
            <div className='contactinfo-item'>
                <label>Phone</label>
                <input 
                    type="tel" 
                    name="phone" 
                    placeholder="(000) 000-0000" 
                    onChange={updateForm} 
                />
            </div>
            <div className='contactinfo-item'>
                <label>E-mail Address</label>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="ex: myname@example.com" 
                    onChange={updateForm} 
                />
            </div>
        </div>
    )
}

export default ContactInfo
import React from 'react'
import { useState } from 'react'
import Name from './Form SubComponents/Name';
import BirthMonths from './Form SubComponents/BirthMonths';
import BirthDay from './Form SubComponents/BirthDay';
import BirthdayYear from './Form SubComponents/BirthdayYear';
import Gender from './Form SubComponents/Gender';
import Countries from './Form SubComponents/Countries';
import ContactInfo from './Form SubComponents/ContactInfo';
import Address from './Form SubComponents/Address';
import ContactEmergency from './Form SubComponents/ContactEmergency';
import Languages from './Form SubComponents/Languages';

const Form = () => {

    const [formData, setFormData] = useState({})

    const submitForm = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    const updateForm = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <>
            <div className='form-container'>
                <h1>COLLEGE ADMISSIONS FORM</h1>
                <p>Enter your admission information below</p>
                <hr />
                <form onSubmit={submitForm}>
                    <Name updateForm={updateForm} />
                    <label>Birth Date</label>
                    <div className='form-row'>
                        <BirthMonths updateForm={updateForm} />
                        <BirthDay updateForm={updateForm} />
                        <BirthdayYear updateForm={updateForm} />
                    </div>
                    <label>Gender</label>
                    <div className='form-row'>
                        <Gender updateForm={updateForm} />
                        <Countries updateForm={updateForm} />
                    </div>
                    <div className='form-row'>
                        <ContactInfo updateForm={updateForm} />
                    </div>
                    <Address updateForm={updateForm} />
                    <ContactEmergency updateForm={updateForm} />
                    <Languages updateForm={updateForm} />
                    <hr />
                    <button type="submit">Next</button>
                </form>
            </div>
        </>
    )
}

export default Form
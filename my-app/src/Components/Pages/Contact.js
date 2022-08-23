import Header from "../Header";
import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', phone:'', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, phone, email, message } = formState;


    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div class="hero-cta">
            <Header title="Contact Us:"/>
           
                <div>
                    <h3>Reach out for an estimate!</h3>
                    <form id="contact-form" action="https://formsubmit.co/neonhousesigns@gmail.com" method="post">
                        <div>
                            <label for="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label for="phone">Phone:</label>
                            <input type="text" name="Phone" defaultValue={phone} onBlur={handleChange} />
                        </div>
                        <div>
                            <label for="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label for="message">Message:</label>
                            <div>
                                <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                            </div>
                            
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            
        </div>
    )
}




export default Contact;
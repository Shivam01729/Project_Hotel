// Contact.js or ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',  
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields');
            return;
        }

        // Define parameters for the EmailJS template
        const templateParams = {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
        };

        // Send email using EmailJS
        emailjs.send(
            'service_d7qx6ci',         // Replace with your EmailJS Service ID
            'template_4s0i78h',        // Replace with your EmailJS Template ID
            templateParams,
            'mT4k_tNtGIeBKN2_y'          // Replace with your EmailJS Public Key
        ).then((response) => {
            console.log('Email successfully sent:', response.status, response.text);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
        }).catch((error) => {
            console.error('Email sending failed:', error);
            alert('Failed to send message, please try again later.');
        });
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', paddingTop: '200px' }}>
            <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                    />
                </label>
                <label>
                    Contact Number:
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', fontSize: '16px', minHeight: '100px' }}
                    />
                </label>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                        Submit
                    </button>
                </div>
                {submitted && <p style={{ color: 'green', textAlign: 'center' }}>Thank you for contacting us!</p>}
            </form>
        </div>
    );
}

export default ContactForm;

import React, { useState } from 'react';

const FormExample = () => {
    // State to hold form input values
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mealOption: '',
        song: '',
        message: '',
    });

    // Event handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform form validation or submit data here
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <h1>Respondez S'il Vous plait</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Meal Option:
                    <select id="mealOption" name="mealOption">
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </select>
                </label>
                <br/>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Song Suggestions:
                    <input
                        type="text"
                        name="song"
                        value={formData.song}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
                <label>
                    Message:
                    <input
                        type="text"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormExample;

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
        <div className="rsvp-form-container">
            <h1 className="rsvp-title">RSVP</h1>

            <div className="rsvp-form-submit">
                <form onSubmit={handleSubmit}>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label>First Name: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder={"Your first name(s)"}
                                required="true"
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label> Last Name: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder={"Your last name(s)"}
                                required="true"
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label> Meal Option: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <select id="mealOption" name="mealOption">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </select>
                        </div>
                    </div>
                    <br/>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label> Email: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder={"Your Email"}
                                required="true"
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label> Song Suggestions: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <input
                                type="text"
                                name="song"
                                value={formData.song}
                                onChange={handleInputChange}
                                placeholder={"Suggest us a song you would like played! (Optional)"}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label> Additonal Message: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder={"Any additional questions or messages you want us to know? (Optional)"}
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="rsvp-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
);
};

export default FormExample;

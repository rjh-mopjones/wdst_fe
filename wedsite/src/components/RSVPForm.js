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

    const [additionalFormData, setAdditionalFormData] = useState([]);

    // Event handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleNestedInputChange = (event) => {
        const {name, value} = event.target;
        const index = event.target.dataset.index
        let data = [...additionalFormData]
        data[index][name] = [value]
        setAdditionalFormData(data)
    };

    const handleAddPerson = (event) => {
        let newPersonData = {
            firstName: '',
            lastName: '',
            mealOption: '',
        }
        setAdditionalFormData([
            ...additionalFormData,
            newPersonData
        ]
        )
    };
    const handleDeletePerson = (event) => {
        const index = event.target.dataset.index
        let data = [...additionalFormData]
        data.splice(index, 1)
        setAdditionalFormData(data)
        console.log("DELETE: " + index)
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform form validation or submit data here
        formData.additionalRSVP = additionalFormData;
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
                        <div className="rsvp-nested-respondents">
                            {additionalFormData.map((input, index) => {
                                    return (
                                        <div className="rsvp-nested-respondent-wrapper" key={index}>
                                            <div className="rsvp-nested-respondent" key={index}>
                                                <div className={"rsvp-delete-person-button-div"}>
                                                    <button type="button" onClick={handleDeletePerson}
                                                        data-index={index} className={"rsvp-delete-person-button"}>
                                                        &#10006;
                                                    </button>
                                                </div>
                                                <br/>
                                                <div className="rsvp-row">
                                                    <div className="rsvp-col-25">
                                                        <label>First Name: </label>
                                                    </div>
                                                    <div className="rsvp-col-75">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            value={additionalFormData[index].firstName}
                                                            onChange={handleNestedInputChange}
                                                            placeholder={"Your first name(s)"}
                                                            required="true"
                                                            data-index={index}
                                                        />
                                                    </div>
                                                </div>
                                                <br/>
                                                <div className="rsvp-row">
                                                    <div className="rsvp-col-25">
                                                        <label>Last Name: </label>
                                                    </div>
                                                    <div className="rsvp-col-75">
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            value={additionalFormData[index].lastName}
                                                            onChange={handleNestedInputChange}
                                                            placeholder={"Your last name(s)"}
                                                            required="true"
                                                            data-index={index}
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
                                            </div>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                        <div className="rsvp-add-person-button-div">
                            <button type="button" onClick={handleAddPerson} className="rsvp-add-person-button">I want to
                                RSVP for another Person
                            </button>
                        </div>
                    </div>
                    <div className="rsvp-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormExample;

import React, { useState } from 'react';

const FormExample = () => {
    // State to hold form input values
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mealOption: '',
        song: '',
        message: '',
        attendance: 'false',
    });

    const [additionalFormData, setAdditionalFormData] = useState([]);
    const [isRsvpActive, setRsvpActive] = useState(false)

    // Event handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
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
            fullName: '',
            attendance: '',
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

    const handleReveal = (event) => {
        if (event.target.id === "yes") {
            setRsvpActive(true)
        } else {
            setRsvpActive(false)
        }

    }

    return (
        <div className="rsvp-form-container">
            <h1 className="rsvp-title">RSVP</h1>
            <div className="rsvp-form-submit">
                <form onSubmit={handleSubmit}>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label>Full Name: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                placeholder={"Your full name"}
                                required="true"
                            />
                        </div>
                    </div>
                    <br/>
                    <div className="rsvp-row">
                        <div className="rsvp-col-25">
                            <label>Are You Coming?: </label>
                        </div>
                        <div className="rsvp-col-75">
                            <div className="rsvp-radio-buttons">
                                <input type="radio" id="yes" name="attendance" value="yes" onClick={handleReveal}/>
                                    <label htmlFor="yes" className="rsvp-radio-label">Yes</label>
                                <input type="radio" id="no" name="attendance" value="no" onClick={handleReveal}/>
                                    <label htmlFor="no" className="rsvp-radio-label">No</label>
                                <br/>
                            </div>
                        </div>
                    </div>
                    {isRsvpActive && (
                        <div id="rsvp-reveal">
                            <br/>
                            <div className="rsvp-row">
                                <div className="rsvp-col-25">
                                    <label> Starter: </label>
                                </div>
                                <div className="rsvp-col-75">
                                    <div className="rsvp-starter-toggle">
                                        <input type="radio" name="starter" value="starter1" id="starter1"/>
                                        <label htmlFor="starter1">starter 1</label>
                                        <input type="radio" name="starter" value="starter2" id="starter2"/>
                                        <label htmlFor="starter2">starter 2</label>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="rsvp-row">
                                <div className="rsvp-col-25">
                                    <label> Main: </label>
                                </div>
                                <div className="rsvp-col-75">
                                    <div className="rsvp-starter-toggle">
                                        <input type="radio" name="main" value="main1" id="main1"/>
                                        <label htmlFor="main1">main 1</label>
                                        <input type="radio" name="main" value="main2" id="main2"/>
                                        <label htmlFor="main2">main 2</label>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="rsvp-row">
                                <div className="rsvp-col-25">
                                    <label> Dessert: </label>
                                </div>
                                <div className="rsvp-col-75">
                                    <div className="rsvp-starter-toggle">
                                        <input type="radio" name="dessert" value="dessert1" id="dessert1"/>
                                        <label htmlFor="dessert1">dessert 1</label>
                                        <input type="radio" name="dessert" value="dessert2" id="dessert2"/>
                                        <label htmlFor="dessert2">dessert 2</label>
                                    </div>
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
                                                                    data-index={index}
                                                                    className={"rsvp-delete-person-button"}>
                                                                &#10006;
                                                            </button>
                                                        </div>
                                                        <br/>
                                                        <div className="rsvp-row">
                                                            <div className="rsvp-col-25">
                                                                <label>Full Name: </label>
                                                            </div>
                                                            <div className="rsvp-col-75">
                                                                <input
                                                                    type="text"
                                                                    name="fullName"
                                                                    value={additionalFormData[index].fullName}
                                                                    onChange={handleNestedInputChange}
                                                                    placeholder={"Their full name"}
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
                                    <button type="button" onClick={handleAddPerson} className="rsvp-add-person-button">I
                                        want to
                                        RSVP for another Person
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="rsvp-submit-div">
                        <div className="rsvp-row">
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormExample;

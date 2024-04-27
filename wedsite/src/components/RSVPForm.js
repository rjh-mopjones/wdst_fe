import React, { useState } from 'react';

const FormExample = () => {
    // State to hold form input values
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        starter: '',
        main: '',
        dessert: '',
        song: '',
        message: '',
        diet: '',
        attendance: false,
    });

    const [additionalFormData, setAdditionalFormData] = useState([]);

    // Event handler for input changes
    const handleInputChange = (event) => {
        let { name, value } = event.target;
        if (name === 'attendance'){
            value = value === 'true'
        }
        setFormData({
            ...formData,
            [name]: value,
        });

    };
    const handleNestedInputChange = (event) => {
        let {name, value} = event.target;
        const index = event.target.dataset.index
        name = name.replace(index.toString(), "")

        if (name === 'attendance'){
            value = value === 'true'
        }

        let data = [...additionalFormData]
        data[index][name] = value
        setAdditionalFormData(data)
    };

    const handleAddPerson = (event) => {
        let newPersonData = {
            fullName: '',
            attendance: false,
            diet: '',
            starter: '',
            main: '',
            dessert: '',
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
        fetch("http://homeDomain:8000/rsvp", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    console.log('response received:', response);
                    throw new Error('Network response was not ok ');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    };

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
                                <input type="radio" id="yes" name="attendance" value='true' onChange={handleInputChange}/>
                                    <label htmlFor="yes" className="rsvp-radio-label">Yes</label>
                                <input type="radio" id="no" name="attendance" value='false' onChange={handleInputChange}/>
                                    <label htmlFor="no" className="rsvp-radio-label">No</label>
                                <br/>
                            </div>
                        </div>
                    </div>
                    {formData.attendance && (
                        <div id="rsvp-reveal">
                            <br/>
                            <div className="rsvp-row">
                                <div className="rsvp-col-25">
                                    <label> Starter: </label>
                                </div>
                                <div className="rsvp-col-75">
                                    <div className="rsvp-starter-toggle">
                                        <input type="radio" name="starter" value="starter1" id="starter1"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="starter1">starter 1</label>
                                        <input type="radio" name="starter" value="starter2" id="starter2"
                                               onChange={handleInputChange}/>
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
                                        <input type="radio" name="main" value="main1" id="main1"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="main1">main 1</label>
                                        <input type="radio" name="main" value="main2" id="main2"
                                               onChange={handleInputChange}/>
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
                                        <input type="radio" name="dessert" value="dessert1" id="dessert1"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="dessert1">dessert 1</label>
                                        <input type="radio" name="dessert" value="dessert2" id="dessert2"
                                               onChange={handleInputChange}/>
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
                                    <label> Dietary Requirements: </label>
                                </div>
                                <div className="rsvp-col-75">
                                    <input
                                        type="text"
                                        name="diet"
                                        value={formData.diet}
                                        onChange={handleInputChange}
                                        placeholder={"Please let us know if you have dietary requirements (Optional)"}
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
                                                        <br/>
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
                                                                <label>Their Full Name: </label>
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
                                                                <label>Are They Coming?: </label>
                                                            </div>
                                                            <div className="rsvp-col-75">
                                                                <div className="rsvp-radio-buttons">
                                                                    <input type="radio" id={"yes-index-" + index}
                                                                           name={"attendance" + index}
                                                                           value="true" onClick={handleNestedInputChange}
                                                                           data-index={index}/>
                                                                    <label htmlFor={"yes-index-" + index}
                                                                           className="rsvp-radio-label">Yes</label>
                                                                    <input type="radio" id={"no-index-" + index}
                                                                           name={"attendance" + index}
                                                                           value="false" onClick={handleNestedInputChange}
                                                                           data-index={index}/>
                                                                    <label htmlFor={"no-index-" + index}
                                                                           className="rsvp-radio-label">No</label>
                                                                    <br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <br/>
                                                        {additionalFormData[index].attendance && (
                                                            <div className={"rsvp-nested-meal"}>
                                                                <div className="rsvp-row">
                                                                    <div className="rsvp-col-25">
                                                                        <label> Dietary Requirements: </label>
                                                                    </div>
                                                                    <div className="rsvp-col-75">
                                                                        <input
                                                                            type="text"
                                                                            name="diet"
                                                                            value={additionalFormData[index].diet}
                                                                            data-index={index}
                                                                            onChange={handleNestedInputChange}
                                                                            placeholder={"Please let us know if they have dietary requirements (Optional)"}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <br/>
                                                                <div className="rsvp-row">
                                                                    <div className="rsvp-col-25">
                                                                        <label>Their Starter: </label>
                                                                    </div>
                                                                    <div className="rsvp-col-75">
                                                                        <div className="rsvp-starter-toggle">
                                                                            <input type="radio" name={"starter" + index}
                                                                                   value="starter1"
                                                                                   id={"starter1-index-" + index}
                                                                                   data-index={index}
                                                                                   onChange={handleNestedInputChange}/>
                                                                            <label htmlFor={"starter1-index-" + index}>starter
                                                                                1</label>
                                                                            <input type="radio" name={"starter" + index}
                                                                                   value="starter2"
                                                                                   id={"starter2-index-" + index}
                                                                                   data-index={index}
                                                                                   onChange={handleNestedInputChange}/>
                                                                            <label htmlFor={"starter2-index-" + index}>starter
                                                                                2</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/>
                                                                <div className="rsvp-row">
                                                                    <div className="rsvp-col-25">
                                                                        <label>Their Main: </label>
                                                                    </div>
                                                                    <div className="rsvp-col-75">
                                                                        <div className="rsvp-starter-toggle">
                                                                            <input type="radio" name={"main" + index}
                                                                                   value="main1"
                                                                                   id={"main1-index-" + index}
                                                                                   data-index={index}
                                                                                   onChange={handleNestedInputChange}/>
                                                                            <label htmlFor={"main1-index-" + index}>main
                                                                                1</label>
                                                                            <input type="radio" name={"main" + index}
                                                                                   value="main2"
                                                                                   data-index={index}
                                                                                   id={"main2-index-" + index}
                                                                                   onChange={handleNestedInputChange}/>
                                                                            <label htmlFor={"main2-index-" + index}>main
                                                                                2</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <br/>
                                                                <div className="rsvp-row">
                                                                    <div className="rsvp-col-25">
                                                                        <label>Their Dessert: </label>
                                                                    </div>
                                                                    <div className="rsvp-col-75">
                                                                        <div className="rsvp-starter-toggle">
                                                                            <input type="radio" name={"dessert" + index}
                                                                                   value="dessert1"
                                                                                   id={"dessert1-index-" + index}
                                                                                   onChange={handleNestedInputChange}
                                                                                   data-index={index}/>
                                                                            <label htmlFor={"dessert1-index-" + index}>dessert
                                                                                1</label>
                                                                            <input type="radio" name={"dessert" + index}
                                                                                   value="dessert2"
                                                                                   id={"dessert2-index-" + index}
                                                                                   onChange={handleNestedInputChange}
                                                                                   data-index={index}/>
                                                                            <label htmlFor={"dessert2-index-" + index}>dessert
                                                                                2</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}


                                                        <br/>
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

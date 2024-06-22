import React, {useContext, useState} from 'react';
import {
    FormContext,
    LoadingContext,
    NotSubmittedContext,
    ReturnMessageContext,
    SubmitErrorContext,
    UserNameContext
} from '../App';


const FormExample = () => {

    const [notSubmitted, setNotSubmitted] = useContext(NotSubmittedContext);
    const [loading, setLoading] = useContext(LoadingContext);
    const [message, setMessage] = useContext(ReturnMessageContext);
    const [submitError, setSubmitError] = useContext(SubmitErrorContext);
    const [formData, setFormData] = useContext(FormContext);
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

        let data = [...additionalFormData.slice(0,5)]
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
        if (additionalFormData.length < 4){
            setAdditionalFormData([
                    ...additionalFormData,
                    newPersonData
                ]
            )
        }
    };
    const handleDeletePerson = (event) => {
        const index = event.target.dataset.index
        let data = [...additionalFormData]
        data.splice(index, 1)
        setAdditionalFormData(data)
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true)
        // You can perform form validation or submit data here
        formData.additionalRSVP = additionalFormData;
        setNotSubmitted(false)

        let username = (formData.fullName.split(" ")[0])
        let msg = ""

        const endpoint = process.env.REACT_APP_RSVP_ENDPOINT
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

        })
            .then(response => {
                if (!response.ok) {
                    console.log('response received:', response);
                    msg = "Apologies " + username + ", there was a bad response when submitting your details"
                    console.log(msg);
                    setLoading(false)
                    setSubmitError(true)
                    setMessage(msg.toString())
                    console.log(message);
                    throw new Error('Network response was not ok ');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                msg = "Thanks for submitting the rsvp, " + username + "!"
                setMessage(msg.toString())
                setLoading(false)
                setSubmitError(false)
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
                msg = "Apologies " + username + ", there was an error when submitting your details"
                setMessage(msg.toString())
                setLoading(false)
                setSubmitError(true)
            });
    };


    return (
        <div className={"rsvp-hide-div"}>
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
                                <input type="radio" id="yes" name="attendance" value='true' checked={formData.attendance} onChange={handleInputChange}/>
                                    <label htmlFor="yes" className="rsvp-radio-label">Yes</label>
                                <input type="radio" id="no" name="attendance" value='false' checked={!formData.attendance} onChange={handleInputChange}/>
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
                                        <input type="radio" name="starter" value="Gyozas" id="starter1"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="starter1">Gyozas</label>
                                        <input type="radio" name="starter" value="Bruschetta" id="starter2"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="starter2">Bruschetta</label>
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
                                        <input type="radio" name="main" value="Vegetable Tikka Masala with All the Trimmings" id="main1"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="main1">Vegetable Tikka Masala with All the Trimmings</label>
                                        <input type="radio" name="main" value="Lasagne with Garlic Bread, Salad and Coleslaw" id="main2"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="main2">Lasagne with Garlic Bread, Salad and Coleslaw</label>
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
                                        <input type="radio" name="dessert" value="White Chocolate and Raspberry Brioche and Butter Pudding" id="dessert1"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="dessert1">White Chocolate and Raspberry Brioche and Butter Pudding</label>
                                        <input type="radio" name="dessert" value="Tiramisu" id="dessert2"
                                               onChange={handleInputChange}/>
                                        <label htmlFor="dessert2">Tiramisu</label>
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
                                    <textarea
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
                                    <textarea
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
                                                        <button type="button" onClick={handleDeletePerson}
                                                                data-index={index}
                                                                className={"rsvp-delete-person-button"}>
                                                            &#10006;
                                                        </button>
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
                                                                           value="true"
                                                                           onClick={handleNestedInputChange}
                                                                           data-index={index}/>
                                                                    <label htmlFor={"yes-index-" + index}
                                                                           className="rsvp-radio-label">Yes</label>
                                                                    <input type="radio" id={"no-index-" + index}
                                                                           name={"attendance" + index}
                                                                           value="false"
                                                                           onClick={handleNestedInputChange}
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
                                                                        <textarea
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
    </div>
    );
};

export default FormExample;

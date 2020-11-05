import React from 'react';

const Radio = ({ changed, question }) => {
    const { Label, QuestionID, Options, answer } = question;
    return (
        <div>
            <label>{Label}</label>
            <> {Options.length && Options.map(({ Description, QuestionOptionID }) => (
                <div className="form-check" key={QuestionOptionID}>
                    <input
                        className="form-check-input"
                        type="radio"
                        id={QuestionOptionID}
                        name={QuestionID}
                        onChange={changed}
                        checked={Description === answer}
                        value={Description}
                    />
                    <label className="form-check-label" htmlFor={QuestionOptionID}>
                        {Description}
                    </label>
                </div>
            ))}
            </>
        </div>)
}

export default Radio;
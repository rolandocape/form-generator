import React from 'react';

const Checkbox = ({ changed, question }) => {
    const { Label, QuestionID, answer = '' } = question;
    return (
        <div className="form-check">
            <input
                className="form-check-input"
                type="checkbox"
                onChange={changed}
                id={QuestionID}
                checked={answer}/>
            <label className="form-check-label" htmlFor={QuestionID}>{Label}</label>
        </div>
    )
}

export default Checkbox;
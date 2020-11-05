import React from 'react';

const Textbox = ({ blur, changed, value, question }) => {
    const { Label, QuestionID } = question;
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor={QuestionID}>{Label}</label>
            <div className="col-sm-8">
                <input
                    type="text"
                    className="form-control"
                    onBlur={blur}
                    id={QuestionID}
                    value={value}
                    onChange={changed}
                />
            </div>
        </div>)
}

export default Textbox;
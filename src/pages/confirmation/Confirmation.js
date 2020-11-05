import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { answersSelector, indexSelector } from '../../store/selectors';
import { updatePage } from '../../store/actions';

const Confirmation = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sections = useSelector(answersSelector);
    const pageIndex = useSelector(indexSelector);

    const handleNavigation = () => {
        dispatch(updatePage(pageIndex - 1))
        history.goBack();
    }

    const handleSubmit = () => {
        alert(" Your information was successfully submitted, Thank You!")
    }

    return (
        <div className="page-container">
            <h3>Confirmation</h3>
            {sections.length && sections.map(({ Label, Questions, SectionID }) => (
                <div className="section" key={SectionID}>
                    <h5>{Label}</h5>
                    {Questions.length && Questions.map(({ Label, UI, answer, QuestionID}) => {
                        if (UI === 'cb') return answer && (
                            <div key={QuestionID}><b key={QuestionID}> {Label} </b></div>
                        );
                        return  (
                            <div key={QuestionID}>
                                <div>{Label}: {answer && <b>{answer}</b>} </div>
                            </div>
                        )
                    })}
                </div>
            ))}
            <div className="page-footer">
                <button type="button" className="btn btn-light" onClick={handleNavigation}>Back</button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default Confirmation;

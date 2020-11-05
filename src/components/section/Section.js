import React from 'react';
import Question from '../question/Question';

const Section = ({ section, pageIndex, sectionIndex }) => {
    const { Label, Questions = [] } = section;

    return (
        <div className="section">
            <h5>{Label}</h5>
            {Questions.length && Questions.map((question, index) =>
                <Question
                    key={question.QuestionID}
                    pageIndex={pageIndex}
                    sectionIndex={sectionIndex}
                    questionIndex={index}
                />
            )}
        </div>
    );
}

export default Section;
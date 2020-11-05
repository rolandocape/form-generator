import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { questionSelector } from '../../store/selectors';
import { answerQuestion } from '../../store/actions';
import Checkbox from '../checkbox/Checkbox';
import Textbox from '../textbox/Textbox';
import Radio from '../radio/Radio';


const Question = ({ pageIndex, sectionIndex, questionIndex }) => {
    const dispatch = useDispatch();
    const question = useSelector(state => questionSelector(state, pageIndex, sectionIndex, questionIndex));
    const { Label, UI, answer = '' } = question;
    const [inputVal, setInputVal] = useState('');

    const onQuestionAnswered = (e) => {
        const { checked, type, value } = e.target;
        let answerValue;

        if (type === 'radio') answerValue = value;
        else if (type === 'checkbox') answerValue = checked;
        else answerValue = inputVal;

        dispatch(answerQuestion(answerValue, pageIndex, sectionIndex, questionIndex));
    }

    const onChangeInput = (e) => {
        const { value } = e.target;
        setInputVal(value);
    }

    useEffect(() => {
        if (typeof answer === "string") {
            setInputVal(answer);
        }
    }, [answer])

    const renderQuestion = {
        'cb': <Checkbox changed={onQuestionAnswered} question={question}/>,
        'tb': <Textbox blur={onQuestionAnswered} value={inputVal} changed={onChangeInput} question={question}/>,
        'rbil': <Radio changed={onQuestionAnswered} question={question}/>,
        'lb': <label>{Label}</label>
    };

    return (renderQuestion[UI]);
}

export default Question;
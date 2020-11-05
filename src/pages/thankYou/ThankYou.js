import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { indexSelector, pageSelector } from '../../store/selectors';
import Section from '../../components/section/Section';
import { updatePage } from '../../store/actions';

const ThankYou = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const pageIndex = useSelector(indexSelector);
    const page = useSelector(state => pageSelector(state, 1));
    const { Sections, Label } = page;

    const handleNavigation = (e) => {
        if (e.target.innerHTML === 'Review'){
            dispatch(updatePage(pageIndex + 1));
            history.push('/confirmation');
        } else {
            dispatch(updatePage(pageIndex - 1));
            history.goBack();
        }
    }

    return (
        <div className="page-container">
            <h3>{Label}</h3>
            {Sections.length && Sections.map((section, index) =>
                <Section key={section.SectionID} section={section} pageIndex={1} sectionIndex={index}/>
            )}
            <div className="page-footer">
                <button type="button" className="btn btn-light" onClick={handleNavigation}>Back</button>
                <button type="button" className="btn btn-primary" onClick={handleNavigation}>Review</button>
            </div>
        </div>
    );
}

export default ThankYou;

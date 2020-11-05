import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { indexSelector, pageSelector } from 'store/selectors';
import Section from 'components/section/Section';
import { updatePage } from 'store/actions';

const Welcome = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const pageIndex = useSelector(indexSelector);
    const page = useSelector(state => pageSelector(state, 0));

    const onNextClicked = () => {
        dispatch(updatePage(pageIndex + 1))
        history.push('/thankyou');
    }

    if (!page) {
       return null;
    }
    const { Sections, Label } = page;

    return (
        <div className="page-container">
            <h3>{Label}</h3>
            {Sections.length && Sections.map((section, index) =>
                <Section key={section.SectionID} section={section} pageIndex={0} sectionIndex={index}/>
             )}
             <button
                 type="button"
                 className="btn btn-primary position-absolute"
                 style={{ bottom: '20px', right: '10px'}}
                 onClick={onNextClicked}
             >
                 Next
             </button>
        </div>
    );
}

export default Welcome;

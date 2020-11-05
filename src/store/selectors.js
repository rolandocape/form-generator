export const pageSelector = (state, index) => state.pages[index];

export const indexSelector = state => state.pageIndex;

export const progressSelector = state => {
    const { pageIndex = 0, pages } = state;
    return pageIndex*100/pages.length;
}

export const questionSelector = (state, pageIndex, sectionIndex, questionIndex) => {
    const { pages } = state;
    return pages[pageIndex].Sections[sectionIndex].Questions[questionIndex];
}

export const answersSelector = ({ pages }) => {
    let sectionsData = [];
    pages.forEach(({ Sections: sections }) => {
        sections.forEach(section => sectionsData.push(section));
    })
    return sectionsData;
};



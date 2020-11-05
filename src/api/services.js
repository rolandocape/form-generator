import data from 'data/form.json';

export const loadData = () => {
    return new Promise((resolve, reject)=> resolve(data));
}
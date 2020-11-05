import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { progressSelector } from './store/selectors';

import './App.css';
import { ProgressBar } from 'react-bootstrap';
import Welcome from './pages/welcome/Welcome';
import ThankYou from './pages/thankYou/ThankYou';
import Confirmation from './pages/confirmation/Confirmation';
import { loadData } from './api/services';
import { loadDataAction } from './store/actions';

const App = () => {
    const progress = useSelector(progressSelector);
    const dispatch = useDispatch();
    const fetchData = async () => {
        const data = await loadData();
        dispatch(loadDataAction(data))
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="App">
            <div className="card">
                <div className="progress-container">
                    <ProgressBar now={progress} label={`${progress}%`}/>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/thankyou" component={ThankYou}/>
                        <Route path="/confirmation" component={Confirmation}/>
                        <Route exact path="/" component={Welcome}/>
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
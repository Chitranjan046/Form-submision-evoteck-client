import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SurveyForm from './SurveyForm'; // Import SurveyForm component
import SurveyList from './SurveyList'; // Import SurveyList component

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/survey-form" component={SurveyForm} />
        <Route exact path="/survey-list" component={SurveyList} />
        <Redirect to="/survey-form" />
      </Switch>
    </Router>
  );
};

export default App;

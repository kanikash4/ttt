import React from 'react';
import './submitNumber.scss';
// import {Link, Redirect} from 'react-router-dom';
// import 'whatwg-fetch';
// import {postData} from '../../lib/fetch';
// import {submitNumber as submitNum} from '../../util/urls';


class LandingPage extends React.Component {
    constructor() {
        super();
        this.proceed = this.proceed.bind(this);
    }


    proceed() {}

    render() {
        return (
            <div class="numForm">Screen
              <button onClick={this.proceed}>Submit</button>
            </div>
        );
    }
}

export default LandingPage;
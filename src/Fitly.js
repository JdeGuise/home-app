import './fonts.css';
import { View } from 'react-native';
import React from 'react';

export default class Fitly extends React.Component {
    render() {
        return(
            <View style={{flex: 1}}>
                <header>
                    <u><h1 id="page-header">Goose's Workout Log <a href="details.html">Details</a></h1></u>
                </header>
                <div id="jumbotron">
                    <div id="container-calories-burned">
                        <span id="span-calories-burned">
                            <h3 id="jumbotron-calories-burned-header">Calories Burned: </h3>
                        </span>
                        <span>
                            <h4 id="jumbotron-calories-burned-header">SUM_OF_CALORIES_ENTRIES</h4>
                        </span>
                    </div>
                    <div id="container-running-total">
                        <span id="span-running-total">
                            <h3 id="jumbotron-running-total-header">Total Days Ran: </h3>
                        </span>
                        <span>
                            <h4 id="jumbotron-running-total-header">SUM_OF_DAYS_RAN_ENTRIES</h4>
                        </span>
                    </div>
                    <div id="container-pick-a-day">
                        <u><h2 id="pick-a-day-header">Pick a Day:</h2></u>
                    </div>
                </div>
                <footer>
                    <h5>FitnessTracker by John deGuise</h5>
                </footer>    
            </View>
        );
    }
}
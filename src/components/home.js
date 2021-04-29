import React from 'react';
import Household from './household/household.js';
import petProcessor from './petProcessor';
// this is where i need to call API

class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         pets: []
    //     };
    // }

    // componentDidMount() {
    //     fetch('/pets')
    //     .then(res => res.json())
    //     .then(data => {
    //         let petArr = data;
    //         petArr = petArr.map(pet => {
    //             return petProcessor(pet);
    //         });
    //         this.setState({
    //             pets: petArr
    //         });
    //         console.log(this.state);
    //     });
    // }

    render() {
        return (
            <div>
                <Household pets={ this.props.pets }/*pets={ this.state.pets }*//>
            </div>
        );
    }
}

export default Home;
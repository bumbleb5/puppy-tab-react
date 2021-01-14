import React from 'react';
import './petCards.css';

class PetCards extends React.Component {
    render() {
        return (
            <div className="PetCards">
                    <div className="PetPictureFrame">
                        <a href="#0"><img className="PetPicture" src="../../../media/paz.jpg" alt="paz"></img></a>
                    </div>
                <table>
                    <caption>Paz</caption>
                    <tbody>
                        <tr>
                            <th>Age</th>
                            <td>5 </td>
                        </tr>
                        <tr>
                            <th>Vaccinations Current</th>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <th>Food</th>
                            <td>2c Eukanuba Chicken</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };
}

export default PetCards;
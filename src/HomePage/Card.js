import React from 'react';
import './HomePage.css';
import whisk from '../img/whiskedinlogo.png';

export default class Card extends React.Component {

    render(){

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>{this.props.card.Name}</th>
                        <th>{this.props.card.Brand}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <button className='button' onClick={this.props.handleBack}>
                                {'Back'}
                            </button>
                            <img src={whisk} className='Card-Img' alt=''>
                            </img>
                            <button className='button' onClick={this.props.handleNext}>
                                {'Next'}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button className='button'>
                                {'Share'}
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
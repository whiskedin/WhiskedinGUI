import React from 'react';
import './HomePage.css';
import whisk from '../img/whiskedinlogo.png';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Deck: props.deck,
            Id: props.deck[0].Id,
            Name: props.deck[0].Name,
            Brand: props.deck[0].Brand
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleNext() {
        const id = this.state.Id + 1
        this.setState(state => ({
            Id: this.state.Deck[id].Id,
            Name: this.state.Deck[id].Name,
            Brand: this.state.Deck[id].Brand
        }));
      }

      handleBack() {
        const id = this.state.Id - 1
        this.setState(state => ({
            Id: this.state.Deck[id].Id,
            Name: this.state.Deck[id].Name,
            Brand: this.state.Deck[id].Brand
        }));
      }

    render(){
        return (
            <div>
                <table> 
                    <thead>
                        <tr>
                            <th>{this.state.Name}</th>
                            <th>{this.state.Brand}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <button className='button' onClick={this.handleBack}>
                                    {'Back'}
                                </button>
                                <img src={whisk} className='Card-Img' alt=''>
                                </img>
                                <button className='button' onClick={this.handleNext}>
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

export default class HomePage extends React.Component {
    state = {
        deck: [
            {
                Id: 0,
                Name: 'White Walker',
                Brand: 'Jhonny Walker 1',
            },
            {
                Id: 1,
                Name: 'Red Label',
                Brand: 'Jhonnie Walker 2'
            },
            {
                Id: 2,
                Name: 'Blue Label',
                Brand: 'Jhonnie Walker 3'
            }
        ]
    }

    render() {
        const deck= this.state.deck;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>WhiskedIn</th>
                            <td>
                                <button className='button'>
                                    {'Log Out'}
                                </button>
                            </td>
                        </tr>
                    </thead>
                </table>
                <Card deck={deck}/>
            </div>
        )
    }
}

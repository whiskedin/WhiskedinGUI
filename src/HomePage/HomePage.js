import React from 'react';
import './HomePage.css';
import Card from'./Card'


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [
                {
                    Idx: 0,
                    Name: 'White Walker',
                    Brand: 'Jhonny Walker 1',
                },
                {
                    Idx: 1,
                    Name: 'Red Label',
                    Brand: 'Jhonnie Walker 2'
                },
                {
                    Idx: 2,
                    Name: 'Blue Label',
                    Brand: 'Jhonnie Walker 3'
                }
            ],

            currIndex: 0
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }



    handleNext() {
        const index = this.state.currIndex + 1
        if(index >= 0 && index < this.state.deck.length){
            this.setState((state) => ({
                currIndex: index
            }));
        }
    }

    handleBack() {
        const index = this.state.currIndex - 1
        if(index >= 0){
            this.setState((state) => ({
                currIndex: index
            }));
        }
    }

    render() {
        const card= this.state.deck[this.state.currIndex]

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
                <Card
                    card={card}
                    handleNext={this.handleNext}
                    handleBack={this.handleBack}/>
            </div>
        )
    }
}

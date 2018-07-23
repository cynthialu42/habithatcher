import React, { Component } from 'react';
import API from "../../utils/API";
import './add.css';

class Add extends Component {
    state = {
        name: "",
        iteration: 1,
        count: 0,
        complete: false,
        description: '',
        egg: {} //make an empty array later
    }

    componentDidMount(){
        this.handleRandomEgg();
    }
    handleRandomEgg = () => {
        // API call to /api/eggs/:id
        //where id is randomly generated
        // put this in componentDidMount so that
        //an egg is generated and stored in state as soon as we load the add page
        let randomEgg = Math.floor(Math.random() * 4);
        console.log(randomEgg);
        API.getEgg(randomEgg)
            .then(res =>
                this.setState({
                    egg: res.data
                })
            )
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        // console.log(event);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
            API.saveHabit({
                name: this.state.name,
                iteration: this.state.iteration,
                count: this.state.count,
                complete: this.state.complete,
                description: this.state.description,
                egg: this.state.egg
            })
            .then(console.log(this.props.history.push('/')))//this.props.history.push('/')
            .catch(err => console.log("ERROR HERE", err));
        
    }
    render(){
        return(
            <div className = 'container'>
                <div className = 'row d-flex justify-content-center mt-5'>

                    <h1>Hatch a habit</h1>
                </div>
                <div className = 'row mt-5'>
                    <div className = 'col-lg-6'>
                        <img className = 'add-page-img' src = './Eggbunch.png'/>
                    </div>
                
                <div className = 'col-lg-6 habit-form'>
                    <form>
                        <div className = 'form-group'>
                            <label htmlFor='habitName'>Habit Name:</label>
                            <input
                                value = {this.state.name}
                                onChange = {this.handleInputChange}
                                name = "name"
                                id = 'habitName'
                                className = 'form-control'
                            />
                            <small id="habitName" class="form-text text-muted">What would you like turn into a habit?</small>

                        </div>
                        <div className = 'form-group'>
                            <label htmlFor='habitIteration'>Number of Times/Day:</label>
                            <input
                                value = {this.state.iteration}
                                onChange = {this.handleInputChange}
                                name = "iteration"
                                id = 'habitIteration'
                                className = 'form-control'
                            />
                            <small id="habitIteration" class="form-text text-muted">How many times a day should you do this?</small>

                        </div>
                        <div className = 'form-group'>
                            <label htmlFor='habitDescription'>Notes:</label>
                            <textarea
                                value = {this.state.description}
                                onChange = {this.handleInputChange}
                                name = "description"
                                id = 'habitDescription'
                                className = 'form-control'
                                maxLength="60"
                            >
                            </textarea>
                            <small id="habitDescription" class="form-text text-muted">Character limit 60</small>

                        </div>
                        <div className = 'form-group mt-3'>
                            <input
                                type = 'hidden'
                                value = {this.state.egg}
                                name = "egg"
                                placeholder = "Egg"
                            />
                        </div>
                        <button
                            type = 'submit'
                            className = "btn habit-btn"
                            onClick = {this.handleFormSubmit}
                        >
                        Create Habit
                        </button>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}
export default Add;
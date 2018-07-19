import React, { Component } from 'react';
import API from "../../utils/API";

class Add extends Component {
    state = {
        name: "",
        iteration: 1,
        count: 0,
        complete: false,
        egg: 0 //make an empty array later
    }
    handleRandomEgg = () => {
        // API call to /api/eggs/:id
        //where id is randomly generated
        // put this in componentDidMount so that
        //an egg is generated and stored in state as soon as we load the add page
        let randomEgg = Math.floor(Math.random() *3);
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
                egg: this.state.egg
            })
            .then(this.props.history.push('/'))
            .catch(err => console.log("ERROR HERE", err));
        
    }
    render(){
        return(
            <div>
                <form>
                    <input
                        value = {this.state.name}
                        onChange = {this.handleInputChange}
                        name = "name"
                        placeholder = "Habit name"
                    />
                    <input
                        value = {this.state.iteration}
                        onChange = {this.handleInputChange}
                        name = "iteration"
                        placeholder = "How many times a day?"
                    />
                    <input
                        type = 'hidden'
                        value = {this.state.egg}
                        name = "egg"
                        placeholder = "Egg"
                    />
                    <button
                        type = 'submit'
                        className = "btn btn-success"
                        onClick = {this.handleFormSubmit}
                    />

                </form>
            </div>
        )
    }
}
export default Add;
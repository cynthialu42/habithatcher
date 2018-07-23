import React, { Component } from "react";
// import Jumbotron from "../../components/Jumbotron";
// import Card from "../../components/Card";
// import Form from "../../components/Form";
// import Article from "../../components/Article";
// import Footer from "../../components/Footer";
import Instructions from "../../components/Instructions";
import HabitModal from '../../components/HabitModal';
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { List } from "../../components/List";
import './Home.css';

class Home extends Component {
  // state = {
  //   articles: [],
  //   q: "",
  //   start_year: "",
  //   end_year: "",
  //   message: "Search For Articles To Begin!"
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // getArticles = () => {
  //   API.getArticles({
  //     q: this.state.q,
  //     start_year: this.state.start_year,
  //     end_year: this.state.end_year
  //   })
  //     .then(res =>
  //       this.setState({
  //         articles: res.data,
  //         message: !res.data.length
  //           ? "No New Articles Found, Try a Different Query"
  //           : ""
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.getArticles();
  // };

  // handleArticleSave = id => {
  //   const article = this.state.articles.find(article => article._id === id);
  //   API.saveArticle(article).then(res => this.getArticles());
  // };

  // render() {
  //   return (
  //     <Container>
  //       <Row>
  //         <Col size="md-12">
  //           <Jumbotron>
  //             <h1 className="text-center">
  //               <strong>(ReactJS) New York Times Article Scrubber</strong>
  //             </h1>
  //             <h2 className="text-center">
  //               Search for and save articles of interest.
  //             </h2>
  //           </Jumbotron>
  //         </Col>
  //         <Col size="md-12">
  //           <Card title="Query" icon="newspaper-o">
  //             <Form
  //               handleInputChange={this.handleInputChange}
  //               handleFormSubmit={this.handleFormSubmit}
  //               q={this.state.q}
  //               start_year={this.state.start_year}
  //               end_year={this.state.end_year}
  //             />
  //           </Card>
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col size="md-12">
  //           <Card title="Results">
  //             {this.state.articles.length ? (
  //               <List>
  //                 {this.state.articles.map(article => (
  //                   <Article
  //                     key={article._id}
  //                     _id={article._id}
  //                     title={article.headline.main}
  //                     url={article.web_url}
  //                     date={article.pub_date}
  //                     handleClick={this.handleArticleSave}
  //                     buttonText="Save Article"
  //                   />
  //                 ))}
  //               </List>
  //             ) : (
  //               <h2 className="text-center">{this.state.message}</h2>
  //             )}
  //           </Card>
  //         </Col>
  //       </Row>
  //       <Footer />
  //     </Container>
  //   );
  // }
  state ={
    habits: []
}

componentDidMount(){
    this.loadHabits();
}

loadHabits = () => {
    API.getHabits()
       .then(res => this.setState({ habits: res.data }))
       .catch(err => console.log(err));
}

updateCount(id, currentCount, iteration, hatchingNumber){
    // let testHabit = this.state.habits.filter(habit => habit._id === id);
    // console.log(testHabit);
    // let updatedCount = 1 + parseInt(testHabit[0].count);
    // console.log("count: ", updatedCount);
    // this.setState()
    let updatedCount = parseInt(currentCount) + 1;
    let isComplete = false;
    let hatched = false;
    if (updatedCount === iteration){
        console.log('Habit complete')
        isComplete = true;
    }
    if(parseInt(hatchingNumber)-1 <= parseInt(currentCount)){
        console.log('hatched')
        hatched = true;
    }
    
    let countData = {
        count: updatedCount,
        complete: isComplete,
        'egg.is_hatched': hatched
    }
    console.log(countData);
    API.updateCount(id, countData)
        .then(res => this.loadHabits())
        .catch(err => console.log(err));

    // API.getHabit(id)
}


handleDelete= id => {
    API.deleteHabit(id).then(res => this.loadHabits());
  };

render(){
    return(
        <div>
            
            {/* <Instructions /> */}
            {this.state.habits.length === 0 ?
                <Instructions/>
                :
                (
                    <div className = 'row'>
                    {this.state.habits.map(habit => (

                        <div className = 'col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-5'>
                            <div className = 'card text-light no-border'>

                                {habit.count < habit.egg.hatching_number ? 
                                    <img className = 'card-img bird-img ' src = {habit.egg.start_img}/>
                                    :
                                    <img className = 'card-img bird-img ' src = {habit.egg.hatch_img}/>
                                    
                                }
                                <div className = 'card-img-overlay test text-center'>
                                    <div className = 'card-title text-center habit-name'>
                                        {habit.name}
                                    </div>
                                    {/* <div className = 'text-center habit-description'>{habit.description}</div> */}
                                    <div className = 'text-center counter-center'>
                                        <div className = 'text-center habit-counter'>{habit.count}/{habit.iteration}</div>
                                    </div>
                                    <div className = 'text-center btn-section'>
                                        {habit.count === habit.iteration ? 
                                            <button className = 'btn add-btn btn-lg' disabled = 'true' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>Complete!</button>
                                            :
                                            <button className = 'btn add-btn' onClick = {() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}><i class="fas fa-plus fa-2x"></i></button>
                                        }                                         

                                    </div>
                                    {/* <a className = 'delete-btn' onClick={() => this.handleDelete(habit._id)}><i class="delete-btn fas fa-times fa-lg"></i></a> */}
                                    <div className = 'text-center btn-section' data-toggle="modal" data-target={"#" + habit._id}><i class="info-btn far fa-question-circle fa-lg"></i></div>
                                    <HabitModal
                                        habit_id = {habit._id}
                                        habit_name = {habit.name}
                                        habit_description = {habit.description}
                                        date = {habit.date}
                                        handleDelete = {this.handleDelete}
                                        iteration = {habit.iteration}
                                    />
                                    {/* <div className = 'text-muted bottom-text text-center'>Created {moment(habit.date).fromNow('dd')} ago</div> */}

                                </div>
                            </div>
                            
                        </div>
                        
                    ))}
                    </div>
                )
            }   
        </div>
    )
}

}

export default Home;

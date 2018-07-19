import axios from 'axios';

export default {
    getHabits: function() {
        return axios.get("/api/habits");
    },
    getHabit: function(id){
        return axios.get("/api/habits/" + id);
    },
    deleteHabit: function(id) {
        return axios.delete("/api/habits/" + id);
    },
    saveHabit: function(habitData){
        return axios.post("/api/habits", habitData);
    },
    getEggs: function(){
        return axios.get("/api/eggs");
    }, 
    getEgg: function(id){
        return axios.get("/api/eggs/" + id);
    }
};
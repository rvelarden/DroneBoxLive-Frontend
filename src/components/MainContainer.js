import React, { Component } from "react";
import BookingList from "./BookingList";
import DroneList from "./DroneList";
import SearchBar from "./SearchBar";

class MainContainer extends Component {


    state = {
        bookings: []
        
      }
    

  componentDidMount() {
    fetch('http://localhost:3000/drones')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
              drones: data
            })
    })

  
    // call another fetch for the other url endpoint
    fetch('http://localhost:3000/bookings')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
              bookings: data
            })
            // console.log(data)
    })
}

    render(){
   
    return (
      
      <div>
        <BookingList bookings={this.state.bookings} editBookingForm={this.editBookingForm} drones={this.state.drones} updatedBookings={this.state.updatedBookings} deleteBooking={this.deleteBooking}
        />
      </div> 
      ) 
    }
  }
  
  export default MainContainer
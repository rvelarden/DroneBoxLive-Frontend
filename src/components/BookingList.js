import React, { Component } from "react"
import Booking from "./Booking.js"
import { Header, Button } from 'semantic-ui-react'

class BookingList extends Component {
   
  
      render() {
    return (
        <div>
            {/* {console.log(this.props.bookings)} */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div  class="ui secondary segment">
            <Header as='h1'  textAlign='center'>
            <h1 >My Upcoming Bookings</h1>
            </Header>
            </div>
            
            {this.props.bookings.map(bookingItem => <Booking booking={bookingItem} />)}
          
        </div>
    )
      }
}

export default BookingList
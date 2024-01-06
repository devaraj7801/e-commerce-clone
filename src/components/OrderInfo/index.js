import {Component} from 'react'

class OrderInfo extends Component {
  render() {
    return (
      <div className="order-container">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter your name" />
          <label htmlFor="address">Address</label>
          <textarea rows="4" cols="50" name="address">
            Enter text here...
          </textarea>
        </form>
      </div>
    )
  }
}

export default OrderInfo

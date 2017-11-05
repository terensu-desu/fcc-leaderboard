import React, { Component } from 'react'
import axios from 'axios'
import Table from './Table'

class App extends Component {
  constructor() {
    super()
    this.state = {
      defaultView: true,
      recent: [],
      allTime: []
    }
  }
  
  componentDidMount(){
    this.getRecent()
    this.getAllTime()
  }
  
  getRecent() {
    console.log("Hello")
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(function(data) {
        this.setState({
          recent: data
        })
      }.bind(this))
      .catch(function(error) {
        console.log(error)
      })
  }
  
  getAllTime() {
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime') 
    .then(function(data) {
      this.setState({
        allTime: data
      })
    }.bind(this))
    .catch(function(error) {
      console.log(error)
    })
  }
  
  recentSort() {
    this.setState({
      defaultView: true
    })
  }
  
  allTimeSort() {
    this.setState({
      defaultView: false
    })
  }
  
  render() {
    console.log(this.state)

    return (
      <div className="container">
        <div className="row center">
          <div className="col s12">
            <h3 className="center table-title">Camper Leaderboard</h3>
            <Table 
              view={ this.state.defaultView } 
              recentSort={ this.recentSort.bind(this) } 
              allTimeSort={ this.allTimeSort.bind(this) } 
              recentData={ this.state.recent.data }
              allTimeData={ this.state.allTime.data } 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

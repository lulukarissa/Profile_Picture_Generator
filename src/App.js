import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      generator: ''
    }
  }
  render() {
    var klik = () =>{
      var nama = this.refs.isi.value
      var url = `https://robohash.org/${nama}`

      this.setState({
        generator: url
      })
    }
    return (
      
      <div className="mr-md-3">
        <center>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <input type="text" ref="isi" placeholder="Ketik nama anda"></input><br/><br/>
                <button onClick={klik} class="btn btn-success">Buat Profile Picture!</button><br/><br/>
                <img src={this.state.generator}></img>
              </div>
            </div>
          </div>
        
        </center>
      </div>
    );
  }
}

export default App;

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
      var number = Math.floor(Math.random() * 4) + 1 //min 1 max 4
      var url = `https://robohash.org/${nama}.png?set=set${number}`

      this.setState({
        generator: url
      })
    }
    return (
      <div className="mr-md-3" style={{marginTop:'30px'}}>
        <center>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h2 style={{color:'green'}}>Profile Picture Generator</h2><br/>
                <input type="text" ref="isi" placeholder="Ketik nama anda"></input><br/><br/>
                <button onClick={klik} class="btn btn-success">Buat Profile Picture!</button><br/><br/>
                <img src={this.state.generator} style={{borderRadius:'100%'}} alt=''></img>
              </div>
            </div>
          </div>
        
        </center>
      </div>
    );
  }
}

export default App;

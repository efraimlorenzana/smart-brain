import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import Rank from './components/rank/rank';
import ImageLink from './components/imagelink/imagelink';
import Login from './components/Login/login';
import Register from './components/Register/register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: '313ad285e84a4eabacac2a38d44a48f5'
});

const particlesOption = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: '',
      box: {},
      log: 'login'
    }
  }
  onInputChange = (e) => {
    this.setState({imgURL: e.target.value});
    this.setState({box: ''});
  }
  onButtonSubmit = () => {
    // let { imgURL } = this.state;
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imgURL)
    .then(response => this.faceLocation(this.calculateFaceLocation(response)))
    .catch(err => console.log('Catch',err));
  }

  calculateFaceLocation = (data) => {
    let clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    let image = document.querySelector('#clarifaiImg');
    let w = image.width;
    let h = image.height;
    return {
      left: (clarifaiFace.left_col * w) + 10,
      right: (w - (clarifaiFace.right_col * w)) + 10,
      top: (clarifaiFace.top_row * h) + 10,
      bottom: (h - (clarifaiFace.bottom_row * h)) + 10
    }
  }

  faceLocation = (box) => {
    this.setState({box: box});
  }

  onRouteChange = (route) => {
    this.setState({log: route})
  }
  render() {
    return (
      <div id="App">
        <Particles params={ particlesOption } className='particles' />
        {this.state.log === 'home' ?
          <div>
            <Navigation onRouteChange={this.onRouteChange} />
            <Logo />
            <Rank />
            <ImageLink onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={this.state.box} imgURL={this.state.imgURL} />
          </div>
          : ( this.state.log === 'register' ? 
              <Register onRouteChange={this.onRouteChange} /> : 
              <Login onRouteChange={this.onRouteChange} />
            )
      }
      </div>
    );
  }
}

export default App;

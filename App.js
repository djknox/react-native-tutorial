import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, AppRegistry, Image, TouchableOpacity } from 'react-native';


class AskUserName extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  passNameToParent = (name) => {
    this.props.updateUserName(name);
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={styles.input}
          placeholder="What is your name?"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          onSubmitEditing={(event) => this.passNameToParent(event.nativeEvent.text)}
        />
      </View>
    );
  }
}

class AskCaptainName extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  passNameToParent = (name) => {
    this.props.updateCaptainName(name);
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={styles.input}
          placeholder="What would you like your Captain's name to be?"
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          onSubmitEditing={(event) => this.passNameToParent(event.nativeEvent.text)}
        />
      </View>
    );
  }
}



class Greeting extends Component {
  render() {
    return (
      <View>
        <Text>Hello, {this.props.name}!</Text>
      </View>
    );
  }
}

class CaptainSpeech extends Component {
  render() {
    return (
      <View>
        <Text>This is your captain, {this.props.name}, speaking.</Text>
      </View>
    );
  }
}

class PilotImage extends Component {
  render() {
    return (
      <Image source={this.props.image} style={styles.image}></Image>
    );
  }
}

export default class HelloWorldApp extends Component {

  state = {
    pic: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Lt_Mike_Hunter_1.jpg',
    userName: 'World',
    captainName: 'Spock'
  };

  updateUserName = (userName) => {
    this.setState({
      userName: userName
    });
  }

  updateCaptainName = (captainName) => {
    this.setState({
      captainName: captainName
    });
  }

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(() => (
        { pic: 'https://www.aerocrewnews.com/wp-content/uploads/2018/06/voyager-airlinepilotwannabeWEB-1024x682.jpg' }
      ))
    ), 2000);
  }



  render() {
    return (
      <View style={styles.container}>
        <AskUserName updateUserName={this.updateUserName}></AskUserName>
        <AskCaptainName updateCaptainName={this.updateCaptainName}></AskCaptainName>
        <Greeting name={this.state.userName}></Greeting>
        <PilotImage image={{uri:this.state.pic}}></PilotImage>
        <CaptainSpeech name={this.state.captainName}></CaptainSpeech>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: '#abecda',
  },
  input: {
    width: 300,
    fontSize: 20,
    height: 50,
    textAlign: 'center',
  }
});
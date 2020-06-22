import React,{Component} from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  AppRegistry,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Alert

 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Index extends Component {
  constructor(){
    super()

    this.state ={
      jugador1:'',
      jugador2:'',
      jugador4:'',
      jugador5:'',
      jugador6:'',
      jugador7:'',
      jugador8:'',
      jugador9:'',
      jugador10:''
    
   
}

  }

changeJugador1(jugador1){
  this.setState({jugador1})
}
changeJugador2(jugador2){
  this.setState({jugador2})
}
changeJugador3(jugador3){
  this.setState({jugador3})
}
changeJugador4(jugador4){
  this.setState({jugador4})
}
changeJugador5(jugador5){
  this.setState({jugador5})
}
changeJugador6(jugador6){
  this.setState({jugador6})
}
changeJugador7(jugador7){
  this.setState({jugador7})
}
changeJugador8(jugador8){
  this.setState({jugador8})
}
changeJugador9(jugador9){
  this.setState({jugador9})
}
changeJugador10(jugador10){
  this.setState({jugador10})
}

buttonSend(){
  const arraydata = [];
if (this.state.jugador1 && this.state.jugador2 && this.state.jugador3 && this.state.jugador4 && this.state.jugador5 && this.state.jugador6 && this.state.jugador7 && this.state.jugador8 && this.state.jugador9 && this.state.jugador10){
  const data ={
    jugador1:this.state.jugador1,
    jugador2:this.state.jugador2,
    jugador3:this.state.jugador3,
    jugador4:this.state.jugador4,
    jugador5:this.state.jugador5,
    jugador6:this.state.jugador6,
    jugador7:this.state.jugador7,
    jugador8:this.state.jugador8,
    jugador9:this.state.jugador9,
    jugador99:this.state.jugador10
    
  } 
  arraydata.push(data);
  console.log(arraydata)
  
  Alert.alert(this.state.jugador1+', '+this.state.jugador2+', '+this.state.jugador3+', '+this.state.jugador4+', '+this.state.jugador5+', '+this.state.jugador6+', '+this.state.jugador7+', '+this.state.jugador8+', '+this.state.jugador9+',  '+this.state.jugador10+'')
}else{
  Alert.alert('Error!!!,Te faltan jugadores')
}




}

  render(){
  return (
    <ImageBackground source={require('./img/messi.jpg')} style={styles.container}>
     <View>
        <Text style={styles.titulo}>Jugadores</Text>
      <TextInput 
      style={styles.input}
      placeholder="Jugador1"
      value={this.state.jugador1}
      onChangeText={(jugador1)=> this.changeJugador1(jugador1)}
      />
      <TextInput 
      style={styles.input}
      placeholder="Jugador2"
      value={this.state.jugador2}
      onChangeText={(jugador2)=> this.changeJugador2(jugador2)}
      />
      <TextInput 
      style={styles.input}
      placeholder="Jugador3"
      value={this.state.jugador3}
      onChangeText={(jugador3)=> this.changeJugador3(jugador3)}
      />
        <TextInput 
      style={styles.input}
      placeholder="Jugador4"
      value={this.state.jugador4}
      onChangeText={(jugador4)=> this.changeJugador4(jugador4)}
      />
        <TextInput 
      style={styles.input}
      placeholder="Jugador5"
      value={this.state.jugador5}
      onChangeText={(jugador5)=> this.changeJugador5(jugador5)}
      />
        <TextInput 
      style={styles.input}
      placeholder="Jugador6"
      value={this.state.jugador6}
      onChangeText={(jugador6)=> this.changeJugador6(jugador6)}
      />
        <TextInput 
      style={styles.input}
      placeholder="Jugador7"
      value={this.state.jugador7}
      onChangeText={(jugador7)=> this.changeJugador7(jugador7)}
      />
        <TextInput 
      style={styles.input}
      placeholder="Jugador8"
      value={this.state.jugador8}
      onChangeText={(jugador8)=> this.changeJugador8(jugador8)}
      />
        <TextInput 
      style={styles.input}
      placeholder="Jugador9"
      value={this.state.jugador9}
      onChangeText={(jugador9)=> this.changeJugador9(jugador9)}
      />
        <TextInput 
      style={styles.input}
      placeholder="Jugador10"
      value={this.state.jugador10}
      onChangeText={(jugador10)=> this.changeJugador10(jugador10)}
      />
      <TouchableHighlight style={styles.boton}
          onPress={() => this.buttonSend()}>
        <Text style={styles.textbutton}>Send</Text>
    
      </TouchableHighlight>
     </View>
    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  marginTop:40,
  paddingLeft:15,
  paddingRight:15
  },
  input:{
    height: 40,
    borderColor:'#ccc',
    borderWidth: 2,
    marginBottom:20,
    color:'white',
    fontSize:20,
  paddingLeft:10
  },
  boton:{
    backgroundColor:'skyblue',
    paddingTop:15,
    paddingBottom:15
  },
  textbutton:{
    textAlign:'center',
    fontSize:25
  },
  titulo:{
    textAlign:'center',
    fontSize:25,
    marginBottom:5,
    color:'skyblue'
  }
});

AppRegistry.registerComponent('formsApp', () => formsApp );
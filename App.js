import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Take out the trash', done: false },
        { id: 1, title: 'Cook dinner', done: false }
      ]
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>This is a test!!!!</Text>
        <Text>Open up App.js to start working on your app!</Text>
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
});


//ORIGINAL APP
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>This is a test!!!!</Text>
//       <Text>This is a test!!!!</Text>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
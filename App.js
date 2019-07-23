import Reactc, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { paddedString } from 'uuid-js';

export default class App extends Component {
  state = {
    isLoaded: false
  }
  render(){
    return (
      <View style={styles.container}>
        {isLoaded} ? null : <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
        </View>
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
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25,
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100,


  }
});

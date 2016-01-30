/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import NoteScreen from './App/Components/NoteScreen';
import SimpleButton from './App/Components/SimpleButton';
class ReactNotes extends Component {
    
    renderScene (route, navigator) {
        switch (route.name) {
            case 'home':
               return (
                   <View style={styles.container}>
                    <SimpleButton onPress={() => navigator.push({name:'createNote'})}
                        customText = 'Create Note'/>
                   </View>
               ); 
            case 'createNote':
                return (
                    <NoteScreen />
                );
        }
    }
    render() {
        return (
            <Navigator
            initialRoute={{name: 'home'}}
            renderScene={this.renderScene}
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);

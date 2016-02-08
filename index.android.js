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
    ToastAndroid,
    Navigator
} from 'react-native';

import NoteScreen from './app/Components/NoteScreen';
import SimpleButton from './app/Components/SimpleButton';
import HomeScreen from './app/Components/HomeScreen';

var NavigationBarRouteMapper = {
    LeftButton: function (route, navigator, index, navState) {
        switch (route.name) {
            case 'createNote':
                return (
                    <SimpleButton
                        onPress={() => navigator.pop()}
                        customText='Back'
                        style={styles.navBarLeftButton}
                        textStyle={styles.navBarButtonText}
                    />
                );
            default:
                return null;
        }
    },
    RightButton: function (route, navigator, index, navState) {
        switch (route.name) {
            case 'home':
                return (
                    <SimpleButton
                        onPress={() => navigator.push({name:'createNote'})}
                        customText='Create Note'
                        stlye={styles.navBarRightButton}
                        textStyle={styles.navBarButtonText}
                    />
                );
            default:
                return null;
        }
    },
    Title: function (route, navigator, index, navState) {
        switch (route.name) {
            case 'home':
                return (
                    <Text style={styles.navBarTitleText}>React Notes</Text>
                );
            case 'createNote':
                return (
                    <Text style={styles.navBarTitleText}>Create Note</Text>
                );
        }

    }
};


class ReactNotes extends React.Component {

    state = {notes: [{title: "Note Global 1", body: "Body 1", id: 1} , {title: "Note Global 2", body: "Body 2", id: 1}]};

    renderScene(route, navigator) {
        const notes = this.state.notes
        switch (route.name) {
            case 'home':
                return (
                    <HomeScreen
                        navigator={navigator}
                        notes={notes}
                    />
                );
            case 'createNote':
                return (
                    <NoteScreen
                        navigator={navigator}
                        note={route.note}
                        onChangeNote={(note) => console.log("note has changed: "+note)}
                        />
                );
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'home'}}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                    />

                }
            />
        );
    }
}

const styles = StyleSheet.create({

    navContainer: {
      flex: 1
    },
    navBar:{
        backgroundColor: '#5B29C1',
        borderBottomColor: '#48209A',
        borderBottomWidth: 1
    },
    navBarTitleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        //marginVertical: 9  // iOS
        marginVertical: 16 // Android
    },

    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    navBarButtonText: {
        color: '#EEE',
        fontSize: 16,
      //marginVertical: 10 // iOS
        marginVertical: 16 // Android
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

AppRegistry.registerComponent('ReactNotes', () => ReactNotes);

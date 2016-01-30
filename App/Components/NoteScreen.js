import React, {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

export default class NoteScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Untitled"
                    autoFocus={true}
                    onEndEditing={() => {this.refs.body.focus()}}
                    style={styles.title}
                />
                <TextInput
                    ref="body"
                    placeholder="Start typing"
                    multilines={true}
                    style={styles.body}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 64,
        marginRight: 16,
        marginLeft: 16
    },
    title: {
        height: 40
    },
    body: {
        flex: 1
    }
});
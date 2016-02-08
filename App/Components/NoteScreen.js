import React, {
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    View
} from 'react-native';

export default class NoteScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {note:this.props.note};
        console.log("my state"+this.state)
    }

    updateNote(title, body){
        var note = Object.assign(this.state.note, {title:title, body:body});
        this.props.onChangeNote(note);
        this.setState(note);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    ref="title"
                    placeholder="Untitled"
                    autoFocus={true}
                    autoCapitalize="sentences"
                    onEndEditing={(text) => {this.refs.body.focus()}}
                    value={this.state.note.title}
                    style={styles.title}
                    onChangeText={(title) => {
                        console.log("onChangeText: "+title);
                        var tmpNote =  this.state.note;
                        tmpNote.title = title;
                        this.updateNote(title, this.state.note.body);
                    }}
                />
                <TextInput
                    ref="body"
                    placeholder="Start typing"
                    multilines={true}
                    textAlignVertical="top"
                    value={this.state.note.body}
                    style={styles.body}
                    onChangeText={(body) => {
                        var tmpNote = this.state.note;
                        tmpNote.body = body;
                        this.updateNote(this.state.note.title, body);
                    }}
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
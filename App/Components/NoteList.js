/**
 * Created by pmueller on 30.1.16.
 */

import React, {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight
} from 'react-native';

export default class NoteList extends React.Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    _onPress (rowData) {
        this.props.navigator.push({
            name: 'createNote',
            note: {
                id: rowData.id,
                title: rowData.title,
                body: rowData.body
            }
        });
    }

    render() {
        return (
            <ListView
                style={styles.list}
                dataSource={
                    this.ds.cloneWithRows([
                        {title: "Note 1", body: "Body 1", id: 1}
                        , {title: "Note 2", body: "Body 2", id: 1}
                    ])
                }
                renderRow={
                    (rowData) => {
                        return (
                            <TouchableHighlight
                                onPress={() => this._onPress(rowData)}
                                >
                                <View style={styles.listitem}>
                                    <Text>{rowData.title}</Text>
                                </View>
                            </TouchableHighlight>
                        );
                    }
                }
                renderSeparator={(sectionID, rowID) =>
                    <View key={`${sectionID}-${rowID}`} style={styles.separator} />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    list:{
        alignSelf: 'stretch'
    },
    listitem:{
        height: 48,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
        paddingLeft: 16,
        paddingRight: 16
    }
});
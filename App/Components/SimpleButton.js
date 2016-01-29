import React, {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class SimpleButton extends React.Component {
    render () {
        return (
          <TouchableOpacity onPress={() => console.log('Pressed!')}>  
            <View>
                <Text>Simple Button</Text>
            </View>
          </TouchableOpacity>    
        );
    }
}

SimpleButton.propTypes = {
    onPress: React.PropTypes.func.isRequired,
    customText: React.PropTypes.string
}
import React from 'react';
import {View, Text, Button} from 'react-native';

const AadharScreen = ({navigation}) => {
        return (
                <View>
                        <Text>Aadhar Screen</Text>
                        <Button onPress={()=> navigation.navigate('Home') }>Go to BankDetails</Button>

                </View>
        );
}
export default AadharScreen;

import React from 'react';
import { Platform, FlatList, StyleSheet, Button, View } from 'react-native';


export default function HomeScreen(){
   function _onPressButton() {
        alert('You tapped the button!')
      }
    return (
      <View style={styles.container}>
        <FlatList
            data={[
            {key: 'Relationship'},
            {key: 'Fun and Light'},
            {key: 'Politics'},
            {key: 'Dating'}
            ]}
            renderItem={({item}) => 
                <Button style={styles.item} title={item.key} onPress={_onPressButton} />}
            />
      </View>
    )
}

const styles = StyleSheet.create({
    height: Platform.OS === 'ios' ? 200 : 100,
    container: {
     flex: 1,
     paddingTop: 300
    },
    item: {
      padding: 100,
      fontSize: 100,
      height: 100,
    },
  });
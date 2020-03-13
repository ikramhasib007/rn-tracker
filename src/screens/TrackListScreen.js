import React, { useContext, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import {  useFocusEffect } from '@react-navigation/native';

export default function TrackListScreen({ navigation }) {
  const { state: { tracklist, fetching }, fetchTracks } = useContext(TrackContext);
  
  useFocusEffect(
    useCallback(() => {
      // console.log('focus');
      // if(!tracklist.length || (!!route.params && route.params.reload)) {
        fetchTracks();
      // }
      
      return () => {
        // console.log('unfocus');        
      }
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      {fetching ?
        <View style={styles.fetching}>
          <ActivityIndicator size="large" />
        </View>
        :
        <FlatList
          data={tracklist}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return <TouchableOpacity
              onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}
            >
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          }}
        />
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fetching: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
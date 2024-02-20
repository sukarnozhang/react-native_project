import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { useState } from "react";
import MapView from "react-native-maps";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
  return (
    <View >
      {/* Directory Name text field for DPM1 */}
      <TextInput
        label="Directory Name (e.g. TD123_Libya_Earthquake)"
        style={styles.input}
        id="directoryName"
        name="directoryName"
        variant="outlined"
        placeholder="Enter Your Input Here"
      />

      <TextInput
        style={styles.input}
        label="Event Date"
        id="eventDate"
        name="eventDate"
        variant="outlined"
        placeholder="Enter Your Input Here"
      />



      <Button
        // type="submit"
        // variant="contained"
        // type="outline"
        // color="#f194ff"
        title="Start Disaster Proxy Map"
        value="name"
        onPress={() => {
    


          //to call DPM1 dag
          //api details are deleted 
          const apiUrl = '';
          console.log(' my apiURL : ', apiUrl);
          const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
              ///authorization details are deleted
              'Authorization': '',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'conf': {}
            })
          };

          fetch(apiUrl, requestOptions)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log("my data is ", data);
              console.log("hi there");
            })
            .catch(error => {
              console.error('Error:', error);
            });
          console.log(' bye bye ');
        }

        }
      />


    </View>
  );
}

function MapScreen() {
  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <View style={styles.container}>
      <Text>Example</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        //onRegionChangeComplete runs when the user stops dragging MapView
        onRegionChangeComplete={(region) => setRegion(region)}
      />
      {/*Display user's current region:*/}
      <Text style={styles.text}>Current latitude: {region.latitude}</Text>
      <Text style={styles.text}>Current longitude: {region.longitude}</Text>
    </View>
  );


}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "left",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignItems: "left",
  },
});


// export default function App() {
//   const [region, setRegion] = useState({
//     latitude: 51.5079145,
//     longitude: -0.0899163,
//     latitudeDelta: 0.01,
//     longitudeDelta: 0.01,
//   });
//   return (
//     <View style={styles.container}>
//       <Text>Example</Text>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         //onRegionChangeComplete runs when the user stops dragging MapView
//         onRegionChangeComplete={(region) => setRegion(region)}
//       />
//       {/*Display user's current region:*/}
//       <Text style={styles.text}>Current latitude: {region.latitude}</Text>
//       <Text style={styles.text}>Current longitude: {region.longitude}</Text>
//     </View>
//   );
// }

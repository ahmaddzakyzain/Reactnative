/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Modal, Text, View, Image,Button, Dimensions} from 'react-native';
// import Slideshow from 'react-native-image-slider-show';
import ImageZoom from 'react-native-image-zoom-viewer';
import ImageViewer from 'react-native-image-zoom-viewer';
// import {createStackNavigator, createAppContainer} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Slide the paper below,\n',
});

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Profile: {screen: ProfileScreen},
// });

// const App = createAppContainer(MainNavigator);



// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
const images = [{
  // Simplest usage.
  url:'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

  // width: number
  // height: number
  // Optional, if you know the image size, you can set the optimization performance

  // You can pass props to <Image />.
  props: {
      // headers: ...
  }
}, {
  props: {
      // Or you can set source directory.
      source: require('./assets/image/0001.jpg')
  },
  props: {
    // Or you can set source directory.
    source: require('./assets/image/0002.jpg')
}
}]
export default class App extends React.Component {
  componentDidMount() {
    console.log('aplikasi terbuka');
  }
  componentWillUnmount() {
    console.log('aplikasi tertutup');
  }
  render() {
    return (
      <Modal visible={true} transparent={true}>
      <ImageViewer imageUrls={images}/>
      </Modal>
    //   <ImageZoom
    //   cropWidth={Dimensions.get('window').width}
    //   cropHeight={Dimensions.get('window').height}
    //   imageWidth={Dimensions.get('window').width}
    //   imageHeight={Dimensions.get('window').height}
    //   enableSwipeDown={true}
    // >
    //   <Image
    //     enableHorizontalBounce={true}
    //     style={{
    //       width: Dimensions.get('window').width,
    //       height: Dimensions.get('window').height
    //     }}
    //     source={{
    //       url:
    //       require('./assets/image/0001.jpg')
    //     }}
    //   />
    // </ImageZoom>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logo:{
    flex:2,
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    height:10,
    width:10,
  },
});
// export default App;
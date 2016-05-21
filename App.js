'use strict';

import React from 'react-native';

var {
  Navigator,
  StatusBar,
  View
} =  React;

import Routes from './src/components/Routes';

var App = React.createClass({
  
  render: function(route) {
    return (
      <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <Navigator
        initialRoute={{id: 'Login'}}
        renderScene={this.navigatorRenderScene} />
      </View>
    );
  },

  navigatorRenderScene: function(route, navigator){
    return (
      <Routes route={route} navigator={navigator} />
    );
  }

});

module.exports = App;
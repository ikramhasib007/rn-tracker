import 'react-native-gesture-handler';
import * as React from 'react';
import { Easing, ActivityIndicator, View } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

import { navigationRef } from './src/libs/RootNavigation';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

const Stack = createStackNavigator();
const TrackStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultScreenOptions = {

}

const transitionCloseConfig = {
  animation: 'timing',
  config: {
    duration: 100,
    easing: Easing.linear
  },
};

const transitionOpenConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 100,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function App() {
  const { state, setUserToken } = React.useContext(AuthContext);
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        await setUserToken();        
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <View style={{flex:1, justifyContent: "center"}}>
        <ActivityIndicator size="large" color="#2ac6cc" />
      </View>
    )
  }

  
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          ...TransitionPresets.SlideFromRightIOS
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // transitionSpec:{
          //   open: transitionOpenConfig,
          //   close: transitionCloseConfig
          // }
        }}
        // headerMode="float"
      >
        {state.userToken ? (
          <>
            <Stack.Screen
              name="TrackList"
              component={HomeTabNavigator}
              options={({ route }) => ({
                headerShown: shouldHeaderBeShown(route),
                // headerTitle: getHeaderTitle(route)
              })}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Signup" component={SignupScreen} options={() => ({ headerShown: false })} />
            <Stack.Screen name="Signin" component={SigninScreen} options={() => ({ headerShown: false })} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function shouldHeaderBeShown(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'TrackList';
  switch(routeName) {
    case 'TrackList':
      return false
  }
}

function getHeaderTitle(route) {
  const routeName = route.state ? route.state.routes[route.state.index].name : 'TrackList';
  switch(routeName) {
    case 'TrackList':
      return 'Track List';
    case 'TrackCreate':
      return 'Create a Track';      
    case 'Account':
      return 'Account';
      
  }
}

const HomeTabNavigator = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;
      if(route.name === 'TrackList') iconName = 'ios-home';
      else if(route.name === 'TrackCreate') iconName = 'logo-rss';
      else if(route.name === 'Account') iconName = 'ios-settings';
      return <Ionicons name={iconName} color={color} size={size} />
    }
  })} >
    <Tab.Screen name="TrackList" component={TrackListStackNavigator} />
    <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
}

const TrackListStackNavigator = ({ navigation, route }) => {
  if(route.state) {
    navigation.setOptions({
      tabBarVisible: route.state.index > 0 ? false : true
    })
  }

  return <TrackStack.Navigator
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: "horizontal",
      ...TransitionPresets.SlideFromRightIOS
    }}
    headerMode="float"
  >
    <TrackStack.Screen name="TrackList" component={TrackListScreen} initialParams={{ reload: true }} options={{headerTitle: 'Track List' }} />
    <TrackStack.Screen name="TrackDetail" component={TrackDetailScreen} options={{ headerTitle: 'Detail' }} />
  </TrackStack.Navigator>
}

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}
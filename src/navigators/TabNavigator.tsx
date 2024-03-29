/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        // tabBarBackground: () => (
        //   <BlurView
        //     overlayColor=""
        //     blurAmount={15}
        //     style={styles.BlurViewStyles}
        //   />
        // ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="home"
              size={25}
              style={
                focused ? styles.activeTabBarIconStyle : styles.tabBarIconStyle
              }
              color={focused ? COLORS.primaryBrownHex : COLORS.primaryWhiteHex}
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="cart"
              size={25}
              color={focused ? COLORS.primaryBrownHex : COLORS.primaryWhiteHex}
              style={
                focused ? styles.activeTabBarIconStyle : styles.tabBarIconStyle
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="like"
              size={25}
              color={focused ? COLORS.primaryBrownHex : COLORS.primaryWhiteHex}
              style={
                focused ? styles.activeTabBarIconStyle : styles.tabBarIconStyle
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <CustomIcon
              name="bell"
              size={25}
              color={focused ? COLORS.primaryBrownHex : COLORS.primaryWhiteHex}
              style={
                focused ? styles.activeTabBarIconStyle : styles.tabBarIconStyle
              }
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 75,
    position: 'absolute',
    backgroundColor: '#40966C',
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    margin: 5,
    borderRadius: 30,
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarIconStyle: {},
  activeTabBarIconStyle: {
    padding: '15%',
    backgroundColor: '#FFFAEA',
    // bottom: '20%',
    borderRadius: 40,
  },
});

export default TabNavigator;

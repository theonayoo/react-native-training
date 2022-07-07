import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// NavigationStack
import DashboardStack from '../stack/DashboardStack';
import OrderStack from '../stack/OrderStack';
import ProfileStack from '../stack/ProfileStack';

// Icons
import DashboardIcons from '@assets/icons/dashboard';
import CartIcons from '@assets/icons/cartTabs';
import ProfileIcons from '@assets/icons/profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({focused, color, size}) => (
            <DashboardIcons
              width={hp(3.5)}
              height={hp(3.5)}
              colors={focused ? '#ff8800' : '#000'}
            />
          ),
          tabBarLabelStyle: {
            paddingBottom: hp(1),
            fontSize: hp(1.6),
          },
          tabBarActiveTintColor: '#ff8800',
          tabBarInactiveTintColor: '#000',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrderStack}
        options={{
          title: 'Cart',
          tabBarIcon: ({focused, color, size}) => (
            <CartIcons
              width={hp(3)}
              height={hp(3)}
              colors={focused ? '#ff8800' : '#000'}
            />
          ),
          tabBarLabelStyle: {
            paddingBottom: hp(1),
            fontSize: hp(1.6),
          },
          tabBarActiveTintColor: '#ff8800',
          tabBarInactiveTintColor: '#000',
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused, color, size}) => (
            <ProfileIcons
              width={hp(3)}
              height={hp(3)}
              colors={focused ? '#ff8800' : '#000'}
            />
          ),
          tabBarLabelStyle: {
            paddingBottom: hp(1),
            fontSize: hp(1.6),
          },
          tabBarActiveTintColor: '#ff8800',
          tabBarInactiveTintColor: '#000',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

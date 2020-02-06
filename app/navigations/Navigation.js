import * as React from 'react'
import {AntDesign} from '@expo/vector-icons';

import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import Restaurants from "../screens/Restaurants";
import RestaurantsScreenStacks from "./RestaurantsStacks";
import TopListsScreenStacks from "./TopListsStacks";
import SearchScreenStacks from "./SearchStacks";
import AccountScreenStacks from "./AccountStacks";

export const NavigationStacks = createBottomTabNavigator({
    Restaurants: {
        screen: RestaurantsScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Restaurants",
            tabBarIcon: ({tintColor}) => (
                <AntDesign name="find" size={20} color={tintColor}/>
            )
        })
    },
    TopLists: {
        screen: TopListsScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Ranking",
            tabBarIcon: ({tintColor}) => (
                <AntDesign name="staro" size={20} color={tintColor}/>
            )
        })
    },
    Search: {
        screen: SearchScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Search",
            tabBarIcon: ({tintColor}) => (
                <AntDesign name="search1" size={20} color={tintColor}/>
            )
        })
    },
    Account: {
        screen: AccountScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Profile",
            tabBarIcon: ({tintColor}) => (
                <AntDesign name="user" size={20} color={tintColor}/>
            )
        })
    }
}, {
    initialRouteName: "Restaurants",
    order: ['Restaurants', 'TopLists', 'Search', 'Account'],
    tabBarOptions: {
        inactiveTintColor: "#646464",
        activeTintColor: "#ff6f5e"

    }
});

export default createAppContainer(NavigationStacks);

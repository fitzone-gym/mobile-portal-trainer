import React from 'react';
import { Drawer } from 'expo-router/drawer';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Drawer screenOptions={{
            drawerStyle: {
                paddingTop: 50,
                backgroundColor: '#b54646',
            },
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#fff',
            headerStyle: {
                backgroundColor: 'rgba(0,0,0,0)',
            },
        }}>
            <Drawer.Screen
                name="Dashboard"
                options={{
                    drawerLabel: 'Dashboard',
                    title: 'Dashboard',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="home" style={{ width: 25 }} size={size} color={color} />
                    )
                }}
            />
            <Drawer.Screen
                name="Members"
                options={{
                    drawerLabel: 'Members',
                    title: 'Members',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="users" style={{ width: 25 }} size={size} color={color} />)
                }}
            />

            <Drawer.Screen
                name="Appointments"
                options={{
                    drawerLabel: 'Appointments',
                    title: 'Appointments',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="calendar-alt" style={{ width: 25 }} size={size} color={color} />
                    )
                }}
            />

            <Drawer.Screen
                name="Payments"
                options={{
                    drawerLabel: 'Payments',
                    title: 'Payments',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="dollar-sign" style={{ width: 25 }} size={size} color={color} />
                    )
                }}
            />

            <Drawer.Screen
                name="Feedbacks"
                options={{
                    drawerLabel: 'Feedbacks',
                    title: 'Feedbacks',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="info-circle" style={{ width: 25 }} size={size} color={color} />
                    )
                }}
            />

            <Drawer.Screen
                name="Profile"
                options={{
                    drawerLabel: 'Profile',
                    title: 'Profile',
                    drawerIcon: ({ size, color }) => (
                        <FontAwesome5 name="user-tie" style={{ width: 25 }} size={size} color={color} />
                    )
                }}
            />
        </Drawer >
    )
}

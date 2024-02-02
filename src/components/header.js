import React from 'react';
import {
    StyleSheet, View, Pressable, Text
} from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Pressable>
                <Text style={styles.side}>
                    Back
                </Text>
            </Pressable>

            <Text style={styles.content}>
                Feed
            </Text>

            <Pressable>
                <Text style={styles.side}>
                    Filter
                </Text>
            </Pressable>
        </View>
    );
};

const styles=StyleSheet.create({
    header:{
        flex:1,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-around"
    },

    side:{
        color: '#5DB075',
        fontSize:16,
        fontWeight:'500'
    },
    content:{
        color: '#000000',
        fontSize:30,
        fontWeight:'600',
        fontStyle:"normal",

    },

})

export default Header;
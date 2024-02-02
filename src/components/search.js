import React from 'react';
import {
    StyleSheet, View, Pressable, Text
} from 'react-native';

const Search = () => {
    return (
        <>
            <View style={styles.searchContainer}>
                <View style={styles.search}></View>
                <Text style={styles.text}>Search</Text>
            </View>
        </>
    );
};

const styles=StyleSheet.create({
    searchContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    search:{
        backgroundColor:"#F6F6F6",
        width: 343,
        height: 50,
        flexShrink:0,
        borderRadius:50,
        borderWidth:1,
        borderColor:"#E8E8E8"
    },
    text:{
        fontSize:18,
        position:"absolute",
        zIndex:99,
        color:"#BDBDBD",
        left:40
    }

})

export default Search;
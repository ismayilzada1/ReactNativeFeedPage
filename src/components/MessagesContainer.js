import React from 'react';
import {StyleSheet, View, ScrollView, Image,ImageBackground,Alert} from 'react-native';
import MessageCard from "./MessageCard";
const MessagesContainer = () => {

    const messagesData = [
        {
            imageUrl: "https://drivesalez.site/assets/images/aboutUs/team-member2.jpg",
            header: "Ahmad Ahmadzada",
            date: "4m ago",
            text: "[DriveSalez CO-CEO & Co-Founder] Join Us",
        },
        {
            imageUrl: "https://drivesalez.site/assets/images/aboutUs/team-member1.jpeg",
            header: "Mahammad Ismayilzada",
            date: "9m ago",
            text: "[DriveSalez CO-CEO & Co-Founder] Join Us",
        },
        {
            imageUrl: "https://media.licdn.com/dms/image/D4D03AQGnf0S2pQIa2Q/profile-displayphoto-shrink_800_800/0/1699271272635?e=1712188800&v=beta&t=FGkt8luVLk7PEQfrnkP7neV556WlIE-m_JPfOZOKbj8",
            header: "Elvin Suleymanov",
            date: "4h ago",
            text: "Still working on chess project",
        },
        {
            imageUrl: "https://media.licdn.com/dms/image/D4E03AQHrt93lFtUE0g/profile-displayphoto-shrink_400_400/0/1676991664884?e=1712188800&v=beta&t=J241_SqVVXKJJx6v1JzFLW3kkXokvNtnneD23afoQ3E",
            header: "Mark Nikolov",
            date: "9h ago",
            text: "Come to Mark Restaurant",
        },
        {
            imageUrl: "https://fsx1.itstep.org/api/v1/files/PUXntlrTJL4l3MN3UFuopnUluWCYEpmw?inline=true&f=webp",
            header: "Little Elvin Suleymanov",
            date: "4y ago",
            text: "I just started working on my personal chess project",
        },
        ]


    const showMessageAlert = (header,message) => {
        setTimeout(() => {
            alert(`${header} \n${message}`);
        }, 100);
    };


    return (
        <ImageBackground
            source={{ uri: 'https://wallpapers-all.com/uploads/posts/2018-03/2_ocean_waves.jpg' }}
            style={[styles.container,]}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.messagesContainer}>
                    {messagesData.map((message, index) => (
                        <MessageCard
                            key={index}
                            imageUrl={message.imageUrl}
                            header={message.header}
                            date={message.date}
                            text={message.text}
                            onPress={() => showMessageAlert(message.header,message.text)}
                        />
                    ))}
                </View>
            </ScrollView>

            <View>
                <Image
                    style={styles.imageCard}
                    source={{ uri: "https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/2022/Products/911-GT3-RS-Premiere/_BKOS6959_edit_V02_highres.jpeg/jcr:content/_BKOS6959_edit_V02_highres.jpeg" }}
                />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    scrollContent: {
        flexGrow: 1,
    },
    messagesContainer: {
        flexDirection: 'column',
    },
    imageCard: {
        height: 170,
        backgroundColor: '#F0F0F0',
        margin: 10,
        borderRadius: 10,
    },
});

export default MessagesContainer;
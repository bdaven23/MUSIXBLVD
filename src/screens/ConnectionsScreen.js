import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion, Form, Item, Input, Label, Segment} from 'native-base'
import { StackNavigator, DrawerNavigator, NavigationActions, StackActions } from 'react-navigation';
import Grid from 'react-native-grid-component';


import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

const screen = Dimensions.get('window');

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class ConnectionsScreen extends Component {

  
  render() {
    return (
      <Container>

      <Header style={{backgroundColor:'#00A3EE'}}>
        <Left>
        <Button onPress={this.openDrawer} transparent>
          <IconFeather name='menu' size={26} color={'white'} />
        </Button>
        </Left>
        <Body>
          <Title style={{color:'white'}}>Connections</Title>
        </Body>
        <Right>
        <Button onPress={this.openDrawer} transparent>
          <IconFeather name='search' size={26} color={'white'} />
        </Button>
        </Right>
        <MyStatusBar backgroundColor="#00A3EE" barStyle="light-content" />
      </Header>

          <ScrollView>
          <Content>
          <List style={styles.list}>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
            <ListItem >
            <Body>
            <TouchableOpacity onPress={this.openProfile}
            style={styles.callingCard}>
            <View style={styles.bannerImageView}>
              <Text>Background Image</Text>
            </View>
              <View style={styles.aviImageView}>
              </View>
              <Text style={styles.userNameLabel}>A - UserName</Text>
              <Text style={styles.titleLabel}>TITLE LABEL</Text>
              <Text style={styles.locationLabel}>City, State</Text>
              <TouchableOpacity style={styles.connectedBtn}>
                <View style={styles.connectedIconContainer}>
                  <IconFeather name='check' color={'#00A3EE'} size={20}/>
                </View>
                <Text style={styles.connectedLabel}>Connected</Text>

                </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={styles.songsContainer}>
                    <Text style={{fontSize: 12, fontWeight:'normal',}}>Songs</Text>
                    <Text style={{fontSize: 28, fontWeight:'bold',}}>22</Text>
                  </View>

                  <View style={styles.featuredWorkContainer}>
                    <Text style={{fontSize: 12, fontWeight:'normal',}}>Featured Work</Text>
                    <Text style={{fontSize: 28, fontWeight:'bold',}}>22</Text>
                  </View>

                  <View style={styles.connectionsContainer}>
                    <Text style={{fontSize: 12, fontWeight:'normal',}}>Connections</Text>
                    <Text style={{fontSize: 28, fontWeight:'bold',}}>500</Text>
                  </View>
                </View>

            </TouchableOpacity>

              </Body>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>


          </List>
        </Content>

          </ScrollView>
        </Container>
    );
  }
  openDrawer =() => {
    this.props.navigation.openDrawer();
  }
  openProfile=() => {
    this.props.navigation.navigate('FoundProfileScreen')
  }
}

const styles = StyleSheet.create({
  content:{
    color:'white',
  },
  container: {
    flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', paddingLeft: 40, paddingRight: 40,
  },
  header: {
    fontSize: 24, marginBottom: 20, color: 'white', fontWeight: 'bold',
  },
  list:{
    position:'relative', width:screen.width, backgroundColor:'white',
  },
  callingCard:{
    position:'relative', width:screen.width-30, height:250, backgroundColor:'white',
  },

  bannerImageView:{
    position:'relative', width:screen.width-30, height:120, backgroundColor:'#00A3EE', borderTopLeftRadius:0, borderTopRightRadius:0, justifyContent: 'center', alignItems: 'center',
  },
  aviImageView:{
    position:'absolute', width:100, height:100, borderRadius:50, backgroundColor:'#00A3EE', borderColor:'white', borderWidth:5, left:10, bottom:70,
  },
  userNameLabel:{
    position:'absolute', left:120, bottom:100, fontSize: 24, fontWeight:'bold',
  },
  titleLabel:{
    position:'absolute', left:120, bottom:83, fontSize: 16, fontWeight:'normal',
  },
  locationLabel:{
    position:'absolute', left:120, bottom:65, fontSize: 12, fontWeight:'normal',
  },
  connectedBtn:{
    position:'absolute', right:0, bottom:70, justifyContent:'center',
    backgroundColor:'white', width:100, height:20,
  },
  connectedLabel:{
    fontWeight:'normal', color:'#00A3EE' ,top:0, left:30,
  },
  connectedIconContainer:{
    position:'absolute', left:10, width:20, height:20, top:0, backgroundColor:'white',
  },
  songsContainer:{
    position:'absolute', bottom:0, width:(screen.width-30)/3, height:60, backgroundColor:'white', left:0, alignItems: 'center',
  },
  featuredWorkContainer:{
    position:'absolute', bottom:0, width:(screen.width-30)/3, height:60, backgroundColor:'white', alignItems: 'center', left:(screen.width-30)/3,
  },
  connectionsContainer:{
    position:'absolute', bottom:0, width:(screen.width-30)/3, height:60, backgroundColor:'white', right:0, alignItems: 'center',
  },

});

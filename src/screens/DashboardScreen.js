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
  AsyncStorage,
  Flatlist,
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion, Form, Item, Input, Label} from 'native-base'
import { StackNavigator, DrawerNavigator, NavigationActions, StackActions } from 'react-navigation';
import Grid from 'react-native-grid-component';


import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

import Modal from "react-native-modal";


const screen = Dimensions.get('window');

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class DashboardScreen extends Component {
  state = {
    isModalVisible: false
  };
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
              <Title style={{color:'white'}}>Dashboard</Title>
            </Body>
            <Right>
            </Right>
            <MyStatusBar backgroundColor="#00A3EE" barStyle="light-content" />
          </Header>

          <Modal isVisible={this.state.isModalVisible}>

            <View style={{ flex: 1 , position:'absolute', width:screen.width - 40,  height:200, backgroundColor:'rgba(255, 255, 255, 1)', }}>

            <View style={{position:'absolute', top:0, width:screen.width - 40, height:50, justifyContent:'center', backgroundColor:'#00A3EE', alignItems:'center', }}>

            <TouchableOpacity onPress={this._toggleModal}style={{position:'absolute', top:0, right:0, width:50, height:50, backgroundColor:'rgba(255, 255, 255, 0.0)', alignItems:'center', justifyContent:'center', }}>
            <IconFeather name='x' size={26} color={'white'} />
            </TouchableOpacity>

            <Text style={{ fontSize:20, fontWeight:'bold',  color:'white', }}>Activity Modal</Text>

            </View>

              <Text style={{position:'absolute', top:70, fontSize: 16, fontWeight:'normal', color:'black', margin:10}}>this is where the activity will be displayed and from wordpress buddy press software</Text>

              <TouchableOpacity style={{position:'absolute', bottom:0, right:0, width:screen.width - 40, height:50, backgroundColor:'#00A3EE', alignItems:'center', justifyContent:'center', }}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>View Profile</Text>
              </TouchableOpacity>


            </View>
          </Modal>



          <ScrollView>
         <Content style={styles.wrapper}>
          <View style={styles.container}>



          <View style={styles.callingCard}>

            <View style={{position:'relative', width:screen.width-20, height:120,  backgroundColor:'black', borderTopLeftRadius:0, top:0, borderTopRightRadius:0, justifyContent: 'center',
            alignItems: 'center',}}>

              <Image style={{position:'relative', width:screen.width-20, height:120, top:0, justifyContent: 'center',
              alignItems: 'center',}} source={require('./images/MB_LOGO_BARE.png')}
             />

            </View>

              <View>

              <Image style={{position:'relative', width:100, height:100, borderRadius:50, backgroundColor:'#00A3EE', left:10, bottom:60, borderColor:'white', borderWidth:5,}} source={require('./images/MB_LOGO_BARE_WHITE.png')}/>

              </View>

              <Text style={{position:'absolute', left:120, top:125, fontSize: 24, fontWeight:'bold', color:'black'}}>@USERNAME</Text>

              <Text style={{position:'absolute', left:120, top:155, fontSize: 18, fontWeight:'normal', color:'black'}}>TITLE</Text>

              <Text style={{position:'absolute', left:10, bottom:35, fontSize: 18, fontWeight:'normal',}}>City, State</Text>

              <View style={{position:'absolute', left:10, bottom:7, width:18, height:18, backgroundColor:'green', borderRadius:9, }}></View>
              <Text style={{position:'absolute', left:32, bottom:5, fontSize: 18, fontWeight:'normal', color:'green',}}>Online</Text>

              <Text onPress={this.edit} style={styles.EditLabel}>EDIT</Text>

          </View>

            <View style={{position:'relative', width:screen.width, backgroundColor:'#00A3EE', top:0, height:50, justifyContent: 'center', alignItems: 'center', borderBottomWidth :3, borderBottomColor: '#000'}}>
              <Text style={styles.StatisticsLabel}>Statistics</Text>
            </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.songsContainer}>
                <Text style={{fontSize: 18, fontWeight:'normal',}}>Songs</Text>
                <Text style={{fontSize: 32, fontWeight:'bold',}}>22</Text>
              </View>

              <View style={styles.featuredWorkContainer}>
                <Text style={{fontSize: 18, fontWeight:'normal',}}>Featured Work</Text>
                <Text style={{fontSize: 32, fontWeight:'bold',}}>22</Text>
              </View>

              <View style={styles.connectionsContainer}>
                <Text style={{fontSize: 18, fontWeight:'normal',}}>Connections</Text>
                <Text style={{fontSize: 32, fontWeight:'bold',}}>500</Text>
              </View>
            </View>

            <View style={{position:'relative', width:screen.width, backgroundColor:'#00A3EE', top:0, height:50, justifyContent: 'center', alignItems: 'center', borderBottomWidth:3, borderBottomColor: '#000'}}>
              <Text style={styles.ActivityLabel}>Activity</Text>
            </View>

          </View>
          <List style={styles.list}>
            <ListItem>
              <Left>
                <Text style={{fontSize: 16, fontWeight:'bold', color:'#00A3EE',}}>ARTIST 1 </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>tagged </Text><Text style={{fontSize: 16, fontWeight:'bold', color:'#00A3EE',}}>PRODUCER </Text><Text style={{fontSize: 16, fontWeight:'normal', color:'black',}}>for Song 1</Text>
              </Left>
              <Right>
                <Button transparent onPress={this._toggleModal}>
                  <Text>View</Text>
                </Button>
              </Right>
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
    edit =() => {
      this.props.navigation.navigate('EditDashScreen');
    }
    _toggleModal = () =>
      this.setState({ isModalVisible: !this.state.isModalVisible });

  }

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    flex:1,
  },
  callingCard:{
    position:'relative', top:0, width:screen.width, height:255, backgroundColor:'white', borderRadius:0, borderColor:'white', borderWidth:10,
  },
  StatisticsLabel:{
    position:'relative', top:0, fontSize: 26, fontWeight:'bold', color:'white',
  },
  songsContainer:{
    position:'relative', top:0, width:screen.width/3, height:60, backgroundColor:'white', left:0, alignItems: 'center',
  },
  featuredWorkContainer:{
    position:'relative', top:0, width:screen.width/3, height:60, backgroundColor:'white', alignItems: 'center',
  },
  connectionsContainer:{
    position:'relative', top:0, width:screen.width/3, height:60, backgroundColor:'white', right:0, alignItems: 'center',
  },
  ActivityLabel:{
    position:'absolute', fontSize: 26, fontWeight:'bold', color:'white',
  },
  EditLabel:{
    position:'absolute', fontSize: 16, fontWeight:'bold', color:'black', right:10, bottom:10,
  },
  list:{
    position:'relative', top:0, width:screen.width, backgroundColor:'white',
  },

})

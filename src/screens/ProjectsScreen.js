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
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content , List, ListItem, Accordion, Form, Item, Input, Label} from 'native-base'
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

export default class ProjectsScreen extends Component {
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
          <Title style={{color:'white'}}>New Project</Title>
        </Body>
        <Right>
        <Button onPress={this.save} transparent>
          <IconFeather name='save' size={26} color={'white'} />
        </Button>
        </Right>
        <MyStatusBar backgroundColor="#00A3EE" barStyle="light-content" />
      </Header>

        <ScrollView>

        <View style={{position:'relative', top:0, width:screen.width, height:screen.width, backgroundColor:'#000000', justifyContent: 'center',
        alignItems: 'center',}}>
        <Image style={{position:'relative', width:120, height:120,
        alignItems: 'center',}} source={require('./images/MB_LOGO_BARE_WHITE.png')}
       />
        <Text style={{ color:'white'}}>Album Art</Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <TouchableOpacity
        style={{position:'relative', top:0, width:(screen.width/2), height:50, backgroundColor:'white', justifyContent: 'center', alignItems: 'center', left:0,}} >
        <Text style={{color:'black', fontWeight:'bold', }}>REPLACE IMAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{position:'relative', top:0, width:(screen.width/2), height:50, backgroundColor:'white', justifyContent: 'center', alignItems: 'center', right:0,}} >
        <Text style={{color:'red', fontWeight:'bold',}}>DELETE IMAGE</Text>
      </TouchableOpacity>
      </View>

      <Form style={{position:'relative', top:0 , width:screen.width}}>
        <Item floatingLabel>
          <Label>Project Title</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Project Type</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Release Date</Label>
          <Input />
        </Item>
        <ListItem itemDivider>
          <Text>Contributors</Text>
        </ListItem>
        <Item floatingLabel last>
          <Label>Artist</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Featuring Artist</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Writer</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Producer</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Engineer</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Custom Field</Label>
          <Input />
        </Item>
        <ListItem itemDivider>
          <Text>Links</Text>
        </ListItem>
        <Item floatingLabel last>
          <Label>Apple Music</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Spotify</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Pandora</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Google</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Amazon</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Deezer</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Tidal</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Rhapsody</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Youtube</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Xbox Music</Label>
          <Input />
        </Item>
      </Form>
      <View style={{position:'relative', top:20, width:screen.width, height:50, backgroundColor:'white', justifyContent: 'center', alignItems: 'center', right:0,}} ></View>


      </ScrollView>


      </Container>
    );
  }
  openDrawer =() => {
    this.props.navigation.openDrawer();
  }
  save = () =>{
    alert("SAVED")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, alignItems:'center', justifyContent:'center', backgroundColor:'green',
  },
  content:{
    color:'white',
  },
  container: {
    flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', paddingLeft: 40, paddingRight: 40,
  },
  header: {
    fontSize: 24, bottom: 20, color: 'white', fontWeight: 'bold',
  },
});

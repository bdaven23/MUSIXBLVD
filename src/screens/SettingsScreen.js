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

export default class SettingsScreen extends Component {
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
            <Title style={{color:'white'}}>Settings</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <MyStatusBar backgroundColor="#00A3EE" barStyle="light-content" />
        <ScrollView>


        <List style={styles.list}>
        <ListItem itemDivider>
          <Text>EDIT</Text>
        </ListItem>
          <ListItem>
            <Left>
              <Text>Edit Profile</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Edit Privacy</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Edit Content</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Reset Warnings</Text>
            </Left>
          </ListItem>
          <ListItem itemDivider>
            <Text>MUSIXBLVD</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>About Us</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Meet the Team</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>FAQ</Text>
            </Left>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Contact Us</Text>
            </Left>
          </ListItem>
          <ListItem itemDivider>
            <Text>Account</Text>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Switch User</Text>
            </Left>
          </ListItem>
          <ListItem onPress={this.logout} >
            <Left>
              <Text style={{ color:'red', fontWeight:'bold',}} >SIGN OFF</Text>
            </Left>
          </ListItem>
          <ListItem style={{ backgroundColor:'red'}}>
            <Left>
              <Text style={{ color:'white', fontWeight:'bold',}} >DELETE ACCOUNT</Text>
            </Left>
          </ListItem>
        </List>

        </ScrollView>
      </Container>
    );
  }
  openDrawer =() => {
    this.props.navigation.openDrawer();
  }
  logout =() => {
    this.props.navigation.navigate('Login');

  }

}

const styles = StyleSheet.create({

  container: {
    flex:1, alignItems: 'center', justifyContent: 'center',

  },
  list:{
    position:'relative', width:screen.width, backgroundColor:'white',
  },
});

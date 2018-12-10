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

const pushAction = StackActions.push({
  routeName:'FoundProjectScreen',
})
const popAction = StackActions.pop({
  n: 1,
});

export default class SeeAllFeaturesPage extends Component {
  _renderItem = (data, i) => (
    <TouchableOpacity  style={styles.item} onPress={this.openProject} >
    <View style={[{ backgroundColor: data }, styles.item]} key={i} >
    <Image style={styles.itemPic} source={require('./images/MB_LOGO_BARE_WHITE.png')}/>
    </View>
    <Text style={{fontSize:16, fontWeight:'bold', alignSelf:'center',}}>Track Title</Text>
    <Text style={{fontSize:12, fontWeight:'normal', alignSelf:'center',}}>Artist Name</Text>
    <Text style={{fontSize:12, fontWeight:'normal', alignSelf:'center',}}>Job title</Text>
    </TouchableOpacity>
  );

  _renderPlaceholder = i => <TouchableOpacity onPress={this.openProject} style={styles.item} key={i} />;

    render() {
      return (
        <Container>
          <Header style={{backgroundColor:'#00A3EE'}}>
            <Left>
            <Button onPress={this.pop} transparent>
              <IconFeather name='chevron-left' size={26} color={'white'} />
            </Button>
            </Left>
            <Body>
              <Title style={{color:'white'}}>Features</Title>
            </Body>
            <Right>
            </Right>
            <MyStatusBar backgroundColor="#00A3EE" barStyle="light-content" />
          </Header>

          <ScrollView>
        <Content style={styles.wrapper}>
          <View style={styles.container}>
            <View
            style={{position:'relative', width:screen.width, backgroundColor:'white', top: 0, height:1000}}>
            <Grid

                onPress={this.openProject}
                style={styles.list}
                renderItem={this._renderItem}
                renderPlaceholder={this._renderPlaceholder}
                data={['black', 'white', 'red', 'green', 'blue', 'purple','orange','pink','yellow', 'cyan']}
                itemsPerRow={3}
              />
            </View>

          </View>
        </Content>
        </ScrollView>

        </Container>
      );
    }
    openDrawer =() => {
      this.props.navigation.openDrawer();
    }
    openProject =() => {
      this.props.navigation.navigate('FoundProjectScreen');
    }
    alert =() =>{
      alert("BUTTON PRESSED")
    }
    featuresPush=()=>{
      this.props.navigation.dispatch(pushAction);
    }
    pop=()=>{
      this.props.navigation.dispatch(popAction);
    }

  }


const styles = StyleSheet.create({
  wrapper:{
    flex:1,
  },
  container:{
    flex:1,
  },
  item: {
    flex: 1, height:(screen.width/3)+60, margin: 1,
  },
  list: {
    flex: 1,
  },
  bannerImageView:{
    position:'relative', height:200, width:screen.width, backgroundColor:'#00A79D', top:0, justifyContent: 'center', alignItems: 'center',
  },
  profileImageView:{
    position:'relative', height:100, width:100, backgroundColor:'#5AC6CC', top:-50, justifyContent: 'center', alignItems: 'center', borderRadius:50, borderColor:'white', borderWidth:5, left: 10
  },
  onlineIcon:{
    position:'absolute', top:210, left:125, backgroundColor:'green', width:20, height:20, borderRadius:10,
  },
  onlineLabel:{
    position:'absolute', top:210, left:150, fontSize: 16, fontWeight:'bold', color:'green',
  },
  usernameLabel:{
    position:'absolute', top:260, alignSelf:'center', fontSize: 26, fontWeight:'bold', color:'black',
  },
  titleLabel:{
    position:'absolute', top:290, alignSelf:'center', fontSize: 16, fontWeight:'normal', color:'black',
  },
  emailIcon:{
    position:'absolute', top:10, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  emailAddressLabel:{
    position:'relative', top:10, fontSize: 16, fontWeight:'normal', color:'black', left: 35

  },
  locationIcon:{
    position:'absolute', top:40, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  locationLabel:{
    position:'relative', top:20, fontSize: 16, fontWeight:'normal', color:'black', left: 35

  },
  linkIcon:{
    position:'absolute', top:70, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  linkLabel:{
    position:'relative', top:30, fontSize: 16, fontWeight:'normal', color:'black', left: 35,
  },
  descriptionIcon:{
    position:'absolute', top:100, left:10, backgroundColor:'white', width:20, height:20, borderRadius:0,
  },
  descriptionLabel:{
    position:'relative', top:40, fontSize: 16, fontWeight:'normal', color:'black', left: 35,
  },
  descriptionContent:{
    position:'relative', width:screen.width-30, height:100, backgroundColor:'white', left: 20, top:50
  },
  recentFeaturesLabel:{
    position:'absolute', top:600, alignSelf:'center', fontSize: 26, fontWeight:'bold', color:'black', zIndex:1000,
  },
  scrollView:{
    position:'relative', height:180, paddingLeft:10, top:70, backgroundColor:'white',
  },
  recentsImage:{
    position:'absolute', top:35, height:100, width:100, borderRadius:5, paddingLeft:5, borderColor:'black', left:10, borderWidth:5,
  },
  seeAllLabel:{
    fontSize: 18, fontWeight:'bold', color:'grey',

  },
  platformsLabel:{
    top:70, fontSize: 26, alignSelf:'center', fontWeight:'bold', color:'black',
  },
  platform_margain:{
    position:'relative', height:50, top:70, width:screen.width/7, backgroundColor:'white',
  },
  platform_View:{
    position:'relative', height:50, width:screen.width/7, backgroundColor:'white', top:70,
  },
  addConnectionBtn:{
    position:'absolute', top:15, left:15, width:(screen.width /2)-20, height: 45, backgroundColor:'white', borderRadius:30, borderColor:'#5AC6CC', borderWidth:3, justifyContent:'center',

  },
  addConnectionLabel:{
    color:'#5AC6CC', fontWeight:'bold', fontSize:12, left: 32,
  },
  directMessageBtn:{
    position:'absolute', top:15, left:(screen.width /2)+10, width:(screen.width /4)-15, height: 45, backgroundColor:'white', borderRadius:30, borderColor:'#5AC6CC', borderWidth:3, justifyContent:'center', alignItems:'center',
  },
  directMessageLabel:{
    color:'#5AC6CC', fontWeight:'bold', fontSize:14,
 },
  moreActionsBtn:{
    position:'absolute', top:15, left:(screen.width /2)+ (screen.width /4)+5, width:(screen.width /4)-15, height: 45, backgroundColor:'white', borderRadius:30, borderColor:'#5AC6CC', borderWidth:3,
    justifyContent:'center', alignItems:'center',
},
  moreActionsLabel:{
    color:'#5AC6CC', fontWeight:'bold', fontSize:14,
  },
  itemPic: {
    flex: 1, height:(screen.width/3)-2, width:(screen.width/3)-2,
  },

})

import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Grid, Row, Col} from "react-native-easy-grid"
import Avatar from './Avatar'
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthsContext'

export default function ListItem({ type, description, userb,user, style, time, room, image, navigation }: any) {
    const {selectContact, getCurrentRoom} = useContext(AuthContext)
  return (
    <View style={{ height: 80 }} >
      <Grid style={{ maxHeight: 80 }}>
        <Col style={{ width: 80, alignItems: 'center', justifyContent: "center" }}>
          <Avatar user={userb} size={type === 'contacts' ? 40 : 65}/>
        </Col>
        <Col style={{ marginLeft: 10 }}>
          <Row style={{ alignItems: 'center' }}>
            <Col>
              <Text>{userb.contactName}</Text> 
            </Col>
            <Col style={{ alignItems: 'flex-end', paddingRight: 10 }}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("chat")
                selectContact(userb)
                getCurrentRoom(user.email,userb.email)


              }}>
                <Entypo name="message" size={24} color="black" />
              </TouchableOpacity>
            </Col>
          </Row>
        </Col>
      </Grid>
    </View>
  )
}

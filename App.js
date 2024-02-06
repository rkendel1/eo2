import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function App() {
  return (
    <View style={styles.container}>
      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}}
            style={[styles.image, {width: wp(20), height: hp(10)}]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.dataFullName}>
                  Full Name
            </Text>
            <View style={styles.dataContainer}>
              <View style={styles.dataGroup}>
                <Text style={styles.dataType}>Type, </Text>
                <Text style={styles.dataState}>State, </Text>
                <Text style={styles.dataDistrict}>District, </Text>
              </View>
              <View style={styles.dataGroup}>
                <Text style={styles.dataParty}>Party</Text>
                <Text style={styles.dataSenateClass}>SenateClass, </Text>
                <Text style={styles.dataBioguideId}>BioguideId</Text>
              </View>
              <View style={styles.dataGroup}>
                <View style={styles.cardContactSocials}>
                  <Text style={styles.dataContact}>Contact, </Text>
                  <Text style={styles.dataSocials}>Socials</Text>
                </View>
            </View>
          </View>
        </View>
      </View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}}
            style={[styles.image, {width: wp(20), height: hp(10)}]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.dataFullName}>
                  Jack Reed
            </Text>
            <View style={styles.dataContainer}>
              <View style={styles.dataGroup}>
                <Text style={styles.dataType}>US Congressman, </Text>
                <Text style={styles.dataState}>Rhode Island, </Text>
                <Text style={styles.dataDistrict}>  </Text>
              </View>
              <View style={styles.dataGroup}>
                <Text style={styles.dataParty}>Democrat, </Text>
                <Text style={styles.dataSenateClass}>Upper, </Text>
                <Text style={styles.dataBioguideId}>R0000123</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>

      <Card containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}}
            style={[styles.image, {width: wp(20), height: hp(10)}]}
          />
          <View style={styles.textContainer}>
            <Text style={styles.dataFullName}>
                  Mark McKinney
            </Text>
            <View style={styles.dataContainer}>
              <View style={styles.dataGroup}>
                <Text style={styles.dataType}>State Senator, </Text>
                <Text style={styles.dataState}>Rhode Island, </Text>
                <Text style={styles.dataDistrict}>D-30  </Text>
              </View>
              <View style={styles.dataGroup}>
                <Text style={styles.dataParty}>Democrat, </Text>
                <Text style={styles.dataSenateClass}>Upper, </Text>
                <Text style={styles.dataBioguideId}>61ZZOMyKUqOkKvboo6LMrp</Text>
              </View>
            </View>
          </View>
        </View>
      </Card>


      <Card>
        <Card.Title style={styles.cardTitle}>Card 3</Card.Title>
        <Card.Divider/>
        <Image
          source={{uri: "https://bootdey.com/img/Content/avatar/avatar1.png"}}
          style={[styles.image, {width: wp(20), height: hp(20)}]}
        />
        <Text style={styles.dataElement}>
          Data Element 2
        </Text>
      </Card>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  },
  container, {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    marginBottom: 0,
  },
  containerPollVotes, {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    marginBottom: 0,
  },
  cardPoll, {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    marginBottom: 0,
  },
  cardVotes, {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 60,
    marginBottom: 0,

  cardContainer: {
    padding: 0,
    margin: 0,
    marginTop: 20,
    paddingBottom: 20,
    borderWidth: 0,
    shadowOpacity: 0,
  },
  cardContactSocials: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 10,
    margin: 0,
    paddingBottom: 0,
    borderWidth: 0,
    shadowOpacity: 0,
  },
  dataContact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    paddingBottom: 0,
    borderWidth: 0,
    shadowOpacity: 0,
  },
  dataSocials: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    paddingBottom: 0,
    borderWidth: 0,
    shadowOpacity: 0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center', // Align items vertically
  },
  textContainer: {
    marginLeft: 10,
  },
  image: {
    borderRadius: 50,
    marginLeft: 10,
  },
  dataFullName: {
    marginTop: 10,
    fontSize: 20,
    textAlign: 'left',
  },
  dataContainer: {
    marginTop: 5,
  },
  dataGroup: {
    flexDirection: 'row',
  },
  data: {
    marginBottom: 5,
    fontSize: 12,
  },
  dataType: {
    marginBottom: 5,
    fontSize: 20,
    marginEnd: 5,
  },
  dataState: {
    marginBottom: 5,
    fontSize: 20,
    marginEnd: 5,
  },
  dataParty: {
    marginBottom: 0,
    fontSize: 20,
    marginEnd: 5,
  },
  dataSenateClass: {
    marginBottom: 0,
    fontSize: 20,
    marginEnd: 5,
  },
  dataBioguideId: {
    marginBottom: 0,
    fontSize: 20,
    marginEnd: 5,
  },
  dataDistrict: {
    marginBottom: 5,
    fontSize: 20,
    marginEnd: 5,
  },
  cardTitle: {
    margin: 0,
    padding: 0,
    fontSize: 12,
    textAlign: 'left',
  },
});

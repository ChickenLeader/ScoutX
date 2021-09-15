import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  CheckBox,
  TouchableOpacity,
  TextInput,
  PickerIOSComponent,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Logo from "../components/logo";
import { Formik, Form } from "formik";
import UserContext from "../Context/userContext";


const Signup = (props) => {
  

  let coverImgSrc = require("../../assets/Coverphoto.png");
  return (
    <ImageBackground
      source={coverImgSrc}
      resizeMode="stretch"
      style={styles.homeStyle}
    >
      <ScrollView>
        <Logo />

        <Formik
          initialValues={{
            type: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            birth: "",
          }}
          onSubmit={(values, actions) => {
              console.log(values)
              console.log(postData)
              actions.resetForm()
          }}
        >
          {(props) => (
            <View style={styles.viewStyle}>
              <RNPickerSelect
                style={{ ...pickerStyle }}
                value={props.values.type}
                onValueChange={() => props.handleChange('type')}
                items={[
                  { label: "Player", value: "Player" },
                  { label: "Parent", value: "Parent" },
                  { label: "Coach", value: "Coach" },
                ]}
              />

              <View style={styles.nameViewStyle}>
                <TextInput
                  placeholder="First Name"
                  style={styles.nameStyle}
                  value={props.values.firstName}
                  onChangeText={props.handleChange("firstName")}
                />
                
                <TextInput
                  placeholder="Last Name"
                  style={styles.nameStyle}
                  value={props.values.lastName}
                  onChangeText={props.handleChange("lastName")}
                />
              </View>

              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={styles.inputStyles}
                value={props.values.email}
                onChangeText={props.handleChange("email")}
              />

              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.inputStyles}
                value={props.values.password}
                onChangeText={props.handleChange("password")}
              />

              <TextInput
                placeholder="Date of birth"
                style={styles.inputStyles}
                value={props.values.birth}
                onChangeText={props.handleChange("birth")}
              />

              <TouchableOpacity 
              style={styles.buttonstyle}
              onPress={props.handleSubmit}
              >
                <Text
                  style={styles.buttonTextStyle}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View style={styles.signUpStyle}>
          <Text style={styles.textStyle}>Already have and account? </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Signin")}>
            <Text style={styles.textStyle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const pickerStyle = StyleSheet.create({
  inputIOS: {
    height: 50,
    width: "85%",
    borderColor: "white",
    backgroundColor: "white",
    color: "black",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 7,
    fontSize: 16,
  },
  placeholder: {
    color: "#8D8D8D",
    backgroundColor: "white",
    height: 50,
    paddingHorizontal: 20,
    width: "85%",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 7,
  },
  iconContainer: {
    color: "#8D8D8D",
    backgroundColor: "blue",
    height: 50,
    paddingHorizontal: 20,
    width: 500,
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 7,
  },
});

const styles = StyleSheet.create({
  homeStyle: {
    height: "auto",
    flex: 1,
  },
  textStyle: {
    color: "white",
  },
  buttonTextStyle: {
    color: "white",
    alignSelf: "center",
    fontSize: 25,
  },
  signUpStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
    marginTop: 15,
  },
  textSignStyle: {
    color: "#875C5C",
  },
  inputStyles: {
    backgroundColor: "#FFF",
    width: "85%",
    padding: 20,
    marginVertical: 7,
    borderRadius: 10,
    color: "#8D8D8D",
  },
  viewStyle: {
    alignItems: "center",
  },
  nameViewStyle: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameStyle: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 20,
    marginVertical: 7,
    borderRadius: 10,
    color: "#8D8D8D",
  },
  buttonstyle: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    width: "85%",
    height: 50,
    backgroundColor: "#ED6623",
    borderRadius: 10,
    marginTop: 50,
  },

  pickerSelect: {
    borderColor: "red",
    borderWidth: 2,
  },
});

export default Signup;

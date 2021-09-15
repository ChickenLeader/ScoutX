import React, { useState, useContext, createContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../components/logo";
import { Formik, Form } from "formik";
import axios from "axios";
// import SignInForm from "../components/signInForm";
import UserContext from "../Context/userContext";



export const Signin = ({navigation}) => {
  let coverImgSrc = require("../../assets/Coverphoto.png");

  const emailValue = useContext(UserContext);


  const sendingForm = ({values}) => {
    axios
      .post("https://scoutx.bit68.com/en/api/login/", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response, "response");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  return (
    <ImageBackground
      source={coverImgSrc}
      resizeMode="stretch"
      style={styles.homeStyle}
    >
      <ScrollView>
        <Logo />

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, actions) => { 

            sendingForm({values})

            actions.resetForm();
          }}
        >
          {(props) => (
            <View>
              <UserContext.Provider passwordValue={props.values.password}   emailValue={props.values.email}>
                <TextInput
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
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
              </UserContext.Provider>
              <View style={styles.RememberMeStyle}>
                <TouchableOpacity>
                  <Text style={styles.TextStylo}>Remember Me</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.TextStylo}>Forgot Password</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.buttonstyle}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonTextStyle}>Sign In</Text>
              </TouchableOpacity>

              <View style={styles.signUpStyle}>
                <Text style={styles.TextStylo}>Don't have an account? </Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate("Signup")}
                >
                  <Text style={styles.TextStylo}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  homeStyle: {
    height: "auto",
    flex: 1,
  },
  homeStyle: {
    height: "auto",
    flex: 1,
  },
  inputStyles: {
    backgroundColor: "#FFF",
    width: "80%",
    padding: 20,
    marginVertical: 7,
    borderRadius: 10,
    color: "#8D8D8D",
    alignSelf: "center",
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
  buttonTextStyle: {
    color: "white",
    alignSelf: "center",
    fontSize: 25,
  },
  RememberMeStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "80%",
  },
  TextStylo: {
    color: "white",
  },
});

export default Signin;

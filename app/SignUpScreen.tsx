import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, StatusBar } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  return (
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar barStyle="dark-content" />
        <View className="px-6 pt-10">
          {/* Back Button */}
          <View className="flex-row items-center mb-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text className="text-blue-900">←</Text>
            </TouchableOpacity>
          </View>

          {/* App Title */}
          <View className="items-center mb-12">
            <Text className="text-3xl font-semibold text-green-900">Join Us</Text>
          </View>

          {/* Subtitle */}
          <Text className="text-xl font-semibold mb-6">Create your account to get started</Text>

          {/* Input Fields */}
          <View className="mb-4">
            <TextInput
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-3 mb-4"
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                className="border border-gray-300 rounded-md px-4 py-3 mb-4"
            />
            <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                className="border border-gray-300 rounded-md px-4 py-3"
            />
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity className="bg-green-900 py-3 rounded-md mb-6">
            <Text className="text-white text-center font-semibold">Sign up</Text>
          </TouchableOpacity>

          {/* OR Divider */}
          <View className="flex-row items-center justify-center mb-6">
            <View className="h-px bg-gray-300 flex-1" />
            <Text className="mx-4 text-gray-500">- Or sign up with -</Text>
            <View className="h-px bg-gray-300 flex-1" />
          </View>

          {/* Social Media Buttons */}
          <View className="flex-row justify-center space-x-6">
            <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 p-3 rounded-md mb-6 bg-white">
              <Image
                  source={require("../assets/google.png")}
                  style={{ width: 24, height: 24 }}
              />
              <Text className="text-gray-700 font-semibold">Continue With Google</Text>
            </TouchableOpacity>
          </View>

          {/* Redirect to Login */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-500">Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text className="text-green-900 font-semibold">Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
  );
};

export default SignUpScreen;

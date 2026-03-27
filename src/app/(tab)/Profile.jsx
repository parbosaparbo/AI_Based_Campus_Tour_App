import { View, Text } from "react-native";
import React from "react";
import Logo from "../components/ProofileComponents/Logo";
import ContentLinks from "../components/ProofileComponents/ContentLinks";
import { ScrollView } from "react-native";
import TopSpace from "../components/Fix-UI/TopSpace";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <View className="flex-1 px-5 pt-16 bg-gray-950 text-white ">
      <TopSpace />
      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate="normal"
        bounces={true}
      >
        {/* logo section */}
        <View className=" items-center bg-gray-800 py-5 w-full rounded-t-xl">
          <Text className="text-white text-4xl font-bold py-5 ">Setting</Text>
          <Logo></Logo>
          <Text className="text-white font-bold text-2xl pt-2">SITMap</Text>
        </View>
        <View className="px-2">
          <ContentLinks onPress={() => Alert.alert("pressed tour")}
            icons={<Ionicons name="tour" size={28} color="white" />}
            name="My Tour"
          />
          <ContentLinks onPress={() => Alert.alert("pressed favorite")}
            icons={<Ionicons name="heart" size={28} color="skyblue" />}
            name="Favorite"
          />
          <ContentLinks onPress={() => Alert.alert("pressed setting")}
            icons={<Ionicons name="settings" size={28} color="skyblue" />}
            name="Settings"
          />
          <ContentLinks onPress={() => Alert.alert("pressed help and support")}
            icons={<Ionicons name="help" size={28} color="white" />}
            name="Help & Supports"
          />

          <ContentLinks onPress={() => Alert.alert("pressed important links")}
            icons={<Ionicons name="link" size={28} color="skyblue" />}
            name="Importants Links"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

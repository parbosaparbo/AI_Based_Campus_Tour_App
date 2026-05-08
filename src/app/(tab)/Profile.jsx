import { View, Text, TouchableOpacity, ScrollView, Image, Alert, Switch } from "react-native";
import React, { useState } from "react";
import TopSpace from "../components/Fix-UI/TopSpace";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isNotificationsOn, setIsNotificationsOn] = useState(true);

  const SettingRow = ({ icon, name, color, onPress, hasSwitch, switchValue, onSwitchChange }) => (
    <TouchableOpacity 
      className="flex-row items-center justify-between bg-zinc-900/80 p-4 mb-3 rounded-2xl border border-zinc-800"
      onPress={onPress}
      disabled={hasSwitch}
    >
      <View className="flex-row items-center">
        <View className={`w-10 h-10 rounded-full items-center justify-center mr-4`} style={{ backgroundColor: `${color}20` }}>
          <Ionicons name={icon} size={22} color={color} />
        </View>
        <Text className="text-white text-lg font-medium">{name}</Text>
      </View>
      {hasSwitch ? (
        <Switch 
          value={switchValue} 
          onValueChange={onSwitchChange}
          trackColor={{ false: "#3f3f46", true: "#3b82f6" }}
          thumbColor={switchValue ? "#ffffff" : "#a1a1aa"}
        />
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#52525b" />
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />
      
      {/* Top Header */}
      <View className="flex-row items-center justify-between mb-6 z-50 mt-4">
        <TouchableOpacity onPress={() => router.back()} className="bg-zinc-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Settings</Text>
        <TouchableOpacity className="bg-zinc-800 p-2 rounded-full" onPress={() => router.push('/NotificationsPage')}>
          <Ionicons name={isNotificationsOn ? "notifications" : "notifications-off-outline"} size={24} color={isNotificationsOn ? "#f59e0b" : "#71717a"} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} className="pb-10">
        
        {/* App Branding Card */}
        <View className="items-center bg-zinc-900 rounded-3xl p-6 mb-6 border border-zinc-800 shadow-xl">
          <View className="w-20 h-20 bg-blue-500/20 rounded-2xl items-center justify-center mb-4">
            <Ionicons name="map" size={40} color="#3b82f6" />
          </View>
          <Text className="text-white text-2xl font-bold">SITMap</Text>
          <Text className="text-gray-400 text-sm mt-1 text-center">Your Ultimate Campus Guide</Text>
          <Text className="text-gray-500 text-xs mt-4">Version 1.0.0</Text>
        </View>

        {/* General Section */}
        <Text className="text-gray-400 font-bold mb-3 ml-2 uppercase text-xs tracking-wider">General</Text>
        <SettingRow 
          icon="map" 
          name="Saved Routes" 
          color="#3b82f6" 
          onPress={() => router.push('/SavedRoutesPage')}
        />
        <SettingRow 
          icon="heart" 
          name="Favorites" 
          color="#ef4444" 
          onPress={() => router.push('/FavoritesPage')}
        />
        
        {/* Preferences Section */}
        <Text className="text-gray-400 font-bold mb-3 mt-4 ml-2 uppercase text-xs tracking-wider">Preferences</Text>
        <SettingRow 
          icon="moon" 
          name="Dark Mode" 
          color="#8b5cf6" 
          hasSwitch={true}
          switchValue={isDarkMode}
          onSwitchChange={(val) => {
            setIsDarkMode(val);
            if (!val) {
              Alert.alert("Theme Locked", "SITMap uses a dark interface to maximize contrast with map elements.");
              setTimeout(() => setIsDarkMode(true), 500); // Revert switch
            }
          }}
        />
        <SettingRow 
          icon="notifications" 
          name="Push Notifications" 
          color="#f59e0b" 
          hasSwitch={true}
          switchValue={isNotificationsOn}
          onSwitchChange={(val) => {
            setIsNotificationsOn(val);
          }}
        />

        {/* Support Section */}
        <Text className="text-gray-400 font-bold mb-3 mt-4 ml-2 uppercase text-xs tracking-wider">Support</Text>
        <SettingRow 
          icon="help-buoy" 
          name="Help & Support" 
          color="#10b981" 
          onPress={() => router.push('/HelpSupportPage')}
        />
        <SettingRow 
          icon="link" 
          name="Important Links" 
          color="#06b6d4" 
          onPress={() => router.push('/LinksPage')}
        />

        {/* Share App Button */}
        <TouchableOpacity 
          className="bg-blue-500/20 py-4 rounded-2xl flex-row justify-center items-center mt-6 border border-blue-500/30"
          onPress={() => Alert.alert("Share", "Share SITMap with your friends!")}
        >
          <Ionicons name="share-social" size={20} color="#3b82f6" style={{ marginRight: 8 }} />
          <Text className="text-blue-500 font-bold text-lg">Share App</Text>
        </TouchableOpacity>

        {/* Terms & Conditions */}
        <TouchableOpacity
          className="flex-row items-center justify-center py-4 mt-3 mb-10"
          onPress={() => router.push('/TermsPage')}
        >
          <Ionicons name="document-text-outline" size={16} color="#52525b" />
          <Text className="text-zinc-500 text-sm ml-2">Terms & Conditions</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Profile;

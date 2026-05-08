import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from './components/Fix-UI/TopSpace'

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By downloading or using the SITMap Campus Tour application, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the application."
  },
  {
    title: "2. Use of the Application",
    body: "SITMap is provided exclusively for students, staff, and visitors of SITM Guwahati for the purpose of campus navigation and information. You agree to use the app only for lawful and intended purposes."
  },
  {
    title: "3. Location & Map Data",
    body: "The map data, building coordinates, and directions provided within this app are for informational purposes only. While we strive for accuracy, SITM does not guarantee the completeness or current accuracy of any location data."
  },
  {
    title: "4. AI Assistant",
    body: "The in-app AI Assistant is powered by Google Gemini. Responses are generated automatically and may not always be accurate. Always verify critical information with campus authorities. Do not share sensitive personal information with the AI."
  },
  {
    title: "5. Intellectual Property",
    body: "All content within SITMap, including text, graphics, logos, icons, and images, is the property of SITM Guwahati and is protected by applicable intellectual property laws. Unauthorized use is prohibited."
  },
  {
    title: "6. Limitation of Liability",
    body: "SITM Guwahati shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use the SITMap application."
  },
  {
    title: "7. Privacy",
    body: "SITMap does not collect personal user data or require account registration. Any preferences set within the app (e.g., notification settings) are stored locally on your device only."
  },
  {
    title: "8. Changes to Terms",
    body: "We reserve the right to modify these Terms and Conditions at any time. Continued use of the application after changes are made constitutes your acceptance of the revised terms."
  },
  {
    title: "9. Contact",
    body: "For queries regarding these terms, please contact the SITM IT Desk at itdesk@sitm.edu.in or visit the campus administration office."
  },
];

const TermsPage = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-black px-4">
      <TopSpace />

      {/* Header */}
      <View className="flex-row items-center mb-6 z-50 mt-4">
        <TouchableOpacity onPress={() => router.back()} className="mr-3 bg-zinc-800 p-2 rounded-full">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">Terms & Conditions</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Effective Date Banner */}
        <View className="bg-blue-500/15 border border-blue-500/30 rounded-2xl px-4 py-3 mb-6 flex-row items-center">
          <Ionicons name="document-text-outline" size={20} color="#3b82f6" />
          <Text className="text-blue-400 text-sm ml-3">Effective Date: May 1, 2025 · Version 1.0</Text>
        </View>

        {sections.map((sec, index) => (
          <View key={index} className="mb-6">
            <Text className="text-white font-bold text-lg mb-2">{sec.title}</Text>
            <Text className="text-gray-400 text-sm leading-7">{sec.body}</Text>
            {index < sections.length - 1 && (
              <View className="h-[1px] bg-zinc-800 mt-5" />
            )}
          </View>
        ))}

        {/* Footer */}
        <View className="items-center mb-12 mt-4">
          <Text className="text-zinc-600 text-xs text-center">© 2025 SITM Guwahati. All rights reserved.</Text>
        </View>

      </ScrollView>
    </View>
  )
}

export default TermsPage;

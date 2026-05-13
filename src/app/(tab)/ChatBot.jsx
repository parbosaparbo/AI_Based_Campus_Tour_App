import React, { useState, useRef } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import TopSpace from "../components/Fix-UI/TopSpace";
import { API_BASE_URL } from "../apiConfig";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hey 👋 I am here to guide you!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const flatListRef = useRef(null);

  const router = useRouter();

  const clearHistory = () => {
    setMessages([
      { id: "1", text: "Hey 👋 I am here to guide you!", sender: "bot" },
    ]);
    setHistory([]);
  };

  // Sending msg here
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    const userInput = input;
    setInput("");

    // show Typing.. animation
    const botId = Date.now().toString() + "bot";
    setMessages(prev => [...prev, { id: botId, text: "Typing...", sender: "bot" }]);

    try {
      // send the last 10 history msgs
      const limitedHistory = history.slice(-10);

      const res = await fetch(`${API_BASE_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput, history: limitedHistory }),
      });

      const data = await res.json();
      let reply = data.reply || "No response from server.";

      let actionData = null;
      // Extract JSON if it exists
      const jsonMatch = reply.match(/\{"action":\s*"SHOW_MAP".*\}/);
      if (jsonMatch) {
        try {
          actionData = JSON.parse(jsonMatch[0]);
          reply = reply.replace(jsonMatch[0], "").trim();
        } catch (e) {
          console.error("Failed to parse action JSON");
        }
      }

      // msg history are update safely
      setHistory(prev => [...prev, { role: "user", parts: [{ text: userInput }] }, { role: "model", parts: [{ text: reply }] }]);

      // replace the Typing... animation with the reply
      setMessages(prev => prev.map(m => m.id === botId ? { ...m, text: reply, actionData } : m));
    } catch (err) {
      setMessages(prev => prev.map(m => m.id === botId ? { ...m, text: "Cannot connect to server. Please check your network connection and try again." } : m));
    }
  };

  const renderItem = ({ item }) => {
    const isUser = item.sender === "user";

    return (
      <View
        className={`max-w-[75%] px-4 py-3 my-2 rounded-2xl ${isUser ? "bg-blue-600 self-end" : "bg-gray-800 self-start"
          }`}
      >
        <Text className="text-white text-base">{item.text}</Text>
        {item.actionData && item.actionData.action === "SHOW_MAP" && (
          <TouchableOpacity
            className="mt-3 bg-white px-3 py-2 rounded-lg items-center"
            onPress={() => router.push(
              `/MapView?targetLat=${item.actionData.coordinates.latitude}&targetLng=${item.actionData.coordinates.longitude}`
            )}
          >
            <Text className="text-blue-600 font-bold">🗺️ Show on Map</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-black px-4 pt-10"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <TopSpace />

      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-semibold">
            AI Assistant 🤖
          </Text>
        </View>
        <TouchableOpacity onPress={clearHistory} className="p-2 bg-red-600/80 rounded-full">
          <Ionicons name="trash-outline" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
      />

      <View className="flex-row items-center bg-gray-900 rounded-full px-4 py-4 mb-4">
        <TextInput
          placeholder="Ask something..."
          placeholderTextColor="#9ca3af"
          value={input}
          onChangeText={setInput}
          style={{ flex: 1, color: "#ffffff", fontSize: 18 }}
          returnKeyType="send"
          onSubmitEditing={sendMessage}
          blurOnSubmit={false}
        />

        <TouchableOpacity
          onPress={sendMessage}
          className="ml-2 bg-blue-600 px-4 py-2 rounded-full"
        >
          <Text className="text-white font-semibold">Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

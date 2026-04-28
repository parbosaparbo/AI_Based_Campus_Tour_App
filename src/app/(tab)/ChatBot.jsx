import { GoogleGenAI } from "@google/genai";
import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import TopSpace from "../components/Fix-UI/TopSpace";

const ai = new GoogleGenAI({
  apiKey: "Api key", // api key here
});

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hey 👋 I am here to guide you!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const chatting = async (userproblem) => {
    const newHistory = [
      ...history,
      {
        role: "user",
        parts: [{ text: userproblem }],
      },
    ];

    setHistory(newHistory);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: newHistory,
        config: {
          systemInstruction: `
You are a AI Assistant. context here
`,
        },
      });

      const text = response.text;

      setHistory((prev) => [...prev, { role: "model", parts: [{ text }] }]);

      return text;
    } catch (err) {
      return "Error: Something went wrong.";
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMsg]);

    const userInput = input;
    setInput("");

    const botId = Date.now().toString() + "bot";

    setMessages((prev) => [
      ...prev,
      { id: botId, text: "Typing...", sender: "bot" },
    ]);

    const reply = await chatting(userInput);

    setMessages((prev) =>
      prev.map((msg) => (msg.id === botId ? { ...msg, text: reply } : msg)),
    );
  };

  const renderItem = ({ item }) => {
    const isUser = item.sender === "user";

    return (
      <>
        
        <View
          className={`max-w-[75%] px-4 py-3 my-2  rounded-2xl ${
            isUser ? "bg-blue-600  self-end" : "bg-gray-800  self-start"
          }`}
        >
          <Text className="text-white text-xl">{item.text}</Text>
        </View>
      </>
    );
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-black px-4 pt-10"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <TopSpace />
      <Text className="text-white text-3xl font-semibold mb-4">
        AI Assistant 🤖
      </Text>

      {/* Chat */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />

      {/* Input */}
      <View className="flex-row items-center bg-gray-900 rounded-full px-4 py-2 mb-4">
        <TextInput
          placeholder="Ask something..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
          className="flex-1 text-white"
        />

        <TouchableOpacity
          onPress={sendMessage}
          className="ml-2 bg-blue-600 px-4  py-2 rounded-full"
        >
          <Text className="text-white font-semibold">Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

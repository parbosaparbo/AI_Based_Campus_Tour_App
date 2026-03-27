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
  apiKey: "AIzaSyDWFLsY-q-HdSNkk9RjeLLmXOTaXaa-cSU", // 🔴 replace this
});

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hey 👋 I am here to guide you!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  // 🔥 Chat function (Gemini)
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
You are a AI Assistant. , so answer to user queries in straight one or two lines,
if user ask where is the library, just answer 'it's in the 2dn floor of A-Block building' if, where is the canteen then answer " it is in the ground floor of Boy's Hoostel"  now i will give only the answer but if user ask where then give answer of the location. 1.Girl's hostel is in top floor of B-block building.
2. CSE department is in 3rd floor of B-block below girls hostel.
3. civil department is in the 2nd floor of b-block building.
4. mechinical department is in 1st floor of B-block building.
5. Playground is in the center of the campus.
6. electrical department is in the A-block building on 3rd floor.
7. adminestrative block is in the A-block building ground floor.
8. BBA department is in the underground of the A-block building.
9. Hostel gate is just opposite of A-block building, just straight there is boys hostel.
10. CSE department lab is in the ground floor of A-block building.
11. Seminar hall (SH 3 is in the underground of A-Block building)
12. Seminar hall (SH 2 is in the 2nd floor of B-Block building near civil department)
13. Seminar hall (SH 1 is in the 1st floor of A-Block building)
14. Library is in the 1st floor of A-block building.
, Now i will tell you how to answer about the where or when user ask about the location then answer like this for example about CSE department " It's in 3rd floor of B-Block Building.", answer in straight line, no need to give the full length of the question, okey,
 ' never routh or make any disapointment to the user, never use slang words, it should be a friendly nature to the user. if you dont know the ans then tell them i dont n=know about this, we will work on this, for now visit other places, like in a friendly way okey.'
 'keep yourself under the context of this only, you are only for guidance or to guuide user to locate the places,  if they ask any question which are not rrelivent to the context then answer, i am not train for this, i can help you only with the location which i was trained for, okey,' you can answer in that language the user asked, if hindi then answer in hindi but use english latters, if english then in english. use the user language to answer .
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

  // 🔥 Send message
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

    // temporary bot message
    const botId = Date.now().toString() + "bot";

    setMessages((prev) => [
      ...prev,
      { id: botId, text: "Typing...", sender: "bot" },
    ]);

    const reply = await chatting(userInput);

    // update bot message
    setMessages((prev) =>
      prev.map((msg) => (msg.id === botId ? { ...msg, text: reply } : msg)),
    );
  };

  // 🔥 UI render
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

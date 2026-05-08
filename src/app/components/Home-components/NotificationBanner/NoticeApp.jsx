import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

const NoticeApp = () => {
  const [notice, setNotice] = useState("📢 Loading notices...");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("http://192.168.0.101:5000/api/notices");
        const data = await res.json();
        if (data && data.length > 0) {
          setNotice(`📢 ${data[0].title}: ${data[0].content}`);
        } else {
          setNotice("📢 No new notices.");
        }
      } catch (err) {
        setNotice("📢 Unable to load notices.");
      }
    };
    fetchNotices();
  }, []);

  return (
    <View className="h-10 mx-4 my-3 rounded-lg bg-yellow-800/70 justify-center"> 
      <Text numberOfLines={1} className='text-sm px-2 text-white font-semibold'>{notice}</Text>
    </View>
  )
}

export default NoticeApp;
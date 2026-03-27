import React, { useState } from "react";
import { Platform, Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import SearchBox from "../Maps components/SearchBox"
import MapHead from "../Maps components/MapHead";

const MapPage = ({ height = 650, width = "100%" }) => {
  const [selectedMarker, setSelectedMarker] = useState(0);

  return (
    <View
      style={{
        height,
        width,
      }}
      className="bg-black px-1  pb-12"
    >
      {(Platform.OS === "ios" ||
        Platform.OS === "android") && (
        <View className="flex-1 w-full rounded-lg overflow-hidden">
          <MapView
            style={{ width: "100%", height: "100%" }}
            mapType={Platform.OS === "ios" ? "hybridFlyover" : "hybrid"}
            initialRegion={{
              latitude: 26.090829,
              longitude: 91.725019,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            {/* top of the map
            <View className="py-8 px-2">
               <MapHead />
              <SearchBox/>
            </View> */}
            <Marker
              coordinate={{ latitude: 26.090829, longitude: 91.725019 }}
              title="SITM GHY"
              description="campus location"
            />

            <Marker
              coordinate={{ latitude: 26.090629, longitude: 91.725019 }}
              onPress={() => setSelectedMarker(1)}
            >
              <Callout tooltip>
                <View className="bg-blue-50 rounded-lg px-4 py-3 shadow-lg elevation-5">
                  <Text className="text-sm font-semibold text-gray-800 mb-1">
                    SITM A-Block Building
                  </Text>
                  <Text className="text-[9px] text-blue-500">
                    26.090629, 91.725019
                  </Text>
                  <Text className="text-xs text-gray-500">Campus Location</Text>
                </View>
              </Callout>
            </Marker>

            <Marker
              coordinate={{ latitude: 26.090614, longitude: 91.723662 }}
              onPress={() => setSelectedMarker(0)}
            >
              <Callout tooltip>
                <View className="bg-white rounded-lg px-4 py-3 shadow-lg elevation-5">
                  <Text className="text-sm font-semibold text-gray-800 mb-1">
                    SITM Boy's Hostel
                  </Text>
                  <Text className="text-[9px] text-blue-500">
                    26.090614, 91.723662
                  </Text>
                  <Text className="text-xs text-gray-500">Campus Location</Text>
                </View>
              </Callout>
            </Marker>

            <Marker
              coordinate={{ latitude: 26.09066, longitude: 91.724605 }}
              onPress={() => setSelectedMarker(1)}
            >
              <Callout tooltip>
                <View className="bg-white rounded-lg px-4 py-3 shadow-lg elevation-5">
                  <Text className="text-sm font-semibold text-gray-800 mb-1">
                    SITM Playground
                  </Text>
                  <Text className="text-[9px] text-blue-500">
                    26.090660, 91.724605
                  </Text>
                  <Text className="text-xs text-gray-500">Campus Location</Text>
                </View>
              </Callout>
            </Marker>

            <Marker
              coordinate={{ latitude: 26.091095, longitude: 91.724598 }}
              onPress={() => setSelectedMarker(1)}
            >
              <Callout tooltip>
                <View className="bg-white rounded-lg px-4 py-3 shadow-lg elevation-5">
                  <Text className="text-sm font-semibold text-gray-800 mb-1">
                    SITM B-Block Building
                  </Text>
                  <Text className="text-[9px] text-blue-500">
                    26.091095, 91.724598
                  </Text>
                  <Text className="text-xs text-gray-500">Campus Location</Text>
                </View>
              </Callout>
            </Marker>
          </MapView>
        </View>
      )}
    </View>
  );
};

export default MapPage;

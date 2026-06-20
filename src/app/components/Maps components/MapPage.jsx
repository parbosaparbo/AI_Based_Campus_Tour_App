import React, { useState, useEffect, useRef } from "react";
import { Platform, Text, View, ScrollView, TouchableOpacity } from "react-native";
import MapView, { Callout, Marker, Polyline } from "react-native-maps";
import Ionicons from "@expo/vector-icons/Ionicons";
import { API_BASE_URL } from "../../apiConfig";

const categoryIcons = {
  All: "grid",
  Main: "business",
  Academic: "school",
  Hostel: "bed",
  Recreation: "football",
};

const MapPage = ({ width = "100%", targetLat, targetLng }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [is3D, setIs3D] = useState(false);
  const mapRef = useRef(null);

  const playgroundCoords = { latitude: 26.090660, longitude: 91.724605 };

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    if (targetLat && targetLng && mapRef.current) {
      const destination = {
        latitude: parseFloat(targetLat),
        longitude: parseFloat(targetLng),
      };
      
      setTimeout(() => {
        mapRef.current?.fitToCoordinates([playgroundCoords, destination], {
          edgePadding: { top: 120, right: 80, bottom: 160, left: 80 },
          animated: true,
        });
      }, Platform.OS === "android" ? 1000 : 500);
    }
  }, [targetLat, targetLng]);

  const fetchLocations = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/locations`);
      const data = await res.json();
      setLocations(data);
    } catch (error) {
      console.error("Failed to fetch locations", error);
    }
  };

  const categories = ["All", "Main", "Academic", "Hostel", "Recreation"];

  const filteredLocations = selectedCategory === "All" 
    ? locations 
    : locations.filter(loc => loc.category === selectedCategory);

  const getBearing = (startLat, startLng, destLat, destLng) => {
    const toRadians = (degree) => (degree * Math.PI) / 180;
    const toDegrees = (radian) => (radian * 180) / Math.PI;
    const startLatRad = toRadians(startLat);
    const destLatRad = toRadians(destLat);
    const y = Math.sin(toRadians(destLng) - toRadians(startLng)) * Math.cos(destLatRad);
    const x = Math.cos(startLatRad) * Math.sin(destLatRad) - Math.sin(startLatRad) * Math.cos(destLatRad) * Math.cos(toRadians(destLng) - toRadians(startLng));
    return (toDegrees(Math.atan2(y, x)) + 360) % 360;
  };

  let routeMidpoint = null;
  let routeBearing = 0;

  if (targetLat && targetLng) {
    const destLat = parseFloat(targetLat);
    const destLng = parseFloat(targetLng);
    routeMidpoint = {
      latitude: (playgroundCoords.latitude + destLat) / 2,
      longitude: (playgroundCoords.longitude + destLng) / 2,
    };
    routeBearing = getBearing(playgroundCoords.latitude, playgroundCoords.longitude, destLat, destLng);
  }

  const toggle3D = async () => {
    if (mapRef.current) {
      const nextIs3D = !is3D;
      try {
        const camera = await mapRef.current.getCamera();
        camera.pitch = nextIs3D ? 60 : 0;
        mapRef.current.animateCamera(camera, { duration: 500 });
        setIs3D(nextIs3D);
      } catch (error) {
        console.error("Failed to animate camera for 3D mode", error);
      }
    }
  };

  return (
    <View style={{ flex: 1, width }} className="relative">

      {/* Category Filter — stuck at top */}
      <View className="bg-black px-3 py-2">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => setSelectedCategory(cat)}
                style={{
                  backgroundColor: isActive ? "rgba(59,130,246,0.9)" : "rgba(39,39,42,1)",
                  borderWidth: 1,
                  borderColor: isActive ? "rgba(59,130,246,1)" : "rgba(255,255,255,0.1)",
                }}
                className="flex-row items-center px-4 py-2 mr-2 rounded-full"
              >
                <Ionicons 
                  name={categoryIcons[cat]} 
                  size={14} 
                  color={isActive ? "white" : "#9ca3af"} 
                  style={{ marginRight: 6 }} 
                />
                <Text
                  className={`text-sm font-semibold ${isActive ? "text-white" : "text-gray-300"}`}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Map — full bleed below the filter */}
      {(Platform.OS === "ios" || Platform.OS === "android") && (
        <View className="flex-1 w-full overflow-hidden">
          <MapView
            ref={mapRef}
            style={{ width: "100%", height: "100%" }}
            mapType={Platform.OS === "ios" ? "hybridFlyover" : "hybrid"}
            showsBuildings={true}
            pitchEnabled={true}
            initialRegion={{
              latitude: 26.090829,
              longitude: 91.725019,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            {/* Route polyline + direction arrow */}
            {targetLat && targetLng && (
              <>
                <Polyline
                  coordinates={[
                    playgroundCoords,
                    { latitude: parseFloat(targetLat), longitude: parseFloat(targetLng) }
                  ]}
                  strokeColor="#ef4444"
                  strokeWidth={5}
                />
                {/* Start point marker */}
                <Marker coordinate={playgroundCoords} anchor={{ x: 0.5, y: 0.5 }}>
                  <View className="bg-green-500 w-8 h-8 rounded-full items-center justify-center border-2 border-white">
                    <Ionicons name="flag" size={14} color="white" />
                  </View>
                </Marker>
                {/* Destination marker */}
                <Marker 
                  coordinate={{ latitude: parseFloat(targetLat), longitude: parseFloat(targetLng) }} 
                  anchor={{ x: 0.5, y: 1 }}
                >
                  <View className="items-center">
                    <View className="bg-red-500 px-2 py-1 rounded-md mb-1">
                      <Text className="text-white text-[10px] font-bold">DEST</Text>
                    </View>
                    <View className="bg-red-500 w-8 h-8 rounded-full items-center justify-center border-2 border-white">
                      <Ionicons name="location" size={16} color="white" />
                    </View>
                  </View>
                </Marker>
                {/* Direction arrow at midpoint */}
                <Marker
                  coordinate={routeMidpoint}
                  anchor={{ x: 0.5, y: 0.5 }}
                  rotation={routeBearing}
                  flat={true}
                >
                  <View 
                    className="bg-white rounded-full p-1.5 shadow-lg"
                    style={{ 
                      transform: [{ rotate: `${routeBearing}deg` }],
                      elevation: 5,
                    }}
                  >
                    <Ionicons name="arrow-up" size={18} color="#ef4444" />
                  </View>
                </Marker>
              </>
            )}

            {/* Location markers */}
            {filteredLocations.map((loc) => (
              <Marker
                key={loc.id}
                coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                onPress={() => setSelectedMarker(loc.id)}
              >
                <Callout tooltip>
                  <View 
                    style={{ 
                      backgroundColor: 'rgba(15,15,15,0.92)', 
                      borderWidth: 1, 
                      borderColor: 'rgba(255,255,255,0.1)' 
                    }}
                    className="rounded-2xl px-4 py-3 min-w-[180px] max-w-[220px]"
                  >
                    <Text className="text-white text-sm font-bold mb-1">
                      {loc.name}
                    </Text>
                    <Text className="text-gray-400 text-[10px] mb-1">
                      📍 {loc.latitude.toFixed(4)}, {loc.longitude.toFixed(4)}
                    </Text>
                    <Text className="text-gray-300 text-xs">{loc.description}</Text>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
          
          <TouchableOpacity
            onPress={toggle3D}
            className="absolute bottom-6 right-6 p-3 rounded-full shadow-lg elevation-5 flex-row items-center justify-center border border-gray-200"
            style={{ backgroundColor: is3D ? '#3b82f6' : 'white' }}
          >
            <Ionicons name={is3D ? "cube" : "map"} size={24} color={is3D ? "white" : "#374151"} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MapPage;

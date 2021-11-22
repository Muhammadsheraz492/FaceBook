import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Touch,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useSelector } from "react-redux";
const HomeScreen = ({ navigation }) => {
  const count = useSelector(state => state.counter.value);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{ height: "100%", width: "100%", backgroundColor: "white" }}
        >
          <View style={{ height: 10, backgroundColor: "white" }} />
          <View
            style={{
              flexDirection: "row",
              // height: "100%",
              width: "98%",
              backgroundColor: "white",
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "white",
                }}
                source={{
                  uri: "https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/228861115_1000663874058141_8415421872344318037_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHTiql4f_8RAY5mn58Tcrdu0YJdCV2bbgrRgl0JXZtuCmdXvpwH0Ju8INmUkhN60mWua6CRCGPiUgSa94g2BF1-&_nc_ohc=B0mZbVnoCNwAX8ixzIw&tn=ornKWTrJzgOAslt6&_nc_zt=23&_nc_ht=scontent.flhe2-2.fna&oh=24a49efe283e0891f6d9dc138194c4b0&oe=619FE96E",
                }}
              />
            </TouchableOpacity>
            <View style={{ width: 5, backgroundColor: "white" }} />

            <View
              style={{
                borderWidth: 1,
                flex: 1,

                borderRadius: 20,
                justifyContent: "center",
                borderColor: "#949494",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePostScreen")}
              >
                <Text style={{ fontSize: 16 }}>Whats on your maind</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ height: 20, backgroundColor: "white" }} />
          <View
            style={{
              borderBottomWidth: 1,
              width: "95%",
              alignSelf: "center",

              borderColor: "#949494",
            }}
          />
          <View style={{ height: 10, backgroundColor: "white" }} />
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                // alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              {/* <TouchableOpacity
                onPress={() => navigation.navigate("LiveRecording")}
              > */}
              <View style={{ width: "10%" }} />
              <TouchableOpacity
                onPress={() => navigation.navigate("LiveRecording")}
              >
                <Entypo name="video-camera" size={20} color="red" />
              </TouchableOpacity>

              <View style={{ width: "3%" }} />
              <TouchableOpacity
                onPress={() => navigation.navigate("LiveRecording")}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Live</Text>
              </TouchableOpacity>
              <View style={{ width: "10%" }} />
              <View style={{ borderLeftWidth: 1 }} />
              <View style={{ width: "5%" }} />

              <MaterialIcons
                name="photo-library"
                size={21}
                color="lightgreen"
                onPress={() => navigation.navigate("LiveRecording")}
              />
              {/* </TouchableOpacity> */}
              <View style={{ width: "3%" }} />
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Phots</Text>
              <View style={{ width: "10%" }} />
              <View style={{ borderLeftWidth: 1 }} />
              <View style={{ width: "4%" }} />
              <MaterialIcons name="video-call" size={24} color="#7d1f8d" />
              {/* <View style={{ width: "1%" }} /> */}
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Rooms</Text>
              <View style={{ width: "10%" }} />
            </View>
          </View>
          <View style={{ height: 10, backgroundColor: "white" }} />
          {/* Next */}
          <View style={{ width: "100%" }}>
            <View
              style={{
                borderWidth: 5,
                borderColor: "grey",
                width: "100%",
                backgroundColor: "black",
                backgroundColor: "white",
              }}
            />

            <View style={{ width: "90%", flexDirection: "row" }}>
              <View
                style={{
                  // backgroundColor: "red",
                  borderWidth: 1,
                  borderColor: "#7d1f8d",
                  height: 150,
                  // width: 10,
                  flex: 0.3,
                  marginTop: 8,
                  marginLeft: 8,
                  borderRadius: 20,
                  zIndex: 0,
                  justifyContent: "flex-end",
                  // alignItems:'center'
                  width: 20,
                }}
              >
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: 50,
                      marginTop: -50,
                      alignSelf: "center",
                      justifyContent: "flex-end",
                    }}
                    source={{
                      uri: "https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/228861115_1000663874058141_8415421872344318037_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHTiql4f_8RAY5mn58Tcrdu0YJdCV2bbgrRgl0JXZtuCmdXvpwH0Ju8INmUkhN60mWua6CRCGPiUgSa94g2BF1-&_nc_ohc=B0mZbVnoCNwAX8ixzIw&tn=ornKWTrJzgOAslt6&_nc_zt=23&_nc_ht=scontent.flhe2-2.fna&oh=24a49efe283e0891f6d9dc138194c4b0&oe=619FE96E",
                    }}
                  />
                </TouchableOpacity>

                <View
                  style={{
                    // bottom: 1,
                    backgroundColor: "#E2E2DE",
                    // borderColor: "#fff",
                    // height: 70,
                    flex: 0.5,

                    borderRadius: 20,
                    // borderTopEndRadius: 80,

                    zIndex: 1,
                    // borderWidth: 3,
                    // borderTopColor: "blue",
                    // alignSelf: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      height: 25,
                      marginTop: -15,
                      alignItems: "center",
                      width: 5000,
                    }}
                  >
                    <TouchableOpacity>
                      <AntDesign name="pluscircle" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

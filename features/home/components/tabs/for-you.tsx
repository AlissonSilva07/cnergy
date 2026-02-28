import { appColors } from "@/constants/colors";
import { FlatList, StyleSheet, View } from "react-native";
import { PostCard } from "../post";

function ForYouTab() {
  const generateItems = () => {
    let items = [];
    for (let item = 0; items.length < 50; item++) {
      items.push({
        id: item,
        content: <PostCard />,
      });
    }

    return items;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={generateItems()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => item.content}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: appColors.border,
            }}
          />
        )}
      />
    </View>
  );
}

export { ForYouTab };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

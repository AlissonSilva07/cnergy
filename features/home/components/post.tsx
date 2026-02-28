import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Image, StyleSheet, Text, View } from "react-native";

function PostCard() {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image
          source={require("@/assets/images/avatar.jpg")}
          style={styles.postHeaderImage}
        />
        <Text style={textStyles.default}>Kris Gage</Text>
      </View>
      <View style={styles.postBody}>
        <View style={styles.postBodyInfo}>
          <Text style={textStyles.titleSmall}>
            How to really fall in love: 5 steps
          </Text>
          <Text
            style={[textStyles.default, { color: appColors.textSecondary }]}
          >
            Learn how to do it and worry no more.
          </Text>
        </View>
        <Image
          source={require("@/assets/images/avatar.jpg")}
          style={styles.postBodyImage}
        />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.postFooterItem}>
          <Octicons name="sparkle-fill" size={16} color="gold" />
          <Text style={[textStyles.small, { color: appColors.textSecondary }]}>
            12/12/2025
          </Text>
        </View>
        <View style={styles.postFooterItem}>
          <MaterialCommunityIcons
            name="hand-clap"
            size={16}
            color={appColors.textSecondary}
          />
          <Text style={[textStyles.small, { color: appColors.textSecondary }]}>
            18
          </Text>
        </View>
        <View style={styles.postFooterItem}>
          <MaterialCommunityIcons
            name="comment"
            size={16}
            color={appColors.textSecondary}
          />
          <Text style={[textStyles.small, { color: appColors.textSecondary }]}>
            89
          </Text>
        </View>
      </View>
    </View>
  );
}

export { PostCard };

const styles = StyleSheet.create({
  post: {
    width: "100%",
    flexDirection: "column",
    gap: appMeasurements.md,
    padding: appMeasurements.md,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: appMeasurements.sm,
  },

  postHeaderImage: {
    width: appMeasurements.lg,
    height: appMeasurements.lg,
    resizeMode: "cover",
    borderRadius: 1000,
  },

  postBody: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: appMeasurements.md,
  },
  postBodyInfo: {
    flex: 1,
    flexDirection: "column",
    gap: appMeasurements.sm,
  },
  postBodyImage: {
    width: 100,
    height: appMeasurements.xxl,
    resizeMode: "cover",
    borderRadius: appMeasurements.xs,
  },

  postFooter: {
    flexDirection: "row",
    alignItems: "center",
    gap: appMeasurements.md,
  },
  postFooterItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: appMeasurements.xs,
  },
});

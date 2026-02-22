import { appColors } from "@/constants/colors";
import { appMeasurements } from "@/constants/measurements";
import { textStyles } from "@/constants/textStyles";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("screen").width;

interface OnboardingCardProps {
  emoji: string;
  text: string;
}

function OnboardingCard({ emoji, text }: OnboardingCardProps) {
  return (
    <View style={[styles.item, { width: width / 2.5 }]}>
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/app-vector.png")}
          style={styles.image}
        />
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text style={textStyles.default}>{text}</Text>
    </View>
  );
}

export { OnboardingCard };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: appMeasurements.xxl,
    paddingHorizontal: appMeasurements.md,
    flexDirection: "column",
    gap: appMeasurements.md,
  },
  image: {
    position: "absolute",
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  emoji: {
    fontSize: 32,
  },
  imageContainer: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    height: 180,
    padding: appMeasurements.md,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: appMeasurements.md,
    backgroundColor: appColors.surface,
    borderRadius: appMeasurements.md,
  },
});

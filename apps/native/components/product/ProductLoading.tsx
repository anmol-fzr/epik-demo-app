import { useTimedCycle } from "hooks"
import { View, Text } from "react-native"
import { spacing } from "~/theme/colors"

const loadingTexts = [
  "Thinking ...",
  "Crunching Database for You ...",
  "Just There ..."
]

export function ProductLoading() {
  const loadingText = useTimedCycle(loadingTexts, 1000)

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: spacing.lg, textAlign: "center" }}>
        {loadingText}
      </Text>
    </View>
  )
}


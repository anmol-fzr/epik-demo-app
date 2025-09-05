import { useRef } from "react";
import { View, Text } from "react-native";
import { IProduct } from "~/api";
import { useProductStore } from "~/store";
import { spacing } from "~/theme/colors";
import { LegendList, LegendListRef, LegendListRenderItemProps } from "@legendapp/list"
import { cycleColors } from "~/lib/utils";


const getBg = cycleColors()

export function ProductList() {
  const products = useProductStore(state => state.products)
  const listRef = useRef<LegendListRef | null>(null)

  if (products.length === 0) {
    return (
      <View>
        <Text>
          No Products to Show
        </Text>
      </View>
    )
  }

  const renderItem = ({ item }: LegendListRenderItemProps<IProduct>) => {
    return (
      <View
        style={{
          backgroundColor: getBg(),
          padding: spacing.md,
          marginBottom: spacing.xs,
          borderRadius: spacing.sm
        }}
      >

        <Text style={{ textTransform: "capitalize", fontSize: spacing.md, fontWeight: 500 }}>
          {item.brand}
        </Text>
        <Text>
          {item.product_name}
        </Text>
      </View>
    )
  }

  return (
    <LegendList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.product_name}
      recycleItems={true}
      maintainVisibleContentPosition
      estimatedItemSize={32}
      ref={listRef}
    />
  )
}


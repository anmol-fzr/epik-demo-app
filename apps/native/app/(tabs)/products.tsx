import { useEffect } from "react";
import { ScrollView, Text } from "react-native";
import { API } from "~/api";
import { useQuery } from "~/hooks/useQuery";
import { useProductStore } from "~/store";
import { spacing } from "~/theme/colors";
import { ProductList } from "~/components/product/ProductList";

export default function Screen() {
  const setProducts = useProductStore(state => state.setProducts)

  const { isLoading, fetchData } = useQuery(API.PRODUCTS.ALL)

  useEffect(() => {
    (async function() {
      const data = await fetchData()
      setProducts(data)
    })()
  }, [fetchData])

  return (
    <>
      <ScrollView style={{ flex: 1, gap: spacing.lg, overflow: "scroll" }}>
        {isLoading ? (
          <Text> Loading Products ...</Text>
        ) : (
          <ProductList />
        )}
      </ScrollView>
    </>
  )
}

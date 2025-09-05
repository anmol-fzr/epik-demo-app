import * as React from 'react';
import {
  Pressable,
  ScrollView, View,
  Text,
  TextInput,
} from 'react-native';

import { isNotNull } from '~/lib/utils';

import { ProductCard, ProductLoading } from "components"
import { Container } from 'components/Container';
import { colors, spacing } from '~/theme/colors';
import { API, IProduct } from '~/api';
import { useQuery } from 'hooks';

export default function Screen() {
  const [query, setQuery] = React.useState("")
  const [data, setData] = React.useState<IProduct | null>(null)

  const queryFn = React.useCallback(async () => {
    const resp = await API.PRODUCTS.RECOMMEND(query)
    return resp
  }, [query])

  const { fetchData, isLoading } = useQuery(queryFn)

  async function setResponse() {
    const result = await fetchData()
    setData(result)
  }
  return (
    <Container>
      {isLoading ? (
        <ProductLoading />
      ) : (
        isNotNull(data) && (
          <ScrollView style={{ flex: 1, gap: spacing.lg, overflow: "scroll" }}>
            <View style={{ flexWrap: "wrap", gap: spacing.xs }}>
              {data.products.map((product) => (
                <ProductCard key={product.product_name} {...product} />
              ))}
            </View>

            <View style={{
              backgroundColor: colors.palette.neutral200,
              padding: spacing.md,
              borderRadius: spacing.lg,
              marginTop: spacing.lg,
            }}>
              <Text style={{ fontSize: spacing.md }}>
                {data.reason}
              </Text>
            </View>

          </ScrollView>
        )
      )}

      <View
        style={{
          flexDirection: "row", gap: spacing.xs, margin: 'auto', transitionProperty: "all",
          borderWidth: 1,
          borderRadius: spacing.md,
          backgroundColor: colors.palette.neutral200,
          borderColor: colors.palette.neutral400,
          padding: spacing.xs,
          paddingLeft: spacing.sm,
        }}
      >
        <TextInput placeholder="Your Query for Products ..." style={{ flex: 1, borderRadius: spacing.sm }}
          value={query}
          onChangeText={setQuery}
        />

        <Pressable style={{ backgroundColor: colors.palette.primary400, padding: spacing.sm, borderRadius: spacing.sm }} onPress={setResponse} disabled={isLoading} >
          <Text style={{ color: colors.background }}>
            Ask AI
          </Text>
        </Pressable>
      </View>
    </Container>
  );
}

Screen.displayName = 'Screen'

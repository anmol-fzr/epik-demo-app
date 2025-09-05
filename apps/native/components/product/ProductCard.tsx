import { View, Text } from 'react-native';
import { cycleColors } from '~/lib/utils';
import { spacing } from '~/theme/colors';
import { IProduct } from '~/api';

const getBg = cycleColors()

export function ProductCard({ brand, price, product_name }: IProduct) {
  return (
    <View style={{ backgroundColor: getBg(), width: "50%", aspectRatio: 1, borderRadius: spacing.md, padding: spacing.sm }}>
      <Text style={{ fontSize: 20, fontWeight: "500", textTransform: "capitalize" }}>{brand} </Text>
      <Text style={{ marginBottom: 0, }} >$ {price}</Text>
      <Text style={{ marginBottom: 0, marginTop: "auto" }} >{product_name}</Text>
    </View>
  )
}



import { colors } from "~/theme/colors"

function isNull(value: any): value is null {
  return value === null
}
function isNotNull(value: any) {
  return !isNull(value)
}


function cycleColors() {
  const { primary100, accent100, secondary100 } = colors.palette
  const colorArr = [accent100, primary100, secondary100]
  let indx = 0

  return () => {
    indx = indx === 2 ? 0 : indx + 1

    return colorArr[indx]
  }
}

export { isNull, isNotNull, cycleColors }

export const convertMoneyFormat = (value: string | number) => {
    console.log(value)
    if (typeof value == 'number') {
      return value
    }
    value = String(value)
    return parseFloat(value.replace("$", "").replaceAll(",", "").trim())
  }
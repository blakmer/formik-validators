export const getAge = (value, now = new Date()) => {
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()
  const [d, m, y] = value.split('.').map((i) => parseInt(i))
  return year - y - (month < m ? 1 : month === m && day < d ? 1 : 0)
}

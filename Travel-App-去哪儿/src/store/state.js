let city = '上海'
try {
  if (localStorage.city) {
    city = localStorage.city
  }
} catch (e) {}

export default {
  city
}

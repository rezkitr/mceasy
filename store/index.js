export const state = () => ({
  username: '',
  customers: [
    {
      id: '00001',
      name: 'Nabila Aqmarina',
      gender: 'f',
      address: 'Taman Sidoarjo No. 5, Sidoarjo',
      phone: '+62857123455678',
    },
    {
      id: '00002',
      name: 'Nabila Aqmarina',
      gender: 'f',
      address: 'Taman Sidoarjo No. 5, Sidoarjo',
      phone: '+62857123455678',
    },
    {
      id: '00003',
      name: 'Rudi Taboty',
      gender: 'm',
      address: 'Taman Sidoarjo No. 4, Sidoarjo',
      phone: '+62857123455678',
    },
  ],
})

// export const getters = {
//   filteredCustByName: (state) => (keyword) => {
//     if (keyword.length !== 0) {
//       return state.customers.filter((cust) => cust.name.includes(keyword))
//     } else {
//       return state.customers
//     }
//   },
// }

export const mutations = {
  setUsername(state, username) {
    state.username = username
  },
}

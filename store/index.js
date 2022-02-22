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
      phone: '+62857123455609',
    },
    {
      id: '00003',
      name: 'Rudi Taboty',
      gender: 'm',
      address: 'Taman Sidoarjo No. 4, Sidoarjo',
      phone: '+62857123455765',
    },
  ],
  nameFilteredCustomers: [],
  genderFilteredCustomers: [],
  filteredCustomers: [],
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

  filterCustomer(state, key) {
    const { name, gender } = key

    if (name) {
      const dataSource = !state.genderFilteredCustomers.length
        ? state.customers
        : state.genderFilteredCustomers
      const nameFilteredCust = dataSource.filter((cust) =>
        cust.name.toUpperCase().includes(name.toUpperCase())
      )

      state.nameFilteredCustomers = nameFilteredCust
      state.filteredCustomers = nameFilteredCust
    } else {
      state.nameFilteredCustomers = []
    }

    if (gender) {
      if (gender === 'a') {
        state.genderFilteredCustomers = []
      } else {
        const dataSource = !state.nameFilteredCustomers.length
          ? state.customers
          : state.nameFilteredCustomers

        const genderFilteredCust = dataSource.filter(
          (cust) => cust.gender === gender
        )
        state.genderFilteredCustomers = genderFilteredCust
        state.filteredCustomers = genderFilteredCust
      }
    }
  },
}

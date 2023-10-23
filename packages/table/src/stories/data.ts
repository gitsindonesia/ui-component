
export const states = ['active', 'inactive'];

export const items = [...Array(30)].map((_, index) => {
  const fName = ['Cory', 'Peppa', 'Gallagher', 'Caleb', 'Thomas'].at(
    Math.floor(Math.random() * 5),
  );
  const lName = ['Smith', 'Woods', 'Stein', 'Bauer', 'Gordon'].at(
    Math.floor(Math.random() * 5),
  );
  return {
    index,
    name: [fName, lName].join(' '),
    email: `user-${index}@example.com`,
    age: index + 1 * 10,
    state: states[Math.floor(Math.random() * states.length)],
    address: {
      city: [
        'Jakarta',
        'Melbourne',
        'London',
        'Washington',
        'Stockholm',
        'Seoul',
        'Moscoe',
        'Cape Town',
      ].at(index % 8),
      street: '241 Lorem Street',
    },
  };
});

export const headers = [
  {
    value: 'index',
    text: 'ID',
    class: '',
    tdClass: '',
    sortable: false,
  },
  {
    value: 'name',
    text: 'Name',
    class: '',
    tdClass: '',
  },
  {
    value: 'email',
    text: 'Email',
    class: '',
    tdClass: '',
  },
  {
    value: 'address.city',
    text: 'City',
    class: '',
    tdClass: '',
  },
];

export const selectableHeaders = [
  {
    text: 'Checkox',
    value: 'selected',
  },
  ...headers.slice(1),
];
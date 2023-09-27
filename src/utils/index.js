const getData = () => ([
  {
    id: 1,
    title: "Hello World!",
    body: "Halo, catatan ini bisa kamu isi dengan To-Do-List atau hal yang lainnya ya ^^b",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("id-ID", options)
}

export { getData, showFormattedDate };

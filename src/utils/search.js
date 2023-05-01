const search = (value, list) => {
  return list.filter(
    (item) =>
      item.name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
      item.labels.some(
        (label) => label.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
  );
};

export { search };

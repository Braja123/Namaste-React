export const filterData = (searchText, allRestaurants) => {
  return allRestaurants.filter((item) =>
    item.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
};
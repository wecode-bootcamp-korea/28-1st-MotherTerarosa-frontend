export const printNumberWithComma = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export async function fetchData(URI) {
  const response = await fetch(URI).then(res => res.json());
  return response.data;
}

export function filterOutProductsRelatedCategory(fetchedData, categoryId) {
  const productsInfoFilteredByCategory = fetchedData.filter(category =>
    category.category_no.includes(categoryId)
  );

  const filteredProducts = productsInfoFilteredByCategory.reduce(
    (accumulator, currentCategory) => [
      ...accumulator,
      ...currentCategory.products,
    ],
    []
  );

  return filteredProducts;
}

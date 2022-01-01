export async function fetchData(URI) {
  const response = await fetch(URI).then(res => res.json());
  return response.data;
}

export function getProductsRelatedCategory(fetchedData, categoryId) {
  const productsInfoFilteredByCategory = fetchedData.filter(category =>
    category.category_no.includes(categoryId)
  );

  if (categoryId === 0) return getFilteredProducts(fetchedData);
  return getFilteredProducts(productsInfoFilteredByCategory);

  function getFilteredProducts(productsInfo) {
    return productsInfo.reduce(
      (accumulator, currentCategory) => [
        ...accumulator,
        ...currentCategory.products,
      ],
      []
    );
  }
}

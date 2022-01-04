export async function fetchData(URI) {
  const response = await fetch(URI).then(res => res.json());
  return response.result;
}

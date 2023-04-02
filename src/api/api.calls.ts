export async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data as T;
}

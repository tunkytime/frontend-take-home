export async function fetcher(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An unexpected error occured");
    error.message = await res.json();
    throw error;
  }

  return res.json();
}

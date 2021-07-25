export async function getIngredients() {
  const data = await fetch('salad.json');
  return await data.json();
}

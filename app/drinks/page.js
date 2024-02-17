const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

async function fetchDrinks() {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch drinks");
  const data = await res.json();
  return data;
}

async function DrinksPage() {
  const data = await fetchDrinks();

  return (
    <div>
      <h1 className="text-7xl">DrinkPage</h1>
    </div>
  );
}

export default DrinksPage;

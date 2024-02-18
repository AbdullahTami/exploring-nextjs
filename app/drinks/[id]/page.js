import Link from "next/link";
import Image from "next/image";
import drinkImg from "./pexels-nitin-sharma-2842876.jpg";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

async function fetchDrink(id) {
  const res = await fetch(`${url}${id}`);
  if (!res.ok) throw new Error("Failed to fetch a drink ...");

  return res.json();
}

async function SingleDrinkPage({ params }) {
  const data = await fetchDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const image = data?.drinks[0]?.strDrinkThumb;
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={image}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        title={title}
      />
      {/* <Image alt="drink" src={drinkImg} className="w-48 h-48 rounded-lg" /> */}
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
}

export default SingleDrinkPage;

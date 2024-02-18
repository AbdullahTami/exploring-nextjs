import Image from "next/image";
import Link from "next/link";

function DrinksList({ drinks }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-9 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover object-center"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DrinksList;
// //////////////////////////////////////////////////////
// import Link from "next/link";

// function DrinksList({ drinks }) {
//   return (
//     <ul className="menu menu-vertical pl-0">
//       {drinks.map((drink) => (
//         <li key={drink.idDrink}>
//           <Link
//             href={`/drinks/${drink.idDrink}`}
//             className="text-xl font-medium"
//           >
//             {drink.strDrink}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default DrinksList;

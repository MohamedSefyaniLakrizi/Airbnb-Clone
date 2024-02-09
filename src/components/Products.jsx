import { useEffect } from "react";
import Product from "./Product";
const stays = Array.from({ length: 36 }, (_, i) => i + 1);
const imagesPerStay = Array.from({ length: 6 }, (_, i) => i + 1);

const images = stays.map((stay) =>
  imagesPerStay.map((image) => require(`../assets/stay_${stay}/${image}.webp`))
);
const products = [
  {
    location: "Larbaa Beni Hassen, Morocco",
    distance: "283 kilometers away",
    date: "Feb 12 - 17",
    rating: 4.91,
    price: 1484,
    favorite: true,
  },
  {
    location: "Chefchaouen, Morocco",
    distance: "Mountain and park views",
    date: "Feb 18 - 23",
    rating: 4.79,
    price: 311,
    favorite: true,
  },
  {
    location: "Rabat, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 25 - Mar 1",
    rating: 4.88,
    price: 3108,
    favorite: true,
  },
  {
    location: "Marrakech, Morocco",
    distance: "Mountain and desert views",
    date: "Feb 7 - 12",
    rating: 5.0,
    price: 4970,
    favorite: false,
  },
  {
    location: "Rabat, Morocco",
    distance: "Ocean views",
    date: "Mar 3 - 8",
    rating: 4.96,
    price: 996,
    favorite: false,
  },
  {
    location: "Chefchaouen, Morocco",
    distance: "Mountain and valley views",
    date: "Feb 11 - 16",
    rating: 4.92,
    price: 447,
    favorite: true,
  },
  {
    location: "Rabat, Morocco",
    distance: "Ocean views",
    date: "Feb 24 - 29",
    rating: 4.84,
    price: 973,
    favorite: false,
  },
  {
    location: "Plage de Bouznika, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 7 - 12",
    rating: 4.91,
    price: 1991,
    favorite: true,
  },
  {
    location: "Casablanca, Morocco",
    distance: "Ocean and sea views",
    date: "Feb 16 - 21",
    rating: 4.78,
    price: 1974,
    favorite: false,
  },
  {
    location: "Casablanca, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 6 - 11",
    rating: 4.9,
    price: 2519,
    favorite: false,
  },
  {
    location: "Salé, Morocco",
    distance: "Beach and sea views",
    date: "Mar 1 - 6",
    rating: 5.0,
    price: 447,
    favorite: false,
  },
  {
    location: "Chefchaouen, Morocco",
    distance: "287 kilometers away",
    date: "Feb 22 - 27",
    rating: 4.85,
    price: 571,
    favorite: true,
  },
  {
    location: "Marrakech, Morocco",
    distance: "Mountain and garden views",
    date: "Feb 6 - 11",
    rating: 4.92,
    price: 4342,
    favorite: false,
  },
  {
    location: "Kénitra, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 6 - 11",
    rating: 4.98,
    price: 818,
    favorite: true,
  },
  {
    location: "Tinghir, Morocco",
    distance: "Mountain views",
    date: "Feb 13 - 18",
    rating: 4.84,
    price: 342,
    favorite: true,
  },
  {
    location: "Marrakech, Morocco",
    distance: "224 kilometers away",
    date: "Feb 11 - 16",
    rating: 4.98,
    price: 7309,
    favorite: true,
  },
  {
    location: "Ourika, Morocco",
    distance: "River and valley views",
    date: "Feb 7 - 12",
    rating: 5.0,
    price: 643,
    favorite: false,
  },
  {
    location: "Mohammadia, Morocco",
    distance: "Beach and sea views",
    date: "Mar 9 - 14",
    rating: 4.86,
    price: 865,
    favorite: true,
  },
  {
    location: "Ben Slimane, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 6 - 11",
    rating: 4.92,
    price: 1375,
    favorite: true,
  },
  {
    location: "Marrakech, Morocco",
    distance: "223 kilometers away",
    date: "Feb 7 - 12",
    rating: "New",
    price: 5135,
    favorite: false,
  },
  {
    location: "Ourika, Morocco",
    distance: "Mountain and garden views",
    date: "Feb 7 - 12",
    rating: 5.0,
    price: 2090,
    favorite: false,
  },
  {
    location: "Rabat, Morocco",
    distance: "Ocean views",
    date: "Feb 6 - 11",
    rating: 4.82,
    price: 593,
    favorite: false,
  },
  {
    location: "Tameslouht, Morocco",
    distance: "237 kilometers away",
    date: "Feb 7 - 12",
    rating: 4.92,
    price: 7075,
    favorite: false,
  },
  {
    location: "Bouknadel, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 17 - 22",
    rating: 5.0,
    price: 1118,
    favorite: true,
  },
  {
    location: "Casablanca, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 9 - 14",
    rating: 4.81,
    price: 684,
    favorite: false,
  },
  {
    location: "Bouknadel, Morocco",
    distance: "Beach and sea views",
    date: "Feb 11 - 16",
    rating: 4.87,
    price: 1045,
    favorite: true,
  },
  {
    location: "Sidi Abdellah Ghiate, Morocco",
    distance: "Mountain views",
    date: "Feb 9 - 14",
    rating: 5.0,
    price: 26542,
    favorite: false,
  },
  {
    location: "Mohammédia, Morocco",
    distance: "Beach views",
    date: "Mar 2 - 7",
    rating: 4.79,
    price: 515,
    favorite: true,
  },
  {
    location: "Chefchaouen, Morocco",
    distance: "Mountain views",
    date: "Feb 6 - 11",
    rating: 4.8,
    price: 596,
    favorite: true,
  },
  {
    location: "Bin El-Ouidane, Morocco",
    distance: "Lake views",
    date: "Feb 8 - 13",
    rating: 4.88,
    price: 804,
    favorite: true,
  },
  {
    location: "Chefchaouen, Morocco",
    distance: "Mountain and garden views",
    date: "Feb 11 - 16",
    rating: 5.0,
    price: 1371,
    favorite: true,
  },
  {
    location: "Marrakech, Morocco",
    distance: "Mountain and garden views",
    date: "Feb 11 - 16",
    rating: 4.7,
    price: 3738,
    favorite: true,
  },
  {
    location: "Marrakesh, Morocco",
    distance: "228 kilometers away",
    date: "Feb 7 - 12",
    rating: 5.0,
    price: 19413,
    favorite: false,
  },
  {
    location: "Bouznika, Morocco",
    distance: "Beach and bay views",
    date: "Feb 7 - 12",
    rating: 4.91,
    price: 916,
    favorite: true,
  },
  {
    location: "Mohammédia, Morocco",
    distance: "Beach and ocean views",
    date: "Feb 6 - 11",
    rating: 4.79,
    price: 933,
    favorite: true,
  },
  {
    location: "Asilah, Morocco",
    distance: "Mountain and garden views",
    date: "Feb 6 - 11",
    rating: 5.0,
    price: 3195,
    favorite: true,
  },
];

function Products() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-5 items-center justify-center bg-white overflow-hidden px-6 md:px-10 xl:px-20 pt-4">
        {Array.from({ length: 36 }, (_, i) => (
          <Product
            image={images[i][0]}
            image2={images[i][1]}
            image3={images[i][2]}
            image4={images[i][3]}
            image5={images[i][4]}
            image6={images[i][5]}
            location={products[i].location}
            distance={products[i].distance}
            date={products[i].date}
            rating={products[i].rating}
            price={products[i].price}
            favorite={products[i].favorite}
          />
        ))}
      </div>
      <div className="w-full flex-col justify-center items-center bg-white py-14 gap-4 hidden md:flex">
        <h1 className="font-medium text-lg">
          Continue exploring amazing views
        </h1>
        <a
          href="/"
          className="px-6 py-3 bg-neutral-800 text-white rounded-lg font-medium hover:bg-neutral-950"
        >
          Show more
        </a>
      </div>
    </>
  );
}

export default Products;

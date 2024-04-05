import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
function CarsCard({ car }) {
  const { id, name, model, year, distance, location, price, image } = car;
  return (
    <Link
      href={`/cars/${id}`}
      className="space-y-1 justify-self-center rounded-lg p-3 shadow-xl shadow-slate-400"
    >
      <img className="mb-4 w-[15rem] rounded-xl" src={image} />
      <p className="font-medium">{`${name} ${model}`}</p>
      <p className="text-slate-500">{`${year} | ${distance}km`}</p>
      <div className="flex gap-5">
        <span className="bg-slate-300 p-1 rounded-lg">{`${price} $`}</span>
        <div className="flex items-center">
          <span>{location}</span>
          <span className="mt-[2px]">
            <IoLocationSharp />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CarsCard;

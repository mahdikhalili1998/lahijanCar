import carsData from "../../data/carsData";
import CarsCard from "../module/CarsCard";
function Car() {
  return (
    <div className="mx-auto grid grid-cols-3 gap-y-16">
      {carsData.map((car) => (
        <CarsCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default Car;

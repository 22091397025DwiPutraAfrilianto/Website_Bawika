import { Link } from "react-router-dom";

const KuisCard = ({ name, src, to }) => {
  return (
    <div className="w-full p-8 bg-white border-2 border-gray-300 shadow-xl rounded-2xl">
      <div className="flex flex-col gap-6">
        <img className="w-full rounded-xl" src={src} alt={name} />
        <p className="text-4xl font-semibold">{name}</p>
        <Link className="text-3xl font-semibold text-blue-700/70" to={to}>
          Mulai Kuis
        </Link>
      </div>
    </div>
  );
};

export default KuisCard;

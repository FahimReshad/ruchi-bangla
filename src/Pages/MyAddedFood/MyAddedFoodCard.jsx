import { Link } from "react-router-dom";


const MyAddedFoodCard = ({myFood}) => {
    const {name, image, price} = myFood;
    return (
        <div className="overflow-x-auto">
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100">
        <tbody>
          <tr className="hover:bg-gray-50 border-b transition duration-300 grid grid-cols-4">
            <td className="py-4 px-4 flex justify-start">
              <img src={image} className="h-16 w-16 object-cover bg-gray-300" />
            </td>
            <td className="py-4 px-6 border-b text-xl font-medium">{name}</td>
            <td className="py-4 px-6 border-b text-lg font-medium">{price}</td>
            <td className="py-4 px-6 border-b text-end">
              <Link >
                <button className="bg-[#8F3034] hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">
                  Update
                </button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    );
};

export default MyAddedFoodCard;
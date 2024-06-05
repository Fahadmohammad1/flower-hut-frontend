import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UpdateFlowerInfo from "../../components/dashboard/UpdateFlowerInfo";
import { IFlower } from "../../interface/common";

const MyFlowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [selectedFlower, setSelectedFlower] = useState<IFlower | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://flower-hut-backend.vercel.app/api/v1/product/myProducts",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setFlowers(data?.data);
    })();
  }, []);

  const handleUpdate = (flower: IFlower) => {
    setSelectedFlower(flower);
    const modal = document.getElementById("my_modal_3") as HTMLDialogElement;
    if (modal) modal.showModal();
  };

  // delete
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios.delete(
          `https://flower-hut-backend.vercel.app/api/v1/product/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(data);
        if (data?.statusCode === 200) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Product failed to delete.",
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image & Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {flowers?.map((flower: IFlower) => (
            <tr key={flower?.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-14 h-14">
                      <img src={flower?.image} alt="flower" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{flower?.name}</div>
                  </div>
                </div>
              </td>
              <td>{flower?.price}</td>
              <td>{flower?.category}</td>
              <td>
                <button
                  onClick={() => handleUpdate(flower)}
                  className="btn btn-ghost btn-xs bg-orange-300 text-black lg:mr-2 mb-2 lg:mb-0"
                >
                  update
                </button>
                <button
                  onClick={() => handleDelete(flower.id)}
                  className="btn btn-ghost btn-xs bg-red-400 text-black"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateFlowerInfo flower={selectedFlower} />
    </div>
  );
};

export default MyFlowers;

import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateFlowerInfo = ({ flower }: { flower: unknown }) => {
  const [category, setCategory] = useState("");

  const handleCategorySelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form?.name?.value;
    const price = form.price?.value;
    const description = form?.description?.value;
    const image = form?.image?.value;

    const productData = {
      name,
      image,
      price,
      category,
      description,
    };

    const { data } = await axios.patch(
      `https://flower-hut-backend.vercel.app/api/v1/product/${flower.id}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);

    if (data?.statusCode === 200) {
      document.getElementById("my_modal_3").close();

      Swal.fire({
        title: "Updated!",
        text: "product updated successfully.",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Failed!",
        text: "failed to update product.",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Update Flower Info
          </h2>
          <form
            onSubmit={handleUpdateProduct}
            className="mx-auto lg:mt-10 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={flower?.name}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm shadow-custom-extra ring-1 ring-inset ring-custom-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Price
                </label>
                <div className="mt-2.5">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    defaultValue={flower?.price}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset shadow-custom-extra ring-custom-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Image URL
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="image"
                    id="image"
                    defaultValue={flower?.image}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset shadow-custom-extra ring-custom-third placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Category
                </label>
                <div className="mt-2.5">
                  <select
                    name="category"
                    required
                    className="select w-full max-w-xs"
                    onChange={handleCategorySelect}
                  >
                    <option disabled selected>
                      {flower?.category}
                    </option>
                    <option>Small</option>
                    <option>Standard</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Lavish</option>
                    <option>Opulent</option>
                    <option>Extravagant</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Description
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="description"
                    id="description"
                    defaultValue={flower?.description}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-fh-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm btn-ghost hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateFlowerInfo;

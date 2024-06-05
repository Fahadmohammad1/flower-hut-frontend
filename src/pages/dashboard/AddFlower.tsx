import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import { auth } from "../../firebase/firebase.config";
import { useState, FormEvent, ChangeEvent } from "react";

const AddFlower = () => {
  const [user] = useAuthState(auth);
  const [category, setCategory] = useState("");

  const handleCategorySelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleAddFlower = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const price = (form.elements.namedItem("price") as HTMLInputElement).value;
    const description = (
      form.elements.namedItem("description") as HTMLTextAreaElement
    ).value;
    const ownerEmail = user?.email;

    const flowerData = {
      name,
      image,
      price,
      category,
      description,
      ownerEmail,
    };

    try {
      const res = await axios.post(
        "https://flower-hut-backend.vercel.app/api/v1/product/add",
        flowerData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res?.data?.statusCode === 200) {
        Swal.fire({
          title: "Added!",
          text: `${res.data.message}`,
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Failed to add product.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while adding the product.",
        icon: "error",
      });
    }
  };

  return (
    <div className="isolate px-3  lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Flower Information
        </h2>
      </div>
      <form
        onSubmit={handleAddFlower}
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
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm shadow-custom-extra ring-1 ring-inset ring-custom-primary placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset shadow-custom-extra ring-custom-primary placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset shadow-custom-extra ring-custom-primary placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
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
                  Select Category
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
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-fh-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:text-black shadow-sm btn-ghost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFlower;

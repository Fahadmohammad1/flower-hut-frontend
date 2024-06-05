import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { IProfile } from "../../interface/common";

const Profile = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://flower-hut-backend.vercel.app/api/v1/user/single",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setProfile(data?.data);
    })();
  }, []);

  const handleUpdateProfile = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const productData = {
      avatar: image,
      name,
      password,
    };

    const { data } = await axios.patch(
      `https://flower-hut-backend.vercel.app/api/v1/user/update`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);

    if (data?.statusCode === 200) {
      Swal.fire({
        title: "Updated!",
        text: "Profile updated successfully.",
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
    <section className="lg:flex justify-center flex-col gap-10">
      <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-10 pl-4">
        <div className="flex justify-center items-end text-center sm:block">
          <div className="transition-opacity bg-opacity-75"></div>
          <span className="hidden sm:inline-block sm:align-middle"></span>
          <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform sm:my-4 sm:align-middle sm:max-w-xl sm:w-full">
            <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
              <div className="grid grid-cols-1">
                <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                  <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                    <img
                      src={
                        profile?.avatar
                          ? profile?.avatar
                          : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                      }
                      className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                    />
                    <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                      {profile?.name}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-center text-gray-200">
                      {profile?.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-white text-2xl font-bold text-center">
        Update Profile Information
      </h2>
      <div className="overflow-y-auto sm:p-0 pt-4 pr-4 pb-20 pl-4">
        <div className="flex justify-center items-end text-center sm:block">
          <div className="transition-opacity bg-opacity-75"></div>
          <span className="hidden sm:inline-block sm:align-middle"></span>
          <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform sm:my-4 sm:align-middle sm:max-w-xl sm:w-full">
            <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
              <div className="grid grid-cols-1">
                <form
                  onSubmit={handleUpdateProfile}
                  className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg"
                >
                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      name="image"
                      id="image"
                      className="grow"
                      placeholder="Photo URL"
                      defaultValue={profile?.avatar}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="grow"
                      defaultValue={profile?.name}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="grow"
                      defaultValue={profile?.password}
                    />
                  </label>
                  <input
                    type="submit"
                    className="btn btn-sm bg-fh-primary mt-5 text-white w-full"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

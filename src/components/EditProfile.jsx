import React, { useState } from "react";
import FeedCard from "./FeedCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [gender, setGender] = useState(user.gender);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(false);

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const resp = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, about, gender },
        { withCredentials: true }
      );
      dispatch(addUser(resp?.data?.data));
      setToast(true);
      setTimeout(() => setToast(false), 3000);
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-primary mb-10">
          Edit Profile
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Form */}
          <section className="bg-base-100 border border-base-300 rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-primary mb-6">
              Personal Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full input input-bordered border-base-300 rounded-lg"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full input input-bordered border-base-300 rounded-lg"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-base-content mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    className="w-full input input-bordered border-base-300 rounded-lg"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-base-content mb-1">
                    Gender
                  </label>
                  <select
                    className="w-full select select-bordered border-base-300 rounded-lg"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  Photo URL
                </label>
                <input
                  type="text"
                  className="w-full input input-bordered border-base-300 rounded-lg"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-base-content mb-1">
                  About
                </label>
                <textarea
                  className="w-full textarea textarea-bordered border-base-300 rounded-lg"
                  placeholder="Write something about yourself..."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
            </div>

            {error && <p className="text-error mt-4">{error}</p>}

            <div className="mt-8 flex justify-end">
              <button
                className="btn bg-primary text-white hover:bg-primary-focus rounded-lg px-6"
                onClick={saveProfile}
              >
                Save Changes
              </button>
            </div>
          </section>

          {/* Right - Preview */}
          <section className="flex flex-col items-center">
            <FeedCard
              user={{ firstName, lastName, photoUrl, age, about, gender }}
            />
          </section>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success bg-success text-white">
            <span className="font-semibold text-sm">
              {`${user.firstName}, your profile was updated successfully!`}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;

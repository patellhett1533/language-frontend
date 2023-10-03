/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Posts } from "../../json/test";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  });

  const getProfile = async () => {
    const response = await fetch("http://localhost:5000/api/profile", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    return json;
  };
  useEffect(() => {
    getProfile().then((json) => setProfile(json));
  });

  if (!profile) return null;

  return (
    <div>
      <div className="sm:mx-auto sm:w-full sm:max-w-xl py-12 lg:px-8">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-semibold leading-7 text-gray-900">Profile</h3>
          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details
          </p>
        </div>
        <div class="mt-6 border-t border-gray-100">
          <dl class="divide-y divide-gray-100">
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Full name
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {profile.firstname} {profile.lastname}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {profile.email}
              </dd>
            </div>
            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt class="text-sm font-medium leading-6 text-gray-900">
                Accuracy
              </dt>
              <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                5 star
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Profile;

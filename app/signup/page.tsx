"use client";

import Link from "next/link";
import Image from "next/image";
import { IoPerson } from "react-icons/io5";
import { MdEmail, MdPlace } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import CountrySelector from "@/components/CountrySelector";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { login } from "@/redux/auth/auth-slice";

const Page = () => {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, seteEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = () => {
    axios
      .post("/api/signup", {
        firstname,
        lastname,
        phonenumber,
        password,
        email,
        state,
        city,
        country,
      })
      .then((res) => {
        dispatch(login(res.data));
        toast.success("successfully created an account");
      })
      .catch((err) => {
        toast.error("Ooops something went wrong");
        console.log(err);
      });
  };

  return (
    <main>
      <section className="bg-color2 flex justify-center md:px-20 py-20">
        <div className="flex w-3/4 justify-center h-[600px]">
          <div className="bg-color1 w-1/3 rounded-l-2xl p-10">
            <Link href={"#"} className="btn btn-ghost text-xl">
              <Image src={"/Logo.svg"} width={120} height={48} alt="logo" />
            </Link>
            <div className="mt-20">
              <h2 className="text-3xl font-bold text-center">
                Join our team of dynamic real estate agents! Start your journey
                with us today.
              </h2>
            </div>
          </div>
          <div className="bg-white w-[67%] rounded-r-2xl p-10 text-color2">
            <h3 className="text-4xl font-bold">Create Account</h3>
            <div className="grid grid-cols-2 gap-5 mt-16 ">
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <IoPerson />
                <input
                  type="text"
                  className="grow"
                  placeholder="First Name"
                  name="firstname"
                  required
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <IoPerson />
                <input
                  type="text"
                  className="grow"
                  placeholder="Last Name"
                  name="lastname"
                  required
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <MdEmail />
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={(e) => seteEmail(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <FaPhone />
                <input
                  type="text"
                  className="grow"
                  placeholder="Phone Number"
                  name="phonenumber"
                  required
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <RiLockPasswordFill />
                <input
                  type="Password"
                  placeholder="password"
                  className="grow"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <CountrySelector
                country={setCountry}
                city={setCity}
                state={setState}
              />
            </div>
            <div className="flex justify-between items-center gap-5 mt-32">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox checked:text-[#6d28d9] [--chkbg:#6d28d9]"
                />
                <p className="text-xs">
                  I agree with Terms of Use and Privacy Policy
                </p>
              </div>
              <div>
                <button
                  className="btn bg-color3 hover:bg-[#6d28d9] text-white"
                  onClick={submitHandler}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;

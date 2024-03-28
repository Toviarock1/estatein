"use client";
import { useState } from "react";
import CountrySelector from "@/components/CountrySelector";

const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <main>
      <section className="text-white w-[60%]">
        <h2 className="text-4xl font-bold my-5">Upload a New House</h2>
        <div className="grid gap-5">
          <label className="input input-bordered flex items-center gap-2">
            Title
            <input type="text" className="grow" />
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
          ></textarea>
          <div className="flex gap-5">
            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Bedroom
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Bathroom
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
          </div>
          <CountrySelector
            state={setState}
            city={setCity}
            country={setCountry}
          />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">upload picture</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <button
            className="btn bg-color3 hover:bg-[#6d28d9] text-white"
            // onClick={submitHandler}
          >
            Upload
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;

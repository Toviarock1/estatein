import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <section className="flex bg-color2">
        <div className="bg-gradient-to-r from-[#262626] md:px-20 px-4 py-20 w-full h-96 z-0 relative">
          <h1 className=" text-5xl font-semibold my-10">
            Find Your Dream Property
          </h1>
          <p className="font-thin">
            Welcome to Estatein, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story
            <br /> and a chance to redefine your life. With categories to suit
            every dreamer, your journey
          </p>
        </div>
      </section>
      <section className="md:px-20 -mt-9 bg-color2">
        <div className="w-[70%] m-auto bg-color2">
          <label className="input input-bordered flex items-center gap-2 py-8 border-4 border-color6 bg-color2 rounded-xl z-10 relative">
            <input
              type="text"
              className="grow"
              placeholder="Search For A Property"
            />
            <Link
              href={"/contact"}
              className="btn bg-color3 hover:bg-[#6d28d9] text-white"
            >
              <Image src={"/icon14.svg"} alt="image" height={24} width={24} />
              Find Property
            </Link>
          </label>
        </div>
        <div className="border-4 border-color6 bg-color6 w-4/5 m-auto rounded-xl flex gap-2">
          <select className="select select-bordered w-full max-w-xs bg-color2">
            <option disabled selected>
              Location
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full max-w-xs bg-color2">
            <option disabled selected>
              Property Type
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full max-w-xs bg-color2">
            <option disabled selected>
              Pricing Range
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full max-w-xs bg-color2">
            <option disabled selected>
              Property Size
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full max-w-xs bg-color2">
            <option disabled selected>
              Build Year
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
      </section>
      <section className="md:px-20 px-4 bg-color2 pb-16 pt-20">
        <Image
          src={"/icon7.svg"}
          height={64}
          width={64}
          alt="hero image"
          className="-ml-4"
        />
        <h2 className="text-4xl font-bold mt-2">
          Discover a World of Possibilities
        </h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Our portfolio of properties is as diverse as your dreams. Explore
            the following categories to find the perfect property that resonates
            with your vision of home
          </p>
        </div>
        <div>
          <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <div className="flex justify-between w-full">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item2" className="carousel-item w-full">
              <div className="flex justify-between w-full">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="item3" className="carousel-item w-full">
              <div className="flex justify-between w-full">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <Image
                      src={"/house1.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                    />
                  </figure>
                  <div className="card-body bg-color1 rounded-b-2xl">
                    <h2 className="card-title">Seaside Serenity Villa</h2>
                    <p className="text-color4">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful
                      suburban neighborhood
                    </p>
                    <div className="flex justify-between my-4 items-center">
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon8.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">4-Bedroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon9.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">3-Bathroom</p>
                      </div>
                      <div className="bg-color2 border px-2 py-2 rounded-full flex gap-1 items-center">
                        <Image
                          src={"/icon10.svg"}
                          height={24}
                          width={24}
                          alt="hero image"
                        />
                        <p className=" text-xs">Villa</p>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      <div className="flex justify-between w-full">
                        <div>
                          <p className="text-sm font-thin text-color4">Price</p>
                          <p>$550,000</p>
                        </div>
                        <Link
                          href={"/contact"}
                          className="btn bg-color3 hover:bg-[#6d28d9] text-white font-light"
                        >
                          View Property Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </section>
      <section className="md:px-20 px-4 bg-color2 pb-16 pt-20">
        <Image
          src={"/icon7.svg"}
          height={64}
          width={64}
          alt="hero image"
          className="-ml-4"
        />
        <h2 className="text-4xl font-bold mt-2">Let's Make it Happen</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Ready to take the first step toward your dream property? Fill out
            the form below, and our real estate wizards will work their magic to
            find your perfect match. Don't wait; let's embark on this exciting
            journey together.
          </p>
        </div>
        <div className="border border-color6 px-20 py-20 rounded-md">
          <div className="flex justify-between">
            <div>
              <label htmlFor="" className=" text-lg">
                First Name
                <br />
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
            <div>
              <label htmlFor="" className=" text-lg">
                Last Name
                <br />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
            <div>
              <label htmlFor="" className=" text-lg">
                Email
                <br />
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
            <div>
              <label htmlFor="" className=" text-lg">
                Phone
                <br />
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div>
              <label htmlFor="" className=" text-lg">
                Preferred Location
                <br />
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
            <div>
              <label htmlFor="" className=" text-lg">
                Property Type
                <br />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
            <div>
              <label htmlFor="" className=" text-lg">
                No. of Bathrooms
                <br />
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
            <div>
              <label htmlFor="" className=" text-lg">
                No. of Bedrooms
                <br />
                <input
                  type="text"
                  placeholder="Enter Phone Number"
                  className="input input-bordered w-full max-w-xs bg-color6"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-10 gap-5">
            <div className="w-2/4">
              <label htmlFor="" className="text-lg w-full">
                Budget
                <br />
                <input
                  type="text"
                  placeholder="Enter First Name"
                  className="input input-bordered w-full bg-color6"
                />
              </label>
            </div>
            <div className="w-2/4">
              <label htmlFor="" className=" text-lg">
                Preferred Contact Method
                <div className="flex justify-between gap-5">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="input input-bordered w-full max-w-xs bg-color6"
                  />
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    className="input input-bordered w-full max-w-xs bg-color6"
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="mt-10">
            <label htmlFor="" className="text-lg w-full">
              Message
              <br />
              <textarea
                className="textarea textarea-bordered w-full bg-color6"
                placeholder="Enter your Message here.."
                rows={5}
              ></textarea>
            </label>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="flex gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checked:text-[#6d28d9] [--chkbg:#6d28d9]"
              />
              <p>I agree with Terms of Use and Privacy Policy</p>
            </div>
            <div>
              <Link
                href={"/contact"}
                className="btn bg-color3 hover:bg-[#6d28d9] text-white"
              >
                Send Your Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

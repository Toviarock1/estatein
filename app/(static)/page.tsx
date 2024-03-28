import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex bg-color2">
        <div className="w-2/4 md:px-20 flex items-center">
          <div>
            <div>
              <h1 className="text-white font-bold text-4xl">
                Discover Your Dream Property with Estatein
              </h1>
              <p className="py-8 font-thin">
                Your journey to finding the perfect property begins here.
                Explore our listings to find the home that matches your dreams.
              </p>
              <Image
                className="absolute m-auto top-0 left-0 right-0 bottom-72"
                src={"/icon1.svg"}
                width={175}
                height={175}
                alt="icon 1"
                unoptimized
              />
            </div>
            <div className="flex gap-5 pb-10">
              <Link href={"/contact"} className="btn text-white">
                Learn More
              </Link>
              <Link
                href={"/contact"}
                className="btn bg-color3 hover:bg-[#6d28d9] text-white"
              >
                Browse Properties
              </Link>
            </div>
            <div className="flex gap-3">
              <div className="card w-full bg-color1 text-white text-primary-content">
                <div className="card-body">
                  <h2 className="card-title font-bold">200+</h2>
                  <p>Happy Customers</p>
                </div>
              </div>
              <div className="card w-full bg-color1 text-white text-primary-content">
                <div className="card-body">
                  <h2 className="card-title font-bold">10k+</h2>
                  <p>Properties For Clients</p>
                </div>
              </div>
              <div className="card w-full bg-color1 text-white text-primary-content">
                <div className="card-body">
                  <h2 className="card-title font-bold">16+</h2>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <Image
            src={"/Container.png"}
            height={100}
            width={100}
            alt="hero image"
            className="w-full"
            unoptimized
          />
        </div>
      </section>
      <section className="bg-color2 border-8 border-color1 p-4 flex gap-3">
        <div className="card w-full bg-color1 text-white text-primary-content">
          <div className="flex justify-end pt-4 pr-4">
            <Image src={"/Icon2.svg"} height={24} width={24} alt="hero image" />
          </div>
          <div className="card-body">
            <div className="flex items-center flex-col">
              <Image
                src={"/icon3.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <p>Find Your Dream Home</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-color1 text-white text-primary-content">
          <div className="flex justify-end pt-4 pr-4">
            <Image src={"/Icon2.svg"} height={24} width={24} alt="hero image" />
          </div>
          <div className="card-body">
            <div className="flex items-center flex-col">
              <Image
                src={"/icon4.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <p>Unlock Property Value</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-color1 text-white text-primary-content">
          <div className="flex justify-end pt-4 pr-4">
            <Image src={"/Icon2.svg"} height={24} width={24} alt="hero image" />
          </div>
          <div className="card-body">
            <div className="flex items-center flex-col">
              <Image
                src={"/icon5.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <p>Effortless Property Management</p>
            </div>
          </div>
        </div>
        <div className="card w-full bg-color1 text-white text-primary-content">
          <div className="flex justify-end pt-4 pr-4">
            <Image src={"/Icon2.svg"} height={24} width={24} alt="hero image" />
          </div>
          <div className="card-body">
            <div className="flex items-center flex-col">
              <Image
                src={"/icon6.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <p>Smart Informed Decisions</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-20 px-4 bg-color2 py-16">
        <Image
          src={"/icon7.svg"}
          height={64}
          width={64}
          alt="hero image"
          className="-ml-4"
        />
        <h2 className="text-4xl font-bold mt-2">Featured Properties</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein. Click "View Details" for more
            information.
          </p>
          <Link href={"/contact"} className="btn text-white">
            View All Properties
          </Link>
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
                      unoptimized
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
                      unoptimized
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
                      unoptimized
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
      <section className="md:px-20 px-4 bg-color2 py-16">
        <Image
          src={"/icon7.svg"}
          height={64}
          width={64}
          alt="hero image"
          className="-ml-4"
        />
        <h2 className="text-4xl font-bold mt-2">What Our Clients Say</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
          <Link href={"/contact"} className="btn text-white">
            View All Testimonials
          </Link>
        </div>
        <div>
          <div className="carousel w-full">
            <div id="testmonial1" className="carousel-item w-full mb-5">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="testmonial2" className="carousel-item w-full">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="testmonial3" className="carousel-item w-full">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
                <div className="border px-4 py-4 border-color4 rounded-2xl">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-color5"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      checked
                      className="mask mask-star-2 bg-color5"
                    />
                  </div>
                  <h6 className="font-bold text-xl my-3">
                    Exceptional Service!
                  </h6>
                  <p>
                    Our experience with Estatein was outstanding. Their team's
                    dedication and professionalism made finding our dream home a
                    breeze. Highly recommended!
                  </p>
                  <div className="my-3 flex items-center gap-4">
                    <div>
                      <Image
                        src={"/image2.png"}
                        height={60}
                        width={60}
                        alt="hero image"
                      />
                    </div>
                    <div>
                      <p>Wade Warren</p>
                      <p className=" text-color4">USA, California</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#testmonial1" className="btn btn-xs">
              1
            </a>
            <a href="#testmonial2" className="btn btn-xs">
              2
            </a>
            <a href="#testmonial3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </section>
      <section className="md:px-20 px-4 bg-color2 py-16">
        <Image
          src={"/icon7.svg"}
          height={64}
          width={64}
          alt="hero image"
          className="-ml-4"
        />
        <h2 className="text-4xl font-bold mt-2">Frequently Asked Questions</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
          <Link href={"/contact"} className="btn text-white">
            View All FAQ’s
          </Link>
        </div>
        <div>
          <div className="carousel w-full">
            <div id="faq1" className="carousel-item w-full">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div id="faq2" className="carousel-item w-full">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div id="faq3" className="carousel-item w-full">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    How do I search for properties on Estatein?
                  </h6>
                  <p className="text-color4">
                    Learn how to use our user-friendly search tools to find
                    properties that match your criteria.
                  </p>
                  <div className="my-3">
                    <Link href={"/contact"} className="btn text-white">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#faq1" className="btn btn-xs">
              1
            </a>
            <a href="#faq2" className="btn btn-xs">
              2
            </a>
            <a href="#faq3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

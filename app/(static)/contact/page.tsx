import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <section className="flex bg-color2">
        <div className="bg-gradient-to-r from-[#262626] md:px-20 px-4 py-20 w-full h-96 z-0 relative">
          <h1 className=" text-5xl font-semibold my-10">
            Get in Touch with Estatein
          </h1>
          <p className="font-thin">
            Welcome to Estatein's Contact Us page. We're here to assist you with
            any inquiries, requests, or feedback you may have. Whether you're
            looking to buy or sell a property,
            <br /> explore investment opportunities, or simply want to connect,
            we're just a message away. Reach out to us, and let's start a
            conversation.
          </p>
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
                src={"/icon25.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <p>info@estatein.com</p>
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
                src={"/icon26.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <p>+1 (123) 456-7890</p>
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
                src={"/icon27.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <p>Main Headquarters</p>
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
                src={"/icon24.svg"}
                height={44}
                width={44}
                alt="hero image"
              />
              <div className="flex gap-4">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
              </div>
            </div>
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
        <h2 className="text-4xl font-bold mt-2">Let's Connect</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            We're excited to connect with you and learn more about your real
            estate goals. Use the form below to get in touch with Estatein.
            Whether you're a prospective client ,<br /> partner, or simply
            curious about our services, we're here to answer your questions and
            provide the assistance you need.
          </p>
        </div>
        <div className="border border-color6 px-20 py-20 rounded-md">
          <div className="grid grid-cols-3 gap-5 justify-between">
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
            <div className="col-span-3">
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
      <section className="md:px-20 px-4 bg-color2 pb-16 pt-20">
        <Image
          src={"/icon7.svg"}
          height={64}
          width={64}
          alt="hero image"
          className="-ml-4"
        />
        <h2 className="text-4xl font-bold mt-2">
          Discover Our Office Locations
        </h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Estatein is here to serve you across multiple locations. Whether
            you're looking to meet our team, discuss real estate opportunities,
            or simply drop by for a chat, we
            <br /> have offices conveniently located to serve your needs.
            Explore the categories below to find the Estatein office nearest to
            you
          </p>
        </div>
        <div className="flex gap-5">
          <div className="card md:w-2/4  bg-color2 border border-color6 text-primary-content">
            <div className="card-body text-white">
              <p className="font-thin text-sm">Main Headquarters</p>
              <h2 className="card-title">
                123 Estatein Plaza, City Center, Metropolis
              </h2>
              <p className="font-thin">
                Our main headquarters serve as the heart of Estatein. Located in
                the bustling city center, this is where our core team of experts
                operates, driving the excellence and innovation that define us.
              </p>
              <div className="flex justify-between my-4 items-center">
                <div className="border bg-color6 border-color6 px-2 py-2 rounded-full flex gap-1 items-center">
                  <Image
                    src={"/icon26.svg"}
                    height={24}
                    width={24}
                    alt="hero image"
                  />
                  <p className=" text-xs">info@estatein.com</p>
                </div>
                <div className="border bg-color6 border-color6 px-2 py-2 rounded-full flex gap-1 items-center">
                  <Image
                    src={"/icon24.svg"}
                    height={24}
                    width={24}
                    alt="hero image"
                  />
                  <p className=" text-xs">+1 (123) 456-7890</p>
                </div>
                <div className="border bg-color6 border-color6 px-2 py-2 rounded-full flex gap-1 items-center">
                  <Image
                    src={"/icon27.svg"}
                    height={24}
                    width={24}
                    alt="hero image"
                  />
                  <p className="text-xs">Metropolis</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn w-full bg-color3 hover:bg-[#6d28d9] text-white">
                  Get Direction
                </button>
              </div>
            </div>
          </div>
          <div className="card md:w-2/4  bg-color2 border border-color6 text-primary-content">
            <div className="card-body text-white">
              <p className="font-thin text-sm">Regional Offices</p>
              <h2 className="card-title">
                456 Urban Avenue, Downtown District, Metropolis
              </h2>
              <p className="font-thin">
                Estatein's presence extends to multiple regions, each with its
                own dynamic real estate landscape. Discover our regional
                offices, staffed by local experts who understand the nuances of
                their respective markets.
              </p>
              <div className="flex justify-between my-4 items-center">
                <div className="border bg-color6 border-color6 px-2 py-2 rounded-full flex gap-1 items-center">
                  <Image
                    src={"/icon26.svg"}
                    height={24}
                    width={24}
                    alt="hero image"
                  />
                  <p className=" text-xs">info@estatein.com</p>
                </div>
                <div className="border bg-color6 border-color6 px-2 py-2 rounded-full flex gap-1 items-center">
                  <Image
                    src={"/icon24.svg"}
                    height={24}
                    width={24}
                    alt="hero image"
                  />
                  <p className=" text-xs">+1 (123) 456-7890</p>
                </div>
                <div className="border bg-color6 border-color6 px-2 py-2 rounded-full flex gap-1 items-center">
                  <Image
                    src={"/icon27.svg"}
                    height={24}
                    width={24}
                    alt="hero image"
                  />
                  <p className="text-xs">Metropolis</p>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn w-full bg-color3 hover:bg-[#6d28d9] text-white">
                  Get Direction
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-20 px-4 bg-color2 py-16">
        <div className="rounded-2xl p-10 bg-[url('/image6.png')] bg-cover bg-[#1A1A1A] grid grid-cols-2 gap-6">
          <Image
            src={"/image7.png"}
            height={700}
            width={700}
            alt="mmm"
            unoptimized
          />
          <Image
            src={"/image8.png"}
            height={700}
            width={700}
            alt="mmm"
            unoptimized
          />
          <Image
            src={"/image9.png"}
            height={700}
            width={700}
            alt="mmm"
            unoptimized
          />
          <div className="grid grid-cols-2 gap-5">
            <Image
              src={"/image10.png"}
              height={700}
              width={700}
              alt="mmm"
              unoptimized
              className="h-full w-full"
            />
            <Image
              src={"/image11.png"}
              height={700}
              width={700}
              alt="mmm"
              unoptimized
              className="h-full w-full"
            />
          </div>
          <div>
            <Image
              src={"/icon7.svg"}
              height={64}
              width={64}
              alt="hero image"
              className="-ml-4"
            />
            <h2 className="text-4xl font-bold mt-2">
              Explore Estatein's World
            </h2>
            <div className="flex gap-10 items-center">
              <p className="py-8 font-thin">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>
          </div>
          <Image
            src={"/image12.png"}
            height={700}
            width={700}
            alt="mmm"
            unoptimized
            className="h-full w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default page;

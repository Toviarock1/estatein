import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main>
      <section className="flex bg-color2">
        <div className="bg-gradient-to-r from-[#262626] md:px-20 px-4 py-20 w-full h-96 z-0 relative">
          <h1 className=" text-5xl font-semibold my-10">
            Elevate Your Real Estate Experience
          </h1>
          <p className="font-thin">
            Welcome to Estatein, where your real estate aspirations meet expert
            guidance. Explore our comprehensive range of services, each designed
            to cater to your unique needs
            <br /> and dreams.
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
        <h2 className="text-4xl font-bold mt-2">Unlock Property Value</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Selling your property should be a rewarding experience, and at
            Estatein, we make sure it is. Our Property Selling Service is
            designed to maximize the value of your property, ensuring you get
            the best deal possible. Explore the categories below to see how we
            can help you at every step of your selling journey
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5">
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon15.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Valuation Mastery</p>
                </div>
                <p className="font-thin mt-4">
                  Discover the true worth of your property with our expert
                  valuation services.
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon16.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Strategic Marketing</p>
                </div>
                <p className="font-thin mt-4">
                  Selling a property requires more than just a listing; it
                  demands a strategic marketing approach.
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon17.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Negotiation Wizardry</p>
                </div>
                <p className="font-thin mt-4">
                  Negotiating the best deal is an art, and our negotiation
                  experts are masters of it.
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon18.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Closing Success</p>
                </div>
                <p className="font-thin mt-4">
                  A successful sale is not complete until the closing. We guide
                  you through the intricate closing process.
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content col-span-2 bg-[url('/image5.png')] bg-cover">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <p>Unlock the Value of Your Property Today</p>
                  <Link href={"/contact"} className="btn text-white">
                    Learn More
                  </Link>
                </div>
                <p className="font-thin mt-4">
                  Ready to unlock the true value of your property? Explore our
                  Property Selling Service categories and let us help you
                  achieve the best deal possible for your valuable asset.
                </p>
              </div>
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
        <h2 className="text-4xl font-bold mt-2">
          Effortless Property Management
        </h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Owning a property should be a pleasure, not a hassle. Estatein's
            Property Management Service takes the stress out of property
            ownership, offering comprehensive solutions tailored to your needs.
            Explore the categories below to see how we can make property
            management effortless for you
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-5">
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon19.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Tenant Harmony</p>
                </div>
                <p className="font-thin mt-4">
                  Our Tenant Management services ensure that your tenants have a
                  smooth and reducing vacancies.
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon20.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Maintenance Ease</p>
                </div>
                <p className="font-thin mt-4">
                  Say goodbye to property maintenance headaches. We handle all
                  aspects of property upkeep.
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon21.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Financial Peace of Mind</p>
                </div>
                <p className="font-thin mt-4">
                  Managing property finances can be complex. Our financial
                  experts take care of rent collection
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <Image
                    src={"/icon22.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />
                  <p>Legal Guardian</p>
                </div>
                <p className="font-thin mt-4">
                  Stay compliant with property laws and regulations
                  effortlessly.
                </p>
              </div>
            </div>
            <div className="card w-full bg-color1 text-white text-primary-content col-span-2 bg-[url('/image5.png')] bg-cover">
              <div className="card-body">
                <div className="flex items-center flex-row gap-4">
                  <p>Experience Effortless Property Management</p>
                  <Link href={"/contact"} className="btn text-white">
                    Learn More
                  </Link>
                </div>
                <p className="font-thin mt-4">
                  Ready to experience hassle-free property management? Explore
                  our Property Management Service categories and let us handle
                  the complexities while you enjoy the benefits of property
                  ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex bg-color2 items-center py-16">
        <div className="md:px-20 w-[58%] flex items-center">
          <div>
            <div>
              <Image
                src={"/icon7.svg"}
                height={64}
                width={64}
                alt="hero image"
                className="-ml-4"
              />
              <h1 className="text-white font-bold text-4xl">
                Smart Investments, Informed Decisions
              </h1>
              <p className="py-8 font-thin">
                Building a real estate portfolio requires a strategic approach.
                Estatein's Investment Advisory Service empowers you to make
                smart investments and informed decisions.
              </p>
              <div className="card w-full bg-color1 text-white text-primary-content col-span-2 bg-[url('/image5.png')] bg-cover">
                <div className="card-body">
                  <div className="flex items-center flex-row gap-4">
                    <p>Unlock Your Investment Potential</p>
                  </div>
                  <p className="font-thin mt-4">
                    Ready to experience hassle-free property management? Explore
                    our Property Management Service categories and let us handle
                    the complexities while you enjoy the benefits of property
                    ownership.
                  </p>
                  <Link href={"/contact"} className="btn text-white mt-4">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:pr-20 w-full">
          <div className="border border-4 border-color4 rounded-lg px-10 py-10">
            <div className="flex gap-5 border-b pb-5 border-color4">
              <div className="border-r border-color4">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon15.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">Market Insight</h3>
                </div>
                <p className="text-color4 mt-2">
                  Stay ahead of market trends with our expert Market Analysis.
                  We provide in-depth insights into real estate market
                  conditions
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon24.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">ROI Assessment</h3>
                </div>
                <p className="text-color4 mt-2">
                  Make investment decisions with confidence. Our ROI Assessment
                  services evaluate the potential returns on your investments
                </p>
              </div>
            </div>
            <div className="flex gap-5 pb-5 pt-7">
              <div className="border-r border-color4">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon23.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">Customized Strategies</h3>
                </div>
                <p className="text-color4 mt-2">
                  Every investor is unique, and so are their goals. We develop
                  Customized Investment Strategies tailored to your specific
                  needs
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon6.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">Diversification Mastery</h3>
                </div>
                <p className="text-color4 mt-2">
                  Diversify your real estate portfolio effectively. Our experts
                  guide you in spreading your investments across various
                  property types and locations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

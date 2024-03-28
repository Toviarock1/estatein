import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <section className="flex bg-color2">
        <div className="w-2/4 md:px-20 flex items-center">
          <div>
            <div>
              <Image
                src={"/icon7.svg"}
                height={64}
                width={64}
                alt="hero image"
                className="-ml-4"
              />
              <h1 className="text-white font-bold text-4xl">Our Journey</h1>
              <p className="py-8 font-thin">
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary. Over the years,
                we've expanded our reach, forged valuable partnerships, and
                gained the trust of countless clients.
              </p>
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
        <div className="w-2/4 md:px-20 py-20">
          <Image
            src={"/image3.png"}
            height={100}
            width={100}
            alt="hero image"
            className="w-full"
            unoptimized
          />
        </div>
      </section>
      <section className="flex bg-color2">
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
              <h1 className="text-white font-bold text-4xl">Our Values</h1>
              <p className="py-8 font-thin">
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pr-20 w-full">
          <div className="border border-4 border-color4 rounded-lg px-10 py-10">
            <div className="flex gap-5 border-b pb-5 border-color4">
              <div className="border-r border-color4">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon11.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">Trust</h3>
                </div>
                <p className="text-color4 mt-2">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon12.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">Excellence</h3>
                </div>
                <p className="text-color4 mt-2">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </div>
            </div>
            <div className="flex gap-5 pb-5 pt-7">
              <div className="border-r border-color4">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon13.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">Client-Centric</h3>
                </div>
                <p className="text-color4 mt-2">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Image
                    src={"/icon11.svg"}
                    height={44}
                    width={44}
                    alt="hero image"
                  />

                  <h3 className="font-bold">Our Commitment</h3>
                </div>
                <p className="text-color4 mt-2">
                  We are dedicated to providing you with the highest level of
                  service, professionalism, and support.
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
        <h2 className="text-4xl font-bold mt-2">Our Achievements</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
        </div>
        <div>
          <div className="w-full">
            <div id="faq1" className="w-full">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    3+ Years of Excellence
                  </h6>
                  <p className="text-color4">
                    With over 3 years in the industry, we've amassed a wealth of
                    knowledge and experience, becoming a go-to resource for all
                    things real estate.
                  </p>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">Happy Clients</h6>
                  <p className="text-color4">
                    Our greatest achievement is the satisfaction of our clients.
                    Their success stories fuel our passion for what we do.
                  </p>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h6 className="font-bold text-xl my-3">
                    Industry Recognition
                  </h6>
                  <p className="text-color4">
                    We've earned the respect of our peers and industry leaders,
                    with accolades and awards that reflect our commitment to
                    excellence.
                  </p>
                </div>
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
          Navigating the Estatein Experience
        </h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
        </div>
        <div>
          <div className="w-full">
            <div id="faq1" className="w-full">
              <div className="flex justify-between w-full gap-5">
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h5 className="font-thin text-lg my-3">Step 01</h5>
                  <h6 className="font-bold text-xl my-3">
                    Discover a World of Possibilities
                  </h6>
                  <p className="text-color4">
                    Your journey begins with exploring our carefully curated
                    property listings. Use our intuitive search tools to filter
                    properties based on your preferences, including location,
                    type, size, and budget.
                  </p>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h5 className="font-thin text-lg my-3">Step 02</h5>
                  <h6 className="font-bold text-xl my-3">
                    Narrowing Down Your Choices
                  </h6>
                  <p className="text-color4">
                    Once you've found properties that catch your eye, save them
                    to your account or make a shortlist. This allows you to
                    compare and revisit your favorites as you make your
                    decision.
                  </p>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h5 className="font-thin text-lg my-3">Step 03</h5>
                  <h6 className="font-bold text-xl my-3">
                    Personalized Guidance
                  </h6>
                  <p className="text-color4">
                    Have questions about a property or need more information?
                    Our dedicated team of real estate experts is just a call or
                    message away.
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full gap-5 mt-10">
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h5 className="font-thin text-lg my-3">Step 04</h5>
                  <h6 className="font-bold text-xl my-3">
                    See It for Yourself
                  </h6>
                  <p className="text-color4">
                    Arrange viewings of the properties you're interested in.
                    We'll coordinate with the property owners and accompany you
                    to ensure you get a firsthand look at your potential new
                    home.
                  </p>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h5 className="font-thin text-lg my-3">Step 05</h5>
                  <h6 className="font-bold text-xl my-3">
                    Making Informed Decisions
                  </h6>
                  <p className="text-color4">
                    Before making an offer, our team will assist you with due
                    diligence, including property inspections, legal checks, and
                    market analysis. We want you to be fully informed and
                    confident in your choice.
                  </p>
                </div>
                <div className="border px-10 py-4 border-color4 rounded-2xl">
                  <h5 className="font-thin text-lg my-3">Step 06</h5>
                  <h6 className="font-bold text-xl my-3">
                    Getting the Best Deal
                  </h6>
                  <p className="text-color4">
                    We'll help you negotiate the best terms and prepare your
                    offer. Our goal is to secure the property at the right price
                    and on favorable terms.
                  </p>
                </div>
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
        <h2 className="text-4xl font-bold mt-2">Meet the Estatein Team</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
        </div>
        <div>
          <div className="w-full">
            <div id="faq1" className="w-full">
              <div className="flex justify-between w-full gap-5 mt-10">
                <div className="card w-96 bg-color2 border border-color4 shadow-xl">
                  <figure>
                    <Image
                      src={"/image4.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                      unoptimized
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title flex justify-center">
                      Max Mitchell
                    </h2>
                    <p className="text-center">Founder</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-color3 hover:bg-[#6d28d9] text-white">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-color2 border border-color4 shadow-xl">
                  <figure>
                    <Image
                      src={"/image4.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                      unoptimized
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title flex justify-center">
                      Max Mitchell
                    </h2>
                    <p className="text-center">Founder</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-color3 hover:bg-[#6d28d9] text-white">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-color2 border border-color4 shadow-xl">
                  <figure>
                    <Image
                      src={"/image4.png"}
                      height={64}
                      width={64}
                      alt="hero image"
                      className="w-full"
                      unoptimized
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title flex justify-center">
                      Max Mitchell
                    </h2>
                    <p className="text-center">Founder</p>
                    <div className="card-actions justify-end">
                      <button className="btn bg-color3 hover:bg-[#6d28d9] text-white">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
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
        <h2 className="text-4xl font-bold mt-2">Our Valued Clients</h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            At Estatein, we have had the privilege of working with a diverse
            range of clients across various industries. Here are some of the
            clients we've had the pleasure of serving
          </p>
        </div>
        <div className="flex justify-between gap-10">
          <div className="border-4 border-color4 rounded-2xl md:w-2/4 px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-thin">Since 2019</p>
                <h4 className="font-bold">ABC Corporation</h4>
              </div>
              <div>
                <Link href={"/contact"} className="btn text-white">
                  Visit Website
                </Link>
              </div>
            </div>
            <div className="border border-color4 rounded-xl p-4 mt-10">
              <p className="font-thin">What They Said 🤗</p>
              <p>
                Estatein's expertise in finding the perfect office space for our
                expanding operations was invaluable. They truly understand our
                business needs.
              </p>
            </div>
          </div>
          <div className="border-4 border-color4 rounded-2xl md:w-2/4 px-10 py-8">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-thin">Since 2018</p>
                <h4 className="font-bold">GreenTech Enterprises</h4>
              </div>
              <div>
                <Link href={"/contact"} className="btn text-white">
                  Visit Website
                </Link>
              </div>
            </div>
            <div className="border border-color4 rounded-xl p-4 mt-10">
              <p className="font-thin">What They Said 🤗</p>
              <p>
                Estatein's expertise in finding the perfect office space for our
                expanding operations was invaluable. They truly understand our
                business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

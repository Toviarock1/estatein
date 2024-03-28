import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="md:px-20 px-4 bg-color2 py-16 border-t border-b border-color4 bg-double">
        <h2 className="text-4xl font-bold mt-2">
          Start Your Real Estate Journey Today
        </h2>
        <div className="flex gap-10 items-center">
          <p className="py-8 font-thin">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
          <Link
            href={"/contact"}
            className="btn bg-color3 hover:bg-[#6d28d9] text-white"
          >
            Explore Properties
          </Link>
        </div>
      </section>
      <footer className="footer md:px-20 p-10 bg-color2 text-base-content">
        <aside>
          <Image src="/Logo.svg" height={160} width={160} alt="logo" />
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;

import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import FooterListCol from "./FooterListCol";
import { RiVisaLine, RiTwitterXFill } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCcMastercard, FaInstagramSquare } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram, AiFillYoutube, AiOutlineSlack } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineEuro } from "react-icons/md";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-slate-100 text-slate-600 text-md mt-0"
      style={{ fontSize: "11px" }}
    >
      <Container>
        <p className="pt-10 text-xl justify-start font-bold">
          Inspiration for future getaways
        </p>
        <div className="border-b border-gray-300 my-1 mt-10"></div>

        <div className="flex flex-col sm:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="font-bold mb-2 text-sm">Support</h3>
            <Link href="#" className="hover:underline">
              Help Center
            </Link>
            <Link href="#" className="hover:underline">
              AirCover
            </Link>
            <Link href="#" className="hover:underline">
              Anti-discrimination
            </Link>
            <Link href="#" className="hover:underline">
              Disability support
            </Link>
            <Link href="#" className="hover:underline">
              Cancellation options
            </Link>
            <Link href="#" className="hover:underline">
              Report neighborhood concern
            </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-sm font-bold mb-2">Hosting</h3>
            <Link href="#" className="hover:underline">
              Airbnb your home
            </Link>
            <Link href="#" className="hover:underline">
              AirCover for Hosts
            </Link>
            <Link href="#" className="hover:underline">
              Hosting resources
            </Link>
            <Link href="#" className="hover:underline">
              Community forum
            </Link>
            <Link href="#" className="hover:underline">
              Hosting responsibly
            </Link>
            <Link href="#" className="hover:underline">
              Airbnb-friendly apartments
            </Link>
          </FooterList>
          <FooterList>
            <h3 className="text-sm font-bold mb-2">Airbnb</h3>
            <Link href="#" className="hover:underline">
              Newsroom
            </Link>
            <Link href="#" className="hover:underline">
              New features
            </Link>
            <Link href="#" className="hover:underline">
              Careers
            </Link>
            <Link href="#" className="hover:underline">
              Investors
            </Link>
            <Link href="#" className="hover:underline">
              Gift
            </Link>
            <Link href="#" className="hover:underline">
              Airbnb.org emergency stays
            </Link>
          </FooterList>
        </div>

        {/* lower div */}

        <div className="border-b border-gray-300 my-1"></div>

        <div className="flex flex-col sm:flex-row justify-between pt-3 pb-8 gap-6 text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
          <p className="text-[15px]">
            &copy; {new Date().getFullYear()}{" "}
            <span className="hover:underline cursor-pointer">Airbnb</span>, Inc.
            · <span className="hover:underline cursor-pointer">Terms</span>.{" "}
            <span className="hover:underline cursor-pointer">Site map </span>.{" "}
            <span className="hover:underline cursor-pointer">
              Privacy Your Privacy Choices
            </span>
          </p>
          <p className="text-[15px] flex flex-row sm:flex-row gap-3">
            <span className="flex flex-row sm:text-clip justify-center sm:text-center gap-1 items-center ">
              <CiGlobe />
              English (US)
            </span>
            <span className="flex flex-row justify-center items-center gap-1">
              <MdOutlineEuro />
              EUR
            </span>
            <span className="flex flex-row justify-center items-center gap-1">
              <FaFacebookSquare size={24} />
              <FaTwitterSquare size={24} />
              <FaInstagramSquare size={24} />
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

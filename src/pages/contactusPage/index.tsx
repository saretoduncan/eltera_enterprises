import { AiFillTikTok } from "react-icons/ai";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { FaMapLocationDot, FaSquareFacebook } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import customer_care from "../../assets/customer_care.webp";

const ContactUsPage = () => {
  return (
    <div className="mt-[150px] lg:my-[200px] px-6 max-w-[1280px] mx-auto ">
      <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 lg:relative ">
        <div
          className="h-[300px] lg:h-auto bg-cover relative lg:top-4 lg:left-4 lg:z-[-1] lg:rounded-lg rounded-b-md"
          style={{
            backgroundImage: "url(" + "'" + customer_care + "'" + ")",
          }}
        >
          <div className="absolute size-full bg-[#00000090] lg:rounded-md rounded-b-lg"></div>
        </div>
        <div className="grid bg-primaryBlue min-h-[300px] text-white p-4 gap-4 lg:rounded-lg rounded-t-lg">
          <h3 className="uppercase font-bold text-2xl text-auto">Contact us</h3>
          <h4 className="text-xl font-bold text-orange-500">Get In Touch</h4>
          <p className="font-bold">
            For inquiries, quotes, or more information, feel free to reach out.
            Our team is here to assist you with all your transport and logistics
            needs.
          </p>
          <section className="grid gap-4  md:grid-cols-2 md:gap-x-2">
            <section className="flex gap-1">
              {" "}
              <FaPhoneAlt className="text-3xl self-center text-orange-500" />
              <div className="">
                <p className="text-xl font-bold">Call us</p>
                <p className="text-sm"> +254 721 594 969 </p>
              </div>
            </section>{" "}
            <section className="flex  gap-1">
              <div>
                <IoMdMail className="text-3xl self-center text-orange-500" />
              </div>

              <div className="">
                <p className="text-xl font-bold">Email us</p>
                <p className="text-sm">info@elteraenterprises.co.ke</p>
              </div>
            </section>
            <section className="flex gap-1">
              {" "}
              <FaMapLocationDot className="text-3xl self-center text-orange-500" />
              <div className="">
                <p className="text-xl font-bold">Location</p>
                <p className="text-sm">Nairobi, Kenya</p>
              </div>
            </section>
          </section>
          <section>
            <p className="font-bold ">Follow Us On</p>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="#"
                    className="text-3xl text-orange-600 hover:text-4xl"
                  >
                    <FaSquareFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-3xl text-orange-600 hover:text-4xl"
                  >
                    <BiLogoInstagramAlt />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-3xl text-orange-600 hover:text-4xl"
                  >
                    <AiFillTikTok />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/timothy-boit-672a2396"
                    className="text-3xl text-orange-600 hover:text-4xl"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

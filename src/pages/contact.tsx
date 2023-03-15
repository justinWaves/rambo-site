import React, { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VideoBackground from "@/components/VideoBackground";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SubjectIcon from "@mui/icons-material/Subject";
import { useForm, SubmitHandler } from "react-hook-form";

interface SendEmailFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SendEmailFormInput>();

  return (
    <div className="relative min-h-screen  body-font font-orbitron">
      <Header />
      <div className="pb-60 pt-20 md:pt-36">
        <div className="mx-auto bg-black bg-filter backdrop-blur-xl bg-opacity-70 p-1 md:p-5 max-w-7xl text-white px-3 md:px-10  relative z-10 rounded-xl">
          <h1 className="text-3xl text-white mb-10 text-center font-extrabold underline decoration-rambo-red ">
            Contact
          </h1>
          <div className="mt-10 bg-zinc-900 rounded p-3 md:p-8 flex justify-center w-fit mx-auto overflow-hidden">
            <div className="">
              <img
                src="rambo-head.png"
                alt="rambo-keytar"
                className="w-1/2 mx-auto mb-5 "
              />
              <a href="tel:530-205-FUNK" className="flex mb-5 group ">
                <div className="">
                  <LocalPhoneIcon className="text-3xl md:text-5xl text-zinc-600 group-hover:text-rambo-red" />
                  <p className="text-xs text-center text-zinc-600 group-hover:text-rambo-red">
                    Phone
                  </p>
                </div>
                <div className="ml-5 text-xl md:text-4xl mt-2 text-zinc-400 group-hover:text-rambo-red group-hover:cursor-pointer">
                  530-205-FUNK
                </div>
              </a>
              <a
                href="mailto: rambopartyproductions@gmail.com"
                className="flex cursor-pointer group "
              >
                <div>
                  <EmailIcon className=" text-3xl md:text-5xl text-zinc-600 group-hover:text-rambo-red" />
                  <p className="text-xs text-center text-zinc-600 group-hover:text-rambo-red">
                    Email
                  </p>
                </div>

                <p className="ml-5 text-sm md:text-xl mt-3 text-zinc-400 group-hover:text-rambo-red group-hover:cursor-pointer overflow-scroll">
                  rambopartyproductions@gmail.com
                </p>
              </a>
            </div>
          </div>

          <h1 className="text-3xl text-rambo-red text-center mb-5 mt-10 ">
            ...or use form below for maXimum luXury.
          </h1>

          <form
            onSubmit={() => {}}
            className="mt-10 max-w-xl mx-auto text-black"
          >
            <div className="flex">
              <ContactEmergencyIcon className="mr-5 text-4xl text-white" />
              <input
                {...register("name", { required: true })}
                type="text"
                className="decoration-white h-10 w-full text-md p-2 rounded-md mb-2"
                placeholder="Name"
              />
            </div>
            <div className="flex">
              <ContactMailIcon className="mr-5 text-4xl text-white" />
              <input
                {...register("email", { required: true })}
                type="email"
                className="decoration-white h-10 w-full text-md p-2 rounded-md mb-2"
                placeholder="Email"
              />
            </div>
            <div className="flex">
              <SubjectIcon className="mr-5 text-4xl text-white" />
              <input
                {...register("subject", { required: true })}
                type="subject"
                className="decoration-white h-10 w-full text-md p-2 rounded-md mb-2"
                placeholder="Subject"
              />
            </div>
            <textarea
              {...register("subject", { required: true })}
              className="decoration-white w-full text-md p-2 rounded-md"
              placeholder="Write your message here"
              rows={5}
            />
            <button className="cursor-pointer text-lg text-slate-900 bg-rambo-red h-10 w-full bg mt-2 rounded-md hover:bg-red-500 hover:text-white">
              send
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <VideoBackground />
    </div>
  );
}

export default Contact;

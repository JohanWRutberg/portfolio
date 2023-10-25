import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const emailBody = `Hi, my name is ${formData.name}.%0D%0A${formData.message}%0D%0A${formData.email}`;
    window.location.href = `mailto:johan.w.rutberg@gmail.com?subject=${formData.subject}&body=${emailBody}`;
  };

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Lets work together? <span className="decoration-[#00ff73]/50 underline">Contact me</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00ff73] h-7 animate-pulse" />
            <p className="text-2xl">+46 (0)70 248 78 48</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00ff73] h-7 animate-pulse" />
            <p className="text-2xl">johan.w.rutberg@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00ff73] h-7 animate-pulse" />
            <p className="text-2xl">Stockholm, Sweden, The World</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} className="contactInput" type="text" placeholder="Name" />
            <input {...register("email")} className="contactInput" type="email" placeholder="Email" />
          </div>
          <input {...register("subject")} className="contactInput" type="text" placeholder="Subject" />
          <textarea {...register("message")} className="contactInput" placeholder="Message" />
          <button type="submit" className="bg-[#00ff73]/80 py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;

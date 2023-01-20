import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface EmailFormInput {
  name: string;
  email: string;
}

function MailingListComponent() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormInput>();

  return (
    <div className="flex flex-col space-x-2  ">
      <form onSubmit={() => {}}>
        <input
          {...register("name", { required: true })}
          type="text"
          className="decoration-white h-10 w-full text-xl p-2 rounded-md mb-2"
          placeholder="Name"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          className="decoration-white h-10 w-full text-xl p-2 rounded-md"
          placeholder="Email"
        />
        <button className="text-lg text-slate-900 h-10 w-full bg-sky-300 mt-2 rounded-md">
          send
        </button>
      </form>
    </div>
  );
}

export default MailingListComponent;

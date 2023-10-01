import React from "react";

const Contact = () => {

  return (
    <div name="contact" className="sections">
          <form 
              method="POST"
        action="https://getform.io/f/a2ffcb47-1654-41ce-af71-c80033dfd8a5"
        className="w-full flex flex-col max-w-[700px]"
      >
        <div className="flex flex-col items-center sm:items-start justify-center">
          <p className="capitalize text-2xl sm:text-4xl font-bold border-b-4 border-[#5E17EB] text-slate-200">
            Contact
          </p>
          <p className="font-bold my-1"> submit the form below </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          required
          className="my-2 p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:font-bold"
        />
        <input
          type="email"
          required
          placeholder="Email"
          name="email"
          className="my-2 p-2 rounded-md bg-slate-300 placeholder:text-black placeholder:font-bold"
        />
        <textarea
          name="message"
          rows={5}
          required
          className="rounded-md bg-slate-300 p-2 my-2 placeholder:text-black placeholder:font-bold text-black"
          placeholder="Message"
        ></textarea>
        <button type="submit" className="btnHover">send</button>
      </form>
    </div>
  );
};

export default Contact;

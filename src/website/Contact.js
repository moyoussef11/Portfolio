import { motion } from "framer-motion";
import React from "react";

const Contact = () => {

  return (
    <div name="contact" className="sections">
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}
        method="POST"
        action="https://getform.io/f/a2ffcb47-1654-41ce-af71-c80033dfd8a5"
        className="w-full flex flex-col max-w-[700px]"
      >
        <div className="flex flex-col items-center sm:items-start justify-center">
          <p className="title">Contact</p>
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
        <button type="submit" className="btnHover">
          send
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;

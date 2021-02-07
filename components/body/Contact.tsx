import React, { useState, FormEvent } from "react";
import Link from "next/link";
import api from "config/api";

interface ErrorHandler {
  name: boolean;
  email: boolean;
  message: boolean;
}

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<ErrorHandler>({
    name: false,
    email: false,
    message: false,
  });
  const [success, setSuccess] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (name && email.includes("@") && email.length > 3 && message) {
        await api.post("/api/contact", { name, email, message });
        setSuccess(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      setError({ name: !name, email: validateEmail(), message: !message });
    }
  };

  const validateEmail = () => {
    if (!email) {
      return true;
    }
    if (email.includes("@") && email.length > 3) {
      return false;
    }
    return true;
  };

  return (
    <section className="w-full min-h-auto bg-black">
      <div className="footer-bg-image">
        <div className="flex flex-col h-auto p w-full">
          <h1 className="font-serif text-black text-5xl pb-2 text-white">
            Contact me!
          </h1>
          <p className="text-white text-lg">
            Are you a recruiter looking for someone like me or you just want to
            chat? Leave a message below or contact me through{" "}
            <Link href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/">
              <a
                className="text-blue-400 hover:text-blue-700 hover:underline"
                target="_blank"
              >
                LinkedIn
              </a>
            </Link>{" "}
            or send an email to{" "}
            <Link href="mailto:adrianoyuji@gmail.com">
              <a
                className="text-yellow-400 hover:text-yellow-600 hover:underline"
                target="_blank"
              >
                adrianoyuji@gmail.com
              </a>
            </Link>
            !
          </p>
          {success ? (
            <p className="text-white text-lg text-center my-48">
              Thank you for sending me a message!
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="max-w-2xl py-3 px-5 m-auto w-full mt-10">
                <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">
                  <div className="col-span-2 lg:col-span-1 ">
                    <input
                      type="text"
                      className="bg-gray-100 border-solid rounded-lg border-gray-400 border-2 p-3 md:text-xl w-full"
                      placeholder="Name"
                      maxLength={128}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setError({ ...error, name: false });
                      }}
                    />
                    {error.name && (
                      <p className="text-red-400 py-1">Insert your name</p>
                    )}
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <input
                      type="text"
                      className="bg-gray-100 border-solid rounded-lg border-gray-400 border-2 p-3 md:text-xl w-full"
                      placeholder="Email Address"
                      maxLength={128}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError({ ...error, email: false });
                      }}
                    />
                    {error.email && (
                      <p className="text-red-400 py-1">Invalid email!</p>
                    )}
                  </div>

                  <div className="col-span-2">
                    <textarea
                      cols={30}
                      rows={8}
                      className="bg-gray-100 border-solid rounded-lg border-gray-400 border-2 p-3 md:text-xl w-full"
                      placeholder="Hello!"
                      maxLength={512}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setError({ ...error, message: false });
                      }}
                    />
                    {error.message && (
                      <p className="text-red-400 py-1">Insert a message!</p>
                    )}
                  </div>

                  <div className="col-span-2 text-right">
                    <button
                      type="submit"
                      className="py-3 px-6 bg-green-500 hover:bg-green-700 active:bg-green-900 rounded-lg text-white font-bold w-full sm:w-32"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
          <footer className="text-white flex justify-center">
            Made with ❤ by Adriano Vasconcelos
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;

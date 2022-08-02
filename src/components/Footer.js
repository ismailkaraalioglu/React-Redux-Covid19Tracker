import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";

function Footer() {
  const language = useSelector((state) => state.site.language);

  return (
    <footer className="text-center pt-7 dark:bg-gray-900 w-full">
      {language ? (
        <h1 className="md:text-2xl text-lg font-bold pt-5 dark:text-white">
          <a
            className="text-blue-700 hover:opacity-60"
            href="https://github.com/ismailkaraalioglu/React-Redux-Covid19Tracker"
          >
            İsmail Karaalioğlu
          </a>{" "}
          tarafından hazırlanmıştır.
        </h1>
      ) : (
        <h1 className="md:text-2xl text-lg font-bold pt-5 dark:text-white">
          Created with care by{" "}
          <a
            className="text-blue-700 hover:opacity-60"
            href="https://github.com/ismailkaraalioglu"
          >
            İsmail Karaalioğlu
          </a>
        </h1>
      )}

      <div className="flex justify-center gap-x-5 mt-5 pb-8">
        <button className="opacity-20 hover:opacity-100 dark:text-white dark:opacity-30 dark:hover:opacity-100">
          <a href="https://github.com/ismailkaraalioglu/React-Redux-Covid19Tracker">
            <FaGithub size={35} />
          </a>
        </button>
        <button className="opacity-20 hover:opacity-100 hover:text-blue-600 dark:text-white dark:opacity-30 dark:hover:opacity-100 dark:hover:text-blue-600">
          <a href="https://www.linkedin.com/in/ismailkaraalioglu/">
            <FaLinkedin size={35} />
          </a>
        </button>
        <button className="opacity-20 hover:opacity-100 hover:text-blue-500 dark:text-white dark:opacity-30 dark:hover:opacity-100 dark:hover:text-blue-500">
          <a href="https://twitter.com/KIsmailll">
            <FaTwitter size={35} />
          </a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;

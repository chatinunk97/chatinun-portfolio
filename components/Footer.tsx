import { contactData } from "@/utils/data";
import React from "react";
import ButtonMagic from "./ButtonMagic";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contacts">
      <div className="flex gap-16 flex-col items-center justify-center ">
        <h1 className="heading">
          Always <span className="text-red-400">eager</span> to learn and grow
          <br></br>Let&apos;s connect and explore new possibilities
        </h1>
        <a href="mailto:chatinun.k97.jp@gmail.com">
          <ButtonMagic
            title={"Let's get in touch"}
            icon={<MdEmail size={25} />}
            position="right"
          />
        </a>
        <div className="flex flex-col justify-center items-center gap-5">
          <p>Copyright © 2025 Chatinun Komuthanon</p>

          <div className="flex gap-4 justify-center items-center">
            {contactData.map((e) => {
              return (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={e.url}
                  className="cursor-pointer"
                  key={e.platform}
                >
                  {e.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

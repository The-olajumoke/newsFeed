import React from "react";
import home from "../Exports/Icons/home.svg";
import listings from "../Exports/Icons/listings.svg";
import podcast from "../Exports/Icons/podcast.svg";
import videos from "../Exports/Icons/videos.svg";
import tag from "../Exports/Icons/tags.svg";
import faq from "../Exports/Icons/faq.svg";
import shop from "../Exports/Icons/shop.svg";
import sponsors from "../Exports/Icons/sponsors.svg";
import contract from "../Exports/Icons/contract.svg";
import about from "../Exports/Icons/about.svg";
import code from "../Exports/Icons/code.svg";
import privacy from "../Exports/Icons/privacy.svg";
import terms from "../Exports/Icons/terms.svg";
import devSticker from "../Exports/devSticker.jpg";
import { LeftLink, LeftTag } from "./LeftLink";
import {
  RiTwitchFill,
  RiInstagramFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiTwitterFill,
} from "react-icons/ri";
function SidebarLeft() {
  const links = [
    {
      img: home,
      title: "Home",
    },
    {
      img: listings,
      title: "Listings",
    },
    {
      img: podcast,
      title: "Podcasts",
    },
    {
      img: videos,
      title: "Videos",
    },
    {
      img: tag,
      title: "Tags",
    },
    {
      img: faq,
      title: "FAQ",
    },
    {
      img: shop,
      title: "DEV Shop",
    },
    {
      img: sponsors,
      title: "Sponsors",
    },
    {
      img: about,
      title: "About",
    },
    {
      img: contract,
      title: "Contact",
    },
  ];
  const others = [
    {
      img: code,
      title: "Home",
    },
    {
      img: privacy,
      title: "Listings",
    },
    {
      img: terms,
      title: "Podcasts",
    },
  ];
  const tags = [
    "javaScript",
    "webdev",
    "beginners",
    "programming",
    "tutorial",
    "react",
    "python",
    "productivity",
    "css",
    "devops",
    "career",
    "opensource",
    "discuss",
    "html",
    "codenewbie",
    "node",
    "typescript",
    "aws",
    "andriod",
    "java",
    "github",
    "news",
    "testing",
    "php",
    "cloud",
    "showdev",
    "laravel",
    "algorithm",
    "security",
    "docker",
  ];
  return (
    <div className=" hidden md:flex flex-col w-30% lg:w-1/5 ">
      <div className=" px-5 py-7 bg-gray-variant rounded-xl  shadow-lg border border-gray-button">
        <h4 class=" mb-4 font-bold">
          <a
            href="https://dev.to/"
            class="hover:underline mr-2 text-primary-blue"
          >
            DEV Community
          </a>
          is a community of 804,215 amazing developers
        </h4>
        <h6 className="mb-4 text-secondary-main">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </h6>
        <button className="btn-outline font-bold w-full mb-4">
          Create account
        </button>
        <button className="btn-list w-full">Log in</button>
      </div>
      <div className="py-10">
        {links.map((link, idx) => (
          <LeftLink key={idx} index={idx} item={link} />
        ))}
      </div>
      <div className="mb-4">
        <h6 className=" font-bold pl-5 py-2">others</h6>
        {others.map((link, idx) => (
          <LeftLink key={idx} index={idx} item={link} />
        ))}
      </div>
      {/* LINKS */}
      <div className="flex justify-between my-8 px-5 ">
        <a href="https://twitter.com/thepracticaldev" alt="twitter">
          <RiTwitterFill className="social-icons" />
        </a>
        <a href="https://facebook.com/thepracticaldev">
          <RiFacebookBoxFill className="social-icons" />
        </a>
        <a href="https://github.com/thepracticaldev">
          <RiGithubFill className="social-icons" />
        </a>
        <a href="https://instagram.com/thepracticaldev">
          <RiInstagramFill className="social-icons" />
        </a>
        <a href="https://twitch.com/thepracticaldev">
          <RiTwitchFill className="social-icons" />
        </a>
      </div>
      <div className="mb-4">
        <h6 className="mb-4 font-bold pl-5 py-2">Popular Tags</h6>
        <div className=" tagsHeight overflow-y-scroll ">
          {tags.map((tag, idx) => (
            <LeftTag title={tag} />
          ))}
        </div>
      </div>
      <div className=" py-7 px-5 mb-4 bg-gray-variant rounded-xl  shadow-lg">
        <h4 class=" mb-4 font-bold">
          <img src={devSticker} alt="" className="mb-4 rounded-md" />
          <a href="https://dev.to/" class=" mr-2 text-primary-blue">
            Got DEV stickers yet?
          </a>
        </h4>
      </div>

      <div className=" p-5 mb-4 bg-gray-variant rounded-xl  shadow-lg">
        <h6 className="mb-4 text-black-words">
          DEV runs on 100% open source code known as
          <span className=" text-primary-blue">Forem. </span>
          Contribute to the codebase or host your own!
        </h6>
        <h6 className="font-bold ">Check these out</h6>
        <ul>
          <li className=" text-primary-blue">Main Forem Repo</li>
          <li className=" text-primary-blue">Self-Host Instructions</li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarLeft;

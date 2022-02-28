import React from "react";
import devLogo from "../Exports/devLogo.png";
import comment from "../Exports/Icons/comment.svg";
import reaction from "../Exports/Icons/reaction.svg";
function Post({ post, index }) {
  const { img, userName, tags, time, title, userImg } = post;
  // first post font is different
  // Hover on username
  return (
    <>
      {index === 0 ? (
        <div className="border border-gray-button rounded-xl overflow-hidden">
          <img src={img} alt="" className=" rounded-t-lg" />
          <div className=" bg-white-white border  border-gray-button p-8 flex  gap-4 rounded-lg shadow focus:border-primary-blue">
            <div className=" rounded-full overflow-hidden w-5% mt-2 h-fit ">
              <img src={userImg} alt="" className="" />
            </div>
            <div className="w-11/12">
              <div className="flex flex-col">
                <p className=" text-secondary-sub">{userName}</p>
                <span className=" text-xs text-secondary-time">{time}</span>
              </div>
              <h2 className="font-bold  leading-normal  hover:text-primary-blue cursor-pointer">
                {title}
              </h2>

              <div className="flex gap-5 my-2  h-30 ">
                {tags.map((tag, idx) => (
                  <p
                    className=" p-2 rounded-lg cursor-pointer hover:bg-gray-variant hover:border border-gray-button"
                    key={idx}
                  >
                    {tag === "javascript" && (
                      <span className=" text-primary-blue">#</span>
                    )}
                    {tag === "vue" && (
                      <span className=" text-yellow-main">#</span>
                    )}
                    {tag === "performance" && (
                      <span className=" text-yellow-main">#</span>
                    )}
                    {tag === "webdev" && (
                      <span className=" text-yellow-main">#</span>
                    )}
                    {tag === "beginners" && (
                      <span className=" text-black-words">#</span>
                    )}
                    {tag === "developer" && (
                      <span className=" text-black-words">#</span>
                    )}
                    {tag === "opensource" && (
                      <span className=" text-primary-blue">#</span>
                    )}
                    {tag === "news" && (
                      <span className=" text-primary-blue">#</span>
                    )}
                    {tag === "flutter" && (
                      <span className=" text-primary-blue">#</span>
                    )}
                    {tag === "react" && (
                      <span className=" text-primary-blue">#</span>
                    )}
                    {tag === "discuss" && (
                      <span className=" text-primary-blue">#</span>
                    )}
                    {tag === "jobs" && (
                      <span className=" text-primary-blue">#</span>
                    )}
                    {tag === "dart" && (
                      <span className=" text-yellow-main">#</span>
                    )}
                    {tag === "blockchain" && (
                      <span className=" text-yellow-main">#</span>
                    )}
                    {tag === "web3" && (
                      <span className=" text-yellow-main">#</span>
                    )}
                    {tag}
                  </p>
                ))}
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex gap-10 items-center">
                  <div className="flex items-center gap-2 ">
                    <img src={reaction} alt="" />
                    <p>12 reactions</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <img src={comment} alt="" />
                    <p>2 comments</p>
                  </div>
                </div>
                <div className="flex items-center gap-10 w-full md:w-auto  justify-between mt-3">
                  <p className=" text-xs">12 min read</p>
                  <button className=" bg-secondary-save  text-secondary-sub rounded-lg cursor-pointer py-2 px-3 text-center">
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-white-white border  border-gray-button p-8 flex  gap-4 rounded-xl shadow focus:border-primary-blue">
          <div className=" rounded-full overflow-hidden  w-5%  mt-2 h-fit">
            <img src={userImg} alt="" className=" " />
          </div>
          <div className=" w-11/12">
            <div className="flex flex-col">
              <p className=" text-secondary-sub">{userName}</p>
              <span className=" text-xs text-secondary-time">{time}</span>
            </div>

            <h3 className="font-bold  leading-normal  hover:text-primary-blue cursor-pointer break-words">
              {title}
            </h3>
            <div className="flex gap-5 my-2  h-30 ">
              {tags.map((tag, idx) => (
                <p
                  className=" p-2 rounded-lg cursor-pointer hover:bg-gray-variant hover:border border-gray-button"
                  key={idx}
                >
                  {tag === "javascript" && (
                    <span className=" text-primary-blue">#</span>
                  )}
                  {tag === "vue" && (
                    <span className=" text-yellow-main">#</span>
                  )}
                  {tag === "performance" && (
                    <span className=" text-yellow-main">#</span>
                  )}
                  {tag === "webdev" && (
                    <span className=" text-yellow-main">#</span>
                  )}
                  {tag === "beginners" && (
                    <span className=" text-black-words">#</span>
                  )}
                  {tag === "developer" && (
                    <span className=" text-black-words">#</span>
                  )}
                  {tag === "opensource" && (
                    <span className=" text-primary-blue">#</span>
                  )}
                  {tag === "news" && (
                    <span className=" text-primary-blue">#</span>
                  )}
                  {tag === "flutter" && (
                    <span className=" text-primary-blue">#</span>
                  )}
                  {tag === "react" && (
                    <span className=" text-primary-blue">#</span>
                  )}
                  {tag === "discuss" && (
                    <span className=" text-primary-blue">#</span>
                  )}
                  {tag === "jobs" && (
                    <span className=" text-primary-blue">#</span>
                  )}
                  {tag === "dart" && (
                    <span className=" text-yellow-main">#</span>
                  )}
                  {tag === "blockchain" && (
                    <span className=" text-yellow-main">#</span>
                  )}
                  {tag === "web3" && (
                    <span className=" text-yellow-main">#</span>
                  )}
                  {tag}
                </p>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex gap-10 items-center">
                <div className="flex items-center gap-2 ">
                  <img src={reaction} alt="" />
                  <p>12 reactions</p>
                </div>
                <div className="flex items-center gap-2 ">
                  <img src={comment} alt="" />
                  <p>2 comments</p>
                </div>
              </div>
              <div className="flex items-center gap-10 w-full md:w-auto  justify-between mt-3">
                <p className=" text-xs">12 min read</p>
                <button className=" bg-secondary-save  text-secondary-sub rounded-lg cursor-pointer py-2 px-3 text-center">
                  save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {index === 3 && (
        <div className=" py-10 px-12 flex ">
          <div className="pt-10  flex justify-center  w-2/12 ">
            <img
              src={devLogo}
              alt=""
              className=" rounded-lg  h-50 -rotate-12"
            />
          </div>
          <div className="flex flex-col items-center  w-10/12">
            <h2 className="mb-4 font-bold">
              <a href="https://dev.to/" class=" mr-2 text-primary-blue">
                DEV Community
              </a>
              is a community of 804,215 amazing developers
            </h2>
            <h6 className="mb-4 text-secondary-main">
              We're a place where coders share, stay up-to-date and grow their
              careers.
            </h6>
            <button className=" bg-primary-blue text-white-white   mb-4 cursor-pointer rounded-xl py-2 px-5 text-md  w-60">
              Create account
            </button>
            <button className="btn-list text-primary-blue w-60 font-bold hover:no-underline">
              Log in
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Post;

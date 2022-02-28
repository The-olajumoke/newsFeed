import React from "react";
import Post from "./Post";
import img from "../Exports/firstPic.jpeg";
import user from "../Exports/user.png";
import user2 from "../Exports/user2.jpeg";
import user3 from "../Exports/user3.jpg";

function Main() {
  const post = [
    {
      userImg: user,
      img,
      userName: "Adam Nathaniel Davis",
      time: "Feb 27",
      title: "Should Frontend Devs Care About Performance??",
      tags: ["javascript", "performance", "webdev", "developer"],
    },
    {
      userImg: user2,

      userName: "bigfengyu",
      time: "Feb 27",
      title: "The last piece of the puzzle to upgrade Vue3",
      tags: ["javascript", "vue"],
    },
    {
      userImg: user3,

      userName: "Pelumi Eyitimonwa Akintokun",
      time: "Feb 27",
      title:
        "Tech Roadmap: Everything you need to help you choose and learn a career in Tech.",
      tags: ["javascript", "vue"],
    },
    {
      userImg: user3,
      userName: "Pain creation",
      time: "Feb 27",
      title: "Instant WordPress Theme That Matches Your Website",
      tags: ["opensource", "jobs", "beginners"],
    },
    {
      userImg: user,
      userName: "Mwendwa Bundi Emma",
      time: "Feb 27",
      title: "Web3 and Its Terms Carefully Explained",
      tags: ["opensource", "blockchain", "web3"],
    },
    {
      userImg: user2,
      userName: "Rupesh-Darimisetti",
      time: "Feb 27",
      title: "Intro to programming language and memory management",
      tags: ["opensource", "jobs", "beginners"],
    },

    {
      userImg: user3,
      userName: "XRMOON COIN",
      time: "Feb 27",
      title: "Instant WordPress Theme That Matches Your Website",
      tags: ["opensource", "jobs", "beginners"],
    },
    {
      userImg: user,
      userName: "XRMOON COIN",
      time: "Feb 27",
      title: "Instant WordPress Theme That Matches Your Website",
      tags: ["opensource", "jobs", "beginners"],
    },
    {
      userImg: user3,
      userName: "Michele Volpato",
      time: "Feb 27",
      title: "This week in Flutter #43",
      tags: ["news", "flutter", "dart"],
    },
    {
      userImg: user3,
      userName: "Sobhan Dash",
      time: "Feb 27",
      title: "Mistakes Made When Making a FullStack web app",
      tags: ["javascript", "react", "discuss"],
    },
    {
      userImg: user,
      userName: "SpeedingRoo",
      time: "Feb 27",
      title:
        "STUPID ERROR: Why I can't see query results, pgAdmin4, postgreSQL",
      tags: [],
    },
    {
      userImg: user,
      userName: "Adam Nathaniel Davis",
      time: "Feb 27",
      title: "Should Frontend Devs Care About Performance??",
      tags: ["javascript", "performance", "webdev", "developer"],
    },
    {
      userName: "bigfengyu",
      time: "Feb 27",
      title: "The last piece of the puzzle to upgrade Vue3",
      tags: ["javascript", "vue"],
    },
    {
      userImg: user3,
      userName: "Pelumi Eyitimonwa Akintokun",
      time: "Feb 27",
      title:
        "Tech Roadmap: Everything you need to help you choose and learn a career in Tech.",
      tags: ["javascript", "vue"],
    },
    {
      userImg: user2,
      userName: "Pain creation",
      time: "Feb 27",
      title: "Instant WordPress Theme That Matches Your Website",
      tags: ["opensource", "jobs", "beginners"],
    },
    {
      userImg: user,
      userName: "Mwendwa Bundi Emma",
      time: "Feb 27",
      title: "Web3 and Its Terms Carefully Explained",
      tags: ["opensource", "blockchain", "web3"],
    },
    {
      userImg: user2,
      userName: "XRMOON COIN",
      time: "Feb 27",
      title: "Instant WordPress Theme That Matches Your Website",
      tags: ["opensource", "jobs", "beginners"],
    },
    {
      userImg: user3,
      userName: "Michele Volpato",
      time: "Feb 27",
      title: "This week in Flutter #43",
      tags: ["news", "flutter", "dart"],
    },
    {
      userImg: user3,
      userName: "Sobhan Dash",
      time: "Feb 27",
      title: "Mistakes Made When Making a FullStack web app",
      tags: ["javaScript", "react", "discuss"],
    },
    {
      userImg: user2,
      userName: "SpeedingRoo",
      time: "Feb 27",
      title:
        "STUPID ERROR: Why I can't see query results, pgAdmin4, postgreSQL",
      tags: [],
    },
    {
      userImg: user3,
      userName: "XRMOON COIN",
      time: "Feb 27",
      title: "Instant WordPress Theme That Matches Your Website",
      tags: ["opensource", "jobs", "beginners"],
    },
    {
      userImg: user,
      userName: "Michele Volpato",
      time: "Feb 27",
      title: "This week in Flutter #43",
      tags: ["news", "flutter", "dart"],
    },
    {
      userImg: user,

      userName: "Sobhan Dash",
      time: "Feb 27",
      title: "Mistakes Made When Making a FullStack web app",
      tags: ["javaScript", "react", "discuss"],
    },
    {
      userImg: user2,

      userName: "Adam Nathaniel Davis",
      time: "Feb 27",
      title: "Should Frontend Devs Care About Performance??",
      tags: ["javascript", "performance", "webdev", "developer"],
    },
    {
      userImg: user3,

      userName: "bigfengyu",
      time: "Feb 27",
      title: "The last piece of the puzzle to upgrade Vue3",
      tags: ["javascript", "vue"],
    },
  ];
  console.log(post.length);
  return (
    <div className=" w-full md:w-70% lg:w-1/2">
      <div className=" text-lg gap-8 flex my-4">
        <button className=" font-bold hover:text-primary-blue hover:bg-white-white p-3  hover:rounded-lg">
          Relevant
        </button>
        <button className=" text-secondary-main hover:text-primary-blue hover:bg-white-white p-3  hover:rounded-lg">
          Latest
        </button>
        <button className=" text-secondary-main hover:text-primary-blue hover:bg-white-white p-3  hover:rounded-lg">
          Top
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {post.map((post, idx) => (
          <Post key={idx} post={post} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Main;

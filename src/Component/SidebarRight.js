import React from "react";
import AzureImg from "../Exports/AzureImg.png";
function SidebarRight() {
  const links = [
    {
      title: "Memorable .Network Domains For Sale",
      sub: "product",
    },
    {
      title: "Qovery",
      sub: "product",
    },
    {
      title: "HTML Flashcards",
      sub: "product",
    },
    {
      title: "Mass Email System/Process",
      sub: "collabs",
    },
    {
      title: "Building apps for 3rd Party platforms? We need you!",
      sub: "collabs",
    },
  ];
  const discuss = [
    {
      title: "Mistakes Made When Making a FullStack web app",
      comment: "3 comments",
    },

    {
      title: "List Of Best Horror Movies To Stream On Netflix In 2022",
      sub: "New",
    },
    {
      title: "Filter Bubbles",
      comment: "3 comments",
    },
    {
      title: "Mass Email System/Process",
      sub: "collabs",
    },
    {
      title: "Building apps for 3rd Party platforms? We need you!",
      comment: "3 comments",
    },
  ];
  const explain = [
    {
      title: "Explain Monads Like I'm five",
      comment: "17 comments",
    },
    {
      title: "Please explain why I need software architecture",
      comment: "25 comments",
    },
    {
      title: "Explain Postgresql Views Like I'm Five",
      comment: "5 comments",
    },
    {
      title: "How does database indexing work?",
      comment: "7 comments",
    },
  ];
  const challenge = [
    { title: "CSSBattle | #3 Push Button", comment: "25 comment" },
    { title: "CSSBattle | #3 Missing slice", comment: "5 comment" },
    { title: "CSSBattle | #3 Acid Rain", comment: "15 comment" },
    { title: "CSSBattle | #3 Push Button", comment: "5 comment" },
  ];
  const cooler = [
    { title: "Should i die in ukraine", comment: "25 comment" },
    { title: "SHA256le in 16 guesses (or less)", comment: "5 comment" },
  ];
  const trending = [
    "The Complete Guide to Full Stack Web3 Development",
    "10 Must-Know Patterns for Writing Clean Code with React and TypeScript✨🛀",
    "Concurrency in modern programming languages: Rust vs Go vs Java vs Node.js vs Deno vs .NET 6",
    "  Visual Studio Code - Tips & Tricks - Command Palette and its friends",
    "Top React JS Frameworks Every Developer Should Know",
    "⚠️ Don't try this at home: CSS _as_ the backend - introducing Cascading Server Sheets!",
    "Top 5 state management libraries for React",
    "7 Killer One-Liners in JavaScript",
    "50 Cool Web And Mobile Project Ideas for 2022",
    "Moving from JavaScript to TypeScript",
    "Make Your Github Profile Stand Out",
    "Git Cheat Sheet 📄 (50 commands + PDF and poster)",
    "Personal Blog Website using HTML CSS JS",
    "Create a whitelist for your NFT project",
    "What’s Wrong With Measuring Developer Performance (+ 10 Best Metrics)",
    "10 HTML and CSS Good Practices 🐅🐅",
    "10 ReactJS Coding Challenge (💥Coding Interview Prep💥)",
    "5 Best Courses to learn Blockchain for Beginners in 2022",
    "🚀10 Trending projects on GitHub for web developers - 28th January 2022",
    "Full Stack Developer Skills List",
  ];
  const queried = [
    "Install Gdb Mac",
    "Python Package Structure",
    "What Is an Interpreted Language",
    "Production Environment",
    "Discord Embed",
    "Laravel React",
    "Windows Terminal Customization",
    "Ngrok Alternative",
    "Pascal Case",
    "Learn Linux",
    "Terminal for Windows",
    "How to Click Faster",
    "Windows Keyboard on Mac",
    "Angular State Management",
    "Change Python Version Mac",
    "GCC for Windows",
    "CSS Game",
    "Synaptic Package Manager",
    "VSCode vs VIM",
    "Flask MongoDB",
  ];
  return (
    <div className="w-27% hidden lg:flex flex-col gap-6">
      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <img src={AzureImg} alt="" className=" rounded-lg" />
        <div className="heading">
          <h4>Microsoft Azure Trial </h4>
          <h4>Hackathon(6)</h4>
        </div>
        <h6 className="rightLinks">
          Reminder: Join the Microsoft Azure Trial Hackathon to Win Prizes (and
          Community Bragging Rights)
        </h6>
        <h6 className="rightLinks">Azure Phone Chatbot</h6>
        <h6 className="rightLinks">
          Azure Trial Hackathon - Azura - Yes Azura!
        </h6>
        <h6 className="rightLinks">Azure Functions logging with log levels</h6>
        <h6 className="rightLinks">
          Azure Trial Hackathon - Moodflix - your mood, our suggestions
        </h6>
        <div className="p-6">
          <button className=" bg-primary-blue text-white-white   mb-4 cursor-pointer rounded-xl py-3 px-6 text-md  font-semibold w-full shadow-sm">
            Share your project
          </button>
          <button className=" bg-secondary-save  text-secondary-sub rounded-lg cursor-pointer py-2 px-3 text-center w-full font-semibold shadow-sm">
            See all posts
          </button>
        </div>
      </div>
      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <div className="flex items-center justify-between heading">
          <h4>Listings</h4>
          <h6 className=" text-primary-blue cursor-pointer">See all</h6>
        </div>
        {links.map((link, idx) => (
          <div className="rightLinks">
            <h6>{link.title}</h6>
            <p className=" text-gray-rightsub">{link.sub}</p>
          </div>
        ))}
        <button className="border-t border-gray-button bg-transparent text-black-words p-5 text-sm font-semibold flex justify-center w-full">
          Create a Listing
        </button>
      </div>
      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <h4 className="heading">#help</h4>
        <div className="rightLinks">
          <h6>
            Require twitter developer api help to use with Azure AI service in
            React-JS application
          </h6>
          <p className="p-2 text-black-newVariant bg-yellow-main w-fit rounded-lg ">
            New
          </p>
        </div>
      </div>
      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <h4 className="heading">#discuss</h4>

        {discuss.map((disc, idx) => {
          if (disc.comment) {
            return (
              <div className="rightLinks">
                <h6>{disc.title}</h6>
                <p className=" text-gray-rightsub">{disc.comment}</p>
              </div>
            );
          } else {
            return (
              <div className="rightLinks">
                <h6>{disc.title}</h6>
                <p className="p-2 text-black-newVariant bg-yellow-main w-fit rounded-lg ">
                  New
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <h4 className="heading">#explainlikeimfive</h4>

        {explain.map((disc, idx) => (
          <div className="rightLinks">
            <h6>{disc.title}</h6>
            <p className=" text-gray-rightsub">{disc.comment}</p>
          </div>
        ))}
      </div>

      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <h4 className="heading">#challenge</h4>
        {challenge.map((cha, idx) => (
          <div className="rightLinks">
            <h6>{cha.title}</h6>
            <p className="p-2 text-black-newVariant bg-yellow-main w-fit rounded-lg ">
              New
            </p>
          </div>
        ))}
      </div>
      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <h4 className="heading">#meta</h4>

        {explain.map((disc, idx) => (
          <div className="rightLinks">
            <h6>{disc.title}</h6>
            <p className=" text-gray-rightsub">{disc.comment}</p>
          </div>
        ))}
      </div>
      <div className=" bg-gray-variant border border-gray-button shadow-lg rounded-lg">
        <h4 className="heading">#watercooler</h4>
        {cooler.map((cha, idx) => (
          <div className="rightLinks">
            <h6>{cha.title}</h6>
            <p className="p-2 text-black-newVariant bg-yellow-main w-fit rounded-lg ">
              New
            </p>
          </div>
        ))}
      </div>

      <div className=" border-b border-gray-button">
        <p className=" font-semibold p-6 ">trending guides/resources</p>
        {trending.map((trend, idx) => (
          <div className="rightLinks border-none">
            <h6>{trend}</h6>
          </div>
        ))}
      </div>
      <div className=" border-b border-gray-button">
        <p className=" font-semibold p-6 ">recently queried</p>
        {queried.map((trend, idx) => (
          <div className="rightLinks border-none">
            <h6>{trend}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarRight;

import React from 'react'
import PercentageBar from '../components/percentageBar'

function Skills() {

  return (
    <div className="bg-slate-700 min-w-screen min-h-screen">
      <div className="mx-48 pt-36 pb-12">
        <p className="text-green-300 text-4xl font-bold mb-8">
          Skills & Experience
        </p>
        <div className="flex gap-8 flex-col lg:flex-row">
          <div className="text-slate-300 lg:w-1/2 text-justify">
            <p>
              I started my programming journey in 2019, by learning Java.
              I took a few Java courses in Udemy in order to get a deeper understanding in the core concepts of programming and object-oriented programming.
              After that, I started learning web development, and I started with HTML, CSS and JavaScript, and then I moved to React.
              I also learned Node.js, Express.js, and MongoDB, to understand the back-end side of web development.
            </p><br />
            <p>
              I was a member of a student project team in my university, and we developed a web application using React and Nest.js.
              Taking part in this project helped me to understand the importance of teamwork and communication.
              I also learned how to use Git and GitHub to collaborate with my team members and to keep track of the changes in the code.
            </p><br />
            <p>
              During my internship, I worked with Vue.js to develop a web application for the internal use of the company.
              I had the opportunity to learn to write clean and maintainable code and to use the best practices in web development.
            </p><br />
          </div>
          <div className="flex flex-col lg:w-1/2">
            <PercentageBar text={"Front-end"} percentage={80} bgColor={"bg-fuchsia-500"} />
            <PercentageBar text={"Back-end"} percentage={45} bgColor={"bg-amber-400"} />
            <PercentageBar text={"Git"} percentage={65} bgColor={"bg-red-500"} />
            <hr className="border-slate-600 pb-6 px-0 mx-4" />
            <PercentageBar text={"JavaScript"} percentage={80} bgColor={"bg-fuchsia-500"} />
            <PercentageBar text={"React.js"} percentage={60} bgColor={"bg-red-500"} />
            <PercentageBar text={"Tailwind CSS"} percentage={60} bgColor={"bg-red-500"} />
            <PercentageBar text={"Java"} percentage={60} bgColor={"bg-red-500"} />
            <PercentageBar text={"Vue2.js"} percentage={50} bgColor={"bg-green-400"} />
            <PercentageBar text={"Node.js"} percentage={50} bgColor={"bg-green-400"} />
            <PercentageBar text={"Chakra UI"} percentage={40} bgColor={"bg-amber-400"} />
            <PercentageBar text={"Next.js"} percentage={30} bgColor={"bg-amber-400"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
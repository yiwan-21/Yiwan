import React from 'react'

function About() {
  return (
    <div className="bg-slate-700 min-w-screen min-h-screen">
      <div className="mx-48 pt-36 pb-12">
        <p className="text-green-300 text-4xl font-bold mb-4">
          About Me
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <img src={`${process.env.PUBLIC_URL}/myPhoto.jpg`} alt="profile"
            className="rounded-lg ml-8 mb-12 w-64 max-w-full justify-self-center self-start opacity-70 hover:opacity-100 lg:hidden" />
          <div className="text-slate-300 text-justify col-span-3">
            <p>
              Hi! My name is Lee Yi Wan and I am a software engineer based in the Malaysia.
              I have great passion in building an accessible and responsive web application.
            </p><br />
            <p>
              My interest in web development started when I was in my first year of university back in 2021.
              I was fascinated by an influencer who was able to build websites and web applications to help him grow his business.
              I started to learn web development by myself, starting with HTML, CSS, and JavaScript.
              By completing the Javascript 30 challenge, I was able to understand the working of JavaScript.
              I hopped on to React and started to build my first web application using the MERN stack.
            </p><br />
            <p>
              Problem solver, fast learner, and a self-taught developer with attention to detail.
              I am passionate to create solutions that can work in the most efficient way.
            </p><br />
            Here are technologies I have been working with recently:
            <ul className="columns-2 ml-8 mt-2 w-fit">
              <li className="list-disc mr-12">JavaScript</li>
              <li className="list-disc mr-12">React</li>
              <li className="list-disc mr-12">Vue</li>
              <li className="list-disc mr-12">Node.js</li>
              <li className="list-disc mr-12">Spring Boot</li>
              <li className="list-disc mr-12">Tailwind CSS</li>
            </ul>
          </div>
          <img src={`${process.env.PUBLIC_URL}/myPhoto.jpg`} alt="profile"
            className="rounded-lg ml-8 w-64 max-w-full justify-self-center self-start opacity-70 hover:opacity-100 hidden lg:block" />
        </div>
      </div>
    </div>
  )
}

export default About
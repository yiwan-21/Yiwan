import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/button'
import { useTypingText } from '../hooks/useTypingText'

const POSITIONS = ["Software Engineer.", "Web Developer.", "Mobile Developer."]

function Home() {
	const typingText = useTypingText(POSITIONS);

	return (
		<div className="bg-slate-700 min-w-screen min-h-screen">
			<div className="mx-48 pt-48 lg:w-1/2 pb-12">
				<p className="text-slate-300">
					Hello, I am
				</p>
				<p className="text-green-300 font-bold text-7xl">
					Lee Yi Wan,
				</p>
				<p className="text-slate-300 font-bold text-5xl typing-cursor my-2">
					{typingText}
				</p>
				<p className="text-slate-400 text-justify">
				I'm a recent first-class graduate, having completed my studies in Computer Science with a major in Software Engineering at Universiti Malaya. 
				I am focusing on building accessible, inclusive and responsive web and mobile applications using modern frameworks.
				<br />
				<br />
				Currently, I'm thriving as a Software Engineering 1 at Dell Technologies, where I continue to pursue my passion in the field of computer science.
				</p>
				<div className="mt-12">
					<Link to="mailto:leeyiwan2001@gmail.com">
						<Button text={"Contact me!"} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Home
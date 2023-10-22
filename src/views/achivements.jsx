import React from 'react'
import AchievementCard from '../components/achievementCard'

function Achievements() {
  return (
    <div className="bg-slate-700 min-w-screen min-h-screen">
      <div className="mx-48 pt-36 pb-12">
        <p className="text-green-300 text-4xl font-bold mb-4">
          Achievements
        </p>
        <div className="">
          <div className="text-slate-300 text-justify">
            <p>
              I have participated in a few hackathons and competitions during my university life.
              I have won a few awards in these competitions.
            </p><br />
            <p>
              Here are the list of competitions and volunteering activities I have participated in:
              <div className="mt-12 grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-x-12 gap-y-12 items-start">
                <AchievementCard title={"Dell Hack2Hire 2023"} description={"A 2-days hackathon based hiring event organized by Dell Technologies."} year={"2023"} award={"Honorable Mention"} />
                <AchievementCard title={"UM Hackathon 2023"} description={"A 3-days competition-style events organized by Persatuan Komputer Universiti Malaya (PEKOM) and Faculty of Computer Science and Information System."} year={"2023"} award={"2nd-Runner Up (Open Category)"} />
                <AchievementCard title={"Programming League National 2023"} description={"An annual competitive programming contest held by Computer Society of University Malaya (PEKOM) where a team of 3 will compete to solve the algorithmic problem in a given time."} year={"2023"} award={"Finalist (Open Category)"} />

                <AchievementCard title={"Shopee Code League 2022"} description={"A 2-week coding league consisting of two rounds of coding competitions to solve a series of challenging algorithmic puzzles."} year={"2022"} award={"Participant"} />
                <AchievementCard title={"Code Nection 2022"} description={"A competitive programming competition organized by IT Society MMU Cyberjaya. Participants will tackle challenging coding problems under tight time constraints."} year={"2022"} award={"Participant"} />
                <AchievementCard title={"Programming League National 2022"} description={"An annual competitive programming contest held by Computer Society of University Malaya (PEKOM) where a team of 3 will compete to solve the algorithmic problem in a given time."} year={"2022"} award={"Finalist (Open Category)"} />
                
                <AchievementCard title={"Shopee Code League 2021"} description={"The largest code-from-home League in Southeast Asia and Taiwan, striving in three virtual competitions across data science, data analytics, and algorithms."} year={"2021"} award={"Participant (Student Category)"} />
                <AchievementCard title={"Code Nection 2021"} description={"A competitive programming competition organized by IT Society MMU Cyberjaya. Participants will tackle challenging coding problems under tight time constraints."} year={"2021"} award={"Participant (Open Category)"} />
                <AchievementCard title={"Programming League National 2021"} description={"An annual competitive programming contest held by Computer Society of University Malaya (PEKOM) where a team of 3 will compete to solve the algorithmic problem in a given time."} year={"2021"} award={"Finalist (Closed Category)"} />
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
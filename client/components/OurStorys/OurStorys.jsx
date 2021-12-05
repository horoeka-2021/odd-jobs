import React from 'react'

function OurStorys () {
  return (
    <div className="mx-auto">
      <div className="flex flex-row self-center w-full relative">
        <img className="teamwork-image" src="./img/ourstory_banner.jpg" />
        <div className="ourstory-text">
          <h2 className="text-5xl font-weight: 700 font-bold">OUR STORY</h2>
        </div>
      </div>
      <div className="mx-0 mx-auto text-center max-w-screen-2xl">
        <div className="w-3/4 mx-0 mx-auto pt-10">
          <h2 className="text-3xl font-weight: 700 font-bold">E tautoko ana tatou i te Roopu Odd Jobs</h2>
          <h2 className="text-3xl font-weight: 700 font-bold">Everyone support the Odd Jobs community!</h2>
          <p className="pt-5">As a recent graduate in Web Development, OddJobs founder and product owner Nathan
           saw the need for a site that could bring together other junior devs and service and trade apprentices,
           looking to gain the experience and self-confidence needed to grow their career.
            So he and his team of five embarked on a week-long journey to create a hub for community members to post
            their odd jobs and hire said juniors who are working toward completing their qualification or just need
            work to help build their portfolio.
            Because we at OddJobs are passionate about communities helping their local talent, we stand by an ethos
            of building whanau who help fresh local talent gain skills and experience through koha and gifting.
          </p>

        </div>

        <div className="container mx-auto pt-10">
          <div className="w-full shadow stats ">
            <div className="stat place-items-center place-content-center">
              <div className="stat-title">Country</div>
              <div className="stat-value text-indigo-500 font-sans">1</div>
            </div>

            <div className="stat place-items-center place-content-center">
              <div className="stat-title">Employees</div>
              <div className="stat-value text-indigo-500 font-sans">5+</div>
            </div>

            <div className="stat place-items-center place-content-center">
              <div className="stat-title">Partner Practices</div>
              <div className="stat-value text-indigo-500 font-sans">5+</div>
            </div>

            <div className="stat place-items-center place-content-center">
              <div className="stat-title">Users</div>
              <div className="stat-value text-indigo-500 font-sans">5+</div>
            </div>

          </div>
        </div>
        <div className="container mx-auto pt-10">
          <h2 className="text-3xl font-weight: 700 font-bold">OUR TEAM</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-5">
          <div className="col-span-3 text-center">
            <img src="../img/nathan.jpg" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p className="leading-tight"><img src="../img/linked.webp" className="max-h-10 inline"/>Nathan Rowe</p>
            <p className="leading-tight">Founder/ Backend Lead</p>
          </div>
          <div className="">
            <img src="../img/goretti.jpg" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p><img src="../img/linked.webp" className="max-h-10 inline"/>Goretti Alani</p>
            <p className="leading-tight">Vibe Lead/ Security Lead</p>
          </div>
          <div className="">
            <img src="../img/crystal.png" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p><img src="../img/linked.webp" className="max-h-10 inline"/>Crystal Chan</p>
            <p className="leading-tight">Frontend Lead</p>
          </div>
          <div className="">
            <img src="../img/nick.jpg" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p><img src="../img/linked.webp" className="max-h-10 inline"/>Nicky Caparas</p>
            <p className="leading-tight">Styling Lead/ Scrum Master</p>
          </div>
          <div className="col-span-3 text-center">
            <img src="../img/tommy.jpg" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p><img src="../img/linked.webp" className="max-h-10 inline"/>Tommy Yoon</p>
            <p className="leading-tight">Git Lead/ DevOps</p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default OurStorys

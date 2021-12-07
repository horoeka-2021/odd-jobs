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
          <h2 className="text-3xl font-weight: 700 font-bold">Everyone support the Odd Jobs community!</h2>
          <h2 className="text-2xl font-weight: 700 font-bold">E tautoko ana tatou i te Roopū Odd Jobs</h2>
          <p className="pt-5 leading-loose text-center">As a recent graduate in Web Development, OddJobs founder and product owner Nathan
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
            <p className="leading-normal">
              <a href="https://www.linkedin.com/in/nathan-rowe-7a7273170/" className="no-underline" target="_blank" rel="noreferrer">
                <img src="../img/linked.webp" className="max-h-10 inline"/></a>
                Nathan Rowe</p>
            <p className="leading-loose">Founder/ Backend Lead</p>
          </div>

          <div className="">
            <img src="../img/goretti.jpg" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p><a href="http://www.linkedin.com/in/goretti-alani-a63a2a226" className="no-underline"
              target="_blank" rel="noreferrer"><img src="../img/linked.webp" className="max-h-10 inline"/></a>
              Goretti Alani</p>
            <p className="leading-loose">Vibe Lead/ Security Lead</p>
          </div>

          <div>
            <img src="../img/crystal.png" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p><a href="https://www.linkedin.com/" className="no-underline"
              target="_blank" rel="noreferrer"><img src="../img/linked.webp" className="max-h-10 inline"/></a>Crystal Chan</p>
            <p className="leading-loose">Frontend Lead</p>
          </div>

          <div>
            <img src="../img/nick.jpg" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p> <a href="https://www.linkedin.com/in/nickycaparas/" className="no-underline" target="_blank" rel="noreferrer">
              <img src="../img/linked.webp" className="max-h-10 inline"/></a>Nicky Caparas</p>
            <p className="leading-loose">Styling Lead/ Scrum Master</p>
          </div>

          <div className="col-span-3 text-center">
            <img src="../img/tommy.jpg" className="mask mask-circle self-center inline max-w-xs max-h-48" />
            <p><a href="https://www.linkedin.com/in/tommy-yoon-583431227/" className="no-underline" target="_blank" rel="noreferrer">
              <img src="../img/linked.webp" className="max-h-10 inline"/></a>Tommy Yoon</p>
            <p className="leading-loose">Git Lead/ DevOps</p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default OurStorys

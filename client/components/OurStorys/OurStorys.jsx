import React from 'react'

function OurStorys () {
  return (
    <div className="mx-auto">
      <div className="flex flex-row self-center w-full relative">
        <img className="teamwork-image" src="./img/ourstory_banner.jpg" />
        <div className="ourstory-text">
          <h2 className="text-5xl font-weight: 700 font-bold">Our Story</h2>
        </div>
      </div>
      <div className="container mx-auto">
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
    </div>

  )
}

export default OurStorys

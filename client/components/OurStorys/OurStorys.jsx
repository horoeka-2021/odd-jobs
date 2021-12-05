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
      <div className="border-image">
        <div className="mx-0 mx-auto text-center max-w-screen-2xl">
          <div className="w-3/4 mx-0 mx-auto">
            <h2 className="text-3xl font-weight: 700 font-bold">Creating experiences and building relationships</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ac venenatis enim, ut bibendum tortor.
                  Sed quis auctor quam, in rutrum purus.
                  Vivamus varius vulputate quam, quis tempus enim posuere sed.
                  Integer ac mauris enim.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                  Vivamus in porta enim, sed gravida orci.
                  Nulla rutrum maximus lacus, a feugiat est.
                  Sed nec magna pulvinar, eleifend metus nec, pellentesque erat.
                  Nullam vitae urna vitae lacus tempus varius quis eget tellus.</p>

          </div>
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

import React from 'react'



function Footer() {
  return (
    <div>
      <div className="max-h-fit mt-10 md:flex md:flex-row  bg-sky-950 text-white px-12 py-10 md:px-28 md:py-16 ">
        <div className="md:w-4/12">
          <h1 className="text-3xl font-bold md:mt-10">About Us</h1>
          <p className="text-slate-400 mt-3">
            Ombrulla is an AI-driven company specializing in extracting insights
            from diverse data sources, including photos, videos, and data lakes.
            Our tailored solutions help businesses make data-driven decisions
            and improve their bottom line through automation and AI-powered
            analysis.
          </p>
          <div>
            <ul className="flex flex-row mt-3">
              <li>
                <a href=''><i className="fa-brands fa-facebook"></i></a>
              </li>
              <li className="ms-5">
                <a href=''><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li className="ms-5">
                <a href=''><i className="fa-brands fa-twitter"></i></a>
              </li>
              <li className="ms-5">
                <a href=''><i className="fa-brands fa-linkedin"></i></a>
              </li>
              <li className="ms-5">
                <a href=''><i className="fa-brands fa-youtube"></i></a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="md:w-4/12">
          <h1 className="text-3xl font-bold mt-10">Our Services</h1>

          <div>
            <ul className="flex flex-col text-slate-400">
              <li className="mt-5">AI Infrastructure Inspection</li>
              <li className="mt-5">AI Visual Inspection</li>
              <li className="mt-5">AI Data Analytics</li>
              <li className="mt-5">AI People Tracking</li>
            </ul>
          </div>
        </div>

        <div className="md:w-4/12 md:ms-7">
          <h1 className="text-3xl font-bold mt-10">Our Solutions</h1>

          <div>
            <ul className="flex flex-col text-slate-400">
              <li className="mt-5">Asset Performance Management</li>
              <li className="mt-5">Job Grading & Evaluation</li>
              <li className="mt-5">Compensation Management</li>
            </ul>
          </div>
        </div>
        
        <div className="md:w-4/12">
          <h1 className="text-3xl font-bold mt-10">Reach Us</h1>

          <div>
            <ul className="flex flex-col text-slate-400">
              <li className="mt-5">
                United Kingdom, 53 Denton close Redhill, Surrey, RH1 5LB +44 787
                999 3892
              </li>
              <li className="mt-5">
                Germany, Schützenstraße 51A Lübeck, 23558 +49 179 512 5812
              </li>
              <li className="mt-5">
                India, No. 154/20, Royal Space Third Floor TI, HSR Layout,
                Bangalore, Karnataka 560102 +91 85900 56435
              </li>
            </ul>
          </div>
        </div>
      </div>

      




    </div>
  )
}

export default Footer
import React from "react";
import "./Team.css";
import Instal from "../../components/Sections/install";
const Team = () => {
  const data = [
    {
      name: "Norchen Mezni",
      place: "CEO",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQE0nBCqGGC0Ew/profile-displayphoto-shrink_800_800/0/1656009110100?e=1669248000&v=beta&t=l_v0yVFlHdyHxMP8KTmxCcui69XcZ696Mr42TjJ1jXg",
      description:
        "A serial entrepreneur experienced in developing successful businesses in e-commerce, service and technology. Founder of several startups, her goal is to innovate with purpose, her interest in the legal system as well as her vision to find a way to make it more accessible, affordable and convenient for everyone triggered the creation of E-Tafakna ",
    },
    {
      name: "Chiheb Ghazouani",
      place: "Partner & Legal Advisor",
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHFQvmwb8L1JA/profile-displayphoto-shrink_800_800/0/1605182978693?e=1669248000&v=beta&t=ZcATlW3p-ALV0Ylqnb6O3KjWxF4tR-YXlcSEAeDsCgc",
      description:
        "Managing-Partner of CAG Law Firm (20 lawyers based in Tunis). Acting in Tunisia, Libya, Algeria, and western Africa. Legal Counsel advising European, US, African and Asian clients on their international investments in Maghreb and Africa. Participated in the drafting of several national and regional laws and regulatory frameworks.Law Professor in Tunisia and France.",
    },
  ];
  return (
    <section id="content" className="section-team container">
      <div className="team_wrapper mt-40">
        <div id="main" className="team__article">
          <div className="team__title">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The E-Tafakna Team
            </h1>
          </div>
          {data.map((elem, index) => {
            return (
              <div className="team_content ">
                <div className="item__team" key={index}>
                  <div className="item__column">
                    <div className="item__img row">
                      <img
                        src={elem.image}
                        alt=""
                        width={350}
                        height={300}
                        className="imaage"
                      />
                    </div>
                  </div>
                  <div className="team__column ml-20">
                    <div className="item__title">
                      <h3 className="h3">{elem.name}</h3>
                    </div>
                    <div className="item__text">
                      <h3>{elem.place}</h3>
                      <div>
                        <span className="span">{elem.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="spacer"></div>
              </div>
            );
          })}
        </div>
      </div>
      <Instal />
    </section>
  );
};

export default Team;

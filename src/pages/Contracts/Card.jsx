import React from "react";
import styled from "styled-components";

//*Image contracts
import nda from "../../assets/images/Contracts/NDA.jpg";
import cdi from "../../assets/images/Contracts/CDI_CDD_CIVP.jpg";
import freelance from "../../assets/images/Contracts/Freelance.jpg";
import Referral from "../../assets/images/Contracts/PRet numerique .jpg";
import pret from "../../assets/images/Contracts/Contrat de pret .jpg";
import assurance from "../../assets/images/Contracts/Assurance Voyage.jpg";
import devis from "../../assets/images/Contracts/Facture_Devis.jpg";
import partenariat from "../../assets/images/Contracts/Partnerariat .jpg";
import salepurchase from "../../assets/images/Contracts/SALE_PURCHASE CONTRACT.jpg";
import vente from "../../assets/images/Contracts/Vente real estate .jpg";
import carbying from "../../assets/images/Contracts/car buying.jpg";
import domiciliation from "../../assets/images/Contracts/domiciliation.jpg";
import "./Card.css";
const Data = [
  {
    imageUrl: [nda],
    title: "NDA",
    description: "Protect your Business, ideas and future projects !",
    time: "2 min",
    signed: "0 signed",
  },
  {
    imageUrl: [cdi],
    title: "CDI, CDD, CIVP",
    description: "Keep your business and work safe with E-Tafakna.",
    time: "3 min",
    signed: "0 signed",
  },
  {
    imageUrl: [freelance],
    title: "Freelancer",
    description: "Give your side hustle some protection !",
    time: "5 min",
    signed: "0 signed",
  },
  {
    imageUrl: [Referral],
    title: "Loan request form",
    description: "Asking for a loan ? E-Tafakna.",
    time: "1 min",
    signed: "0 signed",
  },
  {
    imageUrl: [pret],
    title: "Loan agreement",
    description: "Protect yourself when lending money",
    time: "3 min",
    signed: "0 signed",
  },
  {
    imageUrl: [assurance],
    title: "Travel insurance",
    description: "I don’t want to go to my insurer to get my travel insurance contract before traveling ! Go to E-Tafakna.",
    time: "2 min",
    signed: "0 signed",
  },
  {
    imageUrl: [devis],
    title: "Order form quotation bill",
    description: "A fast way to fill an order form, quotation or a bill ? E-Tafakna.",
    time: "1 min",
    signed: "0 signed",
  },
  {
    imageUrl: [partenariat],
    title: "Partnership and engagement ",
    description: "Written agreements make the best partnerships!",
    time: "4 min",
    signed: "0 signed",
  },
  {
    imageUrl: [salepurchase],
    title: "Purchase and sale",
    description: "Secure your right to buy and sell !",
    time: "4 min",
    signed: "0 signed",
  },
  {
    imageUrl: [vente],
    title: "House rental",
    description: "Rent your room, apartment or house with E-Tafakna",
    time: "1 min",
    signed: "0 signed",
  },
  {
    imageUrl: [carbying],
    title: "Car rental and purchase",
    description: "It’s safer to rent or buy a car with E-Tafakna",
    time: "3 min",
    signed: "0 signed",
  },
  {
    imageUrl: [domiciliation],
    title: "Business domiciliation",
    description: "Tell us where are you receiving all your legal documents",
    time: "2 min",
    signed: "0 signed",
  },
];
const Cards = () => {
  return (
    <Wrapper id="projects ">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-20">
              Contracts for all kind of life situations
            </h1>
          </HeaderInfo>
          <div className="row ">
            {Data.map((elem, index) => {
              return (
                <div className="card-container" key={index}>
                  <div className="image-container">
                    <img src={elem.imageUrl} alt="" />
                  </div>
                  <div className="cont">
                    <div className="card-content">
                      <div className="card-title">
                        <h1 className="font">{elem.title}</h1>
                      </div>
                      <div className="card-body">
                        <p className="descripti">{elem.description}</p>
                      </div>
                    </div>

                    <div className="row texto">
                      <p href="" className="text">
                        {elem.time}
                      </p>

                      <p href="" className="text">
                        {elem.signed}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
export default Cards;

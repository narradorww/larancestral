import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Banner from "../../components/Banner";
import Idealizadoras from "../../components/Idealizadoras";
import VitrineProdutos from "../../components/VitrineProdutos";
import BeneficiosPraticas from "../../components/BeneficiosPraticas";
import ComoAdquirir from "../../components/ComoAdquirir";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Banner />
      <Idealizadoras />
      <VitrineProdutos />
      <BeneficiosPraticas />
      <ComoAdquirir />
    </MainLayout>
  );
};

export default Home;

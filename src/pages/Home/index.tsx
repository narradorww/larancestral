import React, { useRef } from "react";
import MainLayout from "../../layouts/MainLayout";
import Banner from "../../components/Banner";
import Idealizadoras from "../../components/Idealizadoras";
import VitrineProdutos from "../../components/VitrineProdutos";
import BeneficiosPraticas from "../../components/BeneficiosPraticas";
import ComoAdquirir from "../../components/ComoAdquirir";

const Home: React.FC = () => {
  const vitrineRef = useRef<HTMLDivElement | null>(null);

  const scrollToVitrine = () =>
    vitrineRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <MainLayout>
      <Banner onVitrineClick={scrollToVitrine} />
      <Idealizadoras />
      <div ref={vitrineRef}>
        <VitrineProdutos />
      </div>
      <BeneficiosPraticas />
      <ComoAdquirir />
    </MainLayout>
  );
};

export default Home;

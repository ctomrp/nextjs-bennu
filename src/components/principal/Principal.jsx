'use client'

import Image from "next/image";
import bgHome from "@/assets/developers.jpg";
import s from "./style.module.css";
import { Section } from "../section/Section";
import { Typewriter } from "react-simple-typewriter";

export function Principal() {
  const keyWords = [
    "Informática",
    "Programación",
    "Desarrollo",
    "Base de Datos",
    "Asesoría",
    "Java",
    "JEE",
    "Docker",
    "Kubernetes",
    "Cloud",
    "AWS",
    "Scrum",
    "DevOps",
    "Gitlab",
    "Kong",
  ]
  return (
    <>
      <div className={`${s.box}`}>
        <div className={`${s.bgHome}`}>
          <Image
            src={bgHome}
            alt="mujer mirando una app móvil"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container">
          <h1 className={`text-light text-center fw-semibold ${s.messagemt}`}>
          Tus ideas en soluciones modernas
        <div style={{ color: "#ffffff" }}>
                  <Typewriter
                    words={keyWords}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
          </h1>
        </div>
      </div>
      <Section
        classProp={`
        bg-primary
        text-light 
        text-center 
        fw-semibold
        d-flex 
        flex-column 
        text-center 
        p-5
        ${s.bgExtra}`}
        title={"Conócenos"}
        content={
          <p className="fs-3 fw-normal p-5">
            Tus ideas en soluciones modernas.
            <br />
            Somos un equipo de trabajo comprometido y en constante búsqueda de
            nuevas tecnologías.
            <br />
            Buscamos trascender la relación cliente-proveedor.
          </p>
        }
      />
    </>
  );
}
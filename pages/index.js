import PatientCard from "../components/PatientCard";
import Title from "../components/Title";
import Carousel from "../components/Carousel";

import adultIMG from "../assets/adult.png";
import babyIMG from "../assets/baby.png";

import {factsAdult, factsBaby, symptoms_text} from "../data/index.js"

import carousel_icons from "../assets/carousel_icons/index";
import { useEffect, useState } from "react";

const Index = () => {
    const [symptoms, setSymptoms] = useState([]);

    const  symptomsArray = () => {
        for (let i = 0; i < symptoms_text.length; i++) {
            const newSymptom = {
                id: i,
                text: symptoms_text[i],
                icon: carousel_icons[i],
            };
            setSymptoms(prev => [...prev, newSymptom])
        }
    }

    useEffect(() => {
        symptomsArray()
    }, []);

    return (
        <div className="wrapper">
            <Title text="А вдруг CMA?" />
            <div className="main">
                <div className="patient">
                    <h3>Выберите, кто Ваш пациент:</h3>
                    <div className="patient__main">
                        <PatientCard
                            card={{
                                name: "Взрослый",
                                src: adultIMG,
                            }}
                            facts={factsAdult}
                        />
                        <PatientCard
                            card={{ name: "Ребенок", src: babyIMG }}
                            facts={factsBaby}
                        />
                    </div>
                </div>
            </div>
            <div className="carousel">
                <div className="carousel__header">
                    <p className="carousel__promt">
                        Сообщает ли один из ваших пациентов о следующих
                        симптомах?
                        <span> (нажмите на любую иконку и узнайте больше)</span>
                    </p>
                </div>
                <Carousel symptoms={symptoms} icon={adultIMG}/>
            </div>
            <style jsx>
                {`
                    .patient {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .patient h3 {
                        font-weight: 700;
                        font-size: 36px;
                        line-height: 54px;
                    }
                    .patient__main {
                        display: flex;
                        gap: 36px;
                        width: 94%;
                        margin: 40px 0 0;
                    }
                    .carousel {
                        display: flex;
                        flex-direction: column;
                        width: 100%;
                        align-items: center;
                    }
                    .carousel__header {
                        width: 94%;
                    }
                    .carousel__promt {
                        font-weight: 700;
                        font-size: 18px;
                        line-height: 21px;
                    }

                    .carousel__promt span {
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 16px;
                        display: inline-block;
                        color: #068ca6;
                    }
                `}
            </style>
        </div>
    );
};

export default Index;

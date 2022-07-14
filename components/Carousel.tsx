import st from "../styles/Carousel.module.css";
import Image from "next/image";
import Symptom from "./Symptom";

const Carousel = ({ symptoms, icon }) => {
    return (
        <div
            className={st.main}
            style={{
                "--n_all": 0 - symptoms.length,
                "--all": symptoms.length,
                width: `${icon.width}px`,
                height: `${icon.height}px`,
            }}
        >
            <Image src={icon} width={icon.width} height={icon.height}/>
            <div className={st.cover}></div>
            {symptoms.map((symptom, i) => (
                <Symptom symptom={symptom} key={i} i={i}/>
            ))}
        </div>
    );
};

export default Carousel;

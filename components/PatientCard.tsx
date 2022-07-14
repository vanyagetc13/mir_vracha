import st from "../styles/PatientCard.module.css";
import Image from "next/image"

const PatientCard = ({ card, facts }) => {
    return (
        <div className={st.card}>
            <h4>{card.name}</h4>
            <Image
                src={card.src}
                width={300}
                height={300}
                layout="fixed"
                alt={`failed to load ${card.name} picture`}
            />
            <div className={st.facts}>
                {facts.map((fact, i) => (
                    <div key={i} className={st.fact}>{fact}</div>
                ))}
            </div>
        </div>
    );
};

export default PatientCard;

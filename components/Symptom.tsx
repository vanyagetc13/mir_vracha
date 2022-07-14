import st from "../styles/Symptom.module.css"
import Image, { StaticImageData } from "next/image"
import { useState, CSSProperties } from "react";

interface Symptom {
    icon: StaticImageData;
    id:number;
    text:string;
}

interface SymptomProps {
    symptom: Symptom;
    i: number;
}

const Symptom = ({symptom, i}: SymptomProps) => {

    const [visible, setVisible] = useState(false);
    const clickHandler = () => {
        setVisible((prev) => !prev);
    };

    const side_template = (i:number):string => `translateX(
        ${
            i + 1 > 2 && i + 1 < 6
                ? "135px"
                : i + 1 === 1 || (i + 1 > 6 && i + 1 < 9)
                ? "-130px"
                : "0"
        })`;

    const center_template = (i:number):string =>
        `translateY(${i + 1 === 6 ? "100px" : "-75px"})`;
    return (
        <div
            key={i}
            className={st.symptom}
            onClick={clickHandler}
            style={{"--i": i + 1}}
        >
            <div className={st.cover}>
                <Image
                    src={symptom?.icon?.src}
                    width={symptom?.icon?.width}
                    height={symptom?.icon?.height}
                />
            </div>
            {visible && (
                <span
                    className={st.text}
                    style={{
                        transform: `rotate(calc(360deg / var(--n_all) * var(--i))) ${
                            i + 1 === 2 || i + 1 === 6
                                ? center_template(i)
                                : side_template(i)
                        }
                        `,
                    }}
                >
                    {symptom.text}
                </span>
            )}
        </div>
    );
};

export default Symptom;

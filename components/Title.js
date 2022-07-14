import st from "../styles/Title.module.css";

const Title = ({ text }) => {
    return (
        <header className={st.header}>
            <h2>{text}</h2>
        </header>
    );
};

export default Title;
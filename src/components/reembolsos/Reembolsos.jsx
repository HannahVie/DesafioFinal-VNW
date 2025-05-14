import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Solicitar from "../../assets/Dashboard/Solicitar - Reembolso.png";
import Analise from "../../assets/Dashboard/Análises.png";
import Historico from "../../assets/Dashboard/Solicitar - Histórico.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import nuvem from "../../assets/Dashboard/nuvem.png";
import styles from "./Reembolsos.module.scss";
import NavBar from "../navbar/NavBar.jsx";
import { useNavigate } from "react-router-dom";


function Reembolsos() {
  const navigate = useNavigate();

  return (

    <div className={styles.containerReembolsos}>
      <NavBar />
      <div>
        <header>
          <img src={Home} alt="Casinha da header" />
          <img src={Seta} alt="Setinha da header" />
          <p>Reembolsos</p>
        </header>
        <main className={styles.mainReembolsos}>
          <div>
            <h1>Sistema de Reembolsos</h1>
            <p>
              Solicite novos pedidos de reembolso, visualize solicitações em análise
              e todo o histórico.
            </p>
          </div>

          <section className={styles.containerCards}>
            <article onClick={() => { navigate("/solicitacao"); }}>
              <img src={Solicitar} alt="solicitar reembolso" />
              <h3>Solicitar Reembolso</h3>
            </article>

            <article onClick={() => { navigate("/analises"); }}>
              <img src={Analise} alt="verificar análises" />
              <h3>Verificar análises</h3>
            </article>

            <article>
              <img src={Historico} alt="histórico" />
              <h3>Histórico</h3>
            </article>
          </section>

          <section className={styles.containerStatus}>
            <div>
              <img className={styles.imgSolicitados} src={NumeroSolicitados} alt="numeros de colicitações" />
              <h4>182</h4>
              <p>Solicitados</p>
            </div>

            <div>
              <img className={styles.imgAnalises} src={NumeroAnalises} alt="numeros de análises" />
              <h4>74</h4>
              <p>Em análise</p>
            </div>

            <div>
              <img className={styles.imgAprovados} src={NumeroAprovados} alt="numeros de aprovados" />
              <h4>195</h4>
              <p>Aprovados</p>
            </div>

            <div>
              <img className={styles.imgRejeitados} src={NumeroRejeitados} alt="numeros de rejeitados" />
              <h4>41</h4>
              <p>Rejeitados</p>
            </div>

          </section>

          <div className={styles.sistema}>
            <img src={nuvem} alt="nuvem" />
            <p>Sistema atualizado</p>
          </div>

        </main>
      </div>
    </div>
  );
}
export default Reembolsos;

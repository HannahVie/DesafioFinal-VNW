import { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar.jsx";
import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import styles from "./Analises.module.scss"; // ou Reembolsos.module.scss se quiser reaproveitar

function Analises() {
    const [reembolsos, setReembolsos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reembolso/todos")
            .then((res) => res.json())
            .then((data) => setReembolsos(data))
            .catch((err) => console.error("Erro ao buscar reembolsos:", err));
    }, []);

    return (
        <div className={styles.containerReembolsos}>
            <NavBar />
            <div className={styles.conteudoPrincipal}>
                <header className={styles.headerReembolsos}>
                    <img src={Home} alt="vetor da casinha" />
                    <img src={Seta} alt="vetor da setinha" />
                    <p>Reembolsos</p>
                    <img src={Seta} alt="vetor da setinha" />
                    <p>Verificar Análise</p>
                </header>

                <main className={styles.mainReembolsos}>
                    <h2>Reembolsos em Análise</h2>

                    {reembolsos.length === 0 ? (
                        <p>Nenhum reembolso encontrado.</p>
                    ) : (
                        <table border="1" cellPadding="8" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Colaborador</th>
                                    <th>Empresa</th>
                                    <th>Tipo</th>
                                    <th>Centro de Custo</th>
                                    <th>Valor</th>
                                    <th>Status</th>
                                    <th>Data</th>
                                    <th>Descrição</th>
                                    <th>Prestação</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reembolsos.map((r) => (
                                    <tr key={r.id}>
                                        <td>{r.colaborador}</td>
                                        <td>{r.empresa}</td>
                                        <td>{r.tipo_reembolso}</td>
                                        <td>{r.centro_custo}</td>
                                        <td>R$ {parseFloat(r.valor_faturado).toFixed(2)}</td>
                                        <td>{r.status}</td>
                                        <td>{r.data}</td>
                                        <td>{r.descricao}</td>
                                        <td>{r.num_prestacao}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Analises;

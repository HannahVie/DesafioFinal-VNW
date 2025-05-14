import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";
import api from "../../services/Api";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaBriefcase, FaMoneyBillWave } from "react-icons/fa";


function Login() {
  const navigate = useNavigate(); //Iniciando o hook useNavigate

  const irParaReembolsos = () => {
    console.log("Login bem-sucedido! Redirecionando para /reembolsos...");
    navigate("/reembolsos");
  };

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [mostrarModalCadastro, setMostrarModalCadastro] = useState(false);


  // const fazerLogin = async (e) => {
  //   e.preventDefault()

  //   try{
  //     const resposta = await api.post("/colaborador/login", {
  //       "email": email,
  //       "senha": senha
  //     })

  //     console.log(resposta.data)
  //     irParaReembolsos();

  //   }catch(error){
  //     console.log("Erro ao fazer login", error.response?.data || error.message)
  //     alert("Erro no login")
  //   }
  // }

  const fazerLogin = async (e) => {
    e.preventDefault();

    console.log("Iniciando login...");

    try {
      const resposta = await api.post("/colaborador/login", {
        email,
        senha,
      });

      console.log("Resposta da API:", resposta);
      irParaReembolsos();

    } catch (error) {
      console.log("Erro ao fazer login", error.response?.data || error.message);
      alert("Erro no login");
    }
  };

  const abrirModal = () => setMostrarModalCadastro(true);
  const fecharModal = () => setMostrarModalCadastro(false);

  return (
    <main>
      <section className={styles.containerImagem}></section>

      <section className={styles.containerForm}>
        <img src={Logo} alt="Logo da Wilson sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form className={styles.formLogin} onSubmit={fazerLogin}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <a href="">Esqueci minha senha</a>

          <div>
            <button
              type="submit"
              className={styles.buttonEntrar}
            >
              Entrar
            </button>
            <button
              className={styles.buttonCriar}
              type="button"
              onClick={abrirModal}
            >
              Criar conta
            </button>
          </div>
        </form>
      </section>

      {mostrarModalCadastro && <ModalCadastro onClose={fecharModal} />}

    </main>
  );
}

function ModalCadastro({ onClose }) {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
    salario: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/colaborador/cadastrar", form);
      alert("Conta criada com sucesso!");
      onClose();
    } catch (error) {
      console.error("Erro ao cadastrar:", error.response?.data || error.message);
      alert("Erro ao criar conta");
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2>Criar Conta</h2>
        <form onSubmit={handleSubmit} className={styles.modalForm}>
          <div className={styles.inputGroup}>
            <FaUser className={styles.icon} />
            <input name="nome" placeholder="Nome" onChange={handleChange} required />
          </div>

          <div className={styles.inputGroup}>
            <FaEnvelope className={styles.icon} />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          </div>

          <div className={styles.inputGroup}>
            <FaLock className={styles.icon} />
            <input name="senha" type="password" placeholder="Senha" onChange={handleChange} required />
          </div>

          <div className={styles.inputGroup}>
            <FaBriefcase className={styles.icon} />
            <input name="cargo" placeholder="Cargo" onChange={handleChange} required />
          </div>

          <div className={styles.inputGroup}>
            <FaMoneyBillWave className={styles.icon} />
            <input name="salario" type="number" placeholder="Salário" onChange={handleChange} required />
          </div>

          <div className={styles.modalButtons}>
            <button type="submit">Cadastrar</button>
            <button type="button" onClick={onClose} className={styles.cancelButton}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

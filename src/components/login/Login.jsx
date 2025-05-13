import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";
import api from "../../services/Api";
import { useState } from "react";

function Login() {
  const navigate = useNavigate(); //Iniciando o hook useNavigate

  const irParaReembolsos = () => {
    console.log("Login bem-sucedido! Redirecionando para /reembolsos...");
    navigate("/reembolsos");
  };

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

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

      alert("Login OK!");
      navigate("/reembolsos");
    } catch (error) {
      console.log("Erro ao fazer login", error.response?.data || error.message);
      alert("Erro no login");
    }
  };


  return (
    <main>
      <section className={styles.containerImagem}></section>

      <section className={styles.containerForm}>
        <img src={Logo} alt="Logo da Wilson sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p>Sistema de Emissão de Boletos e Parcelamento</p>

        <form className={styles.formLogin}>
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
              onClick={fazerLogin}
              className={styles.buttonEntrar}
            >
              Entrar
            </button>
            <button
              className={styles.buttonCriar}>
              Criar conta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
export default Login;

import { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png";
import Motivo from "../../assets/Solicitacao/motivo.png";
import Deletar from "../../assets/Solicitacao/deletar.png";
import Check from "../../assets/Solicitacao/check.png";
import X from "../../assets/Solicitacao/x.png";
import Api from "../../services/Api.jsx";



function Solicitacao() {
  const [colaborador, setColaborador] = useState(""); // Estado para o campo colaborador
  const [empresa, setEmpresa] = useState(""); // Estado para o campo empresa
  const [nPrestacao, setnPrestacao] = useState(""); // Estado para o campo número de prestação
  const [descricao, setDescricao] = useState(""); // Estado para o campo  descrição
  const [data, setData] = useState(""); // Estado para o campo data
  const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
  const [tipoReembolso, setTipoReembolso] = useState(""); // Estado para o campo tipo de reembolso
  const [centroCusto, setCentroCusto] = useState(""); // Estado para o campo centro de custo
  const [ordemInterna, setOrdemInterna] = useState(""); // Estado para o campo ordem interna
  const [divisao, setDivisao] = useState(""); // Estado para o campo divisão
  const [pep, setPep] = useState(""); // Estado para o campo pep
  const [moeda, setMoeda] = useState(""); // Estado para o campo moeda
  const [distanciaKm, setDistanciaKm] = useState(""); // Estado para o campo distância km
  const [valorKm, setValorKm] = useState(""); // Estado para o campo valor km
  const [valorFaturado, setValorFaturado] = useState(""); // Estado para o campo valor faturado
  const [despesa, setDespesa] = useState(""); // Estado para o campo despesa

  const [dadosReembolso, setDadosReembolso] = useState([]);

  //FUNÇÃO PARA CAPTURAR OS VALORES DOS ESTADOS

  const handleSubmit = () => {
    const objetoReembolso = {
      colaborador,
      empresa,
      nPrestacao,
      descricao,
      data,
      tipoReembolso,
      ordemInterna,
      centroCusto,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa
    };

    setDadosReembolso(dadosReembolso.concat(objetoReembolso));
    limparCampos();

  };

  const limparCampos = () => {
    setColaborador(""),
    setEmpresa(""),
    setnPrestacao(""),
    setDescricao(""),
    setData(""),
    setMotivo(""),
    setTipoReembolso(""),
    setCentroCusto(""),
    setOrdemInterna(""),
    setDivisao(""),
    setPep(""),
    setMoeda(""),
    setDistanciaKm(""),
    setValorKm(""),
    setValorFaturado(""),
    setDespesa("");
  };

  const [foiEnviado, setFoiEnviado] = useState(false) 

  const enviarParaAnalise = async () => {
   
    try {
      const response = await Api.post("/refunds/new", dadosReembolso);
      console.log("Resposta da Api", response);
      alert("Reembolso solicitado com sucesso!");
      setFoiEnviado(true);

    } catch (error) {
      console.log("Erro ao enviar", error);
    }

  };

  useEffect(()=>{
    if (foiEnviado) {
      setDadosReembolso([]);
      setFoiEnviado(false);
    }
  }, [foiEnviado]);


  return (
    <div className={styles.layoutSolicitacao}>
      <NavBar />
      <div className={styles.containerPrincipalSolicitacao}>
        <header className={styles.headerSolicitacao}>
          <img src={Home} alt="vetor da casinha" />
          <img src={Seta} alt="vetor da setinha" />
          <p>Reembolsos</p>
          <img src={Seta} alt="vetor da setinha" />
          <p>Solicitação de Reembolso</p>
        </header>

        <main className={styles.mainSolicitacao}>
          <form onSubmit={(e) => e.preventDefault()} className={styles.formSolicitacao}>
            <div className={styles.grupo1}>

              <div className={styles.inputNome}>
                <label htmlFor="nome">Nome Completo</label>
                <input 
                  value={colaborador}
                  name="colaborador"
                  type="text"
                  onChange={(e) => setColaborador(e.target.value)}
                />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="empresa">Empresa</label>
                <input 
                  value={empresa} 
                  name="empresa"
                  type="text"
                  onChange={(e) => setEmpresa(e.target.value)} 
                />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input 
                  value={nPrestacao} 
                  type="number" 
                  name="nPrestacao"
                  onChange={(e) => setnPrestacao(e.target.value)}
                />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea 
                  value={descricao} 
                  name="descricao" 
                  onChange={(e) => setDescricao(e.target.value)}
                  >
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input 
                  value={data} 
                  type="date" 
                  name="data"
                  onChange={(e) => setData(e.target.value)}
                />
              </div>

              <div className={styles.despesas}>
                <label htmlFor=""> Tipo de Despesa</label>

                <select 
                  value={tipoReembolso}
                  name="tipoReembolso" 
                  onChange={(e) => setTipoReembolso(e.target.value)}
                >
                  <option value=""> Selecionar</option>
                  <option value="ALIMENTAÇÃO"> Alimentação</option>
                  <option value="COMBUSTÍVEL"> Combustível</option>
                  <option value="CONDUÇÃO"> Condução</option>
                  <option value="ESTACIONAMENTO"> Estacionamento</option>
                  <option value="VIAGEM ADM"> Viagem Admin.</option>
                  <option value="VIAGEM OPER"> Viagem Operacional</option>
                  <option value="EVENTOS"> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="">Centro de Custo</label>
                <select 
                  value={centroCusto} 
                  name="centroCusto"
                  onChange={(e) => setCentroCusto(e.target.value)}
                >
                  <option value=""> Selecionar</option>
                  <option value="FIN CONTROLES INTERNOS MTZ">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="FIN VICE-PRESIDENCIA FINANCAS MTZ">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="FIN CONTABILIDADE MTZ">
                    1100110101 - FIN CONTABILIDADE MTZ
                  </option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor=""> Ord. Int.</label>
                <input 
                  value={ordemInterna} 
                  type="text" 
                  name="ordemInterna"
                  onChange={(e) => setOrdemInterna(e.target.value)}
                />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input 
                  value={divisao}
                  type="text" 
                  name="divisao"
                  onChange={(e) => setDivisao(e.target.value)}
                />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input 
                  value={pep} 
                  type="text" 
                  name="pep"
                  onChange={(e) => setPep(e.target.value)} 
                />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <select 
                  value={moeda} 
                  name="moeda"
                  onChange={(e) => setMoeda(e.target.value)}
                >
                  <option value="">Selecionar</option>
                  <option value="BRL">BRL</option>
                  <option value="ARS">ARS</option>
                  <option value="USD">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist / Km</label>
                <input 
                  value={distanciaKm} 
                  type="text"
                  onChange={(e) => setDistanciaKm(e.target.value)} 
                />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor / Km</label>
                <input 
                  value={valorKm}
                  type="text" 
                  name="valorKm"
                  onChange={(e) => setValorKm(e.target.value)}
                />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Val. Faturado</label>
                <input 
                  value={valorFaturado} 
                  type="text" 
                  name="valorFaturado"
                  onChange={(e) => setValorFaturado(e.target.value)}
                />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input 
                  value={despesa} 
                  type="text" 
                  name="despesa"
                  onChange={(e) => setDespesa(e.target.value)}
                />
              </div>

              <div className={styles.botoes}>
                <button 
                  type="submit" 
                  onClick={handleSubmit} 
                  className={styles.botaoSalvar}> 
                  + Salvar
                </button>

                <button 
                  type="button"
                  onClick={limparCampos}
                  className={styles.botaoDeletar}>
                  <img src={Deletar} alt="Deletar" />
                </button>
              </div>
            </div>
          </form>

          {/* table é a tag principal que vai definir a tabela */}
          {/* thred é a tag que agrupa o cabeçalho */}
          {/* tr é a linha da tabela */}
          {/* th é o título da tabela, um para cada título. Ex: Nome - idade - cor - fruta */}
          {/* tbody é a tag que agrupa o corpo da tabela */}
          {/* td é a tag que representa uma célula */}

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Colaborador(a)</th>
                <th>Empresa</th>
                <th>Nº Prest.</th>
                <th>Data</th>
                <th>Motivo</th>
                <th>Tipo de despesa</th>
                <th>Ctr. Custo</th>
                <th>Ord. Int.</th>
                <th>Div.</th>
                <th>PEP</th>
                <th>Moeda</th>
                <th>Dist. Km</th>
                <th>Val. Km</th>
                <th>Val. Faturado</th>
                <th>Despesa</th>
              </tr>
            </thead>

            <tbody>
              {dadosReembolso.map((item, index) => (
                <tr key={index}>
                  <td> <img src={Lixeira} alt="" /> </td>
                  <td> {item.colaborador} </td>
                  <td> {item.empresa} </td>
                  <td> {item.nPrestacao} </td>
                  <td> {item.data}</td>
                  <td> <img src={Motivo} alt="" /> </td>
                  <td> {item.tipoReembolso}</td>
                  <td> {item.centroCusto}</td>
                  <td> {item.ordemInterna}</td>
                  <td> {item.divisao}</td>
                  <td> {item.pep}</td>
                  <td> {item.moeda}</td>
                  <td> {item.distanciaKm}</td>
                  <td> {item.valorKm}</td>
                  <td> {item.valorFaturado}</td>
                  <td> {item.despesa}</td>
                </tr>
              ))}
            </tbody>
          </table>


          <div className={styles.buttons}>
            <div className={styles.inputTotal}>
              <label htmlFor="">Total Faturado</label>
              <input type="number" name="" id="" placeholder="0,00" />
            </div>
            <div className={styles.inputTotal}>
              <label htmlFor="">Total Despesa</label>
              <input type="number" name="" id="" placeholder="0,00" />
            </div>
            <button 
              onClick={enviarParaAnalise}
              className={styles.buttonEnviar}>
              <img src={Check} alt="Enviar" />
              Enviar para Análise
            </button>
            <button className={styles.buttonCancelar}>
              <img src={X} alt="Cancelar" />
              Cancelar Solicitação
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
export default Solicitacao;

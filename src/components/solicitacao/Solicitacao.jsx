import NavBar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import Home from "../../assets/Dashboard/home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Lixeira from "../../assets/Solicitacao/lixeira.png"
import Motivo from "../../assets/Solicitacao/motivo.png"
import Deletar from "../../assets/Solicitacao/deletar.png"
import Check from "../../assets/Solicitacao/check.png"
import X from "../../assets/Solicitacao/x.png"


function Solicitacao() {
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
          <form className={styles.formSolicitacao}>
            <div className={styles.grupo1}>
              <div className={styles.inputNome}>
                <label htmlFor="">Nome Completo</label>
                <input type="text" />
              </div>

              <div className={styles.inputEmpresa}>
                <label htmlFor="">Empresa</label>
                <input type="text" />
              </div>

              <div className={styles.inputPrestacao}>
                <label htmlFor="">Nº Prest. Contas</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.inputMotivo}>
                <label htmlFor="">Descrição / Motivo do Reembolso</label>
                <textarea name="" id="">
                  {" "}
                </textarea>
              </div>
            </div>

            <div className={styles.barraVertical}></div>

            <div className={styles.grupo2}>
              <div className={styles.inputData}>
                <label htmlFor="">Data</label>
                <input type="date" name="" id="" />
              </div>

              <div className={styles.despesas}>
                <label htmlFor=""> Tipo de Despesa</label>

                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value=""> Alimentação </option>
                  <option value=""> Combustível</option>
                  <option value=""> Condução</option>
                  <option value=""> Estacionamento</option>
                  <option value=""> Viagem Admin.</option>
                  <option value=""> Viagem Operacional</option>
                  <option value=""> Eventos de representação</option>
                </select>
              </div>

              <div className={styles.centroDeCusto}>
                <label htmlFor="">Centro de Custo</label>
                <select name="" id="">
                  <option value=""> Selecionar</option>
                  <option value="">
                    1100109002 - FIN CONTROLES INTERNOS MTZ
                  </option>
                  <option value="">
                    1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                  </option>
                  <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                </select>
              </div>

              <div className={styles.ordem}>
                <label htmlFor=""> Ord. Int.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.divisoes}>
                <label htmlFor="">Div.</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.pep}>
                <label htmlFor="">PEP</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.moeda}>
                <label htmlFor="">Moeda</label>
                <select name="" id="">
                  <option value="">Selecionar</option>
                  <option value="">BRL</option>
                  <option value="">ARS</option>
                  <option value="">USD</option>
                </select>
              </div>

              <div className={styles.distancia}>
                <label htmlFor="">Dist / Km</label>
                <input type="text" />
              </div>

              <div className={styles.valorKm}>
                <label htmlFor="">Valor / Km</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.valorFaturado}>
                <label htmlFor="">Val. Faturado</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.despesa}>
                <label htmlFor="">Despesa</label>
                <input type="number" name="" id="" />
              </div>

              <div className={styles.botoes}>
                <button className={styles.botaoSalvar}> + Salvar</button>

                <button className={styles.botaoDeletar}>
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
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /></td>
                <td> Vitor Carvalho Flores</td>
                <td> WSS001</td>
                <td> 329456</td>
                <td> 08/01/2025</td>
                <td> <img src={Motivo} alt="" /></td>
                <td> Desp. de viagem</td>
                <td> 1100110002 - FIN...</td>
                <td> 0003</td>
                <td> 002</td>
                <td> 001</td>
                <td> BRL</td>
                <td> 20Km</td>
                <td> 0.50</td>
                <td> 600.00</td>
                <td> 1500.00</td>
              </tr>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /></td>
                <td> Wanessa Portugol</td>
                <td> WSS002</td>
                <td> 4500</td>
                <td> 21/02/2025</td>
                <td> <img src={Motivo} alt="" /></td>
                <td> Alimentação</td>
                <td> 1100109002 - FIN...</td>
                <td>1</td>
                <td>0</td>
                <td>001</td>
                <td>BRL</td>
                <td>20km</td>
                <td>0.50</td>
                <td>600.00</td>
                <td>1500.00</td>
              </tr>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /></td>
                <td> Wesley Cacipriano</td>
                <td> WSS003</td>
                <td> 24</td>
                <td> 21/02/2025</td>
                <td> <img src={Motivo} alt="" /></td>
                <td> Combustivel</td>
                <td> 1100110101 - FIN</td>
                <td>1</td>
                <td>0</td>
                <td>001</td>
                <td>BRL</td>
                <td>20km</td>
                <td>0.50</td>
                <td>600.00</td>
                <td>1500.00</td>
              </tr>
              <tr>
                <td> <img src={Lixeira} alt="ícone da lixeira" /></td>
                <td> Mirella da Silva Sauro</td>
                <td> WSS004</td>
                <td> 24</td>
                <td> 21/02/2025</td>
                <td> <img src={Motivo} alt="" /></td>
                <td> Viagem Admin</td>
                <td> 1100110101 - FIN</td>
                <td>1</td>
                <td>0</td>
                <td>001</td>
                <td>BRL</td>
                <td>20km</td>
                <td>0.50</td>
                <td>600.00</td>
                <td>1500.00</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.buttons}>
            <div className={styles.inputTotal}>
              <label htmlFor="">Total Faturado</label>
              <input type="number" name="" id="" placeholder="0,00"/>
            </div>
            <div className={styles.inputTotal}>
              <label htmlFor="">Total Despesa</label>
              <input type="number" name="" id="" placeholder="0,00"/>
            </div>
            <button className={styles.buttonEnviar}>
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

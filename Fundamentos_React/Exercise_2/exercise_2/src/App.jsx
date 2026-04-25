import styles from "./styles/App.module.css";
import { Card } from "./components/Card";

export default function App() {
  return (
    <div className={styles.App}>
      <Card title="Star Wars" description="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma otima recordacao de um dos mais iconicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que voce decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!"/>
      <Card title={"O poderoso Chefão"} description={"Um clássico filme de máfia que conta a história da família Corleone e suas complexas relações com o submundo do crime. "}/>
      <Card title={"O Resgate do Soldado Ryan"} description={"Um grupo de soldados em busca de um companheiro durante a Segunda Guerra Mundial"} />
    </div>
  );
}


/* Devido a desestruturação/props que passamos no componentes Card, podemos reutilizar ele e passar outros dados, como título e descrição e ate mesmo imagens...Seguindo um padrão mais facil de ser mantido
 */

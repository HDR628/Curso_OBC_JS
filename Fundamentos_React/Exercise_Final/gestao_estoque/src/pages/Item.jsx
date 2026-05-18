import { useParams } from "react-router-dom"
import { defaultItems } from "../database"

export function Item(){

  const { itemId } = useParams()

  const item = defaultItems.find(prod => prod.id === itemId)

  return(
    <>
      <hr />
      <div className="itemEdit">
        <h6>{item.name}</h6>
        <button>
          Atualizar
        </button>
        <button>Excluir</button>
      </div>
      <div className="itemStock">
        <div className="Category">{item.category}</div>
        <div>{item.quantity}</div>
        <div>{item.price}</div>
      </div>
      <div className="description">
        <p>{item.description}</p>
        <p>Cadastrado:  {new Date(item.createdAt).toDateString()}</p>
        <p>Atualizado : {item.updatedAt}</p>
      </div>       
    </>
  )
}
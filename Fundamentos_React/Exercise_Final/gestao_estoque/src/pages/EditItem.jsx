import { Link, useParams } from "react-router-dom";
import { defaultItems } from "../database";

export function EditItem() {
  const { editId } = useParams();
  const item = defaultItems.find((prod) => prod.id === editId);

  return (
    <>
      <div className="tabs">
        <Link to="/StockItems" className="tab ">
          Todos os itens
        </Link>
        <Link to="/NewItem" className="tab ">
          Novo Item
        </Link>
      </div>

      <h3>Atualizar Item - {item.name}</h3>
      <form>
        <div className="display-flex-row">
          <div className="form-group">
            <label htmlFor="itemName">Nome:</label>
            <input type="text" id="itemName" defaultValue={item.name} />
          </div>

          <div className="form-group">
            <label htmlFor="itemQtd">Quantidade</label>
            <input type="number" id="itemQtd" defaultValue={item.quantity} />
          </div>

          <div className="form-group">
            <label htmlFor="priceItem">Preço</label>
            <input type="number" id="priceItem" defaultValue={item.price} />
          </div>

          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select name="category" id="category" defaultValue={item.category}>
              <option value="">Selecione uma opção</option>
              <option value="OptionA">Option A</option>
              <option value="OptionB">Option B</option>
            </select>{" "}
            {/* Substituir as opçoes posteriormente */}
          </div>
        </div>

        <div className="descriptionArea">
          <label htmlFor="description">Descrição</label>
          <textarea name="description" id="description" defaultValue={item.description}></textarea>
        </div>

        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

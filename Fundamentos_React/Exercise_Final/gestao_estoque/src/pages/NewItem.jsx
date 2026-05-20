import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { StockContext } from "../hooks/ItemsContext";

export function NewItem() {
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const { addItem } = useContext(StockContext);

  function handleSubmit(ev) {
    ev.preventDefault();

    const newItem = {
      name: name,
      quantity: quantity,
      price: price,
      category: category,
      description: description,
    };

    addItem(newItem);

    setName("");
    setQuantity(0);
    setPrice(0);
    setCategory("");
    setDescription("");

    alert("Teste pra ver se salvou");
  }

  return (
    <>
      <div className="tabs">
        <Link to="/StockItems" className="tab ">
          Todos os itens
        </Link>
        <Link to="/NewItem" className="tab active">
          Novo Item
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Trocar nome da classe depois */}
        <div className="display-flex-row">
          <div className="form-group">
            <label htmlFor="itemName">Nome:</label>
            <input type="text" id="itemName" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="itemQtd">Quantidade</label>
            <input type="number" id="itemQtd" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
          </div>

          <div className="form-group">
            <label htmlFor="priceItem">Preço</label>
            <input type="number" id="priceItem" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Selecione uma opção</option>
              <option value="OptionA">Option A</option>
              <option value="OptionB">Option B</option>
            </select>{" "}
            {/* Substituir as opçoes posteriormente */}
          </div>
        </div>
        <div className="descriptionArea">
          <label htmlFor="description">Descrição</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

import { Link } from "react-router-dom"

export function NewItem(){
  return(
    <>

      <div className="tabs">
        <Link to="/StockItems" className="tab ">Todos os itens</Link>
        <Link to="/NewItem" className="tab active">Novo Item</Link>
      </div>

      <form>
        {/* Trocar nome da classe depois */}
        <div className="display-flex-row">
          <div className="form-group">
          <label htmlFor="itemName">Nome:</label>
          <input type="text" id="itemName" /> 
          </div>

          <div className="form-group">
          <label htmlFor="itemQtd">Quantidade</label>
          <input type="number" id="itemQtd"/>
          </div>

          <div className="form-group">   
          <label htmlFor="priceItem">Preço</label>
          <input type="number" id="priceItem" />
          </div>
          <div className="form-group">
            <label htmlFor="category">Categoria</label>
            <select name="category" id="category">
            <option value="">Selecione uma opção</option>
            <option value="OptionA">Option A</option>
            <option value="OptionB">Option B</option>
            </select> {/* Substituir as opçoes posteriormente */}  
          </div>          
        </div>
        <div className="descriptionArea">
          <label htmlFor="description">Descrição</label>
          <textarea name="description" id="description">
          </textarea>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </>
  )
}
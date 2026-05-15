export function NewItem(){
  return(
    <>
      <label htmlFor="itemName">Nome:</label>
      <input type="text" id="itemName" /> 
      <label htmlFor="itemQtd">Quantidade</label>
      <input type="number" id="itemQtd"/>
      <label htmlFor="priceItem">Preço</label>
      <input type="number" id="priceItem" />
      <label htmlFor="category">Categoria</label>
      <select name="category" id="category">
        <option value="OptionA">Option A</option>
        <option value="OptionB">Option B</option>
      </select> {/* Substituir as opçoes posteriormente */}
      <label htmlFor="description">Descrição</label>
      <textarea name="description" id="description">
      </textarea>
      <button type="submit">Salvar</button>
    </>
  )
}
export function Item(){
  return(
    <>
      <hr />
      <div className="itemEdit">
        <h6>Nome do item aqui | Dado dinamico</h6>
        <button>
          Atualizar
        </button>
        <button>Excluir</button>
      </div>
      <div className="itemStock">
        <div className="Category">Categoria do item</div>
        <div>Qtd estoque</div>
        <div>Preço do item</div>
      </div>
      <div className="description">
        <p>DescriçÃo dinamica aqui</p>
        <p>Cadastrado:  data aqui</p>
        <p>Atualizado : data aqui</p>
      </div>       
    </>
  )
}
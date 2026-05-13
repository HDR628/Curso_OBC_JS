export function Homepage(){
  return(
    <>
    <h1>Dashboard</h1>
    <div className="dashboardGlance">
      <div>
        <h3>Diversidade de items</h3>
        <h1>Aqui vai o numero / Dados dinamicos</h1> 
      </div>
      <div>
        <h3>Inventario Total</h3>
        <h1>Aqui vai o numero / Dados dinamicos</h1> 
      </div>
      <div>
        <h3>Items Recentes</h3>
        <h1>Aqui vai o numero / Dados dinamicos</h1> 
      </div>
      <div>
        <h3>Items Acabando</h3>
        <h1>Aqui vai o numero / Dados dinamicos</h1> 
      </div>
    </div>
    <div className="itemsContainer">
      <div className="recentItems">
        <h2>Items Recentes</h2>
        <h2>Ações</h2>
        <div className="recentItemsList">
          Aqui vai estar disposto os items
        </div>
      </div>
    </div>
    </>
  )
}
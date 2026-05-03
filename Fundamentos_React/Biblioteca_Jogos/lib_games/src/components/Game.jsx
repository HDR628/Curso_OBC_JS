export default function Game ({title,img, onRemove}){
  return(
    <div>
      <img src={img} alt="Capa do Jogo" />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>
          Remover
        </button>
      </div>
    </div>
  )
}
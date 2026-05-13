import products from "../database.json"

export default function loadProduct( {params} ){
  

  const product = products.find(p => p.id === +params.productId)

  /* Teste de erro */
  // if(!product){
  //   throw new Response("Deu ruim em", {status: 404} )
  // }

  return product
}
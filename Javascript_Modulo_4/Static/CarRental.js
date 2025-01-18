class CarRental {
    constructor(client,carModel,rentalDays){
        this.client = client
        this.carModel = carModel
        this.rentalDays = rentalDays
        this.totalPrice = rentalDays * CarRental.baseRate /* Chamada do atributo/propriedade estatica
         */
    }
    /* Taxa Diaria */
    static baseRate = 100

    /* Taxa de seguro, 30% de 100, no caso seria 30 */
    static insuranceRate = 0.30

    /* Taxa para carros de luxo, 50% a maias de acordo com a taxa diaria */
    
    // static luxuryRate = this.baseRate * 0.50 Não e possivel acesar o this.baseRate pois da erro, para acesso a taxa diaria seria recomendado utilizar/chamar a classe e static deseja dessa forma:
    static get luxuryRate() {
        return CarRental.baseRate * 0.50;
    }
    
    /* Visualizar as taxas atuais com o metodo get */
    static showRates(){
        console.log(`As taxas atuais são:
            Diaria: ${CarRental.baseRate}  
            Seguro: ${CarRental.insuranceRate}
            Luxo: ${CarRental.luxuryRate}`) 
            /* Tentei utilizar this mas, não funciona por ser estatico. Os Detalhes para acessar os elementos/variaveis ainda "me pega" */
    }

    /* Mudar taxa diaria atraves do set */
    set updateBaseRate(NewRate){
        CarRental.baseRate = NewRate
    }

    /* Add valor do seguro no valor total do aluguel do carro*/
    addInsurance(){
        let withInsurance = this.totalPrice + (this.totalPrice * CarRental.insuranceRate)/* Da erro pois a InsuranceRate e estatica e deve ser chamada em conjuto com a classe */
        console.log(withInsurance) /* Apenas pra visualizar o carro se foi correto */
    }
    

    /* Add valor de carro de luxo */
    addLuxuryRate(){
        let withLuxury = this.totalPrice + CarRental.luxuryRate * this.rentalDays;
        console.log(withLuxury) /* Visualizar calculo, checagem */
    } 
}

/* Teste criado por IA */

// Criando uma instância de aluguel de carro
const rentalCar = new CarRental("Henrique", "Corolla", 3);

// Exibindo os detalhes iniciais da reserva
console.log("Detalhes da reserva inicial:");
console.log(rentalCar);

// Exibindo as taxas atuais
console.log("\nTaxas atuais:");
CarRental.showRates();

// Atualizando a taxa base
console.log("\nAtualizando a taxa base para R$ 120:");
rentalCar.updateBaseRate = 120;

// Exibindo as taxas novamente após a atualização
console.log("\nTaxas atualizadas:");
CarRental.showRates();

// Adicionando o valor do seguro ao total
console.log("\nAdicionando o seguro ao total:");
rentalCar.addInsurance();

// Adicionando a taxa de luxo ao total
console.log("\nAdicionando a taxa de luxo ao total:");
rentalCar.addLuxuryRate();

// Criando uma nova reserva com a taxa base atualizada
console.log("\nCriando uma nova reserva com 5 dias:");
const rentalCar2 = new CarRental("Maria", "BMW", 5);
console.log(rentalCar2);

// Adicionando seguro e taxa de luxo à nova reserva
console.log("\nAdicionando seguro e taxa de luxo à nova reserva:");
rentalCar2.addInsurance();
rentalCar2.addLuxuryRate();

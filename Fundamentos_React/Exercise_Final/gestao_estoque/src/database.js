// Banco de dados fictício (Mock) para testes iniciais de renderização
// Cada item contém: id, name, description, quantity, price, category, createdAt, updatedAt
// Nota: Considerando a data atual como 18 de Maio de 2026, criamos itens recentes e antigos.

export const defaultItems = [
  {
    id: "item-1",
    name: "Mesa de Escritório",
    description: "Mesa de madeira maciça com gavetas.",
    quantity: 12,
    price: 350.00,
    category: "Móveis",
    createdAt: "2026-05-15T10:00:00.000Z", // Recente (menos de 10 dias de 18/05/2026)
    updatedAt: "2026-05-15T10:00:00.000Z"
  },
  {
    id: "item-2",
    name: "Cadeira Ergonômica",
    description: "Cadeira de escritório confortável com ajuste de altura.",
    quantity: 8, // Estoque baixo (< 10)
    price: 180.50,
    category: "Móveis",
    createdAt: "2026-05-12T14:30:00.000Z", // Recente
    updatedAt: "2026-05-12T14:30:00.000Z"
  },
  {
    id: "item-3",
    name: "Teclado Mecânico RGB",
    description: "Teclado mecânico gamer switches blue.",
    quantity: 3, // Estoque baixo (< 10)
    price: 250.00,
    category: "Informática",
    createdAt: "2026-05-02T11:00:00.000Z", // Antigo (mais de 10 dias de 18/05/2026)
    updatedAt: "2026-05-02T11:00:00.000Z"
  },
  {
    id: "item-4",
    name: "Monitor Ultrawide 29''",
    description: "Monitor IPS Full HD com taxa de atualização de 75Hz.",
    quantity: 15,
    price: 1200.00,
    category: "Informática",
    createdAt: "2026-05-10T09:15:00.000Z", // Recente
    updatedAt: "2026-05-10T09:15:00.000Z"
  },
  {
    id: "item-5",
    name: "Mouse Gamer Sem Fio",
    description: "Mouse de alta precisão 16000 DPI.",
    quantity: 5, // Estoque baixo (< 10)
    price: 199.90,
    category: "Informática",
    createdAt: "2026-04-20T16:00:00.000Z", // Antigo
    updatedAt: "2026-04-20T16:00:00.000Z"
  }
];

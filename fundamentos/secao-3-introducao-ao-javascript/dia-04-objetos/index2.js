const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
};
  
const customerInfo = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    return `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`;
  }
  
console.log(customerInfo(order));
  
const orderModifier = (fullOrder) => {
    // Adicione abaixo as informações necessárias.
    fullOrder.name = "Luiz silva";
    fullOrder.payment.total = 50;
    return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${Object.keys(fullOrder.order.pizza)} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.`;
  }
  
console.log(orderModifier(order));
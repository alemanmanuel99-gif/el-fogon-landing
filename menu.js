/*
 * MENÚ DE EL FOGÓN — único archivo que hay que editar para cambiar platillos o precios.
 * Precios en pesos mexicanos (MXN), sin el signo $.
 * TODO: validar todos los precios con la carta vigente del restaurante.
 */
window.MENU = [
  {
    id: "pizzas",
    nombre: "Pizzas a la leña",
    nota: "Masa delgada, horneada en horno de leña.",
    grupos: [
      {
        nombre: "Clásicas",
        platillos: [
          { nombre: "Margarita", desc: "Jitomate y albahaca fresca", precio: 225 },
          { nombre: "Caprichosa", desc: "Jamón, pimiento verde, salami y aceituna negra", precio: 225 },
          { nombre: "Napolitana", desc: "Salami, salchicha y champiñón", precio: 225 },
          { nombre: "Vegetariana", desc: "Pimiento verde, piña, espinaca, champiñón y aceituna negra", precio: 225 },
          { nombre: "Peperoni", desc: "Peperoni y queso", precio: 225 }
        ]
      },
      {
        nombre: "De la casa",
        platillos: [
          { nombre: "El Fogón", desc: "Espinaca fresca, jamón serrano, champiñones y aceituna negra", precio: 270, firma: true },
          { nombre: "Mexicana", desc: "Carne molida, pimiento verde, cebolla morada y chile jalapeño", precio: 270 },
          { nombre: "Hawaiana", desc: "Jamón y piña", precio: 270 },
          { nombre: "Española", desc: "Jamón serrano, jitomate y albahaca", precio: 270 },
          { nombre: "Catania", desc: "Jitomate, espinaca, jamón serrano y queso de cabra", precio: 270 },
          { nombre: "Siciliana", desc: "Chorizo, cebolla morada y chile jalapeño", precio: 270 },
          { nombre: "4 Quesos", desc: "Cheddar, azul, mozzarella y queso de cabra", precio: 270 },
          { nombre: "Pastor", desc: "Pastor, piña y cebolla morada", precio: 270 },
          { nombre: "Toscana", desc: "Camarones, pimiento verde y cebolla morada", precio: 290 }
        ]
      },
      {
        nombre: "Premium",
        platillos: [
          { nombre: "Emperador", desc: "Corte vacío de res, champiñones, aceitunas, gotas de pesto y cebolla morada", precio: 310 },
          { nombre: "Salmone", desc: "Salmón y queso crema", precio: 310 }
        ]
      }
    ]
  },
  {
    id: "entradas",
    nombre: "Entradas y ensaladas",
    grupos: [
      {
        nombre: "Entradas",
        platillos: [
          { nombre: "Papas gajo a la leña", desc: "", precio: 99 },
          { nombre: "Focaccia a las finas hierbas", desc: "", precio: 99 },
          { nombre: "Panela al horno", desc: "Con jitomate, champiñones, aceituna negra y pimiento verde", precio: 205 },
          { nombre: "Alitas a la leña", desc: "Sabor ranchero, 300 g", precio: 220 }
        ]
      },
      {
        nombre: "Ensaladas",
        platillos: [
          { nombre: "Ensalada Romana", desc: "Lechuga, espinaca, arándano, queso de cabra, jitomate, vinagreta italiana y crotones", precio: 185 },
          { nombre: "Ensalada con pollo", desc: "La Romana con pollo a la plancha", precio: 205 }
        ]
      }
    ]
  },
  {
    id: "pastas",
    nombre: "Pastas",
    grupos: [
      {
        nombre: "Fettuccini",
        platillos: [
          { nombre: "Alfredo", desc: "Salsa cremosa y queso azul con jamón y champiñones, parmesano", precio: 220 },
          { nombre: "Boloñesa", desc: "Salsa pomodoro, carne molida de res, queso derretido y champiñones", precio: 220 },
          { nombre: "Al pesto", desc: "Pesto de albahaca, pollo a la parrilla, queso derretido y champiñones", precio: 220 },
          { nombre: "Amor Marinero", desc: "Fettuccini al pesto con camarones salteados", precio: 255 },
          { nombre: "Tres Regalos", desc: "Fettuccini Alfredo con camarones, pollo a la mantequilla y queso azul", precio: 295, firma: true }
        ]
      }
    ]
  },
  {
    id: "postres",
    nombre: "Postres",
    grupos: [
      {
        nombre: "Postres",
        platillos: [
          { nombre: "Flan napolitano", desc: "", precio: 95 },
          { nombre: "Cheesecake de zarzamora", desc: "", precio: 115 },
          { nombre: "Góndolas", desc: "Plátano macho al horno con mantequilla y canela, lechera, crema batida, chocolate y nuez", precio: 115 }
        ]
      }
    ]
  },
  {
    id: "bebidas",
    nombre: "Bebidas",
    grupos: [
      {
        nombre: "Para la mesa",
        platillos: [
          { nombre: "Clericot", desc: "", precio: 120, firma: true },
          { nombre: "Sangría", desc: "", precio: 99 },
          { nombre: "Copa de vino", desc: "", precio: 110 },
          { nombre: "Botella de vino", desc: "Finca Las Moras Malbec o Lambrusco", precio: 499 }
        ]
      },
      {
        nombre: "Cervezas",
        platillos: [
          { nombre: "Corona · Victoria · Modelo Especial · Negra Modelo", desc: "", precio: 55 },
          { nombre: "Michelada", desc: "", precio: 95 }
        ]
      },
      {
        nombre: "Frías",
        platillos: [
          { nombre: "Limonada", desc: "", precio: 65 },
          { nombre: "Limonada de sabor", desc: "", precio: 65 },
          { nombre: "Naranjada", desc: "", precio: 75 },
          { nombre: "Té frío", desc: "", precio: 60 },
          { nombre: "Refresco", desc: "", precio: 45 },
          { nombre: "Boing", desc: "Uva, guayaba, mango o fresa", precio: 45 },
          { nombre: "Agua embotellada", desc: "600 ml", precio: 25 }
        ]
      },
      {
        nombre: "Frappés",
        platillos: [
          { nombre: "Frapuccino · Moka frío · Piñada · Latte coco magno · Pasión limón", desc: "", precio: 95 },
          { nombre: "Frappé de yogurt con fresa · Chocolate blanco con Oreo", desc: "", precio: 95 },
          { nombre: "Latte chai · Matcha · Smoothie de fresa · Mango molecular", desc: "", precio: 95 }
        ]
      },
      {
        nombre: "Café y calientes",
        platillos: [
          { nombre: "Expreso", desc: "", precio: 49 },
          { nombre: "Americano", desc: "", precio: 50 },
          { nombre: "Capuchino · Latte · Chocolate", desc: "", precio: 69 },
          { nombre: "Té de hierbas", desc: "", precio: 65 },
          { nombre: "Moka · Chai latte", desc: "", precio: 75 },
          { nombre: "Matcha latte", desc: "", precio: 85 }
        ]
      }
    ]
  }
];

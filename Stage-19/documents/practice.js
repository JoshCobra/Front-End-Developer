// Usando Promises
// Este ejercicio es la preparación de un carro para una carrera
function prepareTires() {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        let tiresReady = true
        
        if(tiresReady) {
            resolve("Las llantas están listas 🧑‍🔧")
        } else {
          reject("Llantas INCORRECTAS 😲")
        }
    }, 2500)
    });
  }
  
  function fillTheTank() {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
        let tankFilled = true 
        
        if(tankFilled) {
          resolve("Combustible lleno y Listo 🛢️")
        } else {
          reject("NO esta lleno el tanque ⚠️")
        }
    }, 2500)
    });
  }
  
  function goToRacingLine() {
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
      let inRacingLine = false
      
      if(inRacingLine) {
        resolve("LISTO PARA LA CARRERA 🏎️")
      } else {
        reject("Aun no en la linea de meta ⛔")
      }
    }, 1000)
    });
  }
  
  prepareTires().then(value => { console.log(value); return fillTheTank(); })
           .then(value => { console.log(value); return goToRacingLine(); })
           .then(value => { console.log(value); console.log("🏁A CORRER🏁"); })
           .catch(error => console.error(error))
  
  
  
  // Usando Await y Async
  // Este código hace referencia a una lista de compras para hacer una ensalada
  
  function buyVegetables() {
    
    let vegetablesList = ["lechuga", "zanahoria", "tomate", "cebolla"]
    
    return new Promise((resolve, reject) => {
      if (vegetablesList.includes("lechuga") && vegetablesList.includes("tomate") ) {
        resolve("Los Vegetales estan listos")
      } else {
        reject("Aun falta un vegetal importante")
      }
    });
  }
  
  function buyToppings() {
    
    const toppingsBuyed = true
    
    return new Promise((resolve, reject) => {
      if (toppingsBuyed) {
        resolve("Toppings listos")
      } else {
        reject("Aun falta comprar los toppings")
      }
    });
  }
  
  async function makeSalad() {
    
    try {
      const vegetablesReady = await buyVegetables()
      console.log(vegetablesReady)
  
      const toppingsReady = await buyToppings()
      console.log(toppingsReady)
  
      console.log("Ensalada Lista ")
    }
    catch(error) {
      console.error(error)
    }
  }
  
  makeSalad()
  
  
  // Ejercicio 3
  
  function randomDice() {
    const dice = Math.floor( Math.random() * 6)
    
    return new Promise((resolve, reject) => {
      if (dice === 0) {
        reject("El dado ha caído en 0")
      } else {
        resolve(`El dado cayo en ${dice}`)
      }
    });
  } 
  
  async function throwDice() {
    try {
      const diceReady = await randomDice()
      console.log(diceReady)
    } 
    catch(error) {
      console.log(error)
    }
  }
  
throwDice()
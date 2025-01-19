// Async Javascript Example

// The callback function example

//High Order Function ---> HOC 
const createUser = (user, callback) => {
    const userCreated = `User ${user} was created`
    callback(userCreated)
}

const logMsg = (str) => {
    console.log(str)
}

createUser("Josh", logMsg)


// Callback Hell
let buyIngredients = (person, next) => {
    console.log(`${person} is buying Ingredients`)
    next("burger ready")
}

let cook = (food, next) => {
    console.log(`Cooking ${food}`)
    next("beef steak ready")
}

let serve = (cookedFood, next) => {
    console.log(`Serving ${cookedFood}`)
    next("dishes")
}

let washDishes = (dishes) => {
    console.log(`Cleaning ${dishes}`)
}

buyIngredients("Mary", (meat) => {
    cook(meat, (burger) => {
        serve(burger, (dishes) => [
            washDishes(dishes)
        ])
    })
})

//Promises Example
const onTheParty = () => {
    return new Promise((resolve, reject) => { //Two possible results "resolve" or "reject"
      setTimeOut(() => { //Anonymous function
        
        if(juanCame) {
          resolve("Beer")
          
        } else {
          reject("No Beer :(")
        }
        
      }, 2000)
    })
  }
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
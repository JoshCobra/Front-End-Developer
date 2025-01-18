// Async Javascript Example

// The callback function is 

const createUser = (user, callback) => {
    const userCreated = `User ${user} was created`
    callback(userCreated)
}
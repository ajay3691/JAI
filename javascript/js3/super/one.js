class Account {
    constructor() {
        console.log("Account class - constructor")
    }
}
class SA extends Account {
    constructor() {
        super()
        console.log("SA-Class constructor method")
    }
}
new SA()
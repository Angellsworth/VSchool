//alternative syntax for requests
inventoryRouter.route('/')
.get("/", (req, res) => {
    res.send(inventory)
})
.post('/', (req, res) => {
    const newInventory = req.body
    newInventory._id = uuidv4()
    inventory.push(newInventory)
    res.send(`Successfully added ${newInventory.name} to the database! You're a goddamn cheetah Angie!`)
})
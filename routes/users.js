const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("New User Form")
})

router.post("/new", (req, res) => {
    res.send("Create New User")
})

// router.get("/:id", (req, res) => {
//     res.send(`Get specific user with ID ${req.params.id}`)
// })

// router.put("/:id", (req, res) => {
//     res.send(`Update specific user with ID ${req.params.id}`)
// })
// router.delete("/:id", (req, res) => {
//     res.send(`Delete specific user with ID ${req.params.id}`)
// })

// Simplified of above so no repeat code
router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get specific user with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update specific user with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete specific user with ID ${req.params.id}`)
    })

module.exports = router
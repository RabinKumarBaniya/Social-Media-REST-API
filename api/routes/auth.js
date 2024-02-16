const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')


router.post("/register", async(req, res) => {
    try {
        const {password, username, email} = req.body
        const existingUser = await User.findOne({ $or : [{username}, {email}] })
        if(existingUser) {
             return res.status(400).json("Username or email already exits")
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hashSync(password,salt)
        const newUser = new User({...req.body, password: hashedPassword})
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports  = router
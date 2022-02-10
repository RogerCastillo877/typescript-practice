import express from 'express';
// const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  //  With TS
  res.status(401).json({
    ok: false,
    msg: 'No hay token en la petición'
  })

  //  Only JS
  // res.json({
  //     ok: true,
  //     msg: 'Todo bien!'
  // })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
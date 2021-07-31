const express = require('express')
const router = express.Router()
const c = require('../controllers/chegirmaController')

router.post('add',c.createChegirma)
router.get('all',c.getAll)
router.get('/:id',c.getElementById)
router.put('/:id',c.ChegirmaUpdate)
router.delete('/:id',c.ChegirmaDelete)

module.exports = router
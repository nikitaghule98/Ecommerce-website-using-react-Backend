
const express = require("express");

const router = express.Router();

// middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { 
    create, read, update, remove, list 
} = require("../controllers/sub");

//routes
/* to create router.post() , to read --> get(), to update --> put(), to remove --> delete()*/
router.post('/sub', authCheck, adminCheck, create);//creating a category
router.get('/subs', list);//listing all categories so no need of middleware
router.get('/sub/:slug', read);//shows a particular single category
router.put('/sub/:slug', authCheck, adminCheck, update);//
router.delete('/sub/:slug', authCheck, adminCheck, remove);

module.exports = router;

const express = require ('express');

const router = express.Router();
//reach different routes with express

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling /products requests using GET'
    });
});
// / instead of /products because it already parses to products.js 
//incoming get requests are handled 

router.post('/',(req, res, next) => {
    res.status(200).json({
        message: 'Handling /products requests using POST'
    });
});

router.get('/:productID',(req,res,next) => {
    const id=req.params.productID;
    if (id === 'special'){
        res.status(200).json({
            message:'Special ID Parameter has been read',
            id: id
        });
    }
    else{
        res.status(200).json({
            message:'You passed the Special ID Parameter'
        });
    }
});

module.exports = router;
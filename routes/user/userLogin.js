const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('user/userLogin.html')
});

router.post('/login', async (request, response) => {
    let body = request.body;
    await axios({
        method: 'POST',
        url: "http://localhost:8080/api/user/login",
        data: body
    }).then((res) => {
        let data = res.data;
        response.status(200).json(data);
    }).catch((err) => {
        console.log(err.data);
    })
});

module.exports = router;

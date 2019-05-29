const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const sessions = require('../controller/session');
const createResponse = require('../controller/createResponse');

router.post('/', [
    check('stationId').isString(),
    check('startedAt').isAfter(),
],
    function (req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        } else {
            let data = createResponse.postResponse(req, res);
            sessions.chargeSessionSetStatus(data); //sideEffect ?
            res.send((data));
        }
    });

router.put('/:id',
    function (req, res) {
        let data = sessions.chargeSessionChangeStatus(req, res);
        res.send((data));
    });

router.get('/',
    function (req, res) {
        let data = createResponse.allSessions();
        res.send((data));
    });



module.exports = router

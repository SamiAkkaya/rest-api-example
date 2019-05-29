const uuidv1 = require('uuid/v1');
const session = require('../dataSource/sessions');
module.exports = {

    postResponse: function(req,res) {
        var data = {
            "id": uuidv1(),
            "stationId": req.body.stationId,
            "startedAt": req.body.startedAt,
        }
        return data;
    },
    allSessions: function() {
        return session;
    },
    
}
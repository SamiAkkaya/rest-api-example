const session = require('../dataSource/sessions');
const chargeStatus = {
    inProgress: 'IN_PROGRESS',
    finished: 'FINISHED',
}

module.exports = {
    chargeSessionSetStatus: function (data) {
        var cloneOfData = JSON.parse(JSON.stringify(data));
        cloneOfData.status = chargeStatus.inProgress;
        saveSession(cloneOfData); //sideEffect ? 
    },

    chargeSessionChangeStatus: function (req,res) {
        let id = req.params.id
        var entry = session.filter(entry => entry.id === id);
        entry[0].status = chargeStatus.finished;
        return entry;
    },
}
function saveSession(cloneOfData) {
    session.push(cloneOfData);
}



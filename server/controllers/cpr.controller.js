const db = require('../config/db');

exports.submitForm = (req, res) => {

    const data = req.body;

    const sql = `
        INSERT INTO cpr_forms (

            patientName,
            nric,
            clinicName,
            arrestDateTime,
            location,
            doctorInformedBy,
            doctorName,
            relativeName,
            ambulanceCalledBy,
            respiration,
            oxygen,
            pulse,
            bloodPressure,
            ecgRhythm,
            aed,

            avfUsed,
            avfTime,
            avfSite,

            cvcUsed,
            cvcTime,
            cvcSite,

            ivTime,
            ivSite,
            insertedBy,
            outcome,

            drugTime,
            drugECG,
            aedDefib,
            adrenaline,
            atropine,
            calcium,
            bicarbonate,
            otherDrugs,
            route,
            adminBy

        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
    `;

    db.query(sql, [

        data.patientName,
        data.nric,
        data.clinicName,
        data.arrestDateTime,
        data.location,
        data.doctorInformedBy,
        data.doctorName,
        data.relativeName,
        data.ambulanceCalledBy,
        data.respiration,
        data.oxygen,
        data.pulse,
        data.bloodPressure,
        data.ecgRhythm,
        data.aed,

        data.avfUsed,
        data.avfTime,
        data.avfSite,

        data.cvcUsed,
        data.cvcTime,
        data.cvcSite,

        data.ivTime,
        data.ivSite,
        data.insertedBy,
        data.outcome,

        data.drugTime,
        data.drugECG,
        data.aedDefib,
        data.adrenaline,
        data.atropine,
        data.calcium,
        data.bicarbonate,
        data.otherDrugs,
        data.route,
        data.adminBy

    ], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Database Error' });
        }

        res.json({ message: 'CPR Form Saved Successfully' });
    });
};
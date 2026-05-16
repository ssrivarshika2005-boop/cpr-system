const db = require('../config/db');

exports.submitForm = async (req, res) => {

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
            avf,
            cvc,
            ivSite,
            insertedBy,
            outcome

        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)

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
        data.avf,
        data.cvc,
        data.ivSite,
        data.insertedBy,
        data.outcome

    ], (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({

                message: 'Database Error'

            });

        }

        res.json({

            message: 'CPR Form Saved Successfully'

        });

    });

};
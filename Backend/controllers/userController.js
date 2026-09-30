const db = require("../config1/database");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {

    try {

        const {
            full_name,
            email,
            password,
            role,
            registration_number,
            college_name,
            year_section,
            branch,
            blood_group,
            blood_donor,
            interests,
            skills,
            motivation,
            previous_volunteer,
            weekend_available,
            declaration
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = `
            INSERT INTO users (full_name, email, password, role)
            VALUES (?, ?, ?, ?)
        `;

        db.query(sql, [full_name, email, hashedPassword, role], (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            const userId = result.insertId;

            const profileSql = `
                INSERT INTO student_profiles
                (
                    user_id,
                    registration_number,
                    college_name,
                    year_section,
                    branch,
                    blood_group,
                    blood_donor,
                    interests,
                    skills,
                    motivation,
                    previous_volunteer,
                    weekend_available,
                    declaration
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(
                profileSql,
                [
                    userId,
                    registration_number,
                    college_name,
                    year_section,
                    branch,
                    blood_group,
                    blood_donor,
                    interests,
                    skills,
                    motivation,
                    previous_volunteer,
                    weekend_available,
                    declaration
                ],
                (err, profileResult) => {

                    if (err) {
                        return res.status(500).json(err);
                    }

                    res.status(201).json({
                        message: "Student Registered Successfully",
                        userId: userId,
                        profileId: profileResult.insertId
                    });

                }
            );

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

exports.test = (req, res) => {
    res.send("Register API Working");
};
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Fetch student data
app.get('/student/:reg_no', (req, res) => {
    const regNo = req.params.reg_no;
    fs.readFile(path.join(__dirname, 'server', 'students.json'), 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading database');

        const students = JSON.parse(data);
        const student = students.find(s => s.reg_no === regNo);

        if (student) {
            res.json(student);
        } else {
            res.status(404).send('Student not found');
        }
    });
});

// Update student data (Request Change)
app.post('/update-student', (req, res) => {
    const { reg_no, marksheet, cgpa, backlogs, current_backlog, date_of_clearance_of_backlog } = req.body;
    fs.readFile(path.join(__dirname, 'server', 'students.json'), 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Error reading database');

        let students = JSON.parse(data);
        let studentIndex = students.findIndex(s => s.reg_no === reg_no);

        if (studentIndex !== -1) {
            students[studentIndex] = {
                ...students[studentIndex],
                marksheet,
                cgpa,
                backlogs,
                current_backlog,
                date_of_clearance_of_backlog
            };

            fs.writeFile(path.join(__dirname, 'server', 'students.json'), JSON.stringify(students, null, 2), (err) => {
                if (err) return res.status(500).send('Error updating database');
                res.send('Student data updated');
            });
        } else {
            res.status(404).send('Student not found');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});

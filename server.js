// // server.js
// const express = require('express');
// const path = require('path');
// const PORT = 3000;

// const app = express();

// // Import the views routes
// const viewsRoutes = require('./viewsRoutes');

// // Use the views routes
// app.use('/', viewsRoutes);

// // Start the server
// app.listen(PORT, (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Server running on port ' + PORT);
//     }
// });

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const helmet  = require('helmet')

app.use(cors({
    origin:"*"
}))

app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'", "http://localhost:3000"],
        styleSrc: ["'self'", "'nonce-abcdef'"], // Use a nonce for styles
      },
    })
  );
      

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self' http://localhost:3000");
    next();
});
app.use(express.static(path.join(__dirname,'./public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'adminlogin.html'));
});

app.get('/studentlogin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'studentlogin.html'));
});

app.get('/adminfrontpage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'adminfrontpage.html'));
});

app.get('/studentfrontpage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'studentfrontpage.html'));
});

app.get('/personal.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'personal.html'));
});

app.get('/academic.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'academic.html'));
});

app.get('/sem2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem2.html'));
});

app.get('/sem3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem3.html'));
});

app.get('/sem4.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem4.html'));
});

app.get('/sem5.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem5.html'));
});

app.get('/sem6.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem6.html'));
});

app.get('/sem7.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem7.html'));
});

app.get('/sem8.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sem8.html'));
});

app.get('/adminreq.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'adminreq.html'));
});

app.get('/adminlogin.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'adminlogin.html'));
});

app.get('/*.', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

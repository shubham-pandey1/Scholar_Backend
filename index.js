const express = require('express');
const fs = require('fs');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(cors({
    origin:'*'
}));

const PORT = process.env.PORT || 5000;

// Specify the path to your JSON file
const jsonFilePath = path.join(__dirname, 'data.json');

app.get('/globe-data', (req, res) => {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseError) {
            res.status(500).json({ error: parseError.message });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

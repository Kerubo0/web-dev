const express = require('express');
const axios = require('axios');
const path = require('path');
//const apiKey = process.env.OMNISEND_API_KEY;


const app = express();


require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/public', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const apiKey = '6465033e71a2f8c907941509-t4xU2dZFtTDbjBheXP70DO7UP1GUUaXWhsX22AaQdWEq1EkUp9';
app.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;

        const data = {
            identifiers: [{
                channels: {
                    email: {
                        status: 'subscribed',
                        statusDate: new Date().toISOString()
                    }
                },
                id: email,
                type: 'email',
                sendWelcomeMessage: true
            }],
            //firstName: name,
            'customProperties': {
                'landingpage': 'Nick'
              }
            
        };

        const response = await axios.post(
            'https://api.omnisend.com/v3/contacts',
            data,
            {
                headers: {
                    'X-API-KEY': apiKey,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );

        console.log('Data sent to Omnisend successfully:', response.data);
        //res.status(200).send('Form submitted successfully');
    } catch (error) {
        console.error('Error sending data to Omnisend:', error.response.data);
        res.status(500).send('Error submitting form');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

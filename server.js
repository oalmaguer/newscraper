const express = require('express');

const app = express();

app.get('/api/', (req, res) => {
    const customers = [
        {id: 1, firstName: 'John', lastName: 'Almaguer'},
        {id: 2, firstName: 'Oliver', lastName: 'Samchez'},
        {id: 3, firstName: 'Roberot', lastName: 'Gonzales'},
    ];

    res.json(customers);
})

 const port = 5000;

 app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
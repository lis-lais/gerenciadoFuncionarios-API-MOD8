const express = require('express');
const funcionariosRoutes = require('./routes/funcionariosRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Funcionários');
});
app.use('/funcionarios', funcionariosRoutes);

const PORT = 3000   
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

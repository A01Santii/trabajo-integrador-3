import express from 'express';
import dotenv from 'dotenv';

const app = express();

const PORT = procces.env.PORT;

const iniciarServidor = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Servidor funcionando en el puero ${PORT}`);
        });
        
    } catch(error) {
        
    }
};
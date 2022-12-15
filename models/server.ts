import express, { Application } from 'express';
import userRoutes from '../routes/usuario';
// import * as userRoutes from '../routes/usuario';
import cors from 'cors';
import db from '../db/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
        
        this.dbConnection();

        this.middlewares();

        this.routes();
    };

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Database online');
        } catch ( err: any ) {
            console.log( err );
            throw new Error( err );
        }
    }

    middlewares() {
        // cors
        this.app.use( cors() )

        // lectura del body
        this.app.use( express.json() );

        // carpeta publica
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes );
        // this.app.use( this.apiPaths.usuarios, userRoutes.default );
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en puerto ${ this.port }`);
        });
    }
}

export default Server;
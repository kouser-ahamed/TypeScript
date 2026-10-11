interface Database {
     host: string;
        port: number;
        username: string;
        password: string;
}

interface appConfig {
    appName: string;
    version: string;
    debug: boolean;
    port: number;
    database: Database;
    features: {
        registration: boolean;
        darkMode: boolean;
    };
}

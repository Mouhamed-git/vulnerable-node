var config_local = {
    // Customer module configs
    "db": {
        "server": "postgres://postgres:postgres@127.0.0.1",
        "database": "vulnerablenode"
    }
}

var config_prod = {
    // Customer module configs
    "db": {
        "server": "postgres://postgres:postgres@127.0.0.1",
        "database": "vulnerablenode"
    }
}

var config_docker = {
    // Customer module configs
    "db": {
        "server": "postgres://postgres:postgres@postgres_db",
        "database": "vulnerablenode"
    }
}

// Select correct config
var config = null;

switch (process.env.STAGE){
    case "DOCKER":
        config = config_docker;
        break;

    case "LOCAL":
        config = config_local;
        break;

    case "PROD":
        config = config_prod;
        break;

    default:
        config = config_prod;
}


// Build connection string
config.db.connectionString = config.db.server + "/" + config.db.database

console.log("config", config.db.connectionString);


module.exports = config;
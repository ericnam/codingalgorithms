let config = {
    local: {
        host: '127.0.0.1',
        port: '5000',
        desc: 'local'
    },
    stage: {},
    prod: {}
}

module.exports = (env) => {
    return env == null ? config.local : config[env];
} 
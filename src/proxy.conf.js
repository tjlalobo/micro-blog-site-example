
const PROXY_CONFIG = [
    {
        context: [
            "/api/chirp",
            "/api/chirps",
        ],
        target: "http://localhost:8000/api/chirps",
        secure: false,
        logLevel: "debug"
    }
]

module.exports = PROXY_CONFIG;
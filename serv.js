const sdk = require("iot-lorawan")

let device = new iot-lorawan.Device({
        clientId: opts.clientId || "simulator",
        caPath: directory + "/ca.pem",
        keyPath: directory + "/key.pem",
        certPath: directory + "/cert.pem",
        meta: {
            model: "simulator",
            desc: "Simulated IOT device using the senzflow(©) sdk",
            version: 0.11
        }
    });

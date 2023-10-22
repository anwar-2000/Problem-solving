//which server is DOWN among the servers ...

    function whatServerIsDown(numberofservers, servers) {
        var frequency = {};
    
        for (let i = 0; i < numberofservers; i++) {
            let server = servers[i];
            frequency[server] = true;
        }
    
        for (let server = 1; server <= numberofservers; server++) {
            if (!frequency.hasOwnProperty(server)) {
                console.log(server);
                return server;
            }
        }
    }
    
    whatServerIsDown(4, [1, 2, 4]);
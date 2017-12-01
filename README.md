# Fn Flow  UI  


This is a demo-ware visualisation tool for showing what's going on with FnFlow in real time. 

# Running with docker

Assuming you are already running fn server on port 8080 and completer on port 8081 in docker: 

Grab the internal docker network IP 
```bash
export DOCKER_LOCALHOST=$(docker inspect --type container -f '{{.NetworkSettings.Gateway}}' functions)
```

```bash 
docker run   -p3000:3000 -e API_URL=http://$DOCKER_LOCALHOST:8080 -e COMPLETER_BASE_URL=http://$DOCKER_LOCALHOST:8081 fnproject/flow:ui
```

## running locally 

You need nodejs (tested with 8.5.0)

this assumes that the completer is running on 127.0.0.1:8081 and the corresponding functions server is running on 8080

```bash
 npm install 
 npm run-script run 
```

the UI should be available on [http://localhost:1979]


## Notes
 
 The UI should start visualising the first cloud thread function that starts  automatically , and will list any cloud threads functions that have started since the UI was opened. 
 


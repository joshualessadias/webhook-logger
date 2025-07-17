# Webhook Logger

A simple service that logs incoming webhook requests.

## Docker Setup

### Build the Docker image
```bash
docker build -t webhook-logger .
```

### Run the Docker container
```bash
docker run -p 3003:3003 --name webhook-logger webhook-logger
```

For detached mode:
```bash
docker run -d -p 3003:3003 --name webhook-logger webhook-logger
```

### Access the service
The webhook logger will be accessible at: http://localhost:3003

### View logs
```bash
docker logs webhook-logger
```

### Stop and remove the container
```bash
docker stop webhook-logger
docker rm webhook-logger
```
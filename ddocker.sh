docker run -it -w /app -v "$(pwd)":/app -v "$(pwd)/../ofmt-api":/ofmt-api node "$@"
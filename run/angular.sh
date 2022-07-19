ENV_NAME=${1:-local}
echo "(cd src/frontend/angular/ && npm run start:$ENV_NAME)"
(cd src/frontend/angular/ && npm start)

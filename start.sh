echo "Checking selenium server..."
sleep 5
if !(nc -z localhost 4444); then
  echo "Selenium server is not available - Preparing selenium environment..."
  npm install -g protractor
  npm install
  webdriver-manager status
  webdriver-manager update
  webdriver-manager start --detach
  sleep 5
fi
  if !(nc -z localhost 4444); then
    echo "ERROR while starting selenium !!"
    exit 1
  fi
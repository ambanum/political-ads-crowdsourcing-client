#!/bin/bash
set -e

### Configuration ###

SERVER=cloud@disinfo.quaidorsay.fr
APP_DIR=/home/cloud/political-ads


### Library ###

function run()
{
  echo "Running: $@"
  "$@"
}


### Automation steps ###

run scp -rp $PWD/build $SERVER:$APP_DIR

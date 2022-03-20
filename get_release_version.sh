#!/bin/bash

rx='^([0-9]+\.){0,2}(\*|[0-9]+)$'
branch=$(git rev-parse --abbrev-ref HEAD)

IFS='/' read -ra split <<< "$branch"

semver=${split[1]}

if [[ $semver =~ $rx ]]; then
  doNothing=1
else
  semver=${BUILD_SOURCEBRANCHNAME}
  if [[ $semver =~ $rx ]]; then
      doNothing=1
  else
    semver=""
  fi
fi

echo "$semver"

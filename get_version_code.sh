#!/bin/bash

commitCount=$(git rev-list --count HEAD)
echo "$commitCount"

#!/usr/bin/env zsh

if [[ "$1" == "up" ]]; then
    echo "$ docker compose up --remove-orphans"
    docker compose up --remove-orphans
elif [[ "$1" == "up:build" ]]; then
    echo "$ docker compose up --remove-orphans --build"
    docker compose up --remove-orphans --build
fi
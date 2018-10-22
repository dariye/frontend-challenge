#!/bin/bash
for f in *; do
  if [[ ! -f "$f" && "$f" != "node_modules" ]]; then
    test -d "$f" || continue
    cd "$f" && now && now alias
    sleep 1m
    cd ..
  fi
done

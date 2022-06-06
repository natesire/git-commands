#!/bin/bash
# set var to command output
git_search_output=$(git log --all --pretty=format:"%H %s" | grep -m5 "$1")
echo "$git_search_output"
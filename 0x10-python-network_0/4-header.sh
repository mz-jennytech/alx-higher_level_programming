#!/bin/bash
# takes a uRL, sends a header
curl -s --header "X-School-User-Id: 98" "$1"
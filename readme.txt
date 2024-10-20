<h1 align="center">Load Balancer Implementation: Round-Robin & Least Connections</h1>
Overview
This repository contains an implementation of a Load Balancer that supports two common algorithms: Round-Robin and Least Connections. A load balancer distributes incoming traffic across multiple servers, ensuring no single server gets overwhelmed, which improves the availability, reliability, and performance of the system.

Features
Round-Robin Load Balancer: Distributes traffic evenly across all available servers in a cyclical manner, ensuring each server gets an equal number of requests.
Least Connections Load Balancer: Directs traffic to the server with the fewest active connections, making it suitable for systems where server load may vary.
Algorithms
1. Round-Robin
The Round-Robin algorithm cycles through a list of servers sequentially, sending one request to each server in turn. This is effective when all servers have similar capabilities and the traffic load is relatively uniform.

Example
If there are three servers (A, B, C), the traffic will be distributed as follows:

Request 1 → Server A
Request 2 → Server B
Request 3 → Server C
Request 4 → Server A
Request 5 → Server B
... and so on.
2. Least Connections
The Least Connections algorithm routes incoming requests to the server that has the fewest active connections at that moment. This helps balance the load more dynamically when certain servers are handling heavier workloads than others.

Example
If there are three servers (A, B, C) with the following active connections:

Server A: 5 connections
Server B: 2 connections
Server C: 4 connections
The next request will be routed to Server B as it has the fewest active connections.

Installation:
```
npm init 
npm install http http-proxy 
```

open 3 terminal and run commands :
```
nodemon .\backendServers.js
nodemon .\server.js  
. .\test_load_balancer.sh
```

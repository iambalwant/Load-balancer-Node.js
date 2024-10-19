 #!/bin/bash

 #Number of request to send
 REQUEST=10

 #URL of your load balancer
 URL="http://localhost:3000"

 #loop to send request
 for((i=1; i<=REQUEST; i++)); do 
   curl $URL &
done

wait 
echo "ALL request have been sended"
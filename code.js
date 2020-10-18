var noOfSocks= prompt("no of socks");
var pairArray= prompt("enter socks array space seprated  format ");
pairArray=pairArray.split(" ");
function sockMerchant(n, arr) {

var counter=0;
var count=0;
for(var i=0;i<arr.length;i++)
{
count=1;
for(var j=i+1;j<arr.length;j++)
{
if(arr[i]==arr[j])
{
count++;
}
}
if (count % 2 == 0)
{
counter++;
}
}

return counter;
}

s=sockMerchant(noOfSocks,pairArray);
document.write(s)

var facts=["John Lennon was a member of the Beatles", "He hated the sound of his own voice"];
var i;
var newFacts=[];
function johnLennonFacts(facts) {
for(i=0;i<2;i++)
{newFacts[i]=facts[i]+"!!!";
return newFacts;}
}

console.log(johnLennonFacts(facts);)

var xhr = new XMLHttpRequest();

xhr.onload = function()
{

    if (xhr.status>=200 && xhr.status<300) {
    var t = JSON.parse(this.response);

for(let i = 0 ;i<t.length;i++)

{
    console.log(t[i].name, t[i].population,t[i].region,t[i].nativeName);
    // console.log(t[i].population);
    // console.log(t[i].region);
    // console.log(t[i].nativeName);
}
 // console.table(t);
    }
    else{
        console.log(xhr.responseText);
    }
};

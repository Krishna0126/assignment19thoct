var xhr = new XMLHttpRequest();

xhr.onload = function()
{

    if (xhr.status>=200 && xhr.status<300) {
    var t = JSON.parse(this.response);

for(let i = 0 ;i<t.length;i++)

{
 console.log(`
 ID : ${t[i].id}
 Name : ${t[i].name}
 Email :${t[i].email}
 City :${t[i].address.city}
 Phone : ${t[i].phone}
 `)

 
}
console.table(t);
    }
    else{
        console.log(xhr.responseText);
    }
};

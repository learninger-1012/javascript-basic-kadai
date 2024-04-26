const dateNow = new Date();
const [year,month,date] = [dateNow.getFullYear(),dateNow.getMonth(),dateNow.getDate()];

console.log(year+'年'+(month+1)+'月'+date+'日');
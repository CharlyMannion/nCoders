function solution(roman){
   const romanRegExp = /^(?=[MDCLXVI])(M*)(?:(C)(?:(D)|(M))|(D?)(C{0,3}))(?:(X)(?:(L)|(C))|(L?)(X{0,3}))(?:(I)(?:(V)|(X))|(V?)(I{0,3}))$/i;
   let parts = roman.match(romanRegExp);
   if(!parts) return NaN;
     let result = 0;
     [0, 1000, -100,500,1000,500,100, -10,50,100,50,10, -1,5,10,5,1].forEach(
        (weight, i) => result += weight * (parts[i] || '').length
     );
   return result;
}

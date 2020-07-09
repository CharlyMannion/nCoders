function superSize(num){
  let arr = Array.from(String(num), Number);
  let str = arr.sort((a,b)=>b-a).join("");
  return parseInt(str);
}

// const superSize = num => +(num+'').split('').sort((a,b)=>b-a).join('')

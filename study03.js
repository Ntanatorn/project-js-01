// data type ชนิดข้อมูล
// คือ ตัวข้อมูล (literal) ที่เก็บไว้ในตัวแปร (variable) หรือที่ทำไปใช้งาน
//------------------------------
// string
let aa = "aaa";
let bb = "bbb";
let cc = `ccc ${10 * 5}`;
console.log(aa, bb, cc);

// number
let dd = 111; //int
let ee = 2.18; //float
console.log(dd, ee);
console.log(`${dd} ${ee}`);

// boolean
let tt = true;
let ff = false;
console.log(tt, ff);

// object
let hh = {
  // key : value
  name: "john",
  age: 50,
  major: "dti",
  uni: `SAU ${10 * 20}`,
};
console.log(hh);
console.log(`ชื่อ ${hh.name} อายุ ${hh.age}`);
console.log(hh.uni);

// array
//         0   1   2   3
let ii = [10, 20, 30, 40];
console.log(ii);
console.log(ii[1]);
console.log(ii[0] * ii[3]);

// undefined
let jj;
let kk = undefined;
console.log(jj);
console.log(kk);

// null
let ll = null;
console.log(ll);

// type checking การตรวจสอบชนิดข้อมูล
console.log(typeof ll);
console.log(typeof hh);
console.log(typeof jj);

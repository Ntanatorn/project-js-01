// type conversion การแปลงชนิดข้อมูล
// คือ การเปลี่ยนชนิดข้อมูลจากชนิดหนึ่งเป็นอีกชนิดหนึ่ง
//------------------------------
// string conversion
let aa = "100";

console.log(Number(aa) / 5);
console.log(Number(aa) * 5);
console.log(Number(aa) - 5);
console.log(Number(aa) + 5);

// number conversion
let bb = 100;
let cc = 200.5423;

console.log(bb, cc);
console.log(bb.toString() + cc.toString());
console.log(bb.toFixed(2));
console.log(cc.toFixed(5));

// boolean conversion
let tt = true;
let ff = false;
console.log(Number(tt), Number(ff));
console.log(tt.toString(), ff.toString());

// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let x = 10;
x = x + 5; // x += 5
let y = 20;
y = y + (7 * x) / 5; // y += 7 * x / 5

// Nullish Coalescing Operator __??__
// กรณีที่หน้าของ ?? เป็นnull จะได้ค่าหลังเตรื่องหมาย
// กรณีที่หน้าของ ?? ไม่ใช่ null จะได้ค่านั้นๆเลย
let z = null;
let v = 111;
console.log(z ?? 888);
console.log(v ?? 555);

// Ternary Conditional Operator __?__:__
let cc = 1000 < 555 ? "hello..." : "Goodbye...";
console.log(cc);

let dd = "Sombat" < "Somchai" ? 555 : 999;
console.log(dd);

// Spread Operator __...__  จะใช้กับ Oj และ Ar
let ee = [1, 2, 3];
let ff = [10, 20, 30];
let gg = [...ee, ...ff];
console.log(gg);

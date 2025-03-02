// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var ไม่จำเป็นต้องกำหนดค่าตั้งแต่แรก และ สามารถเปลี่ยนค่าได้ Global
var aa = 10;

// let ไม่จำเป็นต้องกำหนดค่าตั้งแต่แรก และ สามารถเปลี่ยนค่าได้ Local
let bb;

// const จำเป็นต้องกำหนดค่าตั้งแต่แรก และ ไม่สามารถเปลี่ยนค่าได้ Local
// const dd error
const cc = 30;

aa = 111;
bb = 555;
// cc = 554; error

{
  var wow = 10;
  {
    console.log(wow);
    let wee = 20;
    const woo = 30;
    console.log(wee);
    console.log(woo);
  }

  {
    console.log(wow);
    // console.log(wee) error
    // console.log(woo) error
  }
}

console.log(wow);

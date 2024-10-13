const a = true;
if (a) {
  // ES 모듈은 if 문 안에서 import 하는것이 불가능하다 이럴 때 다이나믹 임포트를 사용한다
  // import = './func.mjs';
  const m1 = await import("./func.mjs");
  console.log(m1);
  const m2 = await import("./var.mjs");
  console.log(m2);
}
// console.log("./func.mjs");

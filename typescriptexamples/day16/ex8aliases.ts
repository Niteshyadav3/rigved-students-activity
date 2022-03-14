//now one type is created called alphanumerics
type alphanumerics=string|number;

let strNum:alphanumerics;
strNum="hello world";
document.write(`<p>str Num=${strNum}</p>`);
strNum=300;
document.write(`<p>str Num=${strNum}</p>`);
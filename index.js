// if (false) {
//     console.log("salom")
// } else {
//     console.log("mardon");
// }


let m = prompt("ish kunini kiriting aka").toLowerCase();

if (m === "dushanba" || m === "seshanba" || m === "chorshanba" || m === "payshanba" || m === "juma") {
    console.log("ish kuni dam olish kunimas !!")
} else if (m === "shanba" || m === "yakshanba") {
    console.log("dam olish kuni !!")
} else {
    console.log(` siz kiritgan kun mavjud emas ${m} `)
}
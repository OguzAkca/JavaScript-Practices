// 1-) Find the even numbers in a series and square each one.
const evenSquare = (numbers) => {
    let result = numbers.filter(num =>num%2===0).map(num =>num*num);
    console.log(result)

}

const ex = [1, 2, 3, 4];
evenSquare(ex);
console.log("dayı")

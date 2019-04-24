function arrayToObject(array)
{
    let result = {
        strings: [],
        numbers: [],
        booleans: []
    };

    for (let i = 0; i < array.length; i++)
    {
        if(typeof array[i] === "string")
        {
            result.strings.add(array[i]);
        }
        else if(typeof array[i] === "number")
        {
            result.numbers.add(array[i]);
        }
        else if(typeof array[i] === "boolean")
        {
            result.numbers.add(array[i]);
        }
    }

    return result;
}

let array1 = ['dog', 12, true, 'banana', 432, 'pineapple'];
let object1 = arrayToObject(array1);

document.getElementById("obj1List").innerText = "<li>hello</li>";
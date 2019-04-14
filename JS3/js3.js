function heeHaw(num) {
    if(num < 1)
    {
        console.log("Error! Enter a number larger than 0.");
    }
    else
    {
        for (let i = 1; i <= num; i++) {
            let word = i;
            if(i%15 === 0)
            {
                word = "Hee Haw!";
            }
            else if(i%3 === 0)
            {
                word = "Hee!";
            }
            else if(i%5 === 0)
            {
                word = "Haw!";
            }
            console.log(word);
        }
    }
}

heeHaw(50);
for (let i = 1; i <= 100; i++) {
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
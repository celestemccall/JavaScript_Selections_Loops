console.log("Hello World!\n==========\n");

for(let i = 0; i < 100; i++)
{
    if (i % 2 == 0)
    {
        continue
    }
    else
    {
        console.log(i);
    }
}


for(let i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log(i, "FIZZBUZZ")
    }
    else
    {
        if (i % 3 == 0)
        {
            console.log(i, "FIZZ")
        }   
        else if(i % 5 == 0){
            console.log(i, "BUZZ")
        } 
        else
        {
            console.log(i);
        }
    }
    
}


let i = 1;

while(i <= 100)
{

if (i % 2 != 0)
{
    console.log(i);
}
i++;

}


let x = 1;

do
{
    if (x % 2 != 0)
    {
        console.log(x);
    }
    
    x++
} 

while(x <= 100);


let a = 1;

while (a <= 100)
{
    if (a % 3 == 0 && a % 5 == 0)
    {
        console.log(a, "FIZZBUZZ")
    }
    else
    {
        if (a % 3 == 0)
        {
            console.log(a, "FIZZ")
        }   
        else if(a % 5 == 0){
            console.log(a, "BUZZ")
        } 
        else
        {
            console.log(a);
        }
    }

    a++

}

let b = 1;

do
{
    if (b % 3 == 0 && b % 5 == 0)
    {
        console.log(b, "FIZZBUZZ")
    }
    else
    if (b % 3 == 0)
        {
            console.log(b, "FIZZ")
        }   
        else if(b % 5 == 0){
            console.log(b, "BUZZ")
        } 
        else
        {
            console.log(b);
        }
    
    b++
} 

while(b <= 100);

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let c = 1; c <= n; c++)
{
    if(c == value){
        console.log(`Found ${value}!`);
        break;
    }

    if(c == n)
    {
        console.log(`Did not find ${value} within 1 - ${n}.`);
    }
    
}


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let z = start; z <= end; z++)
{
    if(z % fizzDivisor == 0)
    {
        console.log(z, "FIZZ");
    }
    if (z % buzzDivisor == 0)
    {
        console.log(z, "BUZZ");
    }
    if (z % fizzDivisor == 0 && z % buzzDivisor == 0)
    {
        console.log(z, "FIZZBUZZ");
    }

    console.log(z);
}



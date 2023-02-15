// Write a program to input any alphabet and check wether it is vowel or consonant?

let alphaBet='e';
// (not vowel)
// let alphaBet='b';

switch(alphaBet)
{
    case'a':
    case'A':
    console.log(`vowel.`);
    break;
    case'e':
    case'E':
    console.log(`vowel.`);
    break;
    case'i':
    case'I':
    console.log(`vowel.`);
    break;
    case'o':
    case'O':
    console.log(`vowel.`);
    break;
    case'u':
    case'U':
    console.log(`vowel.`);
    break;
    default:
        console.log(`consonant.`);
}
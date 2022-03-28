# Abdyl-Aziz Shikhabov

## My contacts:

[Github](https://github.com/AzizShik)
[Telegram](https://t.me/abdyl_aziz)
[VK](https://vk.com/id632704065)

## About me:

I'm learning **front-end**. I'm choose the frontend because I have always been interested in how the sites are arranged and I like to solve a tasks. Constantly continue to study, read, watch videos.

## Skills:

- HTML5
- CSS3((SCSS,SASS) BEM, Adaptive)
- JS(JQuery)
- Gulp
- Git

## Code example:

Kata 7 kyu Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

#### My Solution

function highAndLow(numbers){
  const sortArr = numbers.split(" ").map((item) => Number(item)).sort((a, b) => a - b);
  const highest  = String(sortArr[sortArr.length - 1]);
  const lowest = String(sortArr[0]);
  
  return `${highest} ${lowest}`;
}
# Abdul-Aziz Shikhabov

## Contacts

- Telegram: [@shaas95](https://t.me/shaas95)
- Github: [AzizShik](https://github.com/AzizShik)
- Discord: [Abdul-Aziz](https://discordapp.com/users/831809123582345256)

## About me

Hi! My name is Abdul-Aziz. I am 21 years old and I want to become a front-end developer. That's it :) <br>
Of course, I have to write that I am a very diligent, discipline and hard worker. Very rare skills that not many people possess or at least don't spend their time writing something because they need to fill out a CV.

## Skills

- HTML5, CSS3(SASS)
- JavaScript
- Git, Github
- VS Code
- Figma

## Code Example

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. <br>
You may assume that each input would have exactly one solution, and you may not use the same element twice. <br>
You can return the answer in any order. <br>

Example 1: <br>

Input: nums = [2,7,11,15], target = 9
Output: [0,1] <br>
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2: <br>

Input: nums = [3,2,4], target = 6
Output: [1,2] <br>

Example 3: <br>

Input: nums = [3,3], target = 6
Output: [0,1] <br>

Only one valid answer exists.

```
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }
    return [];
};
```

## Courses

- Youtube
- Udemy
- RS Schools Course «JavaScript/Front-end. Stage 0» (in progress)

## Languages

- Russian
- English B1
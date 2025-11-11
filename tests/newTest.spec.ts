import{ test } from '@playwright/test';

test('ThisIsATest', async({page})=>{
await page.goto('https://www.google.com');
console.log('Success! you did it!');
});

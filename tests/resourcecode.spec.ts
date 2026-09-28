import { test, expect } from '@playwright/test';

//GET method

test('Get', async ({ request }) => {

const page = await request.get('https://jsonplaceholder.typicode.com/posts/1');

const response = await page.json();

expect(page.status()).toBe(200);

console.log('Get values');

});

//POST method

test('POST - BUTTERFLY MAGIC', async ({ request }) => {

const page = await request.post('https://jsonplaceholder.typicode.com/posts',
{
data: 
{

title: 'Love story',
body: 'This is my first love post',
userId: 1

}

});


const resoonse = await page.json();

expect(page.status()).toBe(201);

console.log('sucessfull Love Story');

});

//PUT method

test('PUT -Wasted Efforts', async ({ request }) => {

const response = await request.put('https://jsonplaceholder.typicode.com/posts/1',
{

data: {
id: 1,
title: 'Breakup Story',
body: 'Heart in Broken Mode',
userId: 1
            
}

}

);

const respons = await response.json();

expect(response.status()).toBe(200);

console.log('Broken heart');

});

    
//PATCH method

test('PATCH', async ({ request }) => {

const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1',
{

data: {

title: 'Updated Only Title'

}

});

const responseBody = await response.json();

expect(response.status()).toBe(200);

console.log('New Love');

});

// Delete method

test('DELETE - LOVE', async ({ request }) => {

const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

expect(response.status()).toBe(200);

console.log('Love From my Heart deleted successfully');

});
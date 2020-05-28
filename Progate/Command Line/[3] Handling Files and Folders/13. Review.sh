#!/bin/sh
//1 Create the website directory
mkdir website

//2 Move to the website directory
cd website

//3 Create the top directory
mkdir top

//4 Move to the top directory
cd top

//5 Create top.html
touch top.html

//6 Create stylesheet.css
touch stylesheet.css

//7 Move to the website directory
cd ..

//8 Copy the top directory and create the about directory
cp -r top about

//9 Move to the about directory
cd about

//10 Rename top.html to about.html
mv top.html about.html

//11 Move to the home directory
cd

//12 Remove about.txt
rm about.txt

#!/bin/sh
//1 Move to the languages directory in the home directory
cd languages

//2 Move to the html directory
cd html

//3 Copy dojo.txt and create project.txt
cp dojo.txt project.txt

//4 Display files in the html directory
ls

//5 Move to the languages directory
cd ..

//6 Copy the html directory and create the ruby directory
cp -r html ruby

//7 Display files in the languages directory
ls

//8 Move to the ruby directory
cd ruby

//9 Display files in the ruby directory
ls
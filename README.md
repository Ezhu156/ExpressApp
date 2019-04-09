# Retrieving a Comic Book by Superhero Name

## About

This program uses the Marvel api to return a comic book based on the name of a Marvel character you provide.

## How to Use

**API Keys:** Go to the Marvel developers site to get your personal API keys

**Node Packages:** Express, ejs, body-parser, request, marvel-api, object-hash

**Installing and Running the App:**
1. Download the files
2. Obtain API keys
3. Install node packages
4. Create a config file containing your API keys
5. Run your code
6. Open up localhost


## Notes

* Some superhero names must be typed in a particular way in order for this to work. For example, Spider Man must be spider-man, if you type it in any other way, this will not return anything. 
* Since this returns a comic book with the superhero of your choice in it, there may be some overlap in the comic book you get. For example, if there are two characters in the same comic book, you may get the same comic book when you enter either names.

## Future Fixes
* Make it so the previous comic title isn't visible when the user clicks the submit button
* Better error checking so that the user is aware they have entered an invalid entry
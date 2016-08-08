Using Phantomjs to get the IV on [pokeassistant](http://www.pokeassistant.com).

# Installation

- Install nodejs 4.2.6
	- `nvm install v4.2.6`
- Install phantomjs 2.1.1
	- `brew install phantomjs`
- Install nodejs dependencies
	- `npm install`

# How to use?

If you are using Mac OS, run `make` will paste the pokemon info into a file and do the rest for you.

## Step by step:

- Prepare a Google spreadsheet with 6 columns like [this](https://docs.google.com/spreadsheets/d/1Mt9wKlLojoTYPShjH9OrJj3QeEkIGKnZLUiNsQrO-O4/edit?usp=sharing)
- Enter the pokemons info
- Select the pokemons info (the 6 columns x n rows). WITHOUT the headers.
- Copy and paste into a file and name it "pkmons.txt"
	- `cat > pkmons.txt`
	- [paste]
	- ctrl+d
- Run txt2json.js to convert it to json
	- `node txt2json pkmons.txt > pkmons.json`
- Run the phantomjs script
	- `phantomjs main.js`

# TODO:

- Make it easier to get the data? remove the txt2json step.
- Make it easier to run the whole script locally without the phantomjs.
- Perhaps make it an chrome extension?

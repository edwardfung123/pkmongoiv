default:
	pbpaste > pkmons.txt && node txt2json.js pkmons.txt > pkmons.json && phantomjs main.js 

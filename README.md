# TxA_CSS_Info


This api  is used to query Valve Counter Strike Source game servers for current current game and current player info.
The site also queries Texas Arlington Adaptive Bots as well as 2 sister servers running the same modification. 
The node.js api uses a UDP socket connection to set the server and player info.  This application is used to provide stats to a Chrome browser extension. https://chrome.google.com/webstore/detail/who-is-on-txa/paamfclegnpdbcekohaedjjikgggnbpj


Thank you to Old and Slow for providing server access since 2002.

## Adaptive Bots (Man vs. Machine) 
Special Metamod:Source plugins by Old and Slow

* Bots are set to provide a challenge to the human players
* Bot count, health, and difficulty are calculated by:
    * The number of human players
    * Length of human/bot win streaks
    * If bots cannot be added, their health will increase
    * If a bot is killed too many times, it is kicked and another (usually a higher level) bot replaces it

Server stats available at http://www.texasarlingtoncs.us/.

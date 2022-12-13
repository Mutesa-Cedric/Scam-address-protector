## ScamAddressProtection\

#### Automatically adds links to strings that look like Ethereum addresses so you can quickly look them up on your favourite block explorer.

#### Prevents you from interacting with known phishing domains by wiping the DOM and displaying text notifying you.

The blacklists found in this repo serve both the EAL Chrome Extension & MetaMask Chrome Extension. We use a [Levenshtein distance algoritm](https://en.wikipedia.org/wiki/Levenshtein_distance) to detect similar URLs, so if you encounter an errounously-blocked website, please add it to the whitelist.

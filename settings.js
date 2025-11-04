require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOV9ZFv3AfW1YQQAAIMHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9lY16xRi5KAoRHTGICgh4acXbxjyUUGDJvaoUYcJ*n8Cenp6H3dlenoqkyDyZ55z8DrIcU2SjGqjfQUHwDTLUHlldIKCC0TUMEQEdEEAGgQoWbhVDV+IGenXjwulKZkLVrBTR8xcanSnQ3gUn*tI3QiF6AY8OKK6nBPt*SJjs3dgkjX*n6PKsTO7lfS24QXq82ZFpGEcjYa9aXFbybNombDNCTHAWTYozShGBiY3qJcTkc*DrxcVJ6o05uqFKSyVuxp8U*qQLwbGiXmxznrBmy3ScsKT6HPzG3ndfpbV46s5mt8nWL4XDGGkjfun5dyQom9lBH983F1Jqqzf4FEcZCqwAZQyz+tNzdw1lIdXC8NI4t50nhN5tuXcP637a6P0Rex0XNCptmQ2upvs54KfisGjc437rsbGlY4xQcdzh*tDNqsDblnwT8*l+nHF9k*4OfEnetRL*n7lbs+DizAeCeTo6VpQbldd0RzPFKVgDp4flfoywVMQMQSn+HHzTKMTBmmbx6DzzYj6d+lNzrOenjZiZfTkTBukQ5tW1dsbDD*iQXcmfUGZWD6apTo87M5FLE+nXRp*O84PbFS0yfS1Dbr7Y2Z4s2V1HrPnenTa837+V5wXLpytlkhil08yHMzbxmMLphtiTrVH18uwoRrUVAFV4dABBEaaMQIbzrI2JPbEDYHBbI58g9hwvyPbiNdTlIuH8g1LZG3abxOJtNdHC3fB00M2kv+t7frAd8vwL6ICC5D6iFAUmpiwntYsohRGiQP37Wwdk6M7eiGvLSUIHhJhQ5mXXIslh8M7q+0fo+*k1Y+s68*X2gAhQ+Y8wYgxnEW3neM0g8c*4hvQzZBSoIUwo+tUhIigAKiNX9Mu1eh60gx9spj1ZMg3QAemTEBwAFYhSbyj0eqLSE0VZFb7SL1WbFhbFlwwx0AEZbG+DBYVxkSc5+UvDoAOS588CL8vDgTzo93lRFhRV+NrGH79gt1UCxCBOKFCBPneaM4utyQJfSjcyDG0SaXqkgY823*Xyxge65E4j7AcazPNKIi5czJaBuyqU5YH4i6Vc4pllxJJS1dXLPyQBKrCt3ipUtkKu951LqMHtIJp1j462Tq2RZMaKtxqs1lpdaoF9dehmLkRkn2oufx7qZZKMbWckVM7r8kjXc8k67e9Oaa61VlwdEKAb9tHvxTh3vl35wmKfMGvsh3eOnoMhPdub3kbRfDpuJBKuu4zUPYLG182U86TJdtjcQw4FN+OSjuTtrL8fjqDCneXMXx4Mm7wr+emk5OcGw0+NtQS2ryFGz4Xwk6j*JPQNeKs7*tH5LcfPFfMvNh3tc1kfKluuMkrbncuNccEbaTOxw41oS+MLV+Z4PSrmXd+l4PH41gFFAlmYkxSogKanVjQkv7YqtrIw*0MlXfMsLXprO4GUaR*O2OAUUQbTAqjCQBZFeSCLytutJckLE9Jza+NUGp1alddaUawZZO8+A1r7GLsCPH4AUEsBAhQDFAAACAgA5X1kW*cB9bVhBAAAgwcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAiQQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Bbott397',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
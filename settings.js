require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAGNDZVusgYKnUQQAAHMHAAAKAAAAY3JlZHMuanNvbpVUW5OiOBT+L3lta7gqYFVXLSAK4gUaL8jWPAQIkJabIag45X*fQqdn+mF3qpenkKTO+c53yQ9QVrhBNurA+AeoCT5Divol7WoExkBrkwQRMAAxpBCMwVaD5fB4Wq64o2IoHRWMxXZCWaS*hJK+XFPtoiYGZWR+576C+wDUbZjj6A8F5+*q+dBV5yi3XKsjzpW+m*rc0pMrt62XmUxXht2ax9jyrVdw7ytCTHCZGnWGCkRgbqPOgZh8Db47zyV*sc9rw9UUM9rMfCW2IBvZhhJNR3zcvoQ7H27Jhjt8DX7ILdQ8nzAir7aj3dHQUzqcnm9iZHTb3FqTjcho8mTo+d7yCb*BaYliK0YlxbT7Mu+RVqj4QrYujG+h2eah7Q3DtX0YnaV4SePaY67vS0nXi*KLwBed1L7vs0yrCpunabBorYS96BduQRbafj2jojpy52YL9+ln4A758Mrx**DOT1usbI2sTDJ1GPLuUJCzfG0syslGYAsa2I0sSMYlaXn5a*CdZQYPygsXc4wybQOv41c1a2w4S9cjf30JrpP8sD24E8**xDukLfmjuUWvmof88m1ez19CWwlVnjPggh*qbLiRqPump2XmbK9+UG2pfL4Gb44rCNDHu2TCMIzrx8VJTINQvWL2OgnLmTplNPf1MdERdVYMxtx9AAhKcUMJpLgq+z2e5QYAxmcPRQTRB72giPO3QEGyx*C8xAw3ZsG+HBI7oweLawOVt0XnLNIb9oP0FQxATaoINQ2KTdzQinRL1DQwRQ0Y**19AEp0pU*h+nYCNwAJJg3dlm2dVzD+UPXjEEZR1ZbU68pI7xeIgDH7extRisu06XlsS0iiDJ+RnkHagHEC8wb9mhARFIMxJS36lVq9invi3QPHO6LqgAEoHoLguDeJICocJ*KCLLPieDj8q*l26evCuv5WIgoGIH*c41hWHHIsJ8jyiFXY*mZ*cP8Fsa8YIwpx3oAx0G1TTqXt0lj64klOZzPVSFU9VcHvkT688eTeYvRCXcXSiz3baeZLcEzMqD4Rf7rCcy2YF0eV0GIluYopv*5LETAG5TQU2YI9OSWzP*ECE41u56rjG32h3pS1frZujXSWjfk+CmLDKS7TEzGFrN05TnPdX1I2h6twONmowtF5Pyp+ORvRkXZ57bvF6Iwj9LmZup8KHlsdVqKyHO1OTijls86FVaZOQjpxFpadTHYrc7SOF8GmHBae6NcxjrMR5Vuizblmf*MuUROoCcs0k1YoiLVQL0*XPlKT*3yt8MNPvVj9b4LRI*wl7CX8gnhP5L3J2PvgU5Gf78l*ZFLznEudTnzE4Cx335giMK+CDU*cdXPA7t4LatWWgnfEOm8MuN+*D0CdQ5pUpABjgOusKhEYAFK1vWmtMqn+0EvXLEtNn5PnsKHq7yBscIEaCosajDlpxAu8NOKHz1sOqWoTNllPwkxUi7Z3dafWtUch*cgVUPtPPzXg*g9QSwECFAMUAAAICABjQ2VbrIGCp1EEAABzBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
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
let base = {
    "000000": "A", "000001": "B", "000010": "C", "000011": "D",
    "000100": "E", "000101": "F", "000110": "G", "000111": "H",
    "001000": "I", "001001": "J", "001010": "K", "001011": "L", 
    "001100": "M", "001101": "N", "001110": "O", "001111": "P", 
    "010000": "Q", "010001": "R", "010010": "S", "010011": "T", 
    "010100": "U", "010101": "V", "010110": "W", "010111": "X", 
    "011000": "Y", "011001": "Z", "011010": "a", "011011": "b", 
    "011100": "c", "011101": "d", "011110": "e", "011111": "f", 
    "100000": "g", "100001": "h", "100010": "I", "100011": "j", 
    "100100": "k", "100101": "l", "100110": "m", "100111": "n", 
    "101000": "o", "101001": "p", "101010": "q", "101011": "r", 
    "101100": "s", "101101": "t", "101110": "u", "101111": "v", 
    "110000": "w", "110001": "x", "110010": "y", "110011": "z", 
    "110100": "0", "110101": "1", "110110": "2", "110111": "3", 
    "111000": "4", "111001": "5", "111010": "6", "111011": "7", 
    "111100": "8", "111101": "9", "111110": "+", "111111": "/"
};	

while(true) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  let input = "";
  console.log("<< 문자 입력 >> ");
  rl.on("line", function(line) {
    input = line;
    rl.close()
  });

  rl.on("close", function() {
    try {
      let fullStr = "";
      
      for(let i=0;i<input.length;i++) {
        let binary = input.charCodeAt(i);
        binary = binary.toString(2);

        if(binary.length == 6) {
          binary = "00" + binary;
        }else if(binary.length == 7) {
          binary = "0" + binary;
        }
        fullStr += binary;
      }
   
      let needPadding = 0;  
      while(fullStr.length % 24 != 0) {
        fullStr += "00000000"
        needPadding++;
      }
      console.log(fullStr);
      console.log(needPadding);
      
      let time = fullStr.length / 6;
      let start = 0;
      let enc = "";
      for(let i=0;i<time;i++) {
        let tmp = fullStr.substring(start, start + 6);
        console.log(tmp);
          
        if(i >= time-needPadding) {
          enc += "=";
        }else {
          enc += base[tmp]; 
        }
        start += 6;
      }

      console.log("encoded : " + enc);   
    }catch(e) {
      console.log(e);
      return;
    }		

    process.exit()
  });

  break;
}
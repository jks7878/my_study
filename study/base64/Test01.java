package test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class Test01 {
	public static void main(String[] args) throws ParseException {
		String jsonStr = 
				"{\"000000\": \"A\", \"000001\": \"B\", \"000010\": \"C\", \"000011\": \"D\","
			   +"\"000100\": \"E\", \"000101\": \"F\", \"000110\": \"G\", \"000111\": \"H\","
			   +"\"001000\": \"I\", \"001001\": \"J\", \"001010\": \"K\", \"001011\": \"L\"," 
			   +"\"001100\": \"M\", \"001101\": \"N\", \"001110\": \"O\", \"001111\": \"P\"," 
			   +"\"010000\": \"Q\", \"010001\": \"R\", \"010010\": \"S\", \"010011\": \"T\"," 
			   +"\"010100\": \"U\", \"010101\": \"V\", \"010110\": \"W\", \"010111\": \"X\"," 
			   +"\"011000\": \"Y\", \"011001\": \"Z\", \"011010\": \"a\", \"011011\": \"b\"," 
			   +"\"011100\": \"c\", \"011101\": \"d\", \"011110\": \"e\", \"011111\": \"f\"," 
			   +"\"100000\": \"g\", \"100001\": \"h\", \"100010\": \"I\", \"100011\": \"j\"," 
			   +"\"100100\": \"k\", \"100101\": \"l\", \"100110\": \"m\", \"100111\": \"n\"," 
			   +"\"101000\": \"o\", \"101001\": \"p\", \"101010\": \"q\", \"101011\": \"r\"," 
			   +"\"101100\": \"s\", \"101101\": \"t\", \"101110\": \"u\", \"101111\": \"v\"," 
			   +"\"110000\": \"w\", \"110001\": \"x\", \"110010\": \"y\", \"110011\": \"z\"," 
			   +"\"110100\": \"0\", \"110101\": \"1\", \"110110\": \"2\", \"110111\": \"3\"," 
			   +"\"111000\": \"4\", \"111001\": \"5\", \"111010\": \"6\", \"111011\": \"7\"," 
			   +"\"111100\": \"8\", \"111101\": \"9\", \"111110:\" \"+\", \"111111\": \"/\"}";	
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(jsonStr);
		JSONObject base = (JSONObject)obj;

		Scanner sc = new Scanner(System.in);
		while(true) {
			String input;
			System.out.print("문자 입력 >> ");
			input = sc.next();
			
			try {
				List<String> arr = new ArrayList<String>();
				String fullStr = "";
				for(int i=0;i<input.length();i++) {
					byte byteChar = (byte) input.charAt(i);
					String binary = Integer.toBinaryString(byteChar);
					if(binary.length() == 6) {
						binary = "00" + binary;
					}else if(binary.length() == 7) {
						binary = "0" + binary;
					}
					fullStr += binary;
				}
				while(fullStr.length() % 24 != 0) {
					fullStr += "0";
				}		
				System.out.println(fullStr);
				System.out.println(fullStr.length());
				
				String enc = "";
				int time = fullStr.length() / 6;
				int start = 0;
				for(int i=0;i<time;i++) {
					String tmp = fullStr.substring(start, start + 6);
					System.out.println(tmp);
					if(tmp.equals("000000")) {
						enc += "=";
					}else {
						enc += (String) base.get(tmp);				
					}
					start += 6;
				}
				System.out.println("encoded : " + enc);
			} catch (Exception e) {
				// TODO: handle exception
				System.out.println("정수만 입력가능합니다");
			}		
		}

	}
}

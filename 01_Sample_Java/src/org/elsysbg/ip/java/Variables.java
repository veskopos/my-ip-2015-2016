package org.elsysbg.ip.java;

public class Variables {

	// define constant
	private static final String HELLO_WORLD = "Hello world";
	
	public static void main(String[] args) {
		// scope of the variable is from definition to the end of the block, e.g. }
		// define local variable
		int a;
		
		// assign value 
		a = 0;
		
		// init variable value
		String b = HELLO_WORLD;
	}
	//error:
	// a=0;
}

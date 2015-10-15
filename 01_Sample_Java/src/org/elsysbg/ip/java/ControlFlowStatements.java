package org.elsysbg.ip.java;

public class ControlFlowStatements {

	public static void main(String[] args) {
		// Select code, Ctrl + 1 -> extract to method
		ifExample();
		forExample();
	}
	private static void forExample(){
		for (int i=0; i< 10; i++){
			// 0 to 9
			System.out.println(i);
		}
	}
	
	
	
	private static void ifExample(){
		// if
		if (true){
			System.out.println("Called");
		}
		// if else
		if(1>2){
			System.out.println("Not called");
		}else{
			System.out.println("Called");
		}
	
	
	}
	

}

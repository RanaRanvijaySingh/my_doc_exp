class Triangle implements Polygon
{
	private int sides;
	public void getSide(int noOfSide)
	{
		this.sides=noOfSide;
	}
	void getSumOfInnerAngle()
	{
		long sum=180*(sides-2);
		System.out.println("For Triangle :" +sum);
	}
	public void getArea()
	{

	}
	public static void main(String args[])
	{
		Triangle triangle=new Triangle();
	}
	
}

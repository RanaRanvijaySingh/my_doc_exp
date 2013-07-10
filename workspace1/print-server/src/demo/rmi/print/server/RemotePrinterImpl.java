package demo.rmi.print.server;

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

import demo.rmi.print.common.RemotePrinter;

public class RemotePrinterImpl extends UnicastRemoteObject implements
		RemotePrinter {

	public RemotePrinterImpl() throws RemoteException {
		
	}
	
	@Override
	public int submitJob(String text) throws RemoteException {
		
		System.out.println("submitted job " +text);
			return 0;
	}

	@Override
	public boolean isCompplete(int jobID) throws RemoteException {
		System.out.println("request job status");
		return true;
	}

	@Override
	public String getPinterStatus() throws RemoteException {
		System.out.println("requested printer status");
		return "OK";
	}

	public static void main(String[] args) {
		try
		{
			Registry r= LocateRegistry.getRegistry();
			r.bind("printer", new RemotePrinterImpl());
		}catch (Exception e)
		{
			e.printStackTrace();
		}

	}

}

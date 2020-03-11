using System;

namespace lab3
{
    class Program
    {
        static void Main(string[] args)
        {
           int n = 5;
            
            int[,] a = new int[n, n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    a[i, j] = 1+j+i;
           
               for(int i=0;i<n;i++)
               {
                   for (int j = 0; j <=i; j++)
                        Console.Write("{0}{1}", a[i, j], "\t");
                    Console.WriteLine();
 
                }
        
               
            
            Console.ReadLine();
        }
    }
}

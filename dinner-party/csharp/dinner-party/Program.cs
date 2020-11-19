using System;
using System.Collections.Generic;
using System.Linq;

namespace dinner_party
{
  class Table
  {
    public string name { get; set; }
    public List<Guest> seats { get; set; }
    public Table(string name)
    {
      this.name = name;
      seats = new List<Guest>();
    }

  }

  class Guest
  {
    public string name { get; set; }
    public string occupation { get; set; }
    public string bio { get; set; }
    public Guest(string name, string occupation, string bio)
    {
      this.name = name;
      this.occupation = occupation;
      this.bio = bio;
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      List<Guest> guestsList = new List<Guest>{
          new Guest("Marilyn Monroe", "entertainer", "(1926 - 1962) American actress, singer, model"),
          new Guest("Abraham Lincoln", "politician", "(1809 - 1865) US President during American civil war"),
          new Guest("Martin Luther King", "activist", "(1929 - 1968)  American civil rights campaigner"),
          new Guest("Rosa Parks", "activist", "(1913 - 2005)  American civil rights activist"),
          new Guest("Peter Sellers", "entertainer", "(1925 - 1980) British actor and comedian"),
          new Guest("Alan Turing", "computer scientist", "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"),
          new Guest("Admiral Grace Hopper", "computer scientist", "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"),
          new Guest("Indira Gandhi", "politician", "(1917 - 1984) Prime Minister of India 1966 - 1977"),
      };

      Table table1 = new Table("Table 1");
      Table table2 = new Table("Table 2");

      foreach (Guest guest in guestsList)
      {
        List<String> table1Occupations = table1.seats.Select(guest => guest.occupation).ToList();
        if (table1Occupations.Contains(guest.occupation))
        {
          table2.seats.Add(guest);
        }
        else
        {
          table1.seats.Add(guest);
        }
      }

      List<Table> tables = new List<Table>();
      tables.Add(table1);
      tables.Add(table2);

      foreach (Table table in tables)
      {
        List<Guest> tableGuest = table.seats;
        Console.WriteLine(table.name);
        foreach (Guest guest in tableGuest)
        {
          Console.WriteLine($"{guest.name} ({guest.occupation}) {guest.bio}");
        }
      }
    }
  }
}

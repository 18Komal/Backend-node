import express from "express";
const app = express();

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit.sharma@example.com",
      age: 28,
      city: "Bhopal",
      isActive: true,
    },
    {
      id: 2,
      name: "Neha Verma",
      email: "neha.verma@example.com",
      age: 24,
      city: "Indore",
      isActive: false,
    },
    {
      id: 3,
      name: "Rahul Singh",
      email: "rahul.singh@example.com",
      age: 32,
      city: "Delhi",
      isActive: true,
    },
    {
      id: 4,
      name: "Priya Mehta",
      email: "priya.mehta@example.com",
      age: 27,
      city: "Mumbai",
      isActive: true,
    },
    {
      id: 5,
      name: "Karan Patel",
      email: "karan.patel@example.com",
      age: 30,
      city: "Ahmedabad",
      isActive: false,
    },
    {
      id: 6,
      name: "Sneha Gupta",
      email: "sneha.gupta@example.com",
      age: 26,
      city: "Pune",
      isActive: true,
    },
    {
      id: 7,
      name: "Arjun Reddy",
      email: "arjun.reddy@example.com",
      age: 29,
      city: "Hyderabad",
      isActive: false,
    },
    {
      id: 8,
      name: "Anjali Kapoor",
      email: "anjali.kapoor@example.com",
      age: 31,
      city: "Chandigarh",
      isActive: true,
    },
    {
      id: 9,
      name: "Vikram Joshi",
      email: "vikram.joshi@example.com",
      age: 35,
      city: "Jaipur",
      isActive: true,
    },
    {
      id: 10,
      name: "Riya Das",
      email: "riya.das@example.com",
      age: 23,
      city: "Kolkata",
      isActive: false,
    },
  ];

  if (req.query?.search) {
    const response = users.filter((user) => {
      return user.name.toLowerCase().includes(req.query.search.toLowerCase());
    });
    res.send(response);
    return;
  }

  setTimeout(() => {
    res.send(users);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server running on port:", port);
});

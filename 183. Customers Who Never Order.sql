SELECT Customers.Name as Customers FROM Customers C
LEFT JOIN Orders
ON C.Id = Orders.CustomerId
WHERE
Orders.Id IS NULL

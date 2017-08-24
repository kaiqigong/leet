SELECT E.Name as Employee FROM Employee E LEFT JOIN Employee M ON E.ManagerId = M.Id WHERE E.Salary > M.Salary

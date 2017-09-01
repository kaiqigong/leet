# Write your MySQL query statement below
delete B from Person as A, Person as B where B.Id > A.Id and A.Email = B.Email

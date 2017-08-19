select Email from (select Email, count(*) c from Person group by Email) where c > 1

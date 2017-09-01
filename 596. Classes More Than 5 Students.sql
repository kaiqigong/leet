select tbl.class from (select class, count(*) num from courses group by class) as tbl where tbl.num > 4

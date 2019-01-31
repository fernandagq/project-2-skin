SET SQL_SAFE_UPDATES = 0;
SET wait_timeout = 90;
SET interactive_timeout  = 90;
SET net_read_timeout  = 90;
SET net_write_timeout  = 90;
USE skindb; 
DELETE t1 FROM CaliProducts t1
        INNER JOIN
    CaliProducts t2 
WHERE
    t1.id < t2.id AND t1.ProductName = t2.ProductName;
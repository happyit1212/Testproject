/*
SQLyog Trial v13.1.9 (64 bit)
MySQL - 10.4.28-MariaDB : Database - mydatabase
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`mydatabase` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `mydatabase`;

/*Table structure for table `author` */

DROP TABLE IF EXISTS `author`;

CREATE TABLE `author` (
  `authot_id` int(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createby_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `author` */

insert  into `author`(`authot_id`,`name`,`createby_date`) values 
(1,'Joel Hartse, Hannah P. Templer,','2024-08-13'),
(2,'Kingsley Amis','2024-08-13'),
(3,'Hannah P. Templer, Fannie Peters Flagg,\r\nCamille B','2024-08-13'),
(4,'Rainer Steel Rilke','2024-08-13'),
(5,NULL,NULL);

/*Table structure for table `book` */

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `book_id` int(50) DEFAULT NULL,
  `Title` varchar(50) DEFAULT NULL,
  `Author` varchar(50) DEFAULT NULL,
  `ISBN_13` text DEFAULT NULL,
  `ISBN_10` text DEFAULT NULL,
  `Publication_year` text DEFAULT NULL,
  `Publisher` varchar(50) DEFAULT NULL,
  `Edition` text DEFAULT NULL,
  `Price` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `book` */

insert  into `book`(`book_id`,`Title`,`Author`,`ISBN_13`,`ISBN_10`,`Publication_year`,`Publisher`,`Edition`,`Price`) values 
(1,'American Elf','Joel Hartse, Hannah P. Templer,','978-1-891830-85-3','1-891-83085-6','2004','Paste Magazine','Book 2',1000),
(2,'Cosmoknights','Kingsley Amis','978-1-60309-454-2','1-603-09454-7','2019','Publishers Weekly','Book 1',2000),
(3,'Essex County','Kingsley Amis','978-1-60309-038-4','1-603-09038-X','1990','Graywolf Press',NULL,500),
(4,'Hey, Mister (Vol 1)','Hannah P. Templer, Fannie Peters Flagg,\r\nCamille B','978-1-891830-02-0','1-891-83002-3','2000','3','After School\r\nSpecial',1200),
(5,'The Underwater Welder','Rainer Steel Rilke','978-1-60309-398-9','1-603-09398-2','2022','McSweeney\'s',NULL,3000);

/*Table structure for table `publisher` */

DROP TABLE IF EXISTS `publisher`;

CREATE TABLE `publisher` (
  `publisher_id` int(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `create_by_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `publisher` */

insert  into `publisher`(`publisher_id`,`name`,`create_by_date`) values 
(1,'Paste Magazine','2024-08-13'),
(2,'Publishers Weekly','2024-08-13'),
(3,'Graywolf Press','2024-08-13'),
(4,'McSweeney\'s','2024-08-13');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

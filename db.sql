/*
SQLyog Community v13.1.2 (64 bit)
MySQL - 5.7.25-log : Database - unlimitedpic
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`unlimitedpic` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `unlimitedpic`;

/*Table structure for table `user_type` */

DROP TABLE IF EXISTS `user_type`;

CREATE TABLE `user_type` (
  `usertype_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_type` varchar(100) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  PRIMARY KEY (`usertype_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `user_type` */

insert  into `user_type`(`usertype_id`,`user_type`,`user_id`,`is_active`,`created_time`) values 
(1,'Admin',1,1,NULL),
(2,'User',1,1,NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email_id` varchar(100) NOT NULL,
  `mobile_no` varchar(15) NOT NULL,
  `google_code` varchar(50) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  `user_type` int(11) DEFAULT NULL,
  `email_verified` tinyint(4) DEFAULT NULL,
  `mobile_verified` tinyint(4) DEFAULT NULL,
  `is_active` tinyint(4) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`user_id`,`full_name`,`email_id`,`mobile_no`,`google_code`,`user_password`,`user_type`,`email_verified`,`mobile_verified`,`is_active`,`created_time`) values 
(1,'admin','admin@unlimitedpic.com','9000000000',NULL,'suraj@123',1,1,1,1,NULL),
(2,'user','user@unlimitedpic.com','90000000001',NULL,'suraj@123',2,1,1,1,NULL);

/* Procedure structure for procedure `user_login` */

/*!50003 DROP PROCEDURE IF EXISTS  `user_login` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `user_login`(in jinput json,out jresult json)
BEGIN

set
@username=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.username")),'null','Null'),
@loginType=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.loginType")),'null','Null'),
@pswrd=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.password")),'null','Null')
;


if(select count(1) from `unlimitedpic`.`users` where (email_id=@username or mobile_no=@username) and user_password=@pswrd)=1 then


select json_object('statusCode','0','message','login success','userId',user_id,'name',full_name,'userType',user_type,'emailVerified',email_verified,'mobileVerified',mobile_verified) into jresult 
from `unlimitedpic`.`users`
where (email_id=@username or mobile_no=@username) and user_password=@pswrd
;


else
if(select count(1) from `unlimitedpic`.`users` where (email_id=@username or mobile_no=@username))=0 then
set jresult='{"statusCode":1,"message":"User Not Found"}';
else
set jresult='{"statusCode":1,"message":"invalid Password"}';
end if;

end if;




END */$$
DELIMITER ;

/* Procedure structure for procedure `user_registration` */

/*!50003 DROP PROCEDURE IF EXISTS  `user_registration` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `user_registration`(in jinput json,out jresult json)
BEGIN

set
@fullName=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.fullName")),'null','Null'),
@loginType=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.loginType")),'null','Null'),
@googleCode=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.googleCode")),'null','Null'),
@email=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.email")),'null','Null'),
@mobile=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.mobileNo")),'null','Null'),
@pswrd=replace(JSON_UNQUOTE(JSON_EXTRACT(jinput,"$.password")),'null','Null')
;

if(@fullName is null  or @email is null or @mobile is null or @pswrd is null or @loginType is null) then

set jresult='{"statusCode":1,"message":"All fields are mandatory"}';

elseif(select count(1) from `unlimitedpic`.`users` where email_id=@email or mobile_no=@mobile )=0 then 
start transaction;
INSERT INTO `unlimitedpic`.`users`
(`full_name`,`email_id`,`mobile_no`,`google_code`,`user_password`,`user_type`,`email_verified`,`mobile_verified`,
`is_active`,`created_time`)
VALUES(@fullName,@email,@mobile,@googleCode,@pswrd,2,1,0,0,1,now())
;

set @userid=last_insert_id();
commit ;

set jresult=concat('{"statusCode":0,"message":"Your registration was successful!","userType":2,"emailVerified":0,"mobileVerified":0,"userId":',@userid,',"fullName":''',@fullName,'''}');

else 

set jresult='{"statusCode":1,"message":"User already exist!"}';

end if;

END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

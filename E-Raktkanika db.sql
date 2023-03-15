CREATE DATABASE  IF NOT EXISTS `e-raktkanika` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `e-raktkanika`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: e-raktkanika
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int NOT NULL AUTO_INCREMENT,
  `area` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `pincode` varchar(45) NOT NULL,
  PRIMARY KEY (`address_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'wakad','pune','563213'),(2,'kothrud','pune','563962'),(3,'hinjewadi','pune','569323'),(4,'karve nagar','pune','441117'),(5,'wagholi','pune','456121'),(6,'shivaji nagar','pune','455213'),(7,'deccan','pune','456982'),(8,'bmcc','pune','456986'),(9,'kothrud','pune','784559'),(10,'hinjewadi','pune','456914'),(11,'Saras Baug rd','pune','566839'),(12,'karve nagar','pune','456122');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(45) NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `fk_admin_login_id_idx` (`login_id`),
  CONSTRAINT `fk_admin_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin',1);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advertisement`
--

DROP TABLE IF EXISTS `advertisement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advertisement` (
  `ad_id` int NOT NULL AUTO_INCREMENT,
  `ad_img` longblob,
  `ad_status` tinyint(1) NOT NULL,
  `cid` int NOT NULL,
  `org_id` int NOT NULL,
  PRIMARY KEY (`ad_id`),
  KEY `fk_advertisement_cid_idx` (`cid`),
  KEY `fk_advertisement_org_id_idx` (`org_id`),
  CONSTRAINT `fk_advertisement_cid` FOREIGN KEY (`cid`) REFERENCES `camp` (`cid`),
  CONSTRAINT `fk_advertisement_org_id` FOREIGN KEY (`org_id`) REFERENCES `organization` (`org_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisement`
--

LOCK TABLES `advertisement` WRITE;
/*!40000 ALTER TABLE `advertisement` DISABLE KEYS */;
/*!40000 ALTER TABLE `advertisement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bloodbank`
--

DROP TABLE IF EXISTS `bloodbank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bloodbank` (
  `bb_id` int NOT NULL AUTO_INCREMENT,
  `bb_name` varchar(45) NOT NULL,
  `bb_regno` varchar(45) NOT NULL,
  `address_id` int NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`bb_id`),
  KEY `fk_bloodbank_address_id_idx` (`address_id`),
  KEY `fk_bloodbank_login_id_idx` (`login_id`),
  CONSTRAINT `fk_bloodbank_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_bloodbank_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodbank`
--

LOCK TABLES `bloodbank` WRITE;
/*!40000 ALTER TABLE `bloodbank` DISABLE KEYS */;
INSERT INTO `bloodbank` VALUES (1,'Blood Bank 1','89653214',5,6),(2,'Blood Bank 2','89654745',6,7),(3,'Blood Bank 3','78965412',7,8),(4,'Blood Bank 4','965874',8,9);
/*!40000 ALTER TABLE `bloodbank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `camp`
--

DROP TABLE IF EXISTS `camp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `camp` (
  `cid` int NOT NULL AUTO_INCREMENT,
  `cname` varchar(45) NOT NULL,
  `cdate` varchar(45) NOT NULL,
  `ctime` varchar(45) NOT NULL,
  `camp_status` tinyint(1) NOT NULL,
  `org_id` int NOT NULL,
  `bb_id` int NOT NULL,
  `address_id` int NOT NULL,
  PRIMARY KEY (`cid`),
  KEY `fk_camp_org_id_idx` (`org_id`),
  KEY `fk_camp_bb_id_idx` (`bb_id`),
  KEY `fk_camp_address_id_idx` (`address_id`),
  CONSTRAINT `fk_camp_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_camp_bb_id` FOREIGN KEY (`bb_id`) REFERENCES `bloodbank` (`bb_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_camp_org_id` FOREIGN KEY (`org_id`) REFERENCES `organization` (`org_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `camp`
--

LOCK TABLES `camp` WRITE;
/*!40000 ALTER TABLE `camp` DISABLE KEYS */;
/*!40000 ALTER TABLE `camp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital` (
  `hp_id` int NOT NULL AUTO_INCREMENT,
  `hp_name` varchar(45) NOT NULL,
  `hp_regno` varchar(45) NOT NULL,
  `address_id` int NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`hp_id`),
  KEY `fk_hospital_address_id_idx` (`address_id`),
  KEY `fk_hospital_login_id_idx` (`login_id`),
  CONSTRAINT `fk_hospital_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_hospital_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (1,'Hospital 1','78956412',9,10),(2,'Hospital 2','89657456',10,11),(3,'Hospital 3','65478965',11,12),(4,'Hospital 4','59778642',12,13);
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `individual_user`
--

DROP TABLE IF EXISTS `individual_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `individual_user` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(45) NOT NULL,
  `adharno` varchar(45) NOT NULL,
  `login_id` int NOT NULL,
  `address_id` int DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `fk_individual_user_login_ad_idx` (`login_id`),
  KEY `FKafo5jh939hjelef4uh53errwh` (`address_id`),
  CONSTRAINT `fk_individual_user_login_ad` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`),
  CONSTRAINT `FKafo5jh939hjelef4uh53errwh` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `individual_user`
--

LOCK TABLES `individual_user` WRITE;
/*!40000 ALTER TABLE `individual_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `individual_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `login_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contactno` varchar(45) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `del_profile` tinyint(1) NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`login_id`),
  KEY `fk_login_role_id_idx` (`role_id`),
  CONSTRAINT `fk_login_role_id` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'fl4GclBih/0sKS53xD6DTDlyvTyB6wcrHzRQeVDRJlo=','admin@gmail.com','78866554',1,0,1),(2,'ncMhS2kjHEKVLZEv9adF7YnptWf32n/L0cl1bctNeXU=','org1gmail.com','7412589628',1,0,5),(3,'u/XqWK9iiQT47BGEnKpbhLIDIPTxY0X4wNMBdiDQsxo=','org2@gmail.com','8963257896',1,0,5),(4,'UA6PTRowQQi9SUyXGFM9fjK33D9waeuwM3suSqDVO4g=','org3@gmail.com','8963258994',1,0,5),(5,'IFyMepoJvwg1GUN5Jt/1B78XQVs0wOwsbIsSJRECEAk=','org4@gmail.com','8855669976',1,0,5),(6,'W5vG3+fHy0p9tDaYd/D6v/1odKlEgKACUkaTWCBXXE4=','bloodbank1@gmail.com','896589657',1,0,4),(7,'ha3YosEDGC8vGHmP8zR+SU5jSul8+oW46FtwHlvRdX8=','bloodbank2@gmail.com','9686579658',1,0,4),(8,'3R4jASIaZADyOSLfX6+upopF5mOk6OH3R+aWSETnwsc=','bloodbank3@gmail.com','8965478956',0,0,4),(9,'+mmOqZItopmWn1CxGE1V/46YTSVT3zJC9rc7D/dOFNM=','bloodbank4@gmail.com','9658745689',0,0,4),(10,'DoYLtU2uz2YJrVRv+xYMXa57Qbu7n2yXunvbnXLJ+08=','hospital1@gmail.com','9988774453',1,0,2),(11,'vmaJ2rEqbdlaNqGbmxmEWNqRcxNGob9tPifhxCvxTUs=','hospital2@gmail.com','8899665576',1,0,2),(12,'H/Ck9aYprfnALFc68e1tUYBTNAZgKAvPuQCaTwCRLQs=','hospital3@gmail.com','8945678945',0,0,2),(13,'RDDMu3bnJ+7A8v10vh5wOUB8OGdidZK79jEIx9JEer0=','hospital4@gmail.com','8956478955',0,0,2);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organization` (
  `org_id` int NOT NULL AUTO_INCREMENT,
  `org_name` varchar(45) NOT NULL,
  `org_type` varchar(45) NOT NULL,
  `org_regno` varchar(45) DEFAULT 'Not Available',
  `address_id` int NOT NULL,
  `login_id` int DEFAULT NULL,
  PRIMARY KEY (`org_id`),
  KEY `fk_organization_address_id_idx` (`address_id`),
  KEY `fk_organization_login_id_idx` (`login_id`),
  CONSTRAINT `fk_organization_address_id` FOREIGN KEY (`address_id`) REFERENCES `address` (`address_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_organization_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES (1,'Organization1','Private','96325896',1,2),(2,'Organization2','Private','89654789',2,3),(3,'Organization3','NGO','89657958',3,4),(4,'Organization4','NGO','89651236',4,5);
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `req_id` int NOT NULL AUTO_INCREMENT,
  `blood_grp` varchar(45) NOT NULL,
  `qty_req` int NOT NULL,
  `req_status` tinyint(1) NOT NULL,
  `bb_id` int NOT NULL,
  `login_id` int NOT NULL,
  PRIMARY KEY (`req_id`),
  KEY `fk_request_bb_id_idx` (`bb_id`),
  KEY `fk_request_login_id_idx` (`login_id`),
  CONSTRAINT `fk_request_bb_id` FOREIGN KEY (`bb_id`) REFERENCES `bloodbank` (`bb_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_request_login_id` FOREIGN KEY (`login_id`) REFERENCES `login` (`login_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request`
--

LOCK TABLES `request` WRITE;
/*!40000 ALTER TABLE `request` DISABLE KEYS */;
/*!40000 ALTER TABLE `request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'hospital'),(3,'individualuser'),(4,'bloodbank'),(5,'organization');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `selected_bloodbanks`
--

DROP TABLE IF EXISTS `selected_bloodbanks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selected_bloodbanks` (
  `sel_bb_id` int NOT NULL AUTO_INCREMENT,
  `sel_bb_status` bit(1) DEFAULT NULL,
  `bb_id` int DEFAULT NULL,
  `cid` int DEFAULT NULL,
  PRIMARY KEY (`sel_bb_id`),
  KEY `FKcfkxiqcgdeckdhmv0rll9jmjq` (`bb_id`),
  KEY `FK5yh7k0f4g0fgp41iu7lc7m6uo` (`cid`),
  CONSTRAINT `FK5yh7k0f4g0fgp41iu7lc7m6uo` FOREIGN KEY (`cid`) REFERENCES `camp` (`cid`),
  CONSTRAINT `FKcfkxiqcgdeckdhmv0rll9jmjq` FOREIGN KEY (`bb_id`) REFERENCES `bloodbank` (`bb_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `selected_bloodbanks`
--

LOCK TABLES `selected_bloodbanks` WRITE;
/*!40000 ALTER TABLE `selected_bloodbanks` DISABLE KEYS */;
/*!40000 ALTER TABLE `selected_bloodbanks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stocks`
--

DROP TABLE IF EXISTS `stocks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stocks` (
  `stock_id` int NOT NULL AUTO_INCREMENT,
  `blood_grp` varchar(45) NOT NULL,
  `quantity` int NOT NULL,
  `bb_id` int NOT NULL,
  PRIMARY KEY (`stock_id`),
  KEY `fk_stocks_bb_id_idx` (`bb_id`),
  CONSTRAINT `fk_stocks_bb_id` FOREIGN KEY (`bb_id`) REFERENCES `bloodbank` (`bb_id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stocks`
--

LOCK TABLES `stocks` WRITE;
/*!40000 ALTER TABLE `stocks` DISABLE KEYS */;
INSERT INTO `stocks` VALUES (1,'A+',0,1),(2,'A-',0,1),(3,'B+',0,1),(4,'B-',0,1),(5,'AB+',0,1),(6,'AB-',0,1),(7,'O+',0,1),(8,'O-',0,1),(9,'A+',0,2),(10,'A-',0,2),(11,'B+',0,2),(12,'B-',0,2),(13,'AB+',0,2),(14,'AB-',0,2),(15,'O+',0,2),(16,'O-',0,2),(17,'A+',0,3),(18,'A-',0,3),(19,'B+',0,3),(20,'B-',0,3),(21,'AB+',0,3),(22,'AB-',0,3),(23,'O+',0,3),(24,'O-',0,3),(25,'A+',0,4),(26,'A-',0,4),(27,'B+',0,4),(28,'B-',0,4),(29,'AB+',0,4),(30,'AB-',0,4),(31,'O+',0,4),(32,'O-',0,4);
/*!40000 ALTER TABLE `stocks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-14  0:28:40

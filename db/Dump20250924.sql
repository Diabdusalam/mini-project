-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mini_project
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(191) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `is_sell` enum('Dijual','Tidak_Dijual') NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `update_at` datetime(3) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('16a052be-9c63-4214-9931-fef698e908d2','oli samping 1',30000.00,'Tidak_Dijual','2025-09-24 12:44:29.506','2025-09-24 15:10:21.250',10),('32d7be43-18c1-4970-a1fb-0ab81b629edd','Product12',120000.00,'Dijual','2025-09-24 14:05:27.830','2025-09-24 15:07:52.905',15),('52b63a5d-578e-437e-97d2-338082e2454d','product Abc',16000.00,'Dijual','2025-09-24 14:35:15.790','2025-09-24 15:10:23.448',60),('5bc7888b-c80e-4c51-bf78-240d5a906a91','produvt123',1234400.00,'Tidak_Dijual','2025-09-24 15:30:33.181','2025-09-24 15:30:33.181',45),('96872e7d-f92b-41dc-990c-e40e5f63f92a','Produc 12',15000.00,'Tidak_Dijual','2025-09-24 14:32:28.008','2025-09-24 14:32:28.008',14),('acf24f56-9c6b-40c7-8e47-6ad6d1745c10','Produckt 1',12000.00,'Tidak_Dijual','2025-09-24 14:10:14.084','2025-09-24 14:10:14.084',20),('ce5c8b79-f30f-4524-9dae-17e621dcf01a','product123',12313.00,'Dijual','2025-09-24 14:34:05.965','2025-09-24 14:34:05.965',4),('f4ee1088-d343-43ef-b68d-80de69b86cd2','product1',16000.00,'Dijual','2025-09-24 14:33:33.917','2025-09-24 14:33:33.917',80);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-24 23:14:05

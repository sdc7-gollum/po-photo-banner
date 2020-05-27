-- START LANGUAGE
-- cassandra -f

-- ACCESS COMMAND SHELL
-- new terminal > cqlsh

CREATE  KEYSPACE projectovernight
   WITH REPLICATION = {
      'class' : 'SimpleStrategy', 'replication_factor' : 2 } ;

-- VIEW DATABASES
-- Describe keyspaces

-- DESCRIBE DATABASE
-- Describe keyspace name

-- USE DATABASE
Use projectovernight;

DROP TABLE pophotos

-- DESCRIBE TABLES
-- describe tables

CREATE TABLE projectovernight.pophotos (
	record_id int ,
	photos_id decimal,
	url text,
	description text,
	verified text,
	PRIMARY KEY(photos_id, record_id)
);

COPY projectovernight.pophotos (record_id, photos_id, url, description, verified) FROM '/Users/justinpaoletta/Desktop/po-photo-banner/db/photos.csv'
 WITH DELIMITER=',' AND HEADER=TRUE;

select record_id, photos_id, url, description, verified from pophotos where photos_id IN (980000.1,980000.2,980000.3,980000.4,980000.5,980000.6,980000.7,980000.8,980000.9);
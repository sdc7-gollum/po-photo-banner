-- SOME SETUP

-- LOGIN
--  psql -U postgres

-- CREATE ROLE username LOGIN PASSWORD 'password';
-- CREATE DATABASE projectovernight WITH OWNER = justin;

-- then you can login right to the database
-- psql databasename;

DROP TABLE IF EXISTS pophotos;

CREATE TABLE pophotos(
	record_id int,
	photos_id decimal PRIMARY KEY,
	url text,
	description text,
	verified text
) PARTITION BY RANGE (photos_id);

CREATE TABLE pophotos_5 PARTITION OF pophotos
    FOR VALUES FROM (1) TO (5000001);

CREATE TABLE pophotos_10 PARTITION OF pophotos
    FOR VALUES FROM (5000001) TO (10000001);

CREATE TABLE pophotos_15 PARTITION OF pophotos
    FOR VALUES FROM (10000001) TO (15000001);

CREATE TABLE pophotos_20 PARTITION OF pophotos
    FOR VALUES FROM (15000001) TO (20000001);

CREATE TABLE pophotos_25 PARTITION OF pophotos
    FOR VALUES FROM (20000001) TO (25000001);

CREATE TABLE pophotos_30 PARTITION OF pophotos
    FOR VALUES FROM (25000001) TO (30000001);

CREATE TABLE pophotos_35 PARTITION OF pophotos
    FOR VALUES FROM (30000001) TO (35000001);

CREATE TABLE pophotos_40 PARTITION OF pophotos
    FOR VALUES FROM (35000001) TO (40000001);

CREATE TABLE pophotos_45 PARTITION OF pophotos
    FOR VALUES FROM (40000001) TO (45000001);

CREATE TABLE pophotos_50 PARTITION OF pophotos
    FOR VALUES FROM (45000001) TO (50000001);

CREATE TABLE pophotos_55 PARTITION OF pophotos
    FOR VALUES FROM (50000001) TO (55000001);

CREATE TABLE pophotos_60 PARTITION OF pophotos
    FOR VALUES FROM (55000001) TO (60000001);

CREATE TABLE pophotos_65 PARTITION OF pophotos
    FOR VALUES FROM (60000001) TO (65000001);

CREATE TABLE pophotos_70 PARTITION OF pophotos
    FOR VALUES FROM (65000001) TO (70000001);

CREATE TABLE pophotos_75 PARTITION OF pophotos
    FOR VALUES FROM (70000001) TO (75000001);

CREATE TABLE pophotos_80 PARTITION OF pophotos
    FOR VALUES FROM (75000001) TO (80000001);


COPY pophotos(record_id, photos_id, url, description, verified)

FROM '/Users/justinpaoletta/Desktop/po-photo-banner/db/photos.csv' DELIMITER ',' CSV HEADER;

-- \i /Users/justinpaoletta/Desktop/po-photo-banner/db/seedPostgres.sql
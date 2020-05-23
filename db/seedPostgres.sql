DROP TABLE IF EXISTS pophotos;

CREATE TABLE pophotos (
	record_id serial PRIMARY KEY,
	i int,
	photoId int,
	url text,
  description text,
	verified text
);

COPY pophotos (i, photoId, url, description, verified)
FROM '/Users/justinpaoletta/Desktop/po-photo-banner/db/photos.csv' DELIMITER ',' CSV HEADER;

-- \i /Users/justinpaoletta/Desktop/po-photo-banner/db/seedPostgres.sql
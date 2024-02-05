-- 1. -> test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
CREATE TABLE employee(
	id INTEGER PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	birthday DATE,
	email VARCHAR(100)
); --> Query returned successfully in 96 msec.

-- 2. -> Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
insert into employee (id, name, birthday, email) values (1, 'Sauveur Curtoys', '2022-07-04', null);
insert into employee (id, name, birthday, email) values (2, 'Rosabel Stove', '2023-05-26', 'rstove1@imgur.com');
insert into employee (id, name, birthday, email) values (3, 'Roi Whoolehan', '2022-11-28', 'rwhoolehan2@discovery.com');
insert into employee (id, name, birthday, email) values (4, 'Consalve Le Friec', '2022-10-28', 'cle3@eventbrite.com');
insert into employee (id, name, birthday, email) values (5, 'Zechariah Attfield', '2022-08-31', null);
insert into employee (id, name, birthday, email) values (6, 'Annabel Baise', '2022-06-18', 'abaise5@imageshack.us');
insert into employee (id, name, birthday, email) values (7, 'Eugen Duester', '2023-04-26', null);
insert into employee (id, name, birthday, email) values (8, 'Roscoe Franc', '2023-02-25', 'rfranc7@taobao.com');
insert into employee (id, name, birthday, email) values (9, 'Kate Simka', '2022-11-24', 'ksimka8@google.de');
insert into employee (id, name, birthday, email) values (10, 'Ros Rheam', null, null);
insert into employee (id, name, birthday, email) values (11, 'Franny Impson', '2023-04-16', 'fimpsona@github.io');
insert into employee (id, name, birthday, email) values (12, 'Hobard Lefort', null, 'hlefortb@prweb.com');
insert into employee (id, name, birthday, email) values (13, 'Gregg Greenfield', '2022-11-20', 'ggreenfieldc@eepurl.com');
insert into employee (id, name, birthday, email) values (14, 'Warren Tidbold', '2022-07-04', null);
insert into employee (id, name, birthday, email) values (15, 'Ermanno Burgoyne', null, null);
insert into employee (id, name, birthday, email) values (16, 'Annice Ridhole', null, 'aridholef@skyrock.com');
insert into employee (id, name, birthday, email) values (17, 'Sianna MacRinn', '2022-11-24', null);
insert into employee (id, name, birthday, email) values (18, 'Cathryn Akid', null, 'cakidh@google.de');
insert into employee (id, name, birthday, email) values (19, 'Carry Luty', null, 'clutyi@loc.gov');
insert into employee (id, name, birthday, email) values (20, 'Bianca Throssell', '2022-10-23', null);
insert into employee (id, name, birthday, email) values (21, 'Tricia Skirling', null, 'tskirlingk@usnews.com');
insert into employee (id, name, birthday, email) values (22, 'Sayer Berget', null, 'sbergetl@amazonaws.com');
insert into employee (id, name, birthday, email) values (23, 'Robert Killik', '2023-02-26', null);
insert into employee (id, name, birthday, email) values (24, 'Corney Comelli', '2023-05-10', null);
insert into employee (id, name, birthday, email) values (25, 'Judith Ramelet', '2022-09-02', null);
insert into employee (id, name, birthday, email) values (26, 'Tades Darque', '2023-04-13', null);
insert into employee (id, name, birthday, email) values (27, 'Shellie Snarie', '2022-11-28', 'ssnarieq@howstuffworks.com');
insert into employee (id, name, birthday, email) values (28, 'Berte Janowski', '2022-08-25', null);
insert into employee (id, name, birthday, email) values (29, 'Chen Hanscome', '2023-01-18', 'chanscomes@tuttocitta.it');
insert into employee (id, name, birthday, email) values (30, 'Misha Cheves', null, null);
insert into employee (id, name, birthday, email) values (31, 'Arliene Hiorn', null, 'ahiornu@angelfire.com');
insert into employee (id, name, birthday, email) values (32, 'Raimundo Tiddeman', null, null);
insert into employee (id, name, birthday, email) values (33, 'Pat Clempton', '2023-05-05', 'pclemptonw@wikia.com');
insert into employee (id, name, birthday, email) values (34, 'Harriet Raleston', '2023-04-02', null);
insert into employee (id, name, birthday, email) values (35, 'Averill Rhys', '2023-01-06', 'arhysy@bbc.co.uk');
insert into employee (id, name, birthday, email) values (36, 'Scotti Raddenbury', '2023-01-19', null);
insert into employee (id, name, birthday, email) values (37, 'Dorice Kahler', '2023-03-15', null);
insert into employee (id, name, birthday, email) values (38, 'Codie Bereford', '2022-08-30', 'cbereford11@chronoengine.com');
insert into employee (id, name, birthday, email) values (39, 'Elissa Philip', '2023-03-11', 'ephilip12@squidoo.com');
insert into employee (id, name, birthday, email) values (40, 'Georgina Coburn', '2022-08-24', null);
insert into employee (id, name, birthday, email) values (41, 'Gretel Ishak', '2023-01-07', null);
insert into employee (id, name, birthday, email) values (42, 'Erda Edyson', null, 'eedyson15@wired.com');
insert into employee (id, name, birthday, email) values (43, 'Esmaria Sarten', null, null);
insert into employee (id, name, birthday, email) values (44, 'Ezekiel Cristofolini', '2022-12-02', null);
insert into employee (id, name, birthday, email) values (45, 'Connor Danielski', null, 'cdanielski18@gizmodo.com');
insert into employee (id, name, birthday, email) values (46, 'Ford Whitty', '2022-08-12', null);
insert into employee (id, name, birthday, email) values (47, 'Ricardo Downs', null, 'rdowns1a@addthis.com');
insert into employee (id, name, birthday, email) values (48, 'Lillis Spier', null, 'lspier1b@google.fr');
insert into employee (id, name, birthday, email) values (49, 'Sheri Fridd', '2022-10-21', 'sfridd1c@mozilla.org');
insert into employee (id, name, birthday, email) values (50, 'Abigael Gorcke', '2022-11-11', null);
--> Query returned successfully in 139 msec.

-- 3. -> Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
UPDATE employee
SET name = 'Robert'
WHERE id=13;

UPDATE employee
SET email='newmail@mail.com'
WHERE birthday = '1978-09-29';

UPDATE employee
SET name='Dany'
WHERE email = 'sleppo19@google.cn';

UPDATE employee
SET name='Dany'
WHERE birthday = '1920-05-03';

UPDATE employee
SET birthday='1990-01-01'
WHERE name = 'Priscilla';
--> Query returned successfully in 67 msec.

-- 4. -> Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.
DELETE FROM employee
WHERE name = 'Priscilla';

DELETE FROM employee
WHERE birthday = '1920-05-03';

DELETE FROM employee
WHERE email = 'sleppo19@google.cn';

DELETE FROM employee
WHERE birthday = '1978-09-29';

DELETE FROM employee
WHERE id = 13;
--> Query returned successfully in 76 msec.
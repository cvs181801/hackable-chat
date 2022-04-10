CREATE DATABASE hackable_chat_app_db;

CREATE TABLE users(
    id uuid DEFAULT public.uuid_generate_v4 () NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    isloggedin boolean DEFAULT false
    );

CREATE TABLE messages(
    messageid SERIAL PRIMARY KEY,
    text TEXT,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    user_id uuid REFERENCES users(id) NOT NULL
);

INSERT INTO users(id, username, password, isloggedin)
VALUES 
	('312cf734-824f-4afc-98a3-fb7713a06c15', 'spongebob','iheartcrabbypatty', 'false'),
	('db1f125c-5e94-48d9-9fc4-dd2605415be9', 'patrickStar','iamastar', 'false'),
	('490d7b31-20b4-4eb4-a555-48f1994a1cfb', 'squidward','playmoreclarinet','false'),
	('844cf8b7-c6cd-42dd-b72e-464ddb178f57', 'mrCrabs','ilovemoney$$$', 'false');

INSERT INTO messages(text, user_id) 
    VALUES
    ('oh boy! Jellyfishing!','312cf734-824f-4afc-98a3-fb7713a06c15'),
    ('spongebob, why??','490d7b31-20b4-4eb4-a555-48f1994a1cfb'),
    ('liuleiund,efijeljkalfd!!','db1f125c-5e94-48d9-9fc4-dd2605415be9'),
    ('youboys run along! ill be countin me $$!','844cf8b7-c6cd-42dd-b72e-464ddb178f57'),
    ('<img src onerror="alert("This is a stored XSS attack.  You have been hacked.")">', '490d7b31-20b4-4eb4-a555-48f1994a1cfb'); 
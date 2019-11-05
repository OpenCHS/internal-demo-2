select create_db_user('internal-demo-2-ddm', 'password');

INSERT into organisation(name, db_user, uuid, parent_organisation_id)
SELECT 'Internal Demo 2', 'internal-demo-2-ddm', '6aade3e0-c7c8-486b-9a6e-6020b59c3e15', id
FROM organisation
WHERE name = 'Dam Desilting Mission';
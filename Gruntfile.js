const IDI = require('openchs-idi');

module.exports = IDI.configure({
    "name": "internal-demo-2",
    "chs-admin": "admin@ddm",
    "org-name": "Internal Demo 2",
    "org-admin": "internal-demo-2-admin",
    "secrets": '../secrets.json',
    "files": {
        "adminUsers": {
            "prod": ["users/dev-admin-user.json"]
        },
        "forms": [],
        "formMappings": [],
        "formDeletions": [],
        "formAdditions": [],
        "catchments": [],
        "checklistDetails": [],
        "concepts": [],
        "locations": [],
        "programs": [],
        "encounterTypes": [],
        "operationalEncounterTypes": [],
        "operationalPrograms": [],
        "subjectTypes": [],
        "operationalSubjectTypes": [],
        "users": {
            "dev": []
        },
        "rules": [
        ],
        "organisationSql": [
            /* "create_organisation.sql"*/
        ]
    }
});

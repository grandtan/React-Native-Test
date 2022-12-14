export const DATA_MOCK = {
    "data": [
        {
            "id": 1,
            "type": "formFolder",
            "attributes": {
                "id": 1,
                "name": "Folder sample",
                "templates": [
                    {
                        "id": 1,
                        "type": "template",
                        "name": "Template sample",
                        "children": [
                            {
                                "id": 1,
                                "type": "question",
                                "text": "Type of Report",
                                "question_type": "radio",
                                "order": 0,
                                "compulsory": true,
                                "question_options": [
                                    {
                                        "id": 1,
                                        "template_question_id": 1,
                                        "label": "Weekly"
                                    },
                                    {
                                        "id": 2,
                                        "template_question_id": 1,
                                        "label": "Daily"
                                    }
                                ],
                                "children": [
                                    {
                                        "id": 1,
                                        "type": "logic",
                                        "value": "Daily",
                                        "order": 0,
                                        "template_question_id": 1,
                                        "condition": "is equal: [Daily]",
                                        "question_logic_option": {
                                            "text": "is equal",
                                            "expression_value": "is",
                                            "question_type": "radio"
                                        },
                                        "children": [
                                            {
                                                "id": 1,
                                                "type": "section",
                                                "name": "Section 1",
                                                "order": 0,
                                                "children": [
                                                    {
                                                        "id": 2,
                                                        "type": "question",
                                                        "text": "Question boolean 1",
                                                        "question_type": "boolean",
                                                        "order": 0,
                                                        "compulsory": false,
                                                        "question_options": null,
                                                        "children": []
                                                    },
                                                    {
                                                        "id": 3,
                                                        "type": "question",
                                                        "text": "Question boolean 2",
                                                        "question_type": "boolean",
                                                        "order": 1,
                                                        "compulsory": false,
                                                        "question_options": null,
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": 11,
                                                "type": "question",
                                                "name": "Boolean logic 1",
                                                "question_type": "boolean",
                                                "order": 2,
                                                "compulsory": false,
                                                "question_options": null,
                                                "children": [
                                                    {
                                                        "id": 10,
                                                        "type": "logic",
                                                        "value": "Yes",
                                                        "order": 0,
                                                        "template_question_id": 11,
                                                        "condition": "is equal: [Yes]",
                                                        "question_logic_option": {
                                                            "text": "is equal",
                                                            "expression_value": "is",
                                                            "question_type": "boolean"
                                                        },
                                                        "children": [
                                                            {
                                                                "id": 12,
                                                                "type": "question",
                                                                "text": "Input question 1",
                                                                "question_type": "input_text",
                                                                "order": 0,
                                                                "compulsory": true,
                                                                "question_options": null,
                                                                "children": []
                                                            },
                                                            {
                                                                "id": 13,
                                                                "type": "question",
                                                                "text": "Photo question 1",
                                                                "question_type": "image",
                                                                "order": 1,
                                                                "compulsory": null,
                                                                "question_options": null,
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": 2,
                                        "type": "logic",
                                        "value": "Weekly",
                                        "order": 1,
                                        "template_question_id": 1,
                                        "condition": "is equal: [Weekly]",
                                        "question_logic_option": {
                                            "text": "is equal",
                                            "expression_value": "is",
                                            "question_type": "radio"
                                        },
                                        "children": [
                                            {
                                                "id": 2,
                                                "type": "section",
                                                "name": "Section 2",
                                                "order": 0,
                                                "children": [
                                                    {
                                                        "id": 3,
                                                        "type": "question",
                                                        "text": "Boolean 3",
                                                        "question_type": "boolean",
                                                        "order": 1,
                                                        "compulsory": true,
                                                        "question_options": null,
                                                        "children": []
                                                    },
                                                    {
                                                        "id": 4,
                                                        "type": "question",
                                                        "text": "Boolean 3",
                                                        "question_type": "boolean",
                                                        "order": 2,
                                                        "compulsory": true,
                                                        "question_options": null,
                                                        "children": []
                                                    },
                                                    {
                                                        "id": 5,
                                                        "type": "question",
                                                        "text": "Boolean 4",
                                                        "question_type": "boolean",
                                                        "order": 3,
                                                        "compulsory": true,
                                                        "question_options": null,
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": 6,
                                                "type": "question",
                                                "text": "Boolean Logic 2",
                                                "question_type": "boolean",
                                                "order": 3,
                                                "compulsory": false,
                                                "question_options": null,
                                                "children": [
                                                    {
                                                        "id": 5,
                                                        "type": "logic",
                                                        "value": "Yes",
                                                        "order": 0,
                                                        "template_question_id": 6,
                                                        "condition": "is equal: [Yes]",
                                                        "question_logic_option": {
                                                            "text": "is equal",
                                                            "expression_value": "is",
                                                            "question_type": "boolean"
                                                        },
                                                        "children": [
                                                            {
                                                                "id": 9,
                                                                "type": "question",
                                                                "text": "Input text question 2",
                                                                "question_type": "input_text",
                                                                "order": 0,
                                                                "compulsory": null,
                                                                "question_options": null,
                                                                "children": []
                                                            },
                                                            {
                                                                "id": 10,
                                                                "type": "question",
                                                                "text": "Photo question 2",
                                                                "question_type": "image",
                                                                "order": 1,
                                                                "compulsory": true,
                                                                "question_options": null,
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                  
                ]
            }
        }
    ]
}
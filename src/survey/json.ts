export const json = {
    "title": "How do you like Opinbox?",
    "description": "Lets talk about Opinbox",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Why do you use Opinbox?"
                },
                {
                    "type": "tagbox",
                    "name": "question2",
                    "title": "In which fields do you work?",
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Engineering"
                        },
                        {
                            "value": "Item 2",
                            "text": "Life Sciences"
                        },
                        {
                            "value": "Item 3",
                            "text": "Medical"
                        },
                        {
                            "value": "Item 4",
                            "text": "Academia"
                        }
                    ],
                    "showOtherItem": true
                }
            ],
            "title": "Tell us about yourself"
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "rating",
                    "name": "question4",
                    "title": "How was your impression so far working with Opinbox?",
                    "rateType": "smileys"
                },
                {
                    "type": "text",
                    "name": "question5",
                    "visibleIf": "{question4} < 3",
                    "title": "Can you tell us what we can improve?"
                }
            ],
            "title": "What are your first impressions of Opinbox",
            "description": "Tell us how you like the project."
        }
    ]
}

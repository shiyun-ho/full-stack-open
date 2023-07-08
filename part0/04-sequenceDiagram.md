# Sequence Diagram

```
Sequence Diagram 
Exercise 04 of Part 00 of Full Stack Open Course by University of Helskini. 

Function:
Depicts the situation where user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes.

1. Writes something into the text field 
2. Clicks the submit button.

```


```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
        activate server
        server->>browser: Sends response HTTP status code 302
        server->>browser: Do a new GET request https://studies.cs.helsinki.fi/exampleapp/notes
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the css file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
        activate server
        server-->>browser: the JavaScript file
        deactivate server

        Note right of browser: Browser starts executing the JavaScript code that fetches the UPDATED JSON from server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
        deactivate server

        Note right of browser: Browser executes the callback function that renders the notes
```
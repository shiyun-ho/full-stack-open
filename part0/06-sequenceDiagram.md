# Sequence Diagram

```
Sequence Diagram 
Exercise 06 of Part 00 of Full Stack Open Course by University of Helskini. 

Function:
Depicts the situation where user creates a new note using the single-page version of the app.

```


```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        server-->>browser: updated JSON {content: "I'm determined...", date: "2023-07-08T13:58:15.466Z"}
        deactivate server


```
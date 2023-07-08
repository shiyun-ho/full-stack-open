# Sequence Diagram

```
Sequence Diagram 
Exercise 05 of Part 00 of Full Stack Open Course by University of Helskini. 

Function:
Depicts the situation where user goes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```


```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate server
        server-->>browser: HTML document
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
        activate server
        server-->>browser: spa.js

        browser->>server: GET chrome-extension://.../app/detect_angular_for_extension_icon_bundle.js
        activate server
        server-->>browser: detect_angular_for_extension_icon_bundle.js

```
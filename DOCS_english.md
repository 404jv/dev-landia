# Documentation 

<details>
  <summary><h3>Sections</h3></summary>
  <ol>
    <li>
      <a href="user-routes">User routes</a>
      <ul>
        <li><a href="#create-user">Create user</a></li>
        <li><a href="#authenticate-user">Authenticate user</a></li>
      </ul>
    </li>
    <li>
      <a href="#map-routes">Map routes</a>
      <ul>
        <li><a href="#create-maps">Create maps</a></li>
      </ul>
    </li>
    <li>
      <a href="#phase-routes">Phase routes</a>
      <ul>
        <li><a href="#create-phases">Create phases</a></li>
      </ul>
    </li>
    <li>
      <a href="#activities-routes">Activities routes</a>
      <ul>
        <li><a href="#create-activities">Create activities</a></li>
        <li><a href="#add-options-to-activity">Add options to activity</a></li>
      </ul>
    </li>
  </ol>
</details>

## User routes 

### Create user
<div>
  <strong>POST</strong> /users/create 
</div>
Create an user, if successful, returns status code 201.

<br /><strong>JSON Params</strong>
```json
  {
    "name": "john doe",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "password": "1234567890",
    "biography": "example of biography"
  }
```

<strong>Business rules</strong>
- "biography" is optional.
- It should not be able to create an new user with an email that already exists.
- It should not be able to create an new user with an username that already exists.

<br />

### Authenticate user
<div>
  <strong>POST</strong> /sessions
</div>
Authenticate an user, if successful, returns JWT token, email and user name.

<br /><strong>JSON Params</strong>
```json
  {
    "email": "johndoe@example.com",
    "password": "1234567890"
  }
```

<strong>Business rules</strong>
- It should not be able to generate an token if email is incorrect.
- It should not be able to authenticate an user if password is incorrect.

<br />

<a href="#documentation">Back to the top</a>

<br />

## Map routes

### Create maps
<div>
  <strong>POST</strong> /maps/create 
</div>
Create a map, if successful, returns status code 201.

<br /><strong>JSON Params</strong>
```json
  {
    "title": "first map",
    "description": "the first map of the journey",
    "order": 1,
  }
```

<strong>Business rules</strong>
- Just administrators should have access to this route.

<br />

<a href="#documentation">Back to the top</a>

<br />

## Phase routes

### Create phases
<div>
  <strong>POST</strong> /phases/create
</div>
Create a phase, if successful, returns status code 201

<br /><strong>JSON Params</strong><br />
Example of creating a practical phase
```json
  {
    "title": "first practice phase",
    "map_id": "map id",
    "max_level": 3,
    "markdown_text": "# markdown text",
    "type": "practice",
    "order": 1,
  }
```
Example of creating a theoretical phase
```json
  {
    "title": "first theory phase",
    "map_id": "map id",
    "max_level": 1,
    "markdown_text": "# markdown text",
    "type": "theory",
    "order": 1,
  }
```

<strong>Business rules</strong>
- Just administrator should have access to this route.
- It should not be able to create a practical phase with a max_level less than 3.
- It should not be able to create a theoretical  phase with a max_level different of 1.
- It should not be able to create a phase if map_id not belong to any map.
- "markdown_text" is optional.

<br />

<a href="#documentation">Back to the top</a>

<br />

## Activities routes

### Create activities
<div>
  <strong>POST</strong> /activities/create
</div>
Create an activity, if successful, returns status code 201.

<br /><strong>JSON Params</strong><br />
- Example of creating activity of type "block_activity" 
```json
  {
    "title": "first activity",
    "description": "first activity description",
    "type": "block_activity",
    "is_needed_code": false,
    "order": 1,
    "phase_id": "phase id",
    "tips": ["tip 1", "tip 2"],
    "options": [
      {
        "name": "option 1",
        "type": "js_function",
        "hexadecimal_color": "#AB7DE8",
      },
      {
        "name": "option 2",
        "type": "command",
        "hexadecimal_color": "#B0169D",
      },
    ],
  }
```
Example of creating activity of type "quiz"
```json
  {
    "title": "first activity",
    "description": "first activity description",
    "type": "quiz",
    "is_needed_code": false,
    "order": 1,
    "phase_id": "phase id",
    "tips": ["tip 1", "tip 2"],
    "options": [
      {
        "name": "option 1",
        "type": "js_function",
        "hexadecimal_color": "#AB7DE8",
      },
      {
        "name": "option 2",
        "type": "command",
        "hexadecimal_color": "#B0169D",
      },
    ],
  }
```

<strong>Business rules</strong>
- Just administrators should have access to this route.
- It should not be able to create an activity if phase_id not belongs to any phase.

<br />

### Add options to activity
<div>
  <strong>POST</strong> /activities/add-options
</div>
Add options to an activity, if successful, returns status code 204.

<br /><strong>JSON Params</strong>
```json
  {
    "activity_id": "activity id",
    "activityAnswerOptionsIds": ["Option 1", "Option 2", "Option 3"],
    "activityDefaultCodeOptionsIds": ["Option 1"], 
  }
```

<strong>Business rules</strong>
- Just administrators should have access to this route.
- It should not be able to add options to an activity if activity_id not belongs to any activity.

<br />

<a href="#documentation">Back to the top</a>

<br />
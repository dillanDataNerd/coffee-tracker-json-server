# Coffee Tracker Server  

This repository is a [json-server](https://github.com/typicode/json-server) that provides the backend API for the Coffee Tracker React application.  

#### [See the App!](https://personal-coffee-tracker.netlify.app/)  
#### [Client Repo](https://github.com/dillanDataNerd/coffee-tracker-client) 

---

# Server Structure  

## Collections  

### beans  
```json
{
  id,
  name,
  roaster,
  origin,
  process,       // washed | natural | honey | anaerobic | other
  roastLevel,    // light | medium | dark
  notes,
  imageUrl,
  createdAt
}
```  

### brews  
```json
{
  id,
  beanId,          // FK → beans.id
  method,          // espresso | pourOver | coldBrew | moka | etc.
  grind,
  coffee_g,
  output_g,
  temp_c,
  time_s,
  rating,
  tastingNotes,
  improvementNotes,
  createdAt
}
```  

---

## Used API Endpoints in the App  

| HTTP Method | URL                                                                 | Request Body | Description |
|-------------|---------------------------------------------------------------------|--------------|-------------|
| GET         | `/beans`                                                            | —            | Get all beans |
| POST        | `/beans`                                                            | `{ name, roaster, origin, process, roastLevel, notes, imageUrl }` | Create a new bean |
| GET         | `/beans/:id`                                                        | —            | Get details of a specific bean |
| GET         | `/beans/:id?_embed=brews`                                           | —            | Get a bean with all its brews |
| PUT         | `/beans/:id`                                                        | `{ name, roaster, origin, process, roastLevel, notes, imageUrl }` | Edit a bean |
| DELETE      | `/beans/:id`                                                        | —            | Delete a bean |
| GET         | `/beans?_sort=createdAt&_order=desc`                                | —            | Get beans sorted by creation date (latest first) |
| GET         | `/beans?_sort=createdAt&_order=desc&origin=Ethiopia&roaster=Blue`   | —            | Filter beans by origin and/or roaster, sorted by creation date |
| GET         | `/brews`                                                            | —            | Get all brews |
| POST        | `/brews`                                                            | `{ beanId, method, grind, coffee_g, output_g, temp_c, time_s, rating, tastingNotes, improvementNotes }` | Create a new brew |
| GET         | `/brews/:id`                                                        | —            | Get details of a specific brew |
| GET         | `/brews/:id?_expand=bean`                                           | —            | Get a brew with its linked bean object |
| PUT         | `/brews/:id`                                                        | `{ beanId, method, grind, coffee_g, output_g, temp_c, time_s, rating, tastingNotes, improvementNotes }` | Edit a brew |
| DELETE      | `/brews/:id`                                                        | —            | Delete a brew |
| GET         | `/brews?_expand=bean`                                               | —            | Get all brews with expanded bean object |
| GET         | `/brews?_expand=bean&_sort=createdAt&_order=desc&_limit=5`          | —            | Get the 5 most recent brews with expanded bean |
| GET         | `/brews?_expand=bean&_sort=createdAt&_order=desc&beanId=1&method=espresso` | —   | Filter brews by bean and/or method, sorted by creation date |
| GET         | `/beans?_embed=brews`                                               | —            | Get beans with their associated brews |

---

## Getting Started  

To run this server locally:  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/dillanDataNerd/coffee-tracker-json-server.git
   cd coffee-tracker-json-server
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root and set your desired port:  
   ```
   PORT=5005
   ```

4. **Start the server**  
   ```bash
   npm start
   ```  

5. The API will be available at:  
   ```
   http://localhost:5005
   ```

---

## Links  


### Project  
- [Client Repo](https://github.com/dillanDataNerd/coffee-tracker-client)  
- [Server Repo](https://github.com/dillanDataNerd/coffee-tracker-json-server)  
- [Deployed Client App](https://personal-coffee-tracker.netlify.app/)  
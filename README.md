# braincell-backend




Follow these steps to set up the project for local development:

1. **Clone the Repository**
   ```bash
   git https://github.com/Aniket897/braincell-frontend
   
2. **Install dependencies**
   ```bash
   npm install


5. **Start the server**
   ```bash
   npm run dev

   
   
# API Endpoints Documentation

## 1. Health Check  
**Endpoint:**  
`GET /health`  

**Description:**  
This endpoint is used to check if the API is running properly.  

**Response:**  
```json
{
  "status": "ok"
}
```

---

## 2. Get All Users  
**Endpoint:**  
`GET /users`  

**Description:**  
Fetches a list of all users. Supports optional query parameters for filtering and sorting.  

### Query Parameters:
- `name` (optional) - Filters users by name.  
- `sort` (optional) - Sorts the users by name in ascending (`asc`) or descending (`desc`) order.  

**Examples:**  

1. **Get all users:**  
   ```
   GET /users
   ```

2. **Filter users by name (`John`):**  
   ```
   GET /users?name=John
   ```

3. **Get users sorted in ascending order:**  
   ```
   GET /users?sort=asc
   ```

4. **Get users sorted in descending order:**  
   ```
   GET /users?sort=desc
   ```

5. **Filter users by name (`Alice`) and sort in descending order:**  
   ```
   GET /users?name=Alice&sort=desc
   ```

**Example Response:**  
```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com"
  }
]
```



## Author

- Aniket Kangane
- Email: aniketbkangane9637@gmail.com
- linkdin: https://www.linkedin.com/in/aniket-kangane/
- portfolio: https://aniket-kangane.vercel.app/

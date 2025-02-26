# Micro Article Website - README  

## Introduction  
This is a **Micro Article Website** built using the following technologies:  
- **Appwrite** (Backend-as-a-Service)  
- **React** (Frontend framework)  
- **Redux** (State management)  
- **React Hook Form** (Form handling)  
- **Parser** (Content processing)  

You can use a demo on:
```
jaypost-two.vercel.app
```

The application allows users to create, edit, and view micro-articles while ensuring smooth state management, form validation, and backend integration with Appwrite.  

## Features  
- User authentication via Appwrite  
- CRUD operations for articles  
- Form validation with React Hook Form  
- State management using Redux  
- Parsing content before rendering  

## Installation & Setup  

### Prerequisites  
Ensure you have the following installed:  
- Node.js & npm  
- Appwrite instance (or use Appwrite Cloud)  

### Steps  
1. Clone the repository:  
   ```sh
   git clone https://github.com/your-repo.git
   cd micro-article-website
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Configure Appwrite:  
   - Set up a project on Appwrite.  
   - Create collections for users and articles.  
   - Copy the project ID and endpoint into an `.env` file:  
     ```
     VITE_APPWRITE_ENDPOINT=<your_appwrite_endpoint>
     VITE_APPWRITE_PROJECT_ID=<your_project_id>
     VITE_APPWRITE_DATABASE_ID=<your_database_id>
     ```  
4. Start the development server:  
   ```sh
   npm start
   ```  

## Problems Faced & Solutions  

### 1. **Working with Redux**  
**Problem:** Managing global state for articles and user authentication was tricky, especially with asynchronous Appwrite calls.  
**Solution:** Used `redux-thunk` for handling async API calls and structured reducers properly to keep state updates predictable.  

### 2. **React Hook Form Issues**  
**Problem:** Integrating it with Redux and Appwrite while ensuring validation rules worked correctly.  
**Solution:** Used `useController` to sync form state with Redux and ensured `onSubmit` handled async operations correctly.  

### 3. **Parser Handling**  
**Problem:** Parsing user-inputted content safely to prevent security issues and formatting errors.  
**Solution:** Used a well-sanitized parsing library and implemented additional input validation before processing.  

### 4. **Appwrite Integration**  
**Problem:** Initializing and managing Appwrite services (authentication, database, storage) was not straightforward.  
**Solution:** Created a separate `conf.js` service file to handle API requests cleanly and avoid redundant code.  

## Folder Structure  
```
/src  
  ├── components/       # Reusable UI components  
  ├── pages/            # Main pages (Home, Article, Login, etc.)  
  ├── store/            # Redux store, slices, and actions  
  ├── appwrite/         # API calls (Appwrite integration)  
  ├── App.js            # Main app component  
  ├── index.js          # Entry point  
  ├── appwrite.js       # Appwrite service configuration  
```  

## Future Improvements  
- Add user roles & permissions  
- Improve UI/UX with better design  
- Implement markdown support for articles  

## Conclusion  
This project showcases the integration of Appwrite, React, Redux, and other tools to create a micro-article website. Despite the challenges, a structured approach helped in resolving issues effectively.  

Feel free to contribute or reach out for improvements!

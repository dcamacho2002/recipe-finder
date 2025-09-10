# Recipe Finder
A web app that locates recipes based on ingredients inputted by the user. A ServiceNow application using Spoonacular API.

## Features
- Enter desired ingredients separated by commas
- Fetch recipes through Spoonacular API
- Display recipe title, image, and external link

## Built With
- ServiceNow UI Pages and Client Scripts
- Scripted REST Resource
- JavaScript, HTML/CSS

## Setup
1. **Get a ServiceNow Developer Instance**
   - Sign up for a free ServiceNow Developer instance: https://developer.servicenow.com/
   - Log in and request a personal developer instance.
  
2. **Create the application in your new instance**
   - Open ServiceNow Studio -> Create Application -> Enter Name (e.g., Recipe Finder)
   - Add HTML (UI Page), Client Script (UI Page), and Scripted REST Resource using code from this repository.
        > Example Scripted REST API settings:
           ![Screenshot 2025-09-08 at 2 29 42 PM](https://github.com/user-attachments/assets/9b0de643-8592-4934-86b6-f4e0a8dd8ce6)

        > Example Scripted REST Resource settings:
           ![Screenshot 2025-09-08 at 2 30 23 PM](https://github.com/user-attachments/assets/388ee3ca-d6d0-4a44-adb4-2d0e32e249aa)

        > Example UI Page settings:
           ![Screenshot 2025-09-08 at 2 31 10 PM](https://github.com/user-attachments/assets/d2072896-65ad-41ee-9b29-7c046d1ff3c7)
        
3. **Set up Spoonacular API Key**
   - Sign up for a Spoonacular API key: https://spoonacular.com/food-api
   - In the Scripted REST Resource code, replace:
     ```javascript
       var apiKey = "SPOONACULAR_API_KEY";
     ```
     with your own API key.

4. **Run the app**
   - Naviage the UI Page in your developer instance to test application.
   - Enter any ingredients and click "Find Recipes".
   - Example UI Page with ingredients entered:
     ![Screenshot 2025-09-08 at 9 51 25 AM](https://github.com/user-attachments/assets/4fb39ebb-ddfe-4926-a1ac-bf4c9497db73)

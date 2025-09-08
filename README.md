# recipe-finder
A web app that locates recipes based on ingredients inputted by the user. A ServiceNow application using Spoonacular API.

## Features
- Enter desired ingredients separated by commas
- Fetch recipes through Spoonacular API
- Display recipe title, image, and external link

## Technologies
- ServiceNow UI Pages and Client Scripts
- Scripted REST Resource
- JavaScript, HTML/CSS

## Setup
1. **Get a ServiceNow Developer Instance**
   - Sign up for a free ServiceNow Developer instance: https://developer.servicenow.com/
   - Log in and request a personal developer instance.
  
2. **Create the application in your new instance**
   - Studio -> Create Application -> Enter Name (e.g., Recipe Finder)
   - Add UI Page, Client Script, and Scripted REST Resource using code from this repository.

3. **Set up Spoonacular API Key**
   - Sign up for a Spoonacular API key: (https://spoonacular.com/food-api)
   - In the Scripted REST Resource code, replace:
       var apiKey = "SPOONACULAR_API_KEY";
     with your own API key.

4. **Run the app**
   - Naviage the UI Page in your developer instance to test application.
   - Enter any ingredients and click "Find Recipes".
   - Example UI Page with ingredients entered:
     ![Screenshot 2025-09-08 at 9 51 25 AM](https://github.com/user-attachments/assets/4fb39ebb-ddfe-4926-a1ac-bf4c9497db73)

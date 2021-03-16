## Project Links
.
- [add your github repo link](https://github.com/Kilimanjaro1024/Project2)
- [add your deployment link](https://6000b6ee7c353b00073c2f80--laughing-allen-42e69b.netlify.app/)

## Project Description

This app is a psuedo-companion app for World of Warcraft. This app will be focused around creating templates or plans for what you want to achieve in WoW such as finding what items you want and saving them to a BiS(best in slot) list and viewing your characters currently equiped items and stats. When playing it can be easy to get lost in all the things you have to do so this App is intended as a resource that you can look at to remind yourself whats higher on your priorites list.

## API

The World of Warcraft APIs allow you to pull information from the games files from items and achievements to characters and profiles. 


```
{{
  "_links": {
    "self": {
      "href": "https://us.api.blizzard.com/data/wow/covenant/?namespace=static-9.0.2_36532-us"
    }
  },
  "covenants": [
    {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/covenant/1?namespace=static-9.0.2_36532-us"
      },
      "name": "Kyrian",
      "id": 1
    },
    {
      "key": {
        "href": "https://us.api.blizzard.com/data/wow/covenant/2?namespace=static-9.0.2_36532-us"
      },
      "name": "Venthyr",
      "id": 2
    },
	...
	}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile](https://imgur.com/a/k5OYAdl)
- [Tablet](https://imgur.com/a/BUP1ECF)
- [Desktop](https://imgur.com/XnGzMZc)
- [React Architecture](https://imgur.com/a/oA8hnAh)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Set up file structur
	-	Main Page
	-	Bis List Page
	-	Item Search Page 
- Create Nav 
- Creat Detail Item Panel
- Create Item Search Page
	-	Search Form
	-	Item Panel Div
	-	Link Detail Item Panel
	-	Selected Item Pop-up (Mobile)
- Create Bis List Page
	-	Add Items to List
	-	Render List
	-	Link Detail Item Panel
	-	Create Stats Total Div
- Style with Scss or Sass

#### PostMVP EXAMPLE

- Render Character modle on BiS List screen
- Add Character search page
- Add Character Favorites list
- Create BiS lists tied to a specific class or spec

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Search Form | Allow the user to search for items based on name class and slot |
| Item Div | This will render a panel for an item that fits the search terms |
| Detail Item Panel | This will render the full details of a selected item  and add it to the bis list |
| Bis List Div | This will render all the items in your bis list |
| Item Pop-up Div | This will render the full item details when in mobile |
| Stats Total Div | This will render the stat totals of your bis list |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

## MVP

| Component | Priority | Estimated Time | Time Invetsted |
| --- | :---: |  :---: | :---: |
| Make Pages | H | 2hrs| 2hr |
| Set Up API Calls | H | 3hrs| 5hr |
| Set Up API Token Vendor* | H | 3hrs| 3hr |
| Search Form | H | 2hrs| 3hr |
| Item Div | M | 3hrs| 6hr | 
| Detail Item Div | M | 3hrs| hr | 
| Item Pop-up Div | M | 3hrs| 4hr | 
| Bis List Div | M | 3hrs| 7hr | 
| Stats Total Div | L | 3hrs| hr | 
| Styling | H | 6hrs| 6hr |
| Total | H | 28hrs| 36hrs | 

## Post MVP

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Render Character Modles | L | 4hrs| hr | hr |
| Character Search Page | H | 4hrs| hr | hr |
| Character Favorites List | M | 4hrs| hr | hr |
| Class Specific Bis List | M | 4hrs| hr | hr |
| Total | H | 16hrs| hrs | hrs |

## Additional Libraries
 - Scss
 - React Bootstrap

## Code Snippet

This is the function that I made to add items to the Bis List when the add button was clicked

```
let listCount = 0
const addToBisList = () =>{
    console.log("add")
        
    if(bisList.length === 0){
        setBisList(bisList =>[...bisList, itemDetails])
        console.log(bisList)
        updateBis()   
    }
    else{
        for(let i = 0; i< bisList.length; i++){
            console.log(bisList[i])
            if(bisList[i].inventory_type.type !== itemDetails.inventory_type.type){
                listCount++
                if(listCount === bisList.length){
                    setBisList(bisList =>[...bisList,itemDetails])
                    console.log(bisList)
                    updateBis()
                }             
            }
                else{
                console.log("error")
            }
            
        }
    }
}
```

## Issues and Resolutions

- Issue: blizzards API requires and access token to be generated every 24hrs.
    - Resolution: After researching this issue extensively I discovered that I could make a fetch call inorder to generate an access token, however I was unable to get my function fully working so I sidelined it for the time being.
- Issue: BiS list item slots not intitalizing on render.
    - Resolution: Instead of updating the gear object on the render of the bis list page I made it a state in app andupdated it every time an item was added to it.
- Issue: Remove button not modifying the bisList state properly.
    - Resolution: pending (I have a hunch that I need to create keys for my BisItems so that the function knows which item to remove)
- Issue: Add button was adding the selected item for for each item already in the list.
    - Resolution: I added a counter that I checked against the length of bisList and only added the item if the were equal.
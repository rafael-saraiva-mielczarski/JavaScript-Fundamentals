//Storage COntroller
const StorageCtrl = (function(){
    //Public methods
    return{
        storeItem: function(item){
            let items;
            
            //Check if any items in local Storage
            if(localStorage.getItem('items') === null){
                items = [];
                //Push new item
                items.push(item);
                //Set Ls
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                //Get what is already in ls
                items = JSON.parse(localStorage.getItem('items'));

                //Push new item
                items.push(item);

                //Re set Ls
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage: function(){
            let items;
            if(localStorage.getItem('items') === null){
                items = []
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemStorage: function(updatedItem){
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index){
                if(updatedItem.id === item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(id){
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index){
                if(id === item.id) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemsFromStorage: function(){
            localStorage.removeItem('items');
        }
    }
})()

//Item Controller
const ItemCtrl = (function(){
    
    //Item constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Structure / State
    const data = {
        // items: [
        //     // {id: 0, name: 'Steak Dinner', calories: 1200},
        //     // {id: 1, name: 'Ceaser Salad', calories: 800},
        //     // {id: 2, name: 'Eggs', calories: 300},
        // ],
        items: StorageCtrl.getItemsFromStorage(),
        currentItem: null,
        totalCalories: 0
    }

    //Public Methods
    return {
        getItems: function(){
            return data.items;

        },
        addItem: function(name, calories){
            let ID;
            //Create ID
            if(data.items.length > 0) {
                ID = data.items[data.items.length -1].id +1;
            } else {
                ID = 0
            }
            //Calories to number
            calories = parseInt(calories)

            //Create New Item
            newItem = new Item(ID, name, calories);
            //Add item to array
            data.items.push(newItem)
            return newItem
        },
        getItemById: function(id){
            let found = null;
            //Loop through items
            data.items.forEach(function(item){
                if(item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: function(name, calories){
            //Calories to number
            calories = parseInt(calories);

            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },
        deleteItem: function(id){
            //get ids
            ids = data.items.map(function(item){
                return item.id;
            });

            //Get index
            const index = ids.indexOf(id);

            //Remove item
            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
        },
        setCurrentItem: function(item) {
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem
        },
        getTotalCalories: function(){
            let total = 0;

            //Loop through item and add calories
            data.items.forEach(function(item){
                total += item.calories;
            });

            //Set total calories in data structure
            data.totalCalories = total;

            //Return total
            return data.totalCalories;
        },
        logData: function(){
            return data;

        }
    }

})();


//UI Controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearAllBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }
    //Public Methods
    return{
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            </li>`;
            });

            //Insert List Items:
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function(){
            return{
                name:document.querySelector(UISelectors.itemNameInput).value,
                calories:document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function(item){
            //Show List
            document.querySelector(UISelectors.itemList).style.display = 'block';
            //Create li element
            const li = document.createElement('li');
            //Add class
            li.className = 'collection-item';
            //Add ID
            li.id = `item-${item.id}`;
            //Add HTML
            li.innerHTML = ` <strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
            </a>`
            //Insert item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function(item){
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //Turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(listItems){
                const itemID = listItems.getAttribute('id');

                if(itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = ` <strong>${item.name}: </strong><em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>`;
                }
            });
        },
        deleteListItem: function(id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm:function (){
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function(){
            let listItems = documen.querySelectorAll(UISelectors.listItems);

            //turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function(item){
                item.remove();
            });
        },
        hideList: function(){
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function(totalCalories){
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories
        },
        clearEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },      
        showEditState: function(){
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },       
        getSelector: function(){
            return UISelectors;
        }
    }
})();


//App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
    //Function to load events
    const loadEventListeners = function(){
        //Get UI Selectors
        const UISelectors = UICtrl.getSelector();

        //Add Item Event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
        
        //Disable submit on enter click
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault();
                return false;
            }
        });

        //Edit pencil icon click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        //Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        //Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        //Back btn event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        //Clear all items btn event
        document.querySelector(UISelectors.clearAllBtn).addEventListener('click', clearAllItemsClick);
    }

    //Add Item Submit
    const itemAddSubmit = function(e){
        //Get form input from UI Controller
        const input = UICtrl.getItemInput();
        
        //Check for name and calorie input
        if(input.name !== '' && input.calories !== ''){
            //add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);
            
            //Add item to UI list
            UICtrl.addListItem(newItem);

            //Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            //Add total calories to UI
            UICtrl.showTotalCalories(totalCalories)

            //Store in localStorage
            StorageCtrl.storeItem(newItem);

            //Clear fields
            UICtrl.clearInput();
        }

        e.preventDefault();
    }

    //Click edit item
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            //Get list item id (item-0, item-1)
            const listId = e.target.parentNode.parentNode.id;

            //Break into an array
            const listIdArr = listId.split('-');
            //Get actual id
            const id = parseInt(listIdArr[1]);

            //Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            //Set current item
            ItemCtrl.setCurrentItem(itemToEdit);

            //Add item to form
            UICtrl.addItemToForm();
        }

        e.preventDefault();
    };

    //Update item submit 
    const itemUpdateSubmit = function(e){
        //Get item input
        const input = UICtrl.getItemInput();

        //Update item
        const updateItem = ItemCtrl.updateItem(input.name, input.calories);

        //Update UI
        UICtrl.updateListItem(updateItem);

        //Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories)

        //Updata local storage
        StorageCtrl.updateItemStorage(updateItem);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    //Delete button event
    const itemDeleteSubmit = function(e){
        //Get current item
        const currentItem = ItemCtrl.getCurrentItem();

        //Delete from data structure
        ItemCtrl.deleteItem(currentItem.id);

        //Delete from UI
        UICtrl.deleteListItem(currentItem.id);

         //Get total calories
         const totalCalories = ItemCtrl.getTotalCalories();

         //Add total calories to UI
         UICtrl.showTotalCalories(totalCalories)

         //Delete from local Storage
         StorageCtrl.deleteItemFromStorage(currentItem.id);

         UICtrl.clearEditState();

        e.preventDefault();
    }

    //Clear items event
    const clearAllItemsClick = function(){
        //Delete all items from data structure
        ItemCtrl.clearAllItems();

        //Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories)

        //Remove from UI
        UICtrl.removeItems();

        //Clear from local Storage
        StorageCtrl.clearItemsFromStorage()

        //Hide UL
        UICtrl.hideList();
    }

    //Public methods
    return {
        init: function(){ 
            //Clear edit State / Set initial state
            UICtrl.clearEditState();
            
            //Fetch items from data structure
            const items = ItemCtrl.getItems();

            //Check if any items
            if(items.length === 0) {
                UICtrl.hideList();
            } else {
                //Populate list with items
                UICtrl.populateItemList(items);
            }

              //Get total calories
              const totalCalories = ItemCtrl.getTotalCalories();
              //Add total calories to UI
              UICtrl.showTotalCalories(totalCalories)

            //Load event Listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, StorageCtrl, UICtrl);


//Initialize app
App.init();
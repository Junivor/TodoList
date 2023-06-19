Header.js
````javascript
<header class="header">
    <h1>todos</h1>
    <input 
        class="new-todo" 
        placeholder="What needs to be done?" 
        autofocus
    />
</header>
````
TodoList.js
````javascript
<section class="main">
    <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
        
    </ul>
</section>
````
TodoItem.js
````javascript
<li class="completed">     
    <div class="view">
        <input 
            class="toggle" 
            type="checkbox" 
            checked    
        />
        <label>Taste JavaScript</label>
        <button class="destroy"></button>
    </div>
    <input 
        class="edit" 
        value="Create a TodoMVC template"
    />
</li>
````
Footer.js
````javascript
<footer class="footer">  
    <span class="todo-count">
        <strong>0</strong> item left
    </span>
    <ul class="filters">
        <li>
            <a class="selected" href="#/">All</a>
        </li>
        <li>
            <a href="#/active">Active</a>
        </li>
        <li>
            <a href="#/completed">Completed</a>
        </li>
    </ul>
    <button class="clear-completed">Clear completed</button>         
</footer>
````

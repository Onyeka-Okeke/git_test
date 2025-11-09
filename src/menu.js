function loadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  content.innerHTML = `
    <h1>Our Menu</h1>
    <div class="menu-section">
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80" alt="Margherita Pizza">
        <h3>Margherita Pizza</h3>
        <p>Classic Italian pizza topped with fresh mozzarella, basil, and tomato sauce.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80" alt="Beef Burger">
        <h3>Beef Burger</h3>
        <p>Juicy grilled beef patty with melted cheddar, lettuce, and house sauce.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" alt="Grilled Salmon">
        <h3>Grilled Salmon</h3>
        <p>Fresh salmon fillet grilled to perfection with lemon butter glaze.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1512058564366-c9e8b12a0e2b?auto=format&fit=crop&w=600&q=80" alt="Pasta Alfredo">
        <h3>Pasta Alfredo</h3>
        <p>Creamy fettuccine pasta tossed with Parmesan and garlic sauce.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" alt="Pepperoni Pizza">
        <h3>Pepperoni Pizza</h3>
        <p>Cheesy pizza layered with spicy pepperoni and marinara sauce.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80" alt="Caesar Salad">
        <h3>Caesar Salad</h3>
        <p>Crisp romaine, croutons, and Parmesan tossed in creamy Caesar dressing.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80" alt="Sushi Platter">
        <h3>Sushi Platter</h3>
        <p>Assorted sushi rolls with fresh salmon, tuna, and avocado.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1627308595184-3d92df3c88b3?auto=format&fit=crop&w=600&q=80" alt="Fried Chicken">
        <h3>Fried Chicken</h3>
        <p>Golden crispy chicken seasoned with our secret blend of herbs.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1601050690597-6cc76b5809a9?auto=format&fit=crop&w=600&q=80" alt="Steak & Fries">
        <h3>Steak & Fries</h3>
        <p>Tender sirloin steak served with garlic butter and crispy fries.</p>
      </div>
      <div class="dish">
        <img src="https://images.unsplash.com/photo-1612874742237-652d7f67b37a?auto=format&fit=crop&w=600&q=80" alt="Chocolate Cake">
        <h3>Chocolate Cake</h3>
        <p>Rich, moist chocolate cake layered with fudge frosting and ganache.</p>
      </div>
    </div>
  `;
}
export default loadMenuPage;

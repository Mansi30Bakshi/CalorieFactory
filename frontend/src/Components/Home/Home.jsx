import React, { useRef, useState } from 'react'
import "./Home.css"

const Home = () => {
  const carouselRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");

  
  const dishes = [
    {
      id: 1,
      name: "Tangy Tandoori Paneer Melt Sandwich",
      calories: "465.8 kcal",
      image: "/tangypaneersandwich.webp",
      category: "Sandwich Saga",
      rating: 4.5
    },
    {
      id: 2,
      name: "Dalia",
      calories: "350 kcal",
      image: "/Dalia.jpg",
      category: "Breakfast",
      rating: 4.8
    },
    {
      id: 3,
      name: "Poha",
      calories: "300 kcal",
      image: "/Poha.webp",
      category: "Breakfast",
      rating: 4.7
    },
    {
      id: 4,
      name: "Vegetable Upma",
      calories: "350 kcal",
      image: "/Upma.jpg",
      category: "Breakfast",
      rating: 4.5
    },
    {
      id: 5,
      name: "Shakshouka",
      calories: "320 kcal",
      image: "/Shakshouka.jpg",
      category: "Breakfast",
      rating: 4.2
    },
    {
      id: 6,
      name: "Almond Roti",
      calories: "84 cal",
      image: "/ARoti.jpg",
      category: "Healthy Breads",
      rating: 4.1
    },
    {
      id: 7,
      name: "Beetroot Roti",
      calories: "58 cal",
      image: "/BRoti.jpeg",
      category: "Healthy Breads",
      rating: 4.9
    },
    {
      id: 8,
      name: "Chicken Barbeque Rice Bowl",
      calories: "500 cal",
      image: "/CBRB.jpg",
      category: "Nutri Rice Creations",
      rating: 4.8
    },
    {
      id: 9,
      name: "Paneer tikka rice bowl",
      calories: "300 kcal",
      image: "/PTRB.webp",
      category: "Nutri Rice Creations",
      rating: 4.7
    },
    {
      id: 10,
      name: "Whole Wheat Paneer Tikka Pizza",
      calories: "280 cal",
      image: "/PTP.jpg",
      category: "Pizza Party Central",
      rating: 4.9
    },
    {
      id: 11,
      name: "Whole Wheat Chicken Tikka Pizza",
      calories: "180 kcal",
      image: "/CTP.jpg",
      category: "Pizza Party Central",
      rating: 4.6
    },
    {
      id: 16,
      name: "Triple Mushroom Dimsums",
      calories: "190 cal",
      image: "/3Dim.jpg",
      category: "Dimsums",
      rating: 4.4
    },
    {
      id: 17,
      name: "Tofu Dimsum",
      calories: "170 cal",
      image: "/TD.jpg",
      category: "Dimsums",
      rating: 4.6
    },
    {
      id: 18,
      name: "Velvet Alfredo Penne Pasta",
      calories: "480 kcal",
      image: "/VP.jpg",
      category: "La Pasta Bella",
      rating: 4.2
    },
    {
      id: 19,
      name: "mix maki roll",
      calories: "300 cal",
      image: "/MR.jpg",
      category: "Sushi",
      rating: 4.3
    },
    {
      id: 20,
      name: "Wholesome Malai Chaap",
      calories: "500 cal",
      image: "/MC.avif",
      category: "Lean and Green Soya",
      rating: 4.1
    },
    {
      id: 21,
      name: "Greek-style Lettuce Salad",
      calories: "180 cal",
      image: "/GS.jpg",
      category: "Power Leaf Bowls",
      rating: 4.7
    },
    {
      id: 22,
      name: "Paneer Malai Tikka Wrap",
      calories: "430 cal",
      image: "/MTW.webp",
      category: "Wraps",
      rating: 4.8
    },
    {
      id: 23,
      name: "Low Calorie Coffee",
      calories: "5 cal",
      image: "/COF.jpg",
      category: "Drinks",
      rating: 4.2
    },
    {
      id: 24,
      name: "Sugarfree Mint Mojito",
      calories: "7 cal",
      image: "/MM.webp",
      category: "Drinks",
      rating: 4.3
    },
  ];

  const categories = ["All","Breakfast","Healthy Breads","Nutri Rice Creations","Sandwich Saga","Pizza Party Central","La Pasta Bella","Dimsums","Sushi","Lean and Green Soya","Power Leaf Bowls","Wraps","Drinks"];

  const filteredDishes = activeCategory === "All" 
    ? dishes 
    : dishes.filter(dish => dish.category === activeCategory);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Track Your Calories, <br />
            <span className="highlight">Enjoy Your Food</span>
          </h1>
          <p className="hero-subtitle">
            Delicious and healthy meals with complete calorie information.
            Eat smart, stay fit!
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View Menu</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/HPI.jpg" 
            alt="Healthy Food"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🥗</div>
            <h3>Healthy Options</h3>
            <p>Fresh ingredients, balanced nutrition for every meal</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Calorie Count</h3>
            <p>Exact calorie information for every dish</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Free delivery within 30 minutes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💚</div>
            <h3>100% Fresh</h3>
            <p>Cooked fresh when you order</p>
          </div>
        </div>
      </section>

      {/* Popular Dishes Carousel Section */}
      <section className="carousel-section">
        <div className="section-header">
          <h2 className="section-title">Our Bestsellers</h2>
          <p className="section-subtitle">Most loved items by our customers</p>
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={scrollLeft}>
            ‹
          </button>
          
          <div className="carousel-track" ref={carouselRef}>
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <div className="dish-image">
                  <img src={dish.image} alt={dish.name} />
                  <span className="dish-category">{dish.category}</span>
                </div>
                <div className="dish-info">
                  <h3 className="dish-name">{dish.name}</h3>
                  <div className="dish-rating">
                    {'★'.repeat(Math.floor(dish.rating))}
                    {'☆'.repeat(5 - Math.floor(dish.rating))}
                    <span>{dish.rating}</span>
                  </div>
                  <div className="dish-details">
                    <span className="dish-calories">{dish.calories}</span>
                    <span className="dish-price">{dish.price}</span>
                  </div>
                  <button className="add-to-cart">Complete Menu?</button>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={scrollRight}>
            ›
          </button>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="offer-section">
        <div className="offer-content">
          <h2>Special Offer</h2>
          <h3>Get 20% Off on Your First Order</h3>
          <p>Use code: CALORIE20</p>
          <button className="btn btn-primary">Order Now</button>
        </div>
        <div className="offer-image">
          <img 
            src="/logo.avif" 
            alt="Special Offer"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-rating">★★★★★</div>
            <p>"Had a great experience with Calorie Factory. The chaap had amazing seasoning and texture, and the dimsums were juicy and full of flavour. If you enjoy good vegetarian snacks, this place is a must-try!"</p>
            <div className="testimonial-author">
              <strong>- Varun Khurana</strong>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">★★★★★</div>
            <p>"I rarely give 5/5 reviews to any restaurant but guilt free eating made me do it. They mention the calories plus macros and their ingredients are super fresh. I ordered their Thai Grilled Tofu Paneer Rice Bowl and it felt homemade and personalised. If you are into healthy eating please try this once!🤤"</p>
            <div className="testimonial-author">
              <strong>- Dev Satija</strong>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">★★★★☆</div>
            <p>"Hygiene is always one of the major priorities and I gotta say you guys are really careful about that 😀"</p>
            <div className="testimonial-author">
              <strong>- Priya Patel</strong>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
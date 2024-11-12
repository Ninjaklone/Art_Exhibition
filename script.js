//home.js
document.addEventListener('DOMContentLoaded', function() {
    const slideshowWrapper = document.querySelector('.slide-wrapper');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    const featuredArtworks = [
        {
            title: "Ethereal Landscapes",
            artist: "Emma Rodriguez",
            image: "Gallery/pexels-heftiba-1194420.jpg",
            description: "A mesmerizing exploration of natural beauty"
        },
        {
            title: "Urban Rhythms",
            artist: "Michael Chen",
            image: "Gallery/pexels-steve-1572386.jpg",
            description: "Capturing the pulse of city life"
        },
        {
            title: "Urban Symphony",
            artist: "Michael Chen",
            image: "Gallery/pexels-heftiba-1194420.jpg",
            category: "Urban Landscape"
        },
        {
            title: "City Lights",
            artist: "Dannie Jing",
            image: "Gallery/dannie-jing-3GZlhROZIQg-unsplash.jpg",
            category: "Urban Photography"
        },
        {
            title: "Industrial Landscape",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-39348.jpg",
            category: "Industrial Art"
        },
        {
            title: "Geometric Patterns",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-159862.jpg",
            category: "Abstract"
        },
        {
            title: "Minimalist Composition",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-161154.jpg",
            category: "Minimalism"
        },
        {
            title: "Architectural Symmetry",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-164455.jpg",
            category: "Architecture"
        },
        {
            title: "Urban Reflections",
            artist: "Steve",
            image: "Gallery/pexels-steve-1109352.jpg",
            category: "Urban Photography"
        },
        {
            title: "City Shadows",
            artist: "Steve",
            image: "Gallery/pexels-steve-1109354.jpg",
            category: "Urban Landscape"
        },
        {
            title: "Modern Architecture",
            artist: "Steve",
            image: "Gallery/pexels-steve-1183992.jpg",
            category: "Architecture"
        },
        {
            title: "Urban Geometry",
            artist: "Steve",
            image: "Gallery/pexels-steve-1572386.jpg",
            category: "Abstract Urban"
        },
        {
            title: "City Skyline",
            artist: "Steve",
            image: "Gallery/pexels-steve-1585325.jpg",
            category: "Urban Landscape"
        },
        {
            title: "Abstract Urban",
            artist: "W W",
            image: "Gallery/pexels-w-w-299285-889839.jpg",
            category: "Abstract"
        }
    ];

    let currentSlide = 0;

    // Create slides
    function createSlides() {
        slideshowWrapper.innerHTML = ''; // Clear existing content
        featuredArtworks.forEach((artwork, index) => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            if (index === 0) slide.classList.add('active');

            slide.innerHTML = `
                <img src="${artwork.image}" alt="${artwork.title}">
                <div class="slide-caption">
                    <h3>${artwork.title}</h3>
                    <p>${artwork.artist}</p>
                    <p>${artwork.description}</p>
                </div>
            `;

            slideshowWrapper.appendChild(slide);
        });
    }

    // Show specific slide
    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        
        // Remove active class from all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Adjust index if out of bounds
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;

        // Add active class to current slide
        slides[currentSlide].classList.add('active');
    }

    // Next slide
    function nextSlide() {
        currentSlide++;
        showSlide(currentSlide);
    }

    // Previous slide
    function prevSlide() {
        currentSlide--;
        showSlide(currentSlide);
    }

    // Initialize slideshow
    createSlides();

    // Add event listeners to navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Optional: Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});



//gallery.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    const artworks = [
        {
            title: "Urban Symphony",
            artist: "Michael Chen",
            image: "Gallery/pexels-heftiba-1194420.jpg",
            category: "Urban Landscape"
        },
        {
            title: "City Lights",
            artist: "Dannie Jing",
            image: "Gallery/dannie-jing-3GZlhROZIQg-unsplash.jpg",
            category: "Urban Photography"
        },
        {
            title: "Industrial Landscape",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-39348.jpg",
            category: "Industrial Art"
        },
        {
            title: "Geometric Patterns",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-159862.jpg",
            category: "Abstract"
        },
        {
            title: "Minimalist Composition",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-161154.jpg",
            category: "Minimalism"
        },
        {
            title: "Architectural Symmetry",
            artist: "Unknown",
            image: "Gallery/pexels-pixabay-164455.jpg",
            category: "Architecture"
        },
        {
            title: "Urban Reflections",
            artist: "Steve",
            image: "Gallery/pexels-steve-1109352.jpg",
            category: "Urban Photography"
        },
        {
            title: "City Shadows",
            artist: "Steve",
            image: "Gallery/pexels-steve-1109354.jpg",
            category: "Urban Landscape"
        },
        {
            title: "Modern Architecture",
            artist: "Steve",
            image: "Gallery/pexels-steve-1183992.jpg",
            category: "Architecture"
        },
        {
            title: "Urban Geometry",
            artist: "Steve",
            image: "Gallery/pexels-steve-1572386.jpg",
            category: "Abstract Urban"
        },
        {
            title: "City Skyline",
            artist: "Steve",
            image: "Gallery/pexels-steve-1585325.jpg",
            category: "Urban Landscape"
        },
        {
            title: "Abstract Urban",
            artist: "W W",
            image: "Gallery/pexels-w-w-299285-889839.jpg",
            category: "Abstract"
        }
    ];

    let displayedArtworks = 6;

    function renderGallery(start, end) {
        const fragment = document.createDocumentFragment();
        
        artworks.slice(start, end).forEach(artwork => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-4';
            
            col.innerHTML = `
                <div class="card h-100">
                    <a href="${artwork.image}" data-lightbox="gallery" data-title="${artwork.title}">
                        <img src="${artwork.image}" class="card-img-top" alt="${artwork.title}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${artwork.title}</h5>
                        <p class="card-text">Artist: ${artwork.artist}</p>
                        <span class="badge bg-secondary">${artwork.category}</span>
                    </div>
                </div>
            `;
            
            fragment.appendChild(col);
        });

        galleryGrid.appendChild(fragment);
    }

    // Initial render
    renderGallery(0, displayedArtworks);

    loadMoreBtn.addEventListener('click', function() {
        displayedArtworks += 3;
        renderGallery(displayedArtworks - 3, displayedArtworks);

        if (displayedArtworks >= artworks.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
});


//Award.js
document.addEventListener('DOMContentLoaded', function() {
    const contestList = document.getElementById('contestList');
    const winnersList = document.getElementById('winnersList');
    const awardCategories = document.getElementById('awardCategories');

    const contests = [
        { name: "Best Contemporary Art", deadline: "February 28, 2024" },
        { name: "Emerging Artist Award", deadline: "March 15, 2024" }
    ];

    const winners = [
        { name: "Emma Rodriguez", artwork: "Ethereal Landscapes" },
        { name: "Michael Chen", artwork: "Urban Rhythms" }
    ];

    const categories = [
        "Best Painting",
        "Best Sculpture",
        "Best Digital Art",
        "People's Choice Award"
    ];

    contests.forEach(contest => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${contest.name} - Deadline: ${contest.deadline}`;
        contestList.appendChild(listItem);
    });

    winners.forEach(winner => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${winner.name} - Artwork: ${winner.artwork}`;
        winnersList.appendChild(listItem);
    });

    categories.forEach(category => {
        const listItem = document.createElement('li');
        listItem.textContent = category;
        awardCategories.appendChild(listItem);
    });
});


//Contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation
        if (!name || !email || !message) {
            alert('Please fill out all fields');
            return;
        }

        // Simulate form submission (replace with actual backend logic)
        console.log('Form Submitted', { name, email, message });

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form
        contactForm.reset();
    });
});
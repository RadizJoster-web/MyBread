CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category ENUM('Cake', 'Cookies', 'Drink', 'Pastry') NOT NULL,
    price INT NOT NULL,
    originalPrice INT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    tag ENUM('Best Seller', 'New Product') NULL,
    rating DECIMAL(2,1) NOT NULL,
    reviewCount INT NOT NULL
);  
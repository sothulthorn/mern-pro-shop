# ProShop eCommerce Project

![](/assets/home.png)

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
  - [Usage](#usage)
- [Project Preview](#project-preview)

## Overview

This is a comprehensive e-commerce project represents a modern and innovative approach to online shopping, combining cutting-edge technologies with user-centric design principles to deliver an unparalleled shopping experience. Whether it's browsing for products, leaving reviews, or completing transactions, users can expect a seamless and enjoyable journey from start to finish.

## Technology Stack

- **MongoDB**: For database storage of product information, user profiles, orders, and reviews.
- **Express.js**: To handle server-side logic and routing.
- **React.js**: For building a dynamic and interactive user interface.
- **Node.js**: As the runtime environment for server-side logic.
- **PayPal / Credit Card Integration**: To facilitate secure payment transactions.

## Features

1. **Full-Featured Shopping Cart**: Users can add products to their cart, update quantities, and proceed to checkout.
2. **Product Reviews and Ratings**: Allow users to leave reviews and ratings for products, contributing to an informed purchasing decision for other users.
3. **Top Products Carousel**: Showcase top-selling or featured products in a visually appealing carousel on the homepage.
4. **Product Pagination**: Implement pagination for browsing through a large number of products efficiently.
5. **Product Search Feature**: Enable users to search for products based on keywords or specific criteria.
6. **User Profile with Orders**: Users can create profiles, view their order history, and manage account details.
7. **Admin Product Management**: Administrators can add, edit, and delete products from the inventory.
8. **Admin User Management**: Administrators have the ability to manage user accounts, including creation, deletion, and modification.
9. **Admin Order Details Page**: Provide administrators with a detailed view of each order, including order status, items purchased, and customer information.
10. **Mark Orders as Delivered Option**: Admins can update the status of orders to indicate when they have been delivered.

11. **Checkout Process**: Implement a smooth checkout process including shipping options, payment method selection, and order summary.

12. **PayPal / Credit Card Integration**: Integrate PayPal and credit card payment methods to offer users secure and convenient payment options.

## Getting Started

Follow these steps to set up the project locally on your machine:

### Prerequisites

Make sure you have the following software installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://react.dev/)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/sothulthorn/mern-proshop.git
```

2. Navigate to the project directory:

```bash
cd mern-proshop
```

#### Backend Setup

Now, let's set up the backend of the proshop project.

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file:

```bash
NODE_ENV=YOUR_NODE_ENVIRONMENT
PORT=YOUR_PORT
MONGODB_URI=YOUR_MONGODB_URI
JWT_SECRET=YOUR_JWT_SECRET
PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
PAGINATION_LIMIT=YOUR_PAGINATION_LIMIT
```

#### Frontend Setup

Now, let's set up the frontend of the proshop project.

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Go back to your main directory (mern-proshop) and Start the development server:

```bash
npm run dev
```

#### Usage

Visit `http://localhost:3000/` in your browser to access the full application, seamlessly integrating the backend and frontend.

## Project Preview

### Users

#### Sign In

![](/assets/sign-in.png)

#### Sign Up

![](/assets/sign-up.png)

#### User Profile

![](/assets/user-profile.png)

#### Product Description

![](/assets/product-description.png)

### Shopping Cart

![](/assets/shopping-cart.png)

#### Shipping

![](/assets/shipping.png)

#### Payment Method

![](/assets/payment-method.png)

#### Place Order

![](/assets/place-order.png)

#### Order

![](/assets/order.png)

### Admin

#### Products List

![](/assets/admin-productlist.png)

#### Edit Product

![](/assets/admin-edit-product.png)

#### User List

![](/assets/admin-userlist.png)

#### Order List

![](/assets/admin-orderlist.png)

-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-08-2017 a las 05:52:54
-- Versión del servidor: 10.1.16-MariaDB
-- Versión de PHP: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `imprek`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`, `is_active`) VALUES
(1, 'epson', 1),
(2, 'hewlett-packard-(HP)', 1),
(3, 'canon', 1),
(4, 'brother', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `is_active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `is_active`) VALUES
(1, 'sistemas-continuos', 1),
(2, 'impresoras', 1),
(3, 'tinta', 1),
(4, 'papel', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prices`
--

CREATE TABLE `prices` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `prices`
--

INSERT INTO `prices` (`id`, `name`) VALUES
(1, 'base'),
(2, 'offer'),
(3, 'wholesaler');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `ml_id` int(10) UNSIGNED NOT NULL,
  `category_id` tinyint(3) UNSIGNED NOT NULL,
  `brand_id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `price` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` varchar(400) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_offer_mode` tinyint(1) NOT NULL,
  `has_stock` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `ml_id`, `category_id`, `brand_id`, `name`, `price`, `date`, `description`, `is_active`, `is_offer_mode`, `has_stock`) VALUES
(1, 0, 1, 1, 'CISS Epson XP211 - 50cc', 499, '2017-06-01', '', 1, 0, 0),
(2, 0, 1, 1, 'CISS Epson XP211 - 100cc', 599, '2017-06-01', '', 1, 0, 1),
(3, 0, 1, 1, 'CISS Epson TX135 - 100cc', 599, '2017-06-02', '', 1, 0, 1),
(4, 0, 2, 1, 'Impresora Epson L850', 13299, '2017-06-10', 'Impresora multifunción Epson L850 inalámbrica. Sistema continuo original de Tinta DYE Epson.', 1, 0, 1),
(5, 0, 2, 2, 'Impresora HP Deskjet 3775', 2199, '2017-06-06', 'Impresora HP Deskjet 3775 con Sistema Continuo Imprek con 400cc de Tintas DYE.', 1, 0, 1),
(6, 0, 1, 1, 'CISS Epson TX420w - 100cc', 619, '2017-08-20', 'Sistema continuo Imprek compatible con impresoras Epson TX420w', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_prices`
--

CREATE TABLE `products_prices` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `price_id` tinyint(3) UNSIGNED NOT NULL,
  `value` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products_prices`
--

INSERT INTO `products_prices` (`id`, `product_id`, `price_id`, `value`) VALUES
(1, 1, 1, 499),
(2, 2, 1, 599),
(3, 3, 1, 599),
(4, 4, 1, 13299),
(5, 5, 1, 2199),
(6, 6, 1, 619),
(7, 6, 2, 548);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `username`, `password`) VALUES
(1, 'Leonardo', 'Lewandowski', 'lewan', 'lewan');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prices`
--
ALTER TABLE `prices`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products_prices`
--
ALTER TABLE `products_prices`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `prices`
--
ALTER TABLE `prices`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `products_prices`
--
ALTER TABLE `products_prices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

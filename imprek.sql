-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-09-2017 a las 05:09:57
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
-- Estructura de tabla para la tabla `instructives`
--

CREATE TABLE `instructives` (
  `id` int(10) UNSIGNED NOT NULL,
  `brand_id` tinyint(3) UNSIGNED NOT NULL,
  `type_id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instructive_products`
--

CREATE TABLE `instructive_products` (
  `id` int(10) UNSIGNED NOT NULL,
  `instructive_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instructive_types`
--

CREATE TABLE `instructive_types` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `instructive_types`
--

INSERT INTO `instructive_types` (`id`, `name`) VALUES
(1, 'instalacion y uso de sistema continuo'),
(2, 'instalacion y uso de cartuchos recargables'),
(3, 'soporte tecnico'),
(4, 'reseteo de contador de copias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locations`
--

CREATE TABLE `locations` (
  `id` int(10) UNSIGNED NOT NULL,
  `province_id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `shipping_group_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `locations`
--

INSERT INTO `locations` (`id`, `province_id`, `name`, `shipping_group_id`) VALUES
(1, 1, 'Adolfo Gonzales Chaves', 2),
(2, 1, 'Aguas Verdes', 2),
(3, 1, 'Alberti', 2),
(4, 1, 'Arenas Verdes', 2),
(5, 1, 'Arrecifes', 2),
(6, 1, 'Ayacucho', 2),
(7, 1, 'Azul', 2),
(8, 1, 'Bahia Blanca', 2),
(9, 1, 'Bahia San Blas', 2),
(10, 1, 'Balcarce', 2),
(11, 1, 'Balneario San Cayetano', 2),
(12, 1, 'Baradero', 2),
(13, 1, 'Benito Juarez', 2),
(14, 1, 'Berisso', 2),
(15, 1, 'Bolivar', 2),
(16, 1, 'Bragado', 2),
(17, 1, 'Brandsen', 2),
(18, 1, 'Campana', 2),
(19, 1, 'Canuelas', 2),
(20, 1, 'Capilla del Senor', 2),
(21, 1, 'Capitan Sarmiento', 2),
(22, 1, 'Carhue', 2),
(23, 1, 'Carilo', 2),
(24, 1, 'Carlos Casares', 2),
(25, 1, 'Carlos Keen', 2),
(26, 1, 'Carlos Tejedor', 2),
(27, 1, 'Carmen de Areco', 2),
(28, 1, 'Carmen de Patagones', 2),
(29, 1, 'Castelli', 2),
(30, 1, 'Chacabuco', 2),
(31, 1, 'Chapadmalal', 2),
(32, 1, 'Chascomus', 2),
(33, 1, 'Chivilcoy', 2),
(34, 1, 'Ciudad de Buenos Aires', 2),
(35, 1, 'Claromeco', 2),
(36, 1, 'Colon', 2),
(37, 1, 'Coronel Dorrego', 2),
(38, 1, 'Coronel Pringles', 2),
(39, 1, 'Coronel Suarez', 2),
(40, 1, 'Coronel Vidal', 2),
(41, 1, 'Costa Azul', 2),
(42, 1, 'Costa Chica', 2),
(43, 1, 'Costa del Este', 2),
(44, 1, 'Costa Esmeralda', 2),
(45, 1, 'Daireaux', 2),
(46, 1, 'Dolores', 2),
(47, 1, 'Ensenada', 2),
(48, 1, 'Escobar', 2),
(49, 1, 'Exaltacion de la Cruz', 2),
(50, 1, 'Ezeiza', 2),
(51, 1, 'Florentino Ameghino', 2),
(52, 1, 'General Belgrano', 2),
(53, 1, 'General Lamadrid', 2),
(54, 1, 'General Las Heras', 2),
(55, 1, 'General Lavalle', 2),
(56, 1, 'General Madariaga', 2),
(57, 1, 'General Pinto', 2),
(58, 1, 'General Rodriguez', 2),
(59, 1, 'General Villegas', 2),
(60, 1, 'Guamini', 2),
(61, 1, 'Huanguelen', 2),
(62, 1, 'Junin', 2),
(63, 1, 'La Lucila del Mar', 2),
(64, 1, 'La Plata', 2),
(65, 1, 'Las Gaviotas', 2),
(66, 1, 'Las Flores', 2),
(67, 1, 'Las Toninas', 2),
(68, 1, 'Lincoln', 2),
(69, 1, 'Loberia', 2),
(70, 1, 'Lobos', 2),
(71, 1, 'Los Toldos', 2),
(72, 1, 'Lujan', 2),
(73, 1, 'Magdalena', 2),
(74, 1, 'Maipu', 2),
(75, 1, 'Mar Azul', 2),
(76, 1, 'Mar Chiquita', 2),
(77, 1, 'Mar de Ajo', 2),
(78, 1, 'Mar de Cobo', 2),
(79, 1, 'Mar de las Pampas', 2),
(80, 1, 'Mar del Plata', 2),
(81, 1, 'Mar del Sur', 2),
(82, 1, 'Mar del Tuyu', 2),
(83, 1, 'Marisol', 2),
(84, 1, 'Medanos', 2),
(85, 1, 'Mercedes', 2),
(86, 1, 'Miramar', 2),
(87, 1, 'Monte Hermoso', 2),
(88, 1, 'Navarro', 2),
(89, 1, 'Necochea', 2),
(90, 1, 'Nueva Atlantis', 2),
(91, 1, 'Nueve de Julio', 2),
(92, 1, 'Olavarria', 2),
(93, 1, 'Orense', 2),
(94, 1, 'Oriente', 2),
(95, 1, 'Ostende', 2),
(96, 1, 'Pedro Luro', 2),
(97, 1, 'Pehuajo', 2),
(98, 1, 'Pehuen Co', 2),
(99, 1, 'Pergamino', 2),
(100, 1, 'Pigue', 2),
(101, 1, 'Pilar', 2),
(102, 1, 'Pinamar', 2),
(103, 1, 'Pinar del Sol', 2),
(104, 1, 'Pipinas', 2),
(105, 1, 'Puan', 2),
(106, 1, 'Punta Alta', 2),
(107, 1, 'Punta Indio', 2),
(108, 1, 'Punta Medanos', 2),
(109, 1, 'Quequen', 2),
(110, 1, 'Quilmes', 2),
(111, 1, 'Ramallo', 2),
(112, 1, 'Ranchos', 2),
(113, 1, 'Rauch', 2),
(114, 1, 'Reta', 2),
(115, 1, 'Rivadavia Buenos Aires', 2),
(116, 1, 'Rojas', 2),
(117, 1, 'Roque Perez', 2),
(118, 1, 'Saavedra', 2),
(119, 1, 'Saladillo', 2),
(120, 1, 'Saldungaray', 2),
(121, 1, 'Salto', 2),
(122, 1, 'San Andres de Giles', 2),
(123, 1, 'San Antonio de Areco', 2),
(124, 1, 'San Bernardo', 2),
(125, 1, 'San Cayetano', 2),
(126, 1, 'San Clemente del Tuyu', 2),
(127, 1, 'San Fernando', 2),
(128, 1, 'San Isidro', 2),
(129, 1, 'San Miguel del Monte', 2),
(130, 1, 'San Nicolas', 2),
(131, 1, 'San Pedro', 2),
(132, 1, 'Santa Clara del Mar', 2),
(133, 1, 'Santa Teresita', 2),
(134, 1, 'Sierras Bayas', 2),
(135, 1, 'Sierra de la Ventana', 2),
(136, 1, 'Sierra de los Padres', 2),
(137, 1, 'Suipacha', 2),
(138, 1, 'Tandil', 2),
(139, 1, 'Tapalque', 2),
(140, 1, 'Tigre', 2),
(141, 1, 'Tornquist', 2),
(142, 1, 'Tomas Jofre', 2),
(143, 1, 'Treinta de Agosto', 2),
(144, 1, 'Trenque Lauquen', 2),
(145, 1, 'Tres Arroyos', 2),
(146, 1, 'Valeria del Mar', 2),
(147, 1, 'Vedia', 2),
(148, 1, 'Veinticinco de Mayo', 2),
(149, 1, 'Veronica', 2),
(150, 1, 'Vicente Casares', 2),
(151, 1, 'Villa Gesell', 2),
(152, 1, 'Villalonga', 2),
(153, 1, 'Villa La Arcadia', 2),
(154, 1, 'Villa Serrana La Gruta', 2),
(155, 1, 'Villa Ventana', 2),
(156, 1, 'Zarate', 2),
(157, 2, 'Aconquija', 1),
(158, 2, 'Alijilan', 1),
(159, 2, 'Ancasti', 1),
(160, 2, 'Andalgala', 1),
(161, 2, 'Antofagasta', 1),
(162, 2, 'Belen', 1),
(163, 2, 'El Alto', 1),
(164, 2, 'El Rodeo', 1),
(165, 2, 'Fiambala', 1),
(166, 2, 'Icano', 1),
(167, 2, 'La Paz', 1),
(168, 2, 'La Puerta', 1),
(169, 2, 'Las Juntas', 1),
(170, 2, 'Los Altos', 1),
(171, 2, 'Paclin', 1),
(172, 2, 'Poman', 1),
(173, 2, 'Recreo', 1),
(174, 2, 'San Fernando del Valle', 1),
(175, 2, 'San Isidro', 1),
(176, 2, 'Santa Maria', 1),
(177, 2, 'Saujil', 1),
(178, 2, 'Sumampa', 1),
(179, 2, 'Tinogasta', 1),
(180, 2, 'Villa Las Pirquitas', 1),
(181, 3, 'Avia Terai', 1),
(182, 3, 'Charata', 1),
(183, 3, 'El Sauzalito', 1),
(184, 3, 'Fuerte Esperanza', 1),
(185, 3, 'Gancedo', 1),
(186, 3, 'General Pinedo', 1),
(187, 3, 'General San Martin', 1),
(188, 3, 'General Vedia', 1),
(189, 3, 'Hermoso Campo', 1),
(190, 3, 'Isla del Cerrito', 1),
(191, 3, 'Juan Jose Castelli', 1),
(192, 3, 'Las Brenas', 1),
(193, 3, 'Machagai', 1),
(194, 3, 'Mision Nueva Pompeya', 1),
(195, 3, 'Pampa del Indio', 1),
(196, 3, 'Puerto Tirol', 1),
(197, 3, 'Resistencia', 1),
(198, 3, 'Roque Saenz Pena', 1),
(199, 3, 'Villa Angela', 1),
(200, 3, 'Villa Rio Bermejito', 1),
(201, 4, 'Alto Rio Senguer', 1),
(202, 4, 'Bahia Bustamante', 1),
(203, 4, 'Camarones', 1),
(204, 4, 'Cholila', 1),
(205, 4, 'Comodoro Rivadavia', 1),
(206, 4, 'Corcovado', 1),
(207, 4, 'El Hoyo', 1),
(208, 4, 'El Maiten', 1),
(209, 4, 'Epuyen', 1),
(210, 4, 'Esquel', 1),
(211, 4, 'Gaiman', 1),
(212, 4, 'Gobernador Costa', 1),
(213, 4, 'Jose de San Martin', 1),
(214, 4, 'Lago Puelo', 1),
(215, 4, 'Playa Union', 1),
(216, 4, 'Puerto Madryn', 1),
(217, 4, 'Puerto Piramides', 1),
(218, 4, 'Rawson', 1),
(219, 4, 'Rada Tilly', 1),
(220, 4, 'Rio Mayo', 1),
(221, 4, 'Rio Pico', 1),
(222, 4, 'Sarmiento', 1),
(223, 4, 'Trelew', 1),
(224, 4, 'Trevelin', 1),
(225, 4, 'Villa Ameghino', 1),
(226, 4, 'Villa Futalaufquen', 1),
(227, 5, 'Agronomia', 2),
(228, 5, 'Almagro', 2),
(229, 5, 'Balvanera', 2),
(230, 5, 'Barracas', 2),
(231, 5, 'Belgrano', 2),
(232, 5, 'Boedo', 2),
(233, 5, 'Caballito', 2),
(234, 5, 'Chacarita', 2),
(235, 5, 'Coghlan', 2),
(236, 5, 'Colegiales', 2),
(237, 5, 'Constitucion', 2),
(238, 5, 'Flores', 2),
(239, 5, 'Floresta', 2),
(240, 5, 'La Boca', 2),
(241, 5, 'La Paternal', 2),
(242, 5, 'Liniers', 2),
(243, 5, 'Mataderos', 2),
(244, 5, 'Monte Castro', 2),
(245, 5, 'Montserrat', 2),
(246, 5, 'Nueva Pompeya', 2),
(247, 5, 'Nunez', 2),
(248, 5, 'Palermo', 2),
(249, 5, 'Parque Avellaneda', 2),
(250, 5, 'Parque Chacabuco', 2),
(251, 5, 'Parque Chas', 2),
(252, 5, 'Parque Patricios', 2),
(253, 5, 'Puerto Madero', 2),
(254, 5, 'Recoleta', 2),
(255, 5, 'Retiro', 2),
(256, 5, 'Saavedra', 2),
(257, 5, 'San Cristobal', 2),
(258, 5, 'San Nicolas', 2),
(259, 5, 'San Telmo', 2),
(260, 5, 'Versalles', 2),
(261, 5, 'Villa Crespo', 2),
(262, 5, 'Villa Devoto', 2),
(263, 5, 'Villa General Mitre', 2),
(264, 5, 'Villa Lugano', 2),
(265, 5, 'Villa Luro', 2),
(266, 5, 'Villa Ortuzar', 2),
(267, 5, 'Villa Pueyrredon', 2),
(268, 5, 'Villa Real', 2),
(269, 5, 'Villa Riachuelo', 2),
(270, 5, 'Villa Santa Rita', 2),
(271, 5, 'Villa Soldati', 2),
(272, 5, 'Villa Urquiza', 2),
(273, 5, 'Villa del Parque', 2),
(274, 5, 'Velez Sarsfield', 2),
(275, 6, 'Achiras', 1),
(276, 6, 'Agua de Oro', 1),
(277, 6, 'Alcira Gigena', 1),
(278, 6, 'Almafuerte', 1),
(279, 6, 'Alpa Corral', 1),
(280, 6, 'Alta Gracia', 1),
(281, 6, 'Amboy', 1),
(282, 6, 'Anisacate', 1),
(283, 6, 'Arroyito', 1),
(284, 6, 'Arroyo de los Patos', 1),
(285, 6, 'Ascochinga', 1),
(286, 6, 'Athos Pampa', 1),
(287, 6, 'Balnearia', 1),
(288, 6, 'Bell Ville', 1),
(289, 6, 'Bialet Masse', 1),
(290, 6, 'Cabalango', 1),
(291, 6, 'Calmayo', 1),
(292, 6, 'Capilla del Monte', 1),
(293, 6, 'Casa Grande', 1),
(294, 6, 'Cerro Colorado', 1),
(295, 6, 'Charbonier', 1),
(296, 6, 'Colonia Caroya', 1),
(297, 6, 'Copacabana', 1),
(298, 6, 'Cordoba Capital', 1),
(299, 6, 'Cosquin', 1),
(300, 6, 'Cruz Alta', 1),
(301, 6, 'Cruz Chica', 1),
(302, 6, 'Cruz del Eje', 1),
(303, 6, 'Cruz Grande', 1),
(304, 6, 'Cuesta Blanca', 1),
(305, 6, 'Dean Funes', 1),
(306, 6, 'Del Campillo', 1),
(307, 6, 'Despenaderos', 1),
(308, 6, 'El Durazno', 1),
(309, 6, 'Embalse', 1),
(310, 6, 'General Deheza', 1),
(311, 6, 'General Levalle', 1),
(312, 6, 'Hernando', 1),
(313, 6, 'Huerta Grande', 1),
(314, 6, 'Huinca Renanco', 1),
(315, 6, 'Icho Cruz', 1),
(316, 6, 'Intiyaco', 1),
(317, 6, 'Ischilin', 1),
(318, 6, 'James Craik', 1),
(319, 6, 'Jesus Maria', 1),
(320, 6, 'La Bolsa', 1),
(321, 6, 'Laboulaye', 1),
(322, 6, 'La Calera', 1),
(323, 6, 'La Carlota', 1),
(324, 6, 'La Cesira', 1),
(325, 6, 'La Cruz', 1),
(326, 6, 'La Cumbre', 1),
(327, 6, 'La Cumbrecita', 1),
(328, 6, 'La Falda', 1),
(329, 6, 'La Granja', 1),
(330, 6, 'La Paisanita', 1),
(331, 6, 'La Paz Cordoba', 1),
(332, 6, 'La Poblacion', 1),
(333, 6, 'Las Albacas', 1),
(334, 6, 'Las Caleras', 1),
(335, 6, 'Las Calles', 1),
(336, 6, 'La Serranita', 1),
(337, 6, 'Las Rabonas', 1),
(338, 6, 'Las Tapias', 1),
(339, 6, 'Loma Bola', 1),
(340, 6, 'Los Cocos', 1),
(341, 6, 'Los Condores', 1),
(342, 6, 'Los Hornillos', 1),
(343, 6, 'Los Molinos', 1),
(344, 6, 'Los Pozos', 1),
(345, 6, 'Los Reartes', 1),
(346, 6, 'Loza Corral', 1),
(347, 6, 'Marcos Juarez', 1),
(348, 6, 'Mayu Sumaj', 1),
(349, 6, 'Mendiolaza', 1),
(350, 6, 'Mina Clavero', 1),
(351, 6, 'Miramar Cordoba', 1),
(352, 6, 'Molinari', 1),
(353, 6, 'Monte Maiz', 1),
(354, 6, 'Morteros', 1),
(355, 6, 'Nono', 1),
(356, 6, 'Oncativo', 1),
(357, 6, 'Ongamira', 1),
(358, 6, 'Panaholma', 1),
(359, 6, 'Potrero de Garay', 1),
(360, 6, 'Quilino', 1),
(361, 6, 'Rio Ceballos', 1),
(362, 6, 'Rio Cuarto', 1),
(363, 6, 'Rio de los Sauces', 1),
(364, 6, 'Rio Tercero', 1),
(365, 6, 'Saldan', 1),
(366, 6, 'Salsacate', 1),
(367, 6, 'Salsipuedes', 1),
(368, 6, 'San Antonio de Arredondo', 1),
(369, 6, 'San Carlos Minas', 1),
(370, 6, 'San Clemente', 1),
(371, 6, 'San Esteban', 1),
(372, 6, 'San Francisco', 1),
(373, 6, 'San Javier de Traslasierra', 1),
(374, 6, 'San Jose de la Dormida', 1),
(375, 6, 'San Marcos Sierras', 1),
(376, 6, 'San Roque', 1),
(377, 6, 'Santa Cruz del Lago', 1),
(378, 6, 'Santa Maria de Punilla', 1),
(379, 6, 'Santa Monica', 1),
(380, 6, 'Santa Rosa de Calamuchita', 1),
(381, 6, 'Sinsacate', 1),
(382, 6, 'Tala Huasi', 1),
(383, 6, 'Tancacha', 1),
(384, 6, 'Tanti', 1),
(385, 6, 'Unquillo', 1),
(386, 6, 'Valle Hermoso', 1),
(387, 6, 'Villa Alpina', 1),
(388, 6, 'Villa Allende', 1),
(389, 6, 'Villa Animi', 1),
(390, 6, 'Villa Ascasubi', 1),
(391, 6, 'Villa Berna', 1),
(392, 6, 'Villa Carlos Paz', 1),
(393, 6, 'Villa Ciudad America', 1),
(394, 6, 'Villa Ciudad Parque', 1),
(395, 6, 'Villa Cura Brochero', 1),
(396, 6, 'Villa de las Rosas', 1),
(397, 6, 'Villa del Dique', 1),
(398, 6, 'Villa del Soto', 1),
(399, 6, 'Villa del Totoral', 1),
(400, 6, 'Villa de Maria', 1),
(401, 6, 'Villa Dolores', 1),
(402, 6, 'Villa General Belgrano', 1),
(403, 6, 'Villa Giardino', 1),
(404, 6, 'Villa Los Aromos', 1),
(405, 6, 'Villa Maria', 1),
(406, 6, 'Villa Parque Siquiman', 1),
(407, 6, 'Villa Rumipal', 1),
(408, 6, 'Villa Tulumba', 1),
(409, 6, 'Yacanto Calamuchita', 1),
(410, 6, 'Yacanto Traslasierra', 1),
(411, 7, 'Bella Vista', 1),
(412, 7, 'Caa Cati', 1),
(413, 7, 'Colonia Pellegrini', 1),
(414, 7, 'Corrientes Capital', 1),
(415, 7, 'Curuzu Cuatia', 1),
(416, 7, 'Empedrado', 1),
(417, 7, 'Esquina', 1),
(418, 7, 'Goya', 1),
(419, 7, 'Ita Ibate', 1),
(420, 7, 'Itati', 1),
(421, 7, 'Ituzaingo', 1),
(422, 7, 'La Cruz Corrientes', 1),
(423, 7, 'Mburucuya', 1),
(424, 7, 'Mercedes Corrientes', 1),
(425, 7, 'Monte Caseros', 1),
(426, 7, 'Paso de la Patria', 1),
(427, 7, 'Paso de los Libres', 1),
(428, 7, 'San Antonio de Apipe', 1),
(429, 7, 'Santa Ana', 1),
(430, 7, 'Santo Tome Corrientes', 1),
(431, 7, 'Sauce', 1),
(432, 7, 'Virasoro', 1),
(433, 7, 'Yapeyu', 1),
(434, 8, 'Basavilbaso', 1),
(435, 8, 'Brazo Largo', 1),
(436, 8, 'Chajari', 1),
(437, 8, 'Colon', 1),
(438, 8, 'Concepcion del Uruguay', 1),
(439, 8, 'Concordia', 1),
(440, 8, 'Crespo', 1),
(441, 8, 'Diamante', 1),
(442, 8, 'Federacion', 1),
(443, 8, 'Federal', 1),
(444, 8, 'General Ramirez', 1),
(445, 8, 'Gualeguay', 1),
(446, 8, 'Gualeguaychu', 1),
(447, 8, 'Hasenkamp', 1),
(448, 8, 'Hernandarias', 1),
(449, 8, 'Ibicuy', 1),
(450, 8, 'La Paz', 1),
(451, 8, 'Larroque', 1),
(452, 8, 'Maria Grande', 1),
(453, 8, 'Nogoya', 1),
(454, 8, 'Parana', 1),
(455, 8, 'Piedras Blancas', 1),
(456, 8, 'Pueblo Liebig', 1),
(457, 8, 'Puerto Yerua', 1),
(458, 8, 'Puiggari', 1),
(459, 8, 'Rosario del Tala', 1),
(460, 8, 'San Jose de Feliciano', 1),
(461, 8, 'San Salvador', 1),
(462, 8, 'Santa Elena', 1),
(463, 8, 'Urdinarrain', 1),
(464, 8, 'Valle Maria', 1),
(465, 8, 'Viale', 1),
(466, 8, 'Victoria', 1),
(467, 8, 'Villa Elisa', 1),
(468, 8, 'Villaguay', 1),
(469, 8, 'Villa Paranacito', 1),
(470, 8, 'Villa San Jose', 1),
(471, 8, 'Villa Urquiza', 1),
(472, 9, 'Clorinda', 1),
(473, 9, 'El Colorado', 1),
(474, 9, 'Formosa Capital', 1),
(475, 9, 'General Manuel Belgrano', 1),
(476, 9, 'Herradura', 1),
(477, 9, 'Ibarreta', 1),
(478, 9, 'Ingeniero Juarez', 1),
(479, 9, 'Laguna Blanca', 1),
(480, 9, 'Las Lomitas', 1),
(481, 9, 'Mayor Villafane', 1),
(482, 9, 'Palo Santo', 1),
(483, 9, 'Pirane', 1),
(484, 9, 'San Francisco de Laishi', 1),
(485, 10, 'Abra Pampa', 1),
(486, 10, 'Aguas Calientes', 1),
(487, 10, 'Caimancito', 1),
(488, 10, 'Casabindo', 1),
(489, 10, 'El Carmen', 1),
(490, 10, 'Hornillos', 1),
(491, 10, 'Huacalera', 1),
(492, 10, 'Huichaira', 1),
(493, 10, 'Humahuaca', 1),
(494, 10, 'La Quiaca', 1),
(495, 10, 'Libertador San Martin', 1),
(496, 10, 'Lozano', 1),
(497, 10, 'Maimara', 1),
(498, 10, 'Palpala', 1),
(499, 10, 'Perico', 1),
(500, 10, 'Purmamarca', 1),
(501, 10, 'San Francisco', 1),
(502, 10, 'San Pedro de Jujuy', 1),
(503, 10, 'San Salvador de Jujuy', 1),
(504, 10, 'Santa Catalina', 1),
(505, 10, 'Susques', 1),
(506, 10, 'Tilcara', 1),
(507, 10, 'Tumbaya', 1),
(508, 10, 'Uquia', 1),
(509, 10, 'Valle Grande', 1),
(510, 10, 'Villa Jardin de Reyes', 1),
(511, 10, 'Villamonte', 1),
(512, 10, 'Volcan', 1),
(513, 10, 'Yala', 1),
(514, 10, 'Yavi', 1),
(515, 11, 'Ataliva Roca', 1),
(516, 11, 'Bernardo Larroude', 1),
(517, 11, 'Carro Quemado', 1),
(518, 11, 'Casa de Piedra', 1),
(519, 11, 'Chacharramendi', 1),
(520, 11, 'Colonia 25 de Mayo', 1),
(521, 11, 'Colonia Baron', 1),
(522, 11, 'Eduardo Castex', 1),
(523, 11, 'General Acha', 1),
(524, 11, 'General Pico', 1),
(525, 11, 'General San Martin', 1),
(526, 11, 'Guatrache', 1),
(527, 11, 'Intendente Alvear', 1),
(528, 11, 'Jacinto Arauz', 1),
(529, 11, 'Macachin', 1),
(530, 11, 'Rancul', 1),
(531, 11, 'Realico', 1),
(532, 11, 'Santa Isabel', 1),
(533, 11, 'Santa Rosa La Pampa', 1),
(534, 11, 'Toay', 1),
(535, 11, 'Victorica', 1),
(536, 11, 'Winifreda', 1),
(537, 12, 'Aimogasta', 1),
(538, 12, 'Aminga', 1),
(539, 12, 'Anillaco', 1),
(540, 12, 'Chamical', 1),
(541, 12, 'Chepes', 1),
(542, 12, 'Chilecito', 1),
(543, 12, 'Famatina', 1),
(544, 12, 'Guandacol', 1),
(545, 12, 'La Rioja Capital', 1),
(546, 12, 'Olta', 1),
(547, 12, 'Pagancillo', 1),
(548, 12, 'Patquia', 1),
(549, 12, 'Sanagasta', 1),
(550, 12, 'San Blas de Los Sauces', 1),
(551, 12, 'Santa Teresita', 1),
(552, 12, 'Tama', 1),
(553, 12, 'Ulapes', 1),
(554, 12, 'Villa Castelli', 1),
(555, 12, 'Villa Union', 1),
(556, 12, 'Vinchina', 1),
(557, 13, 'Canon del Atuel', 1),
(558, 13, 'Chacras de Coria', 1),
(559, 13, 'Colonia Suiza', 1),
(560, 13, 'El Nihuil', 1),
(561, 13, 'El Sosneado', 1),
(562, 13, 'General Alvear', 1),
(563, 13, 'Godoy Cruz', 1),
(564, 13, 'Guaymallen', 1),
(565, 13, 'Junin', 1),
(566, 13, 'Las Carditas', 1),
(567, 13, 'Las Cuevas', 1),
(568, 13, 'Las Heras', 1),
(569, 13, 'Las Vegas', 1),
(570, 13, 'Los Molles', 1),
(571, 13, 'Los Reyunos', 1),
(572, 13, 'Lujan de Cuyo', 1),
(573, 13, 'Maipu', 1),
(574, 13, 'Malargue', 1),
(575, 13, 'Manzano Historico', 1),
(576, 13, 'Mendoza Capital', 1),
(577, 13, 'Potrerillos', 1),
(578, 13, 'Rivadavia', 1),
(579, 13, 'San Carlos', 1),
(580, 13, 'San Martin', 1),
(581, 13, 'San Rafael', 1),
(582, 13, 'Termas Cacheuta', 1),
(583, 13, 'Tunuyan', 1),
(584, 13, 'Tupungato', 1),
(585, 13, 'Uspallata', 1),
(586, 13, 'Valle de Uco', 1),
(587, 13, 'Valle Grande', 1),
(588, 14, '2 de Mayo', 1),
(589, 14, '25 de Mayo', 1),
(590, 14, 'Alba Posse', 1),
(591, 14, 'Andresito', 1),
(592, 14, 'Apostoles', 1),
(593, 14, 'Aristobulo del Valle', 1),
(594, 14, 'Bernardo de Irigoyen', 1),
(595, 14, 'Campo Grande', 1),
(596, 14, 'Campo Viera', 1),
(597, 14, 'Candelaria', 1),
(598, 14, 'Capiovi', 1),
(599, 14, 'Caraguatay', 1),
(600, 14, 'Colonia Victoria', 1),
(601, 14, 'Concepcion de la Sierra', 1),
(602, 14, 'Corpus', 1),
(603, 14, 'El Alcazar', 1),
(604, 14, 'El Dorado', 1),
(605, 14, 'El Soberbio', 1),
(606, 14, 'Garupa', 1),
(607, 14, 'Gobernador Roca', 1),
(608, 14, 'Jardin America', 1),
(609, 14, 'Leandro Alem', 1),
(610, 14, 'Loreto', 1),
(611, 14, 'Montecarlo', 1),
(612, 14, 'Obera', 1),
(613, 14, 'Panambi', 1),
(614, 14, 'Posadas', 1),
(615, 14, 'Puerto Esperanza', 1),
(616, 14, 'Puerto Iguazu', 1),
(617, 14, 'Puerto Libertad', 1),
(618, 14, 'Puerto Mineral', 1),
(619, 14, 'Puerto Piray', 1),
(620, 14, 'Puerto Rico', 1),
(621, 14, 'Salto Encantado', 1),
(622, 14, 'San Antonio', 1),
(623, 14, 'San Ignacio', 1),
(624, 14, 'San Javier', 1),
(625, 14, 'San Pedro', 1),
(626, 14, 'Santa Ana', 1),
(627, 14, 'Santa Maria', 1),
(628, 14, 'Santa Rita', 1),
(629, 14, 'San Vicente', 1),
(630, 14, 'Tobuna', 1),
(631, 14, 'Wanda', 1),
(632, 15, 'Alumine', 1),
(633, 15, 'Andacollo', 1),
(634, 15, 'Arroyito', 1),
(635, 15, 'Caviahue', 1),
(636, 15, 'Centenario', 1),
(637, 15, 'Chos Malal', 1),
(638, 15, 'Copahue', 1),
(639, 15, 'Cutral Co', 1),
(640, 15, 'El Cholar', 1),
(641, 15, 'El Huecu', 1),
(642, 15, 'Huinganco', 1),
(643, 15, 'Junin de los Andes', 1),
(644, 15, 'Las Lajas', 1),
(645, 15, 'Las Ovejas', 1),
(646, 15, 'Loncopue', 1),
(647, 15, 'Manzano Amargo', 1),
(648, 15, 'Moquehue', 1),
(649, 15, 'Neuquen Capital', 1),
(650, 15, 'Picun Leufu', 1),
(651, 15, 'Piedra del Aguila', 1),
(652, 15, 'Plaza Huincul', 1),
(653, 15, 'Plottier', 1),
(654, 15, 'Primeros Pinos', 1),
(655, 15, 'Pulmari', 1),
(656, 15, 'Rincon de los Sauces', 1),
(657, 15, 'San Martin de los Andes', 1),
(658, 15, 'Tricao Malal', 1),
(659, 15, 'Varvarco', 1),
(660, 15, 'Villa El Chocon', 1),
(661, 15, 'Villa La Angostura', 1),
(662, 15, 'Villa Lago Meliquina', 1),
(663, 15, 'Villa Pehuenia', 1),
(664, 15, 'Villa Traful', 1),
(665, 15, 'Zapala', 1),
(666, 16, 'Allen', 1),
(667, 16, 'Bariloche', 1),
(668, 16, 'Catriel', 1),
(669, 16, 'Choele Choel', 1),
(670, 16, 'Cinco Saltos', 1),
(671, 16, 'Cipolletti', 1),
(672, 16, 'Dina Huapi', 1),
(673, 16, 'El Bolson', 1),
(674, 16, 'El Manso', 1),
(675, 16, 'General Conesa', 1),
(676, 16, 'General Roca', 1),
(677, 16, 'Ingeniero Jacobacci', 1),
(678, 16, 'Las Grutas', 1),
(679, 16, 'Los Menucos', 1),
(680, 16, 'Ministro Ramos Mexia', 1),
(681, 16, 'Playas Doradas', 1),
(682, 16, 'Rio Colorado', 1),
(683, 16, 'San Antonio Este', 1),
(684, 16, 'San Antonio Oeste', 1),
(685, 16, 'Sierra Colorada', 1),
(686, 16, 'Sierra Grande', 1),
(687, 16, 'Valcheta', 1),
(688, 16, 'Viedma', 1),
(689, 16, 'Villa El Condor', 1),
(690, 16, 'Villa Regina', 1),
(691, 17, 'Angastaco', 1),
(692, 17, 'Cabra Corral', 1),
(693, 17, 'Cachi', 1),
(694, 17, 'Cafayate', 1),
(695, 17, 'Campo Quijano', 1),
(696, 17, 'Cerrillos', 1),
(697, 17, 'Chicoana', 1),
(698, 17, 'Coronel Moldes', 1),
(699, 17, 'Embarcacion', 1),
(700, 17, 'General Guemes', 1),
(701, 17, 'General Mosconi', 1),
(702, 17, 'Iruya', 1),
(703, 17, 'Joaquin V. Gonzalez', 1),
(704, 17, 'La Caldera', 1),
(705, 17, 'La Poma', 1),
(706, 17, 'Molinos', 1),
(707, 17, 'Oran', 1),
(708, 17, 'Rosario de la Frontera', 1),
(709, 17, 'Salta Capital', 1),
(710, 17, 'S. Antonio de los Cobres', 1),
(711, 17, 'San Carlos', 1),
(712, 17, 'San Jose de Metan', 1),
(713, 17, 'Santa Rosa', 1),
(714, 17, 'Seclantas', 1),
(715, 17, 'Tartagal', 1),
(716, 17, 'Tolar Grande', 1),
(717, 17, 'Vaqueros', 1),
(718, 17, 'Villa San Lorenzo', 1),
(719, 18, 'Barreal', 1),
(720, 18, 'Bella Vista', 1),
(721, 18, 'Calingasta', 1),
(722, 18, 'Caucete', 1),
(723, 18, 'Iglesia', 1),
(724, 18, 'Jachal', 1),
(725, 18, 'Las Flores', 1),
(726, 18, 'Pismanta', 1),
(727, 18, 'Rawson', 1),
(728, 18, 'Rivadavia', 1),
(729, 18, 'Rodeo', 1),
(730, 18, 'San Juan Capital', 1),
(731, 18, 'Santa Lucia', 1),
(732, 18, 'Tudcum', 1),
(733, 18, 'Ullum', 1),
(734, 18, 'Valle Fertil', 1),
(735, 18, 'Vallecito', 1),
(736, 18, 'Zonda', 1),
(737, 19, 'Balde', 1),
(738, 19, 'Carpinteria', 1),
(739, 19, 'Concaran', 1),
(740, 19, 'Cortaderas', 1),
(741, 19, 'El Morro', 1),
(742, 19, 'El Trapiche', 1),
(743, 19, 'El Volcan', 1),
(744, 19, 'Juana Koslay', 1),
(745, 19, 'La Carolina', 1),
(746, 19, 'La Florida', 1),
(747, 19, 'La Punta', 1),
(748, 19, 'La Toma', 1),
(749, 19, 'Los Molles', 1),
(750, 19, 'Lujan San Luis', 1),
(751, 19, 'Merlo', 1),
(752, 19, 'Nogoli', 1),
(753, 19, 'Nueva Galia', 1),
(754, 19, 'Papagayos', 1),
(755, 19, 'Potrero de los Funes', 1),
(756, 19, 'Quines', 1),
(757, 19, 'Renca', 1),
(758, 19, 'S. Francisco del Monte', 1),
(759, 19, 'San Geronimo', 1),
(760, 19, 'San Luis Capital', 1),
(761, 19, 'Santa Rosa del Conlara', 1),
(762, 19, 'Sierra de las Quijadas', 1),
(763, 19, 'Tilisarao', 1),
(764, 19, 'Villa de la Quebrada', 1),
(765, 19, 'Villa Elena', 1),
(766, 19, 'Villa Larca', 1),
(767, 19, 'Villa Mercedes', 1),
(768, 20, '28 de Noviembre', 1),
(769, 20, 'Caleta Olivia', 1),
(770, 20, 'Cte. Piedra Buena', 1),
(771, 20, 'El Calafate', 1),
(772, 20, 'El Chalten', 1),
(773, 20, 'Fitz Roy', 1),
(774, 20, 'Gobernador Gregores', 1),
(775, 20, 'Hipolito Yrigoyen', 1),
(776, 20, 'Jaramillo', 1),
(777, 20, 'Las Heras', 1),
(778, 20, 'Los Antiguos', 1),
(779, 20, 'Perito Moreno', 1),
(780, 20, 'Pico Truncado', 1),
(781, 20, 'Puerto Deseado', 1),
(782, 20, 'Puerto San Julian', 1),
(783, 20, 'Puerto Santa Cruz', 1),
(784, 20, 'Rio Gallegos', 1),
(785, 20, 'Rio Turbio', 1),
(786, 21, 'Alejandra', 1),
(787, 21, 'Armstrong', 1),
(788, 21, 'Arocena', 1),
(789, 21, 'Arroyo Seco', 1),
(790, 21, 'Arroyo Leyes', 1),
(791, 21, 'Avellaneda', 1),
(792, 21, 'Barrancas', 1),
(793, 21, 'Carcarana', 1),
(794, 21, 'Casilda', 1),
(795, 21, 'Cayasta', 1),
(796, 21, 'Canada de Gomez', 1),
(797, 21, 'Ceres', 1),
(798, 21, 'Chabas', 1),
(799, 21, 'Coronda', 1),
(800, 21, 'Desvio Arijon', 1),
(801, 21, 'Elortondo', 1),
(802, 21, 'Esperanza', 1),
(803, 21, 'Firmat', 1),
(804, 21, 'Florencia', 1),
(805, 21, 'Franck', 1),
(806, 21, 'Funes', 1),
(807, 21, 'Granadero Baigorria', 1),
(808, 21, 'Helvecia', 1),
(809, 21, 'Melincue', 1),
(810, 21, 'Monje', 1),
(811, 21, 'Oliveros', 1),
(812, 21, 'Puerto Gaboto', 1),
(813, 21, 'Rafaela', 1),
(814, 21, 'Reconquista', 1),
(815, 21, 'Romang', 1),
(816, 21, 'Rosario', 1),
(817, 21, 'Rufino', 1),
(818, 21, 'San Carlos', 1),
(819, 21, 'San Cristobal', 1),
(820, 21, 'San Javier', 1),
(821, 21, 'San Jorge', 1),
(822, 21, 'San Jose del Rincon', 1),
(823, 21, 'San Justo', 1),
(824, 21, 'San Lorenzo', 1),
(825, 21, 'Santa Fe Capital', 1),
(826, 21, 'Santa Rosa de Calchines', 1),
(827, 21, 'Santo Tome', 1),
(828, 21, 'Sastre', 1),
(829, 21, 'Sauce Viejo', 1),
(830, 21, 'Sunchales', 1),
(831, 21, 'Timbues', 1),
(832, 21, 'Tostado', 1),
(833, 21, 'Venado Tuerto', 1),
(834, 21, 'Villa Canas', 1),
(835, 21, 'Villa Constitucion', 1),
(836, 21, 'Villa Ocampo', 1),
(837, 22, 'Anatuya', 1),
(838, 22, 'Bandera', 1),
(839, 22, 'Frias', 1),
(840, 22, 'La Banda', 1),
(841, 22, 'Pinto', 1),
(842, 22, 'Sgo. del Estero Capital', 1),
(843, 22, 'Termas de Rio Hondo', 1),
(844, 22, 'Villa La Punta', 1),
(845, 22, 'Villa Ojo de Agua', 1),
(846, 23, 'Alberdi', 1),
(847, 23, 'Amaicha del Valle', 1),
(848, 23, 'Ampimpa', 1),
(849, 23, 'Burruyacu', 1),
(850, 23, 'Colalao del Valle', 1),
(851, 23, 'Concepcion', 1),
(852, 23, 'El Cadillal', 1),
(853, 23, 'El Mollar', 1),
(854, 23, 'El Siambon', 1),
(855, 23, 'Famailla', 1),
(856, 23, 'Raco', 1),
(857, 23, 'Ruinas de Quilmes', 1),
(858, 23, 'San Javier Tucuman', 1),
(859, 23, 'San Miguel de Tucuman', 1),
(860, 23, 'San Pedro de Colalao', 1),
(861, 23, 'Simoca', 1),
(862, 23, 'Taco Ralo', 1),
(863, 23, 'Tafi del Valle', 1),
(864, 23, 'Tafi Viejo', 1),
(865, 23, 'Villa Nougues', 1),
(866, 23, 'Yerba Buena', 1),
(867, 24, 'Cerro Castor', 1),
(868, 24, 'Rio Grande', 1),
(869, 24, 'Tolhuin', 1),
(870, 24, 'Ushuaia', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `name`) VALUES
(1, 'Efectivo'),
(2, 'Deposito / Transferencia'),
(3, 'MercadoPago');

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
  `price` int(11) NOT NULL COMMENT 'Se debe extraer a una tabla específica',
  `image` varchar(100) NOT NULL COMMENT 'Se debe extraer a una tabla específica',
  `date` date NOT NULL,
  `description` varchar(400) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_offer_mode` tinyint(1) NOT NULL,
  `has_stock` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `ml_id`, `category_id`, `brand_id`, `name`, `price`, `image`, `date`, `description`, `is_active`, `is_offer_mode`, `has_stock`) VALUES
(1, 0, 1, 1, 'CISS Epson XP211 - 50cc', 499, '', '2017-06-01', '', 1, 0, 0),
(2, 0, 1, 1, 'CISS Epson XP211 - 100cc', 599, '', '2017-06-01', '', 1, 0, 1),
(3, 0, 1, 1, 'CISS Epson TX135 - 100cc', 599, '', '2017-06-02', '', 1, 0, 1),
(4, 0, 2, 1, 'Impresora Epson L850', 13299, '', '2017-06-10', 'Impresora multifunción Epson L850 inalámbrica. Sistema continuo original de Tinta DYE Epson.', 1, 0, 1),
(5, 0, 2, 2, 'Impresora HP Deskjet 3775', 2199, '', '2017-06-06', 'Impresora HP Deskjet 3775 con Sistema Continuo Imprek con 400cc de Tintas DYE.', 1, 0, 1),
(6, 0, 1, 1, 'CISS Epson TX420w - 100cc', 619, '', '2017-08-20', 'Sistema continuo Imprek compatible con impresoras Epson TX420w', 1, 1, 1);

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
-- Estructura de tabla para la tabla `provinces`
--

CREATE TABLE `provinces` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provinces`
--

INSERT INTO `provinces` (`id`, `name`) VALUES
(1, 'Buenos Aires'),
(2, 'Catarmarca'),
(3, 'Chaco'),
(4, 'Chubut'),
(5, 'Ciudad Autonoma \nde Buenos Aires'),
(6, 'Cordoba'),
(7, 'Corrientes'),
(8, 'Entre Rios'),
(9, 'Formosa'),
(10, 'Jujuy'),
(11, 'La Pampa'),
(12, 'La Rioja'),
(13, 'Mendoza'),
(14, 'Misiones'),
(15, 'Neuquen'),
(16, 'Rio Negro'),
(17, 'Salta'),
(18, 'San Juan'),
(19, 'San Luis'),
(20, 'Santa Cruz'),
(21, 'Santa Fe'),
(22, 'Santiago del Estero'),
(23, 'Tucuman'),
(24, 'Tierra del Fuego');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(10) UNSIGNED NOT NULL,
  `date` varchar(100) NOT NULL,
  `name` varchar(60) NOT NULL,
  `surname` varchar(60) NOT NULL,
  `email` varchar(100) NOT NULL,
  `tel` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `date`, `name`, `surname`, `email`, `tel`) VALUES
(1, '2017-09-06', 'mauro', 'ocorso', 'ocorsomauro@gmail.com', '48567768'),
(2, '2017-09-06', 'melina', 'barbara farias', 'meli@farias', '45465456'),
(3, '2017-09-06', 'fasdf', 'asfasf', 'asfasf', 'asfasf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shipping_forms`
--

CREATE TABLE `shipping_forms` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `shipping_forms`
--

INSERT INTO `shipping_forms` (`id`, `name`) VALUES
(1, 'Retiro en el local'),
(2, 'Envio a domicilio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shipping_groups`
--

CREATE TABLE `shipping_groups` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `shipping_groups`
--

INSERT INTO `shipping_groups` (`id`, `name`) VALUES
(1, 'nacional'),
(2, 'bonaerense');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shipping_methods`
--

CREATE TABLE `shipping_methods` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `shipping_methods`
--

INSERT INTO `shipping_methods` (`id`, `name`) VALUES
(1, 'Moto a domicilio'),
(2, 'Moto a Retiro (Micro)'),
(3, 'Correo Argentino - Clasico (3 a 5 dias)'),
(4, 'Correo Argentino - Express (1 a 2 dias)'),
(5, 'Correo Argentino - Contra reembolso - Clasico (3 a 5 dias)'),
(6, 'Correo Argentino - Contra reembolso - Express (1 a 2 dias)');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shipping_method_groups`
--

CREATE TABLE `shipping_method_groups` (
  `id` tinyint(3) UNSIGNED NOT NULL,
  `shipping_group_id` tinyint(3) UNSIGNED NOT NULL,
  `shipping_method_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `shipping_method_groups`
--

INSERT INTO `shipping_method_groups` (`id`, `shipping_group_id`, `shipping_method_id`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 1, 4),
(4, 1, 5),
(5, 1, 6),
(6, 2, 1),
(7, 2, 2),
(8, 2, 3),
(9, 2, 4),
(10, 2, 5),
(11, 2, 6);

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
-- Indices de la tabla `instructives`
--
ALTER TABLE `instructives`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `instructive_products`
--
ALTER TABLE `instructive_products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `instructive_types`
--
ALTER TABLE `instructive_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `payment_methods`
--
ALTER TABLE `payment_methods`
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
-- Indices de la tabla `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shipping_forms`
--
ALTER TABLE `shipping_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shipping_groups`
--
ALTER TABLE `shipping_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shipping_methods`
--
ALTER TABLE `shipping_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shipping_method_groups`
--
ALTER TABLE `shipping_method_groups`
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
-- AUTO_INCREMENT de la tabla `instructives`
--
ALTER TABLE `instructives`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `instructive_products`
--
ALTER TABLE `instructive_products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `instructive_types`
--
ALTER TABLE `instructive_types`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=871;
--
-- AUTO_INCREMENT de la tabla `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
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
-- AUTO_INCREMENT de la tabla `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `shipping_forms`
--
ALTER TABLE `shipping_forms`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `shipping_groups`
--
ALTER TABLE `shipping_groups`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT de la tabla `shipping_methods`
--
ALTER TABLE `shipping_methods`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT de la tabla `shipping_method_groups`
--
ALTER TABLE `shipping_method_groups`
  MODIFY `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

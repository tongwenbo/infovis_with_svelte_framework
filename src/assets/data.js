//Data Table: Accident Category
//Source: Statistisches Bundesamt (Destatis), 2022
//state, accidents with damage to people (inner city), accidents with damage to people (out of town (without highway)), accidents with damage to people (highway), accidents with damage to people (total), serious accidents with property damage (inner city), serious accidents with property damage (out of town (without highway)), serious accidents with property damage (highway), serious accidents with property damage (total), other. accidents under the influence of intoxicants agents (inner city), other. accidents under the influence of intoxicants agents (out of town (without highway)), other. accidents under the influence of intoxicants agents (highway), other. accidents under the influence of intoxicants agents (total), other property damage accidents (inner city), other property damage accidents (out of town (without highway)), other property damage accidents (highway), other property damage accidents (total), total (inner city), total (out of town (without highway)), total (highway), total (total)
export const accidentCategoryData = [
	["Baden-Württemberg", 19249, 9310, 1670, 30229, 5494, 3011, 1286, 9791, 1192, 210, 69, 1471, 0, 0, 0, 0, 25935, 12531, 3025, 41491], 
	["Bayern", 28428, 13723, 2998, 45149, 3399, 2722, 1773, 7894, 1311, 350, 120, 1781, 0, 0, 0, 0, 33138, 16795, 4891, 54824], 
	["Berlin", 12271, 0, 311, 12582, 872, 0, 23, 895, 664, 0, 15, 679, 0, 0, 0, 0, 13807, 0, 349, 14156], 
	["Brandenburg", 5439, 1922, 674, 8035, 1643, 740, 550, 2933, 356, 39, 36, 431, 0, 0, 0, 0, 7438, 2701, 1260, 11399], 
	["Bremen", 2395, 41, 129, 2565, 370, 15, 68, 453, 125, 0, 4, 129, 0, 0, 0, 0, 2890, 56, 201, 3147], 
	["Hamburg", 6532, 32, 227, 6791, 1507, 18, 70, 1595, 285, 4, 16, 305, 0, 0, 0, 0, 8324, 54, 313, 8691], 
	["Hessen", 10715, 4778, 1666, 17159, 3541, 1727, 1475, 6743, 888, 158, 64, 1110, 0, 0, 0, 0, 15144, 6663, 3205, 25012], 
	["Mecklenburg-Vorpommern", 2894, 1474, 259, 4627, 671, 414, 234, 1319, 252, 41, 15, 308, 0, 0, 0, 0, 3817, 1929, 508, 6254], 
	["Niedersachsen", 17321, 9024, 1800, 28145, 2014, 1357, 706, 4077, 975, 273, 92, 1340, 0, 0, 0, 0, 20310, 10654, 2598, 33562], 
	["Nordrhein-Westfalen", 39077, 11658, 3604, 54339, 7499, 2758, 1684, 11941, 2849, 460, 230, 3539, 0, 0, 0, 0, 49425, 14876, 5518, 69819], 
	["Rheinland-Pfalz", 7014, 4446, 739, 12199, 2578, 1943, 690, 5211, 589, 162, 33, 784, 0, 0, 0, 0, 10181, 6551, 1462, 18194], 
	["Saarland", 2244, 661, 285, 3190, 753, 247, 194, 1194, 166, 19, 17, 202, 0, 0, 0, 0, 3163, 927, 496, 4586], 
	["Sachsen", 8423, 2351, 553, 11327, 2166, 914, 415, 3495, 515, 68, 32, 615, 0, 0, 0, 0, 11104, 3333, 1000, 15437], 
	["Sachsen-Anhalt", 4519, 1742, 503, 6764, 534, 248, 208, 990, 331, 74, 28, 433, 0, 0, 0, 0, 5384, 2064, 739, 8187], 
	["Schleswig-Holstein", 7208, 3094, 580, 10882, 899, 578, 350, 1827, 289, 53, 17, 359, 0, 0, 0, 0, 8396, 3725, 947, 13068], 
	["Thüringen", 3219, 1376, 409, 5004, 1043, 455, 542, 2040, 264, 48, 17, 329, 0, 0, 0, 0, 4526, 1879, 968, 7373]
]

//Data Table: Road Type
//Source: Statistisches Bundesamt (Destatis), 2022
//state, highway (inner city), highway (out of town), highway (total), federal highway (inner city), federal highway (out of town), federal highway (total), state road (inner city), state road (out of town), state road (total), district road (inner city), district road (out of town), district road (total), other roads (inner city), other roads (out of town), other roads (total), total (inner city), total (out of town), total (total)
export const roadTypeData = [
	["Baden-Württemberg", 0, 1670, 1670, 2096, 2651, 4747, 2823, 3323, 6146, 1565, 1972, 3537, 12765, 1364, 14129, 19249, 10980, 30229], 
	["Bayern", 0, 2998, 2998, 2852, 3462, 6314, 3952, 4903, 8855, 1898, 3192, 5090, 19726, 2166, 21892, 28428, 16721, 45149], 
	["Berlin", 0, 311, 311, 1778, 0, 1778, 0, 0, 0, 0, 0, 0, 10493, 0, 10493, 12271, 311, 12582], 
	["Brandenburg", 0, 674, 674, 868, 700, 1568, 1181, 809, 1990, 229, 235, 464, 3161, 178, 3339, 5439, 2596, 8035], 
	["Bremen", 0, 129, 129, 50, 20, 70, 4, 0, 4, 7, 0, 7, 2334, 21, 2355, 2395, 170, 2565], 
	["Hamburg", 0, 227, 227, 795, 32, 827, 0, 0, 0, 0, 0, 0, 5737, 0, 5737, 6532, 259, 6791], 
	["Hessen", 0, 1666, 1666, 1628, 1813, 3441, 1829, 2041, 3870, 1030, 574, 1604, 6228, 350, 6578, 10715, 6444, 17159], 
	["Mecklenburg-Vorpommern", 0, 259, 259, 403, 560, 963, 470, 507, 977, 133, 205, 338, 1888, 202, 2090, 2894, 1733, 4627], 
	["Niedersachsen", 0, 1800, 1800, 1763, 2751, 4514, 2881, 2661, 5542, 1905, 2368, 4273, 10772, 1244, 12016, 17321, 10824, 28145], 
	["Nordrhein-Westfalen", 0, 3604, 3604, 4753, 2716, 7469, 10370, 5231, 15601, 4103, 1881, 5984, 19851, 1830, 21681, 39077, 15262, 54339], 
	["Rheinland-Pfalz", 0, 739, 739, 867, 1469, 2336, 1437, 1830, 3267, 861, 715, 1576, 3849, 432, 4281, 7014, 5185, 12199], 
	["Saarland", 0, 285, 285, 333, 127, 460, 586, 255, 841, 222, 163, 385, 1103, 116, 1219, 2244, 946, 3190], 
	["Sachsen", 0, 553, 553, 1488, 682, 2170, 1441, 962, 2403, 588, 396, 984, 4906, 311, 5217, 8423, 2904, 11327], 
	["Sachsen-Anhalt", 0, 503, 503, 638, 668, 1306, 406, 619, 1025, 131, 282, 413, 3344, 173, 3517, 4519, 2245, 6764], 
	["Schleswig-Holstein", 0, 580, 580, 931, 903, 1834, 1502, 1048, 2550, 1362, 647, 2009, 3413, 496, 3909, 7208, 3674, 10882], 
	["Thüringen", 0, 409, 409, 414, 451, 865, 523, 607, 1130, 204, 149, 353, 2078, 169, 2247, 3219, 1785, 5004]
]

//Data Table: Severity of the injury
//Source: Statistisches Bundesamt (Destatis), 2022
//state, inner city (killed), inner city (severely injured), inner city (lightly injured), inner city (total), out of town (without highway) (killed), out of town (without highway) (severely injured), out of town (without highway) (lightly injured), out of town (without highway) (total), highway (killed), highway (severely injured), highway (lightly injured), highway (total), total (killed), total (severely injured), total (lightly injured), total (total)
export const severityData = [
	["Baden-Württemberg", 87, 3121, 19037, 22245, 217, 3083, 9621, 12921, 44, 402, 2181, 2627, 348, 6606, 30839, 37793], 
	["Bayern", 104, 4756, 28160, 33020, 289, 4346, 14715, 19350, 50, 701, 4005, 4756, 443, 9803, 46880, 57126], 
	["Berlin", 38, 1926, 12404, 14368, "-", "-", "-", "-", 2, 54, 358, 414, 40, 1980, 12762, 14782], 
	["Brandenburg", 28, 991, 5286, 6305, 80, 742, 1927, 2749, 19, 264, 849, 1132, 127, 1997, 8062, 10186], 
	["Bremen", 6, 282, 2576, 2864, "-", 7, 44, 51, "-", 26, 161, 187, 6, 315, 2781, 3102], 
	["Hamburg", 17, 730, 7061, 7808, 1, 2, 33, 36, 2, 41, 260, 303, 20, 773, 7354, 8147], 
	["Hessen", 41, 1670, 11138, 12849, 110, 1494, 5306, 6910, 32, 384, 2184, 2600, 183, 3548, 18628, 22359], 
	["Mecklenburg-Vorpommern", 13, 518, 2888, 3419, 48, 589, 1511, 2148, 7, 114, 297, 418, 68, 1221, 4696, 5985], 
	["Niedersachsen", 72, 2261, 17967, 20300, 245, 2543, 9803, 12591, 33, 357, 2412, 2802, 350, 5161, 30182, 35693], 
	["Nordrhein-Westfalen", 160, 6649, 39209, 46018, 209, 4023, 11956, 16188, 56, 1274, 4365, 5695, 425, 11946, 55530, 67901], 
	["Rheinland-Pfalz", 35, 1121, 7111, 8267, 80, 1453, 4559, 6092, 2, 152, 942, 1096, 117, 2726, 12612, 15455], 
	["Saarland", 12, 393, 2363, 2768, 14, 205, 681, 900, 3, 65, 348, 416, 29, 663, 3392, 4084], 
	["Sachsen", 52, 1852, 8018, 9922, 52, 1055, 2212, 3319, 25, 273, 570, 868, 129, 3180, 10800, 14109], 
	["Sachsen-Anhalt", 32, 855, 4445, 5332, 61, 776, 1723, 2560, 20, 234, 581, 835, 113, 1865, 6749, 8727], 
	["Schleswig-Holstein", 17, 905, 7578, 8500, 50, 875, 3471, 4396, 10, 157, 795, 962, 77, 1937, 11844, 13858], 
	["Thüringen", 32, 647, 3172, 3851, 42, 585, 1282, 1909, 13, 184, 427, 624, 87, 1416, 4881, 6384]
]

//Data Table: Light and street conditions
//Source: Statistisches Bundesamt (Destatis), 2022
//state, daylight (dry), daylight (wet), daylight (glazed), dawn (dry), dawn (wet), dawn (glazed), darkness (dry), darkness (wet), darkness (glazed)
export const conditionsData = [
	["Baden-Württemberg", 17205, 3235, 451, 855, 445, 81, 2760, 1642, 343], 
	["Bayern", 25647, 5101, 929, 1173, 711, 201, 3753, 2578, 678], 
	["Berlin", 6827, 1566, 79, 408, 262, 11, 1172, 866, 76], 
	["Brandenburg", 4885, 945, 181, 232, 114, 24, 628, 434, 120], 
	["Bremen", 1336, 386, 21, 80, 50, 8, 205, 203, 11], 
	["Hamburg", 3577, 1060, 51, 189, 130, 14, 651, 541, 33], 
	["Hessen", 9160, 2271, 151, 486, 331, 43, 1670, 1322, 145], 
	["Mecklenburg-Vorpommern", 2619, 622, 90, 113, 77, 20, 302, 312, 96], 
	["Niedersachsen", 13974, 3938, 382, 764, 559, 68, 2163, 2105, 300], 
	["Nordrhein-Westfalen", 28631, 7546, 437, 1585, 1099, 87, 4994, 4174, 451], 
	["Rheinland-Pfalz", 6690, 1605, 109, 294, 236, 27, 1065, 848, 119], 
	["Saarland", 1684, 355, 29, 65, 42, 8, 313, 215, 30], 
	["Sachsen", 6570, 1598, 243, 273, 206, 36, 971, 652, 152], 
	["Sachsen-Anhalt", 3940, 650, 137, 279, 133, 21, 534, 271, 64], 
	["Schleswig-Holstein", 5839, 1628, 147, 264, 250, 53, 724, 950, 179], 
	["Thüringen", 2655, 670, 114, 125, 81, 30, 380, 319, 85]
]

//Source: Statistisches Bundesamt (Destatis), 2019
// definition: @Verkehrsunfälle - Fachserie 8 Reihe 7
const my_additional_data = [
    {"cause": "Inappropriate speed", "value": 24.1}, {"cause": "Incorrect road use", "value": 21.1}, 
    {"cause": "Overtaking Errors", "value": 18.1}, {"cause": "Influence of alcohol", "value": 13.9}, 
    {"cause": "Misbehavior towards pedestrians", "value": 10.5}, {"cause": "Errors when passing", "value": 6.4}, 
    {"cause": "Ignoring right of way, priority", "value": 5.7}, {"cause": "Leaving a road, reversing, moving", "value": 4.8}, 
    {"cause": "Insufficient distance", "value": 4.3}, {"cause": "Travelling side by side", "value": 3.4}
    ]

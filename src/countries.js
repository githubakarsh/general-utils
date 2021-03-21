const countries = [
  { code: 'GB', name: 'United Kingdom', nationality: 'British' },
  { code: 'AF', name: 'Afghanistan', nationality: 'Afghani' },
  { code: 'AL', name: 'Albania', nationality: 'Albanian' },
  { code: 'DZ', name: 'Algeria', nationality: 'Algerian' },
  { code: 'AS', name: 'American Samoa', nationality: 'Samoan' },
  { code: 'AD', name: 'Andorra', nationality: 'Andorran' },
  { code: 'AO', name: 'Angola', nationality: 'Angolan' },
  { code: 'AI', name: 'Anguilla', nationality: 'Anguillan' },
  { code: 'AQ', name: 'Antarctica', nationality: 'Antarctic' },
  { code: 'AG', name: 'Antigua and Barbuda', nationality: 'Antiguan' },
  { code: 'AR', name: 'Argentina', nationality: 'Argentine' },
  { code: 'AM', name: 'Armenia', nationality: 'Armenian' },
  { code: 'AW', name: 'Aruba', nationality: 'Arubian' },
  { code: 'AU', name: 'Australia', nationality: 'Australian' },
  { code: 'AT', name: 'Austria', nationality: 'Austrian' },
  { code: 'AZ', name: 'Azerbaijan', nationality: 'Azerbaijani' },
  { code: 'BS', name: 'Bahamas (the)', nationality: 'Bahameese' },
  { code: 'BH', name: 'Bahrain', nationality: 'Bahrainian' },
  { code: 'BD', name: 'Bangladesh', nationality: 'Bangladeshi' },
  { code: 'BB', name: 'Barbados', nationality: 'Barbadian' },
  { code: 'BY', name: 'Belarus', nationality: 'Belarusian' },
  { code: 'BE', name: 'Belgium', nationality: 'Belgian' },
  { code: 'BZ', name: 'Belize', nationality: 'Belizean' },
  { code: 'BJ', name: 'Benin', nationality: 'Beninese' },
  { code: 'BM', name: 'Bermuda', nationality: 'Bermudan' },
  { code: 'BT', name: 'Bhutan', nationality: 'Bhutanese' },
  { code: 'BO', name: 'Bolivia', nationality: 'Bolivian' },
  { code: 'BQ', name: 'Bonaire, Sint Eustatius and Saba', nationality: 'Dutch' },
  { code: 'BA', name: 'Bosnia and Herzegovina', nationality: 'Bosnian' },
  { code: 'BW', name: 'Botswana', nationality: 'Motswana' },
  { code: 'BV', name: 'Bouvet Island', nationality: 'Norwegian' },
  { code: 'BR', name: 'Brazil', nationality: 'Brazilian' },
  { code: 'IO', name: 'British Indian Ocean Territory' },
  { code: 'BN', name: 'Brunei Darussalam', nationality: 'Bruneian' },
  { code: 'BG', name: 'Bulgaria', nationality: 'Bulgarian' },
  { code: 'BF', name: 'Burkina Faso', nationality: 'Burkinabe' },
  { code: 'BI', name: 'Burundi', nationality: 'Burundian' },
  { code: 'KH', name: 'Cambodia', nationality: 'Cambodian' },
  { code: 'CM', name: 'Cameroon', nationality: 'Cameroonian' },
  { code: 'CA', name: 'Canada', nationality: 'Canadian' },
  { code: 'CV', name: 'Cabo Verde', nationality: 'Cape Verdean' },
  { code: 'KY', name: 'Cayman Islands (the)', nationality: 'Caymanian' },
  { code: 'CF', name: 'Central African Republic', nationality: 'Central African' },
  { code: 'TD', name: 'Chad', nationality: 'Chadian' },
  { code: 'CL', name: 'Chile', nationality: 'Chilean' },
  { code: 'CN', name: 'China', nationality: 'Chinese' },
  { code: 'CX', name: 'Christmas Island', nationality: 'Christmas Islander' },
  { code: 'CC', name: 'Cocos (Keeling) Islands (the)', nationality: 'Cocossian' },
  { code: 'CO', name: 'Colombia', nationality: 'Colombian' },
  { code: 'KM', name: 'Comoros (the)', nationality: 'Comoran' },
  { code: 'CG', name: 'Congo (the)', nationality: 'Congolese' },
  { code: 'CK', name: 'Cook Islands (the)', nationality: 'Cook Islander' },
  { code: 'CR', name: 'Costa Rica', nationality: 'Costa Rican' },
  { code: 'HR', name: 'Croatia', nationality: 'Croatian' },
  { code: 'CU', name: 'Cuba', nationality: 'Cuban' },
  { code: 'CW', name: 'Curacao', nationality: 'Curacaoan' },
  { code: 'CY', name: 'Cyprus', nationality: 'Cypriot' },
  { code: 'CZ', name: 'Czechia', nationality: 'Czech' },
  { code: 'CI', name: "Cote d'Ivoire", nationality: 'Ivorian' },
  { code: 'DK', name: 'Denmark', nationality: 'Danish' },
  { code: 'DJ', name: 'Djibouti', nationality: 'Djiboutian' },
  { code: 'DM', name: 'Dominica', nationality: 'Dominican' },
  { code: 'DO', name: 'Dominican Republic (the)', nationality: 'Dominican' },
  { code: 'EC', name: 'Ecuador', nationality: 'Ecuadorean' },
  { code: 'EG', name: 'Egypt', nationality: 'Egyptian' },
  { code: 'SV', name: 'El Salvador', nationality: 'Salvadorean' },
  { code: 'GQ', name: 'Equatorial Guinea', nationality: 'Equatorial Guinean' },
  { code: 'ER', name: 'Eritrea', nationality: 'Eritrean' },
  { code: 'EE', name: 'Estonia', nationality: 'Estonian' },
  { code: 'ET', name: 'Ethiopia', nationality: 'Ethiopian' },
  { code: 'FK', name: 'Falkland Islands (the)', nationality: 'Falkland Islander' },
  { code: 'FO', name: 'Faroe Islands (the)', nationality: 'Faroese' },
  { code: 'FJ', name: 'Fiji', nationality: 'Fijian' },
  { code: 'FI', name: 'Finland', nationality: 'Finnish' },
  { code: 'FR', name: 'France', nationality: 'French' },
  { code: 'GF', name: 'French Guiana', nationality: 'French Guianese' },
  { code: 'PF', name: 'French Polynesia', nationality: 'French Polynesian' },
  { code: 'TF', name: 'French Southern Territories' },
  { code: 'GA', name: 'Gabon', nationality: 'Gabonese' },
  { code: 'GM', name: 'Gambia (the)', nationality: 'Gambian' },
  { code: 'GE', name: 'Georgia', nationality: 'Georgian' },
  { code: 'DE', name: 'Germany', nationality: 'German' },
  { code: 'GH', name: 'Ghana', nationality: 'Ghanaian' },
  { code: 'GI', name: 'Gibraltar', nationality: 'Gibralterian' },
  { code: 'GR', name: 'Greece', nationality: 'Greek' },
  { code: 'GL', name: 'Greenland', nationality: 'Greenlander' },
  { code: 'GD', name: 'Grenada', nationality: 'Grenadian' },
  { code: 'GP', name: 'Guadeloupe', nationality: 'Guadeloupean' },
  { code: 'GU', name: 'Guam', nationality: 'Guamanian' },
  { code: 'GT', name: 'Guatemala', nationality: 'Guatemalan' },
  { code: 'GW', name: 'Guinea-Bissau', nationality: 'Guinean' },
  { code: 'GN', name: 'Guinea', nationality: 'Guinean' },
  { code: 'GY', name: 'Guyana', nationality: 'Guyanese' },
  { code: 'HT', name: 'Haiti', nationality: 'Haitian' },
  { code: 'HM', name: 'Heard Island And McDonald Islands' },
  { code: 'HN', name: 'Honduras', nationality: 'Honduran' },
  { code: 'HK', name: 'Hong Kong', nationality: 'Hong Konger' },
  { code: 'HU', name: 'Hungary', nationality: 'Hungarian' },
  { code: 'IS', name: 'Iceland', nationality: 'Icelander' },
  { code: 'IN', name: 'India', nationality: 'Indian' },
  { code: 'ID', name: 'Indonesia', nationality: 'Indonesian' },
  { code: 'IR', name: 'Iran (Islamic Republic of)', nationality: 'Iranian' },
  { code: 'IQ', name: 'Iraq', nationality: 'Iraqi' },
  { code: 'IE', name: 'Ireland', nationality: 'Irish' },
  { code: 'IM', name: 'Isle Of Man', nationality: 'Manx' },
  { code: 'IL', name: 'Israel', nationality: 'Israeli' },
  { code: 'IT', name: 'Italy', nationality: 'Italian' },
  { code: 'JM', name: 'Jamaica', nationality: 'Jamaican' },
  { code: 'JP', name: 'Japan', nationality: 'Japanese' },
  { code: 'JO', name: 'Jordan', nationality: 'Jordanian' },
  { code: 'KZ', name: 'Kazakhstan', nationality: 'Kazakhstani' },
  { code: 'KE', name: 'Kenya', nationality: 'Kenyan' },
  { code: 'KI', name: 'Kiribati', nationality: 'I-Kiribati' },
  { code: 'XK', name: 'Kosovo', nationality: 'Kosovan' },
  { code: 'KW', name: 'Kuwait', nationality: 'Kuwaiti' },
  { code: 'KG', name: 'Kyrgyzstan', nationality: 'Kyrgyzstani' },
  { code: 'LA', name: 'Laos', nationality: 'Laotian' },
  { code: 'LV', name: 'Latvia', nationality: 'Latvian' },
  { code: 'LB', name: 'Lebanon', nationality: 'Lebanese' },
  { code: 'LS', name: 'Lesotho', nationality: 'Mosotho' },
  { code: 'LR', name: 'Liberia', nationality: 'Liberian' },
  { code: 'LY', name: 'Libya', nationality: 'Libyan' },
  { code: 'LI', name: 'Liechtenstein', nationality: 'Liechtensteiner' },
  { code: 'LT', name: 'Lithuania', nationality: 'Lithuanian' },
  { code: 'LU', name: 'Luxembourg', nationality: 'Luxembourger' },
  { code: 'MO', name: 'Macao', nationality: 'Macanese' },
  { code: 'MK', name: 'Macedonia', nationality: 'Macedonian' },
  { code: 'MG', name: 'Madagascar', nationality: 'Malagasy' },
  { code: 'MW', name: 'Malawi', nationality: 'Malawian' },
  { code: 'MY', name: 'Malaysia', nationality: 'Malaysian' },
  { code: 'MV', name: 'Maldives', nationality: 'Maldivan' },
  { code: 'ML', name: 'Mali', nationality: 'Malian' },
  { code: 'MT', name: 'Malta', nationality: 'Maltese' },
  { code: 'MH', name: 'Marshall Islands (the)', nationality: 'Marshallese' },
  { code: 'MQ', name: 'Martinique', nationality: 'Martinican' },
  { code: 'MR', name: 'Mauritania', nationality: 'Mauritanian' },
  { code: 'MU', name: 'Mauritius', nationality: 'Mauritian' },
  { code: 'YT', name: 'Mayotte', nationality: 'Mahoran' },
  { code: 'MX', name: 'Mexico', nationality: 'Mexican' },
  { code: 'FM', name: 'Micronesia', nationality: 'Micronesian' },
  { code: 'MD', name: 'Moldova (the Republic of)', nationality: 'Moldovan' },
  { code: 'MC', name: 'Monaco', nationality: 'Monacan' },
  { code: 'MN', name: 'Mongolia', nationality: 'Mongolian' },
  { code: 'ME', name: 'Montenegro', nationality: 'Montenegrin' },
  { code: 'MS', name: 'Montserrat', nationality: 'Montserratian' },
  { code: 'MA', name: 'Morocco', nationality: 'Moroccan' },
  { code: 'MZ', name: 'Mozambique', nationality: 'Mozambican' },
  { code: 'MM', name: 'Myanmar', nationality: 'Burmese' },
  { code: 'NA', name: 'Namibia', nationality: 'Namibian' },
  { code: 'NR', name: 'Nauru', nationality: 'Nauruan' },
  { code: 'NP', name: 'Nepal', nationality: 'Nepalese' },
  { code: 'NL', name: 'Netherlands (the)', nationality: 'Dutch' },
  { code: 'NC', name: 'New Caledonia', nationality: 'New Caledonian' },
  { code: 'NZ', name: 'New Zealand', nationality: 'New Zealander' },
  { code: 'NI', name: 'Nicaragua', nationality: 'Nicaraguan' },
  { code: 'NE', name: 'Niger (the)', nationality: 'Nigerien' },
  { code: 'NG', name: 'Nigeria', nationality: 'Nigerian' },
  { code: 'NU', name: 'Niue', nationality: 'Niuean' },
  { code: 'NF', name: 'Norfolk Island', nationality: 'Norfolk Islander' },
  { code: 'KP', name: 'North Korea', nationality: 'Korean' },
  { code: 'MP', name: 'Northern Mariana Islands (the)', nationality: 'Northern Mariana Islander' },
  { code: 'NO', name: 'Norway', nationality: 'Norwegian' },
  { code: 'OM', name: 'Oman', nationality: 'Omani' },
  { code: 'PK', name: 'Pakistan', nationality: 'Pakistani' },
  { code: 'PW', name: 'Palau', nationality: 'Palauan' },
  { code: 'PS', name: 'Palastine, State of', nationality: 'Palestinian' },
  { code: 'PA', name: 'Panama', nationality: 'Panamanian' },
  { code: 'PG', name: 'Papua New Guinea', nationality: 'Papua New Guinean' },
  { code: 'PY', name: 'Paraguay', nationality: 'Paraguayan' },
  { code: 'PE', name: 'Peru', nationality: 'Peruvian' },
  { code: 'PH', name: 'Philippines (the)', nationality: 'Filipino' },
  { code: 'PN', name: 'Pitcairn', nationality: 'Pitcairn Islander' },
  { code: 'PL', name: 'Poland', nationality: 'Polish' },
  { code: 'PT', name: 'Portugal', nationality: 'Portuguese' },
  { code: 'PR', name: 'Puerto Rico', nationality: 'Puerto Rican' },
  { code: 'QA', name: 'Qatar', nationality: 'Qatari' },
  { code: 'RE', name: 'Reunion', nationality: 'Reunionese' },
  { code: 'RO', name: 'Romania', nationality: 'Romanian' },
  { code: 'RU', name: 'Russian Federation (the)', nationality: 'Russian' },
  { code: 'RW', name: 'Rwanda', nationality: 'Rwandan' },
  { code: 'BL', name: 'Saint Barthelemy', nationality: 'Barthelemois' },
  { code: 'SH', name: 'Saint Helena', nationality: 'Saint Helenian' },
  { code: 'KN', name: 'Saint Kitts And Nevis', nationality: 'Kittian' },
  { code: 'LC', name: 'Saint Lucia', nationality: 'Saint Lucian' },
  { code: 'MF', name: 'Saint Martin (French part)', nationality: 'French' },
  { code: 'PM', name: 'Saint Pierre And Miquelon', nationality: 'Saint-Pierrais' },
  { code: 'VC', name: 'Saint Vincent And The Grenadines', nationality: 'Saint Vincentian' },
  { code: 'WS', name: 'Samoa', nationality: 'Samoan' },
  { code: 'SM', name: 'San Marino', nationality: 'Sanmarinese' },
  { code: 'ST', name: 'Sao Tome And Principe', nationality: 'Sao Tomean' },
  { code: 'SA', name: 'Saudi Arabia', nationality: 'Saudi Arabian' },
  { code: 'SN', name: 'Senegal', nationality: 'Senegalese' },
  { code: 'RS', name: 'Serbia', nationality: 'Serbian' },
  { code: 'SC', name: 'Seychelles', nationality: 'Seychellois' },
  { code: 'SL', name: 'Sierra Leone', nationality: 'Sierra Leonean' },
  { code: 'SG', name: 'Singapore', nationality: 'Singaporean' },
  { code: 'SX', name: 'Sint Maarten (Dutch part)', nationality: 'Dutch' },
  { code: 'SK', name: 'Slovakia', nationality: 'Slovakian' },
  { code: 'SI', name: 'Slovenia', nationality: 'Slovenian' },
  { code: 'SB', name: 'Solomon Islands', nationality: 'Solomon Islander' },
  { code: 'SO', name: 'Somalia', nationality: 'Somali' },
  { code: 'ZA', name: 'South Africa', nationality: 'South African' },
  { code: 'GS', name: 'South Georgia And The South Sandwich Islands' },
  { code: 'SS', name: 'South Sudan', nationality: 'Sudanese' },
  { code: 'KR', name: 'Korea (the Republic of)', nationality: 'Korean' },
  { code: 'ES', name: 'Spain', nationality: 'Spanish' },
  { code: 'LK', name: 'Sri Lanka', nationality: 'Sri Lankan' },
  { code: 'SD', name: 'Sudan (the)', nationality: 'Sudanese' },
  { code: 'SR', name: 'Suriname', nationality: 'Surinamer' },
  { code: 'SJ', name: 'Svalbard And Jan Mayen' },
  { code: 'SZ', name: 'Swaziland', nationality: 'Swazi' },
  { code: 'SE', name: 'Sweden', nationality: 'Swedish' },
  { code: 'CH', name: 'Switzerland', nationality: 'Swiss' },
  { code: 'SY', name: 'Syrian Arab Republic', nationality: 'Syrian' },
  { code: 'TW', name: 'Taiwan (Province of China)', nationality: 'Taiwanese' },
  { code: 'TJ', name: 'Tajikistan', nationality: 'Tajikistani' },
  { code: 'TZ', name: 'Tanzania, United Republic of', nationality: 'Tanzanian' },
  { code: 'TH', name: 'Thailand', nationality: 'Thai' },
  { code: 'CD', name: 'Congo (the Democratic Republic of the)', nationality: 'Congolese' },
  { code: 'TL', name: 'Timor-Leste', nationality: 'Timorese' },
  { code: 'TG', name: 'Togo', nationality: 'Togolese' },
  { code: 'TK', name: 'Tokelau', nationality: 'Tokelauan' },
  { code: 'TO', name: 'Tonga', nationality: 'Tongan' },
  { code: 'TT', name: 'Trinidad and Tobago', nationality: 'Trinidadian' },
  { code: 'TN', name: 'Tunisia', nationality: 'Tunisian' },
  { code: 'TR', name: 'Turkey', nationality: 'Turkish' },
  { code: 'TM', name: 'Turkmenistan', nationality: 'Turkmen' },
  { code: 'TC', name: 'Turks and Caicos Islands (the)', nationality: 'Turks and Caicos Islander' },
  { code: 'TV', name: 'Tuvalu', nationality: 'Tuvaluan' },
  { code: 'VI', name: 'Virgin Islands (U.S)', nationality: 'Virgin Islander' },
  { code: 'UG', name: 'Uganda', nationality: 'Ugandan' },
  { code: 'UA', name: 'Ukraine', nationality: 'Ukrainian' },
  { code: 'AE', name: 'United Arab Emirates (the)', nationality: 'Emirian' },
  { code: 'UM', name: 'United States Minor Outlying Islands (the)' },
  { code: 'US', name: 'United States', nationality: 'American' },
  { code: 'UY', name: 'Uruguay', nationality: 'Uruguayan' },
  { code: 'UZ', name: 'Uzbekistan', nationality: 'Uzbekistani' },
  { code: 'VU', name: 'Vanuatu', nationality: 'Ni-Vanuatu' },
  { code: 'VA', name: 'Holy See (the)' },
  { code: 'VE', name: 'Venezuela', nationality: 'Venezuelan' },
  { code: 'VN', name: 'Viet Nam', nationality: 'Vietnamese' },
  { code: 'WF', name: 'Wallis And Futuna', nationality: 'Wallisian' },
  { code: 'EH', name: 'Western Sahara', nationality: 'Western Saharan' },
  { code: 'YE', name: 'Yemen', nationality: 'Yemeni' },
  { code: 'ZM', name: 'Zambia', nationality: 'Zambian' },
  { code: 'ZW', name: 'Zimbabwe', nationality: 'Zimbabwean' },
  { code: 'AX', name: 'Aland Islands', nationality: 'Alandic' },
];

export default countries;
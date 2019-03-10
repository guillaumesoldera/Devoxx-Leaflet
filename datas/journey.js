const journey = {
    "tickets": [],
    "links": [
        {
            "href": "https://api.navitia.io/v1/coverage/fr-idf/journeys?to=2.280502;48.877179&from=2.320752;48.839268&datetime_represents=departure&datetime=20190309T160543",
            "type": "next",
            "rel": "next",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/fr-idf/journeys?to=2.280502;48.877179&from=2.320752;48.839268&datetime_represents=arrival&datetime=20190309T163917",
            "type": "prev",
            "rel": "prev",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/fr-idf/journeys?to=2.280502;48.877179&from=2.320752;48.839268&datetime_represents=departure&datetime=20190309T000000",
            "type": "first",
            "rel": "first",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/fr-idf/journeys?to=2.280502;48.877179&from=2.320752;48.839268&datetime_represents=arrival&datetime=20190309T235959",
            "type": "last",
            "rel": "last",
            "templated": false
        }
    ],
    "journeys": [
        {
            "status": "",
            "distances": {
                "car": 0,
                "walking": 644,
                "bike": 0,
                "ridesharing": 0
            },
            "links": [
                {
                    "href": "https://api.navitia.io/v1/journeys?allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59229&allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59611&allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59609&allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59592&from=2.320752%3B48.839268&to=2.280502%3B48.877179&is_journey_schedules=True&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=1&direct_path=none&first_section_mode%5B%5D=walking",
                    "type": "journeys",
                    "rel": "same_journey_schedules",
                    "templated": false
                }
            ],
            "tags": [
                "walking",
                "ecologic"
            ],
            "nb_transfers": 1,
            "durations": {
                "car": 0,
                "walking": 828,
                "total": 2016,
                "ridesharing": 0,
                "bike": 0
            },
            "arrival_date_time": "20190309T163918",
            "calendars": [
                {
                    "active_periods": [
                        {
                            "begin": "20190309",
                            "end": "20190331"
                        }
                    ],
                    "week_pattern": {
                        "monday": false,
                        "tuesday": false,
                        "friday": false,
                        "wednesday": false,
                        "thursday": false,
                        "sunday": false,
                        "saturday": true
                    }
                }
            ],
            "departure_date_time": "20190309T160542",
            "requested_date_time": "20190309T160346",
            "fare": {
                "found": false,
                "total": {
                    "value": "0.0"
                },
                "links": []
            },
            "co2_emission": {
                "value": 17.694,
                "unit": "gEC"
            },
            "type": "best",
            "duration": 2016,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "2.320914;48.839049",
                        "quality": 0,
                        "name": "9 Rue du Commandt René Mouchotte (Paris)",
                        "address": {
                            "name": "9 Rue du Commandt René Mouchotte",
                            "house_number": 9,
                            "coord": {
                                "lat": "48.839049",
                                "lon": "2.320914"
                            },
                            "label": "9 Rue du Commandt René Mouchotte (Paris)",
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566101",
                                        "lon": "2.3514992"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000-75116"
                                }
                            ],
                            "id": "2.320914;48.839049"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20190309T161100",
                    "departure_date_time": "20190309T160542",
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:22230:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "22230"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59609"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59609"
                                }
                            ],
                            "name": "Gaîté",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Metro",
                                    "name": "Métro"
                                }
                            ],
                            "coord": {
                                "lat": "48.838755",
                                "lon": "2.322527"
                            },
                            "label": "Gaîté (Paris)",
                            "equipments": [],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:metro",
                                    "name": "Métro"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75114",
                                    "name": "Paris 14e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.833058",
                                        "lon": "2.326959"
                                    },
                                    "label": "Paris 14e Arrondissement",
                                    "id": "admin:fr:75114",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "7511453",
                                    "name": "Quartier du Montparnasse",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.837616",
                                        "lon": "2.331789"
                                    },
                                    "label": "Quartier du Montparnasse",
                                    "id": "admin:fr:7511453",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59609",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59609"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59609"
                                    }
                                ],
                                "name": "Gaite",
                                "links": [],
                                "coord": {
                                    "lat": "48.838395",
                                    "lon": "2.322555"
                                },
                                "label": "Gaite (Paris)",
                                "administrative_regions": [
                                    {
                                        "insee": "75114",
                                        "name": "Paris 14e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.833058",
                                            "lon": "2.326959"
                                        },
                                        "label": "Paris 14e Arrondissement",
                                        "id": "admin:fr:75114",
                                        "zip_code": ""
                                    },
                                    {
                                        "insee": "7511453",
                                        "name": "Quartier du Montparnasse",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.837616",
                                            "lon": "2.331789"
                                        },
                                        "label": "Quartier du Montparnasse",
                                        "id": "admin:fr:7511453",
                                        "zip_code": ""
                                    },
                                    {
                                        "insee": "75056",
                                        "name": "Paris",
                                        "level": 8,
                                        "coord": {
                                            "lat": "48.856696",
                                            "lon": "2.351461"
                                        },
                                        "label": "Paris (75000-75116)",
                                        "id": "admin:fr:75056",
                                        "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                    },
                                    {
                                        "insee": "7511456",
                                        "name": "Quartier de Plaisance",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.830285",
                                            "lon": "2.315312"
                                        },
                                        "label": "Quartier de Plaisance (75014)",
                                        "id": "admin:fr:7511456",
                                        "zip_code": "75014"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59609"
                            }
                        },
                        "name": "Gaîté (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59609"
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 356
                            }
                        ],
                        "coordinates": [
                            [
                                2.3208864963,
                                48.8389950113
                            ],
                            [
                                2.3208864963,
                                48.8389950113
                            ],
                            [
                                2.320914,
                                48.838981
                            ],
                            [
                                2.321158,
                                48.838857
                            ],
                            [
                                2.321257,
                                48.838944
                            ],
                            [
                                2.321271,
                                48.838957
                            ],
                            [
                                2.321293,
                                48.838977
                            ],
                            [
                                2.321312,
                                48.838994
                            ],
                            [
                                2.321346,
                                48.839022
                            ],
                            [
                                2.321523,
                                48.83917
                            ],
                            [
                                2.321895,
                                48.83948
                            ],
                            [
                                2.321811,
                                48.839686
                            ],
                            [
                                2.321665,
                                48.840059
                            ],
                            [
                                2.321947,
                                48.840136
                            ],
                            [
                                2.322244,
                                48.839455
                            ],
                            [
                                2.3225235124,
                                48.8387536102
                            ],
                            [
                                2.322527,
                                48.838755
                            ]
                        ]
                    },
                    "duration": 318,
                    "path": [
                        {
                            "duration": 22,
                            "direction": 0,
                            "length": 25,
                            "name": ""
                        },
                        {
                            "duration": 15,
                            "direction": -91,
                            "length": 17,
                            "name": ""
                        },
                        {
                            "duration": 60,
                            "direction": 2,
                            "length": 67,
                            "name": ""
                        },
                        {
                            "duration": 59,
                            "direction": -53,
                            "length": 66,
                            "name": "Avenue du Maine"
                        },
                        {
                            "duration": 20,
                            "direction": 82,
                            "length": 22,
                            "name": ""
                        },
                        {
                            "duration": 142,
                            "direction": 97,
                            "length": 159,
                            "name": "Avenue du Maine"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_5_0",
                    "mode": "walking"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:22230:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "22230"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59609"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59609"
                                }
                            ],
                            "name": "Gaîté",
                            "links": [],
                            "coord": {
                                "lat": "48.838755",
                                "lon": "2.322527"
                            },
                            "label": "Gaîté (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75114",
                                    "name": "Paris 14e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.833058",
                                        "lon": "2.326959"
                                    },
                                    "label": "Paris 14e Arrondissement",
                                    "id": "admin:fr:75114",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "7511453",
                                    "name": "Quartier du Montparnasse",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.837616",
                                        "lon": "2.331789"
                                    },
                                    "label": "Quartier du Montparnasse",
                                    "id": "admin:fr:7511453",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59609",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59609"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59609"
                                    }
                                ],
                                "name": "Gaite",
                                "links": [],
                                "coord": {
                                    "lat": "48.838395",
                                    "lon": "2.322555"
                                },
                                "label": "Gaite (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59609"
                            }
                        },
                        "name": "Gaîté (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59609"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OIF:99661523-1_260340-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OIF:100110013:13OIF439"
                        },
                        {
                            "type": "route",
                            "id": "route:OIF:100110013:13"
                        },
                        {
                            "type": "commercial_mode",
                            "id": "commercial_mode:metro"
                        },
                        {
                            "type": "physical_mode",
                            "id": "physical_mode:Metro"
                        },
                        {
                            "type": "network",
                            "id": "network:OIF:439"
                        }
                    ],
                    "arrival_date_time": "20190309T161900",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20190309T161100",
                    "display_informations": {
                        "direction": "Saint-Denis-Université (Saint-Denis)",
                        "code": "13",
                        "network": "METRO",
                        "links": [],
                        "color": "6EC4E8",
                        "name": "Châtillon Montrouge - Saint-Denis-Université",
                        "physical_mode": "Métro",
                        "headsign": "Saint-Denis-Université",
                        "label": "13",
                        "equipments": [],
                        "text_color": "0",
                        "commercial_mode": "Métro",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:463011:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "463011"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59611"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59611"
                                }
                            ],
                            "name": "Champs-Elysées-Clémenceau",
                            "links": [],
                            "coord": {
                                "lat": "48.86737",
                                "lon": "2.314209"
                            },
                            "label": "Champs-Elysées-Clémenceau (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75108",
                                    "name": "Paris 8e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.877315",
                                        "lon": "2.317261"
                                    },
                                    "label": "Paris 8e Arrondissement (75008)",
                                    "id": "admin:fr:75108",
                                    "zip_code": "75008"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "7510829",
                                    "name": "Quartier des Champs-Élysées",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.867075",
                                        "lon": "2.30865"
                                    },
                                    "label": "Quartier des Champs-Élysées (75008)",
                                    "id": "admin:fr:7510829",
                                    "zip_code": "75008"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59611",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59592"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59592"
                                    }
                                ],
                                "name": "Champs Elysées Clémenceau",
                                "links": [],
                                "coord": {
                                    "lat": "48.867749",
                                    "lon": "2.313767"
                                },
                                "label": "Champs Elysées Clémenceau (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59592"
                            }
                        },
                        "name": "Champs-Elysées-Clémenceau (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59611"
                    },
                    "base_arrival_date_time": "20190309T161900",
                    "base_departure_date_time": "20190309T161100",
                    "co2_emission": {
                        "value": 9.948,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 3316
                            }
                        ],
                        "coordinates": [
                            [
                                2.322527,
                                48.838755
                            ],
                            [
                                2.321029,
                                48.84208
                            ],
                            [
                                2.316561,
                                48.846995
                            ],
                            [
                                2.314448,
                                48.850986
                            ],
                            [
                                2.314773,
                                48.856396
                            ],
                            [
                                2.314566,
                                48.860854
                            ],
                            [
                                2.314209,
                                48.86737
                            ]
                        ]
                    },
                    "duration": 480,
                    "type": "public_transport",
                    "id": "section_6_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22230:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22230"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59609"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59609"
                                    }
                                ],
                                "name": "Gaîté",
                                "links": [],
                                "coord": {
                                    "lat": "48.838755",
                                    "lon": "2.322527"
                                },
                                "label": "Gaîté (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59609"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161100",
                            "base_arrival_date_time": "20190309T161100",
                            "base_departure_date_time": "20190309T161100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22157:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22157"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59268"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59268"
                                    }
                                ],
                                "name": "Montparnasse-Bienvenue",
                                "links": [],
                                "coord": {
                                    "lat": "48.84208",
                                    "lon": "2.321029"
                                },
                                "label": "Montparnasse-Bienvenue (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59268"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161300",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161300",
                            "base_arrival_date_time": "20190309T161300",
                            "base_departure_date_time": "20190309T161300"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22229:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22229"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59396"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59396"
                                    }
                                ],
                                "name": "Duroc",
                                "links": [],
                                "coord": {
                                    "lat": "48.846995",
                                    "lon": "2.316561"
                                },
                                "label": "Duroc (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59396"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161400",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161400",
                            "base_arrival_date_time": "20190309T161400",
                            "base_departure_date_time": "20190309T161400"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:463303:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "463303"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59524"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59524"
                                    }
                                ],
                                "name": "Saint-François-Xavier",
                                "links": [],
                                "coord": {
                                    "lat": "48.850986",
                                    "lon": "2.314448"
                                },
                                "label": "Saint-François-Xavier (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59524"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161500",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161500",
                            "base_arrival_date_time": "20190309T161500",
                            "base_departure_date_time": "20190309T161500"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22226:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22226"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59531"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59531"
                                    }
                                ],
                                "name": "Varenne",
                                "links": [],
                                "coord": {
                                    "lat": "48.856396",
                                    "lon": "2.314773"
                                },
                                "label": "Varenne (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59531"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161700",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161700",
                            "base_arrival_date_time": "20190309T161700",
                            "base_departure_date_time": "20190309T161700"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22185:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22185"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59479"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59479"
                                    }
                                ],
                                "name": "Invalides",
                                "links": [],
                                "coord": {
                                    "lat": "48.860854",
                                    "lon": "2.314566"
                                },
                                "label": "Invalides (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59479"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161800",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161800",
                            "base_arrival_date_time": "20190309T161800",
                            "base_departure_date_time": "20190309T161800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:463011:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "463011"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59611"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59611"
                                    }
                                ],
                                "name": "Champs-Elysées-Clémenceau",
                                "links": [],
                                "coord": {
                                    "lat": "48.86737",
                                    "lon": "2.314209"
                                },
                                "label": "Champs-Elysées-Clémenceau (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59611"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161900",
                            "base_arrival_date_time": "20190309T161900",
                            "base_departure_date_time": "20190309T161900"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:463011:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "463011"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59611"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59611"
                                }
                            ],
                            "name": "Champs-Elysées-Clémenceau",
                            "links": [],
                            "coord": {
                                "lat": "48.86737",
                                "lon": "2.314209"
                            },
                            "label": "Champs-Elysées-Clémenceau (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75108",
                                    "name": "Paris 8e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.877315",
                                        "lon": "2.317261"
                                    },
                                    "label": "Paris 8e Arrondissement (75008)",
                                    "id": "admin:fr:75108",
                                    "zip_code": "75008"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "7510829",
                                    "name": "Quartier des Champs-Élysées",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.867075",
                                        "lon": "2.30865"
                                    },
                                    "label": "Quartier des Champs-Élysées (75008)",
                                    "id": "admin:fr:7510829",
                                    "zip_code": "75008"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59611",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59592"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59592"
                                    }
                                ],
                                "name": "Champs Elysées Clémenceau",
                                "links": [],
                                "coord": {
                                    "lat": "48.867749",
                                    "lon": "2.313767"
                                },
                                "label": "Champs Elysées Clémenceau (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59592"
                            }
                        },
                        "name": "Champs-Elysées-Clémenceau (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59611"
                    },
                    "links": [],
                    "arrival_date_time": "20190309T162312",
                    "departure_date_time": "20190309T161900",
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:463010:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "463010"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59592"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59592"
                                }
                            ],
                            "name": "Champs-Elysées-Clémenceau",
                            "links": [],
                            "coord": {
                                "lat": "48.867747",
                                "lon": "2.314141"
                            },
                            "label": "Champs-Elysées-Clémenceau (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75108",
                                    "name": "Paris 8e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.877315",
                                        "lon": "2.317261"
                                    },
                                    "label": "Paris 8e Arrondissement (75008)",
                                    "id": "admin:fr:75108",
                                    "zip_code": "75008"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "7510829",
                                    "name": "Quartier des Champs-Élysées",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.867075",
                                        "lon": "2.30865"
                                    },
                                    "label": "Quartier des Champs-Élysées (75008)",
                                    "id": "admin:fr:7510829",
                                    "zip_code": "75008"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59592",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59592"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59592"
                                    }
                                ],
                                "name": "Champs Elysées Clémenceau",
                                "links": [],
                                "coord": {
                                    "lat": "48.867749",
                                    "lon": "2.313767"
                                },
                                "label": "Champs Elysées Clémenceau (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59592"
                            }
                        },
                        "name": "Champs-Elysées-Clémenceau (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59592"
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 42
                            }
                        ],
                        "coordinates": [
                            [
                                2.314209,
                                48.86737
                            ],
                            [
                                2.314141,
                                48.867747
                            ]
                        ]
                    },
                    "duration": 252,
                    "transfer_type": "walking",
                    "type": "transfer",
                    "id": "section_7_0"
                },
                {
                    "links": [],
                    "arrival_date_time": "20190309T162800",
                    "departure_date_time": "20190309T162312",
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "duration": 288,
                    "type": "waiting",
                    "id": "section_8_0"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:463010:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "463010"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59592"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59592"
                                }
                            ],
                            "name": "Champs-Elysées-Clémenceau",
                            "links": [],
                            "coord": {
                                "lat": "48.867747",
                                "lon": "2.314141"
                            },
                            "label": "Champs-Elysées-Clémenceau (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75108",
                                    "name": "Paris 8e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.877315",
                                        "lon": "2.317261"
                                    },
                                    "label": "Paris 8e Arrondissement (75008)",
                                    "id": "admin:fr:75108",
                                    "zip_code": "75008"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "7510829",
                                    "name": "Quartier des Champs-Élysées",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.867075",
                                        "lon": "2.30865"
                                    },
                                    "label": "Quartier des Champs-Élysées (75008)",
                                    "id": "admin:fr:7510829",
                                    "zip_code": "75008"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59592",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59592"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59592"
                                    }
                                ],
                                "name": "Champs Elysées Clémenceau",
                                "links": [],
                                "coord": {
                                    "lat": "48.867749",
                                    "lon": "2.313767"
                                },
                                "label": "Champs Elysées Clémenceau (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59592"
                            }
                        },
                        "name": "Champs-Elysées-Clémenceau (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59592"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OIF:99712289-1_228672-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OIF:100110001:1OIF439"
                        },
                        {
                            "type": "route",
                            "id": "route:OIF:100110001:1"
                        },
                        {
                            "type": "commercial_mode",
                            "id": "commercial_mode:metro"
                        },
                        {
                            "type": "physical_mode",
                            "id": "physical_mode:Metro"
                        },
                        {
                            "type": "network",
                            "id": "network:OIF:439"
                        }
                    ],
                    "arrival_date_time": "20190309T163500",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20190309T162800",
                    "display_informations": {
                        "direction": "La Défense (Grande Arche) (Puteaux)",
                        "code": "1",
                        "network": "METRO",
                        "links": [],
                        "color": "FFCD00",
                        "name": "Château de Vincennes - La Défense",
                        "physical_mode": "Métro",
                        "headsign": "La Défense (Grande Arche)",
                        "label": "1",
                        "equipments": [],
                        "text_color": "0",
                        "commercial_mode": "Métro",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:22078:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "22078"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59229"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59229"
                                }
                            ],
                            "name": "Porte Maillot",
                            "links": [],
                            "coord": {
                                "lat": "48.878009",
                                "lon": "2.282484"
                            },
                            "label": "Porte Maillot (Paris)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "75117",
                                    "name": "Paris 17e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.884223",
                                        "lon": "2.322363"
                                    },
                                    "label": "Paris 17e Arrondissement (75017)",
                                    "id": "admin:fr:75117",
                                    "zip_code": "75017"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "7511765",
                                    "name": "Quartier des Ternes",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.88042",
                                        "lon": "2.289984"
                                    },
                                    "label": "Quartier des Ternes (75017)",
                                    "id": "admin:fr:7511765",
                                    "zip_code": "75017"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59229",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.877751",
                                    "lon": "2.282561"
                                },
                                "label": "Porte Maillot (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8738102"
                            }
                        },
                        "name": "Porte Maillot (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59229"
                    },
                    "base_arrival_date_time": "20190309T163500",
                    "base_departure_date_time": "20190309T162800",
                    "co2_emission": {
                        "value": 7.746,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 2582
                            }
                        ],
                        "coordinates": [
                            [
                                2.314141,
                                48.867747
                            ],
                            [
                                2.310272,
                                48.869014
                            ],
                            [
                                2.300788,
                                48.872049
                            ],
                            [
                                2.295146,
                                48.873934
                            ],
                            [
                                2.289462,
                                48.875676
                            ],
                            [
                                2.282484,
                                48.878009
                            ]
                        ]
                    },
                    "duration": 420,
                    "type": "public_transport",
                    "id": "section_9_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:463010:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "463010"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59592"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59592"
                                    }
                                ],
                                "name": "Champs-Elysées-Clémenceau",
                                "links": [],
                                "coord": {
                                    "lat": "48.867747",
                                    "lon": "2.314141"
                                },
                                "label": "Champs-Elysées-Clémenceau (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59592"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162800",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162800",
                            "base_arrival_date_time": "20190309T162800",
                            "base_departure_date_time": "20190309T162800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:463181:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "463181"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59232"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59232"
                                    }
                                ],
                                "name": "Franklin-Roosevelt",
                                "links": [],
                                "coord": {
                                    "lat": "48.869014",
                                    "lon": "2.310272"
                                },
                                "label": "Franklin-Roosevelt (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59232"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162900",
                            "base_arrival_date_time": "20190309T162900",
                            "base_departure_date_time": "20190309T162900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:463185:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "463185"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59234"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59234"
                                    }
                                ],
                                "name": "George V",
                                "links": [],
                                "coord": {
                                    "lat": "48.872049",
                                    "lon": "2.300788"
                                },
                                "label": "George V (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59234"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163100",
                            "base_arrival_date_time": "20190309T163100",
                            "base_departure_date_time": "20190309T163100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:463013:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "463013"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59236"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59236"
                                    }
                                ],
                                "name": "Charles de Gaulle-Etoile",
                                "links": [],
                                "coord": {
                                    "lat": "48.873934",
                                    "lon": "2.295146"
                                },
                                "label": "Charles de Gaulle-Etoile (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59236"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163200",
                            "base_arrival_date_time": "20190309T163200",
                            "base_departure_date_time": "20190309T163200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:463121:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "463121"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59237"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59237"
                                    }
                                ],
                                "name": "Argentine",
                                "links": [],
                                "coord": {
                                    "lat": "48.875676",
                                    "lon": "2.289462"
                                },
                                "label": "Argentine (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59237"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163300",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163300",
                            "base_arrival_date_time": "20190309T163300",
                            "base_departure_date_time": "20190309T163300"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22078:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22078"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59229"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59229"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.878009",
                                    "lon": "2.282484"
                                },
                                "label": "Porte Maillot (Paris)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59229"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163500",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163500",
                            "base_arrival_date_time": "20190309T163500",
                            "base_departure_date_time": "20190309T163500"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:22078:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "22078"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59229"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59229"
                                },
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:22078:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "22078"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59229"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59229"
                                }
                            ],
                            "name": "Porte Maillot",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Metro",
                                    "name": "Métro"
                                }
                            ],
                            "coord": {
                                "lat": "48.878009",
                                "lon": "2.282484"
                            },
                            "label": "Porte Maillot (Paris)",
                            "equipments": [],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:metro",
                                    "name": "Métro"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75117",
                                    "name": "Paris 17e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.884223",
                                        "lon": "2.322363"
                                    },
                                    "label": "Paris 17e Arrondissement (75017)",
                                    "id": "admin:fr:75117",
                                    "zip_code": "75017"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "7511765",
                                    "name": "Quartier des Ternes",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.88042",
                                        "lon": "2.289984"
                                    },
                                    "label": "Quartier des Ternes (75017)",
                                    "id": "admin:fr:7511765",
                                    "zip_code": "75017"
                                },
                                {
                                    "insee": "75117",
                                    "name": "Paris 17e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.884223",
                                        "lon": "2.322363"
                                    },
                                    "label": "Paris 17e Arrondissement (75017)",
                                    "id": "admin:fr:75117",
                                    "zip_code": "75017"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "7511765",
                                    "name": "Quartier des Ternes",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.88042",
                                        "lon": "2.289984"
                                    },
                                    "label": "Quartier des Ternes (75017)",
                                    "id": "admin:fr:7511765",
                                    "zip_code": "75017"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59229",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.877751",
                                    "lon": "2.282561"
                                },
                                "label": "Porte Maillot (Paris)",
                                "administrative_regions": [
                                    {
                                        "insee": "75117",
                                        "name": "Paris 17e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.884223",
                                            "lon": "2.322363"
                                        },
                                        "label": "Paris 17e Arrondissement (75017)",
                                        "id": "admin:fr:75117",
                                        "zip_code": "75017"
                                    },
                                    {
                                        "insee": "75056",
                                        "name": "Paris",
                                        "level": 8,
                                        "coord": {
                                            "lat": "48.856696",
                                            "lon": "2.351461"
                                        },
                                        "label": "Paris (75000-75116)",
                                        "id": "admin:fr:75056",
                                        "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                    },
                                    {
                                        "insee": "7511765",
                                        "name": "Quartier des Ternes",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.88042",
                                            "lon": "2.289984"
                                        },
                                        "label": "Quartier des Ternes (75017)",
                                        "id": "admin:fr:7511765",
                                        "zip_code": "75017"
                                    },
                                    {
                                        "insee": "75116",
                                        "name": "Paris 16e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.86317",
                                            "lon": "2.275764"
                                        },
                                        "label": "Paris 16e Arrondissement (75016-75116)",
                                        "id": "admin:fr:75116",
                                        "zip_code": "75016;75116"
                                    },
                                    {
                                        "insee": "7511664",
                                        "name": "Quartier de Chaillot",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.868434",
                                            "lon": "2.291677"
                                        },
                                        "label": "Quartier de Chaillot (75016-75116)",
                                        "id": "admin:fr:7511664",
                                        "zip_code": "75016;75116"
                                    },
                                    {
                                        "insee": "7511663",
                                        "name": "Quartier de la Porte-Dauphine",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.871767",
                                            "lon": "2.271916"
                                        },
                                        "label": "Quartier de la Porte-Dauphine (75016-75116)",
                                        "id": "admin:fr:7511663",
                                        "zip_code": "75016;75116"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8738102"
                            }
                        },
                        "name": "Porte Maillot (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59229"
                    },
                    "links": [],
                    "arrival_date_time": "20190309T163918",
                    "departure_date_time": "20190309T163500",
                    "to": {
                        "embedded_type": "address",
                        "id": "2.280638;48.877747",
                        "quality": 0,
                        "name": "17 Place de la Porte Maillot (Paris)",
                        "address": {
                            "name": "17 Place de la Porte Maillot",
                            "house_number": 17,
                            "coord": {
                                "lat": "48.877747",
                                "lon": "2.280638"
                            },
                            "label": "17 Place de la Porte Maillot (Paris)",
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566101",
                                        "lon": "2.3514992"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000-75116"
                                }
                            ],
                            "id": "2.280638;48.877747"
                        }
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 288
                            }
                        ],
                        "coordinates": [
                            [
                                2.282484,
                                48.878009
                            ],
                            [
                                2.2826512816,
                                48.8785298769
                            ],
                            [
                                2.28238,
                                48.878617
                            ],
                            [
                                2.282163,
                                48.878593
                            ],
                            [
                                2.281487,
                                48.878419
                            ],
                            [
                                2.28117,
                                48.878205
                            ],
                            [
                                2.28104,
                                48.877908
                            ],
                            [
                                2.281338,
                                48.877393
                            ],
                            [
                                2.281094,
                                48.877373
                            ],
                            [
                                2.281058,
                                48.877434
                            ],
                            [
                                2.281033,
                                48.877426
                            ],
                            [
                                2.2806353896,
                                48.8777437333
                            ],
                            [
                                2.2806353896,
                                48.8777437333
                            ]
                        ]
                    },
                    "duration": 258,
                    "path": [
                        {
                            "duration": 195,
                            "direction": 0,
                            "length": 218,
                            "name": "Place de la Porte Maillot"
                        },
                        {
                            "duration": 16,
                            "direction": 104,
                            "length": 18,
                            "name": ""
                        },
                        {
                            "duration": 6,
                            "direction": 76,
                            "length": 7,
                            "name": ""
                        },
                        {
                            "duration": 41,
                            "direction": -95,
                            "length": 46,
                            "name": ""
                        }
                    ],
                    "type": "street_network",
                    "id": "section_10_0",
                    "mode": "walking"
                }
            ]
        },
        {
            "status": "",
            "distances": {
                "car": 0,
                "walking": 1005,
                "bike": 0,
                "ridesharing": 0
            },
            "links": [
                {
                    "href": "https://api.navitia.io/v1/journeys?allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59%3A3813010&allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59%3A3812976&from=2.320752%3B48.839268&to=2.280502%3B48.877179&is_journey_schedules=True&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=0&direct_path=none&first_section_mode%5B%5D=walking",
                    "type": "journeys",
                    "rel": "same_journey_schedules",
                    "templated": false
                }
            ],
            "tags": [
                "walking"
            ],
            "nb_transfers": 0,
            "durations": {
                "car": 0,
                "walking": 899,
                "total": 2519,
                "ridesharing": 0,
                "bike": 0
            },
            "arrival_date_time": "20190309T164953",
            "calendars": [
                {
                    "active_periods": [
                        {
                            "begin": "20190309",
                            "end": "20190310"
                        }
                    ],
                    "week_pattern": {
                        "monday": false,
                        "tuesday": false,
                        "friday": false,
                        "wednesday": false,
                        "thursday": false,
                        "sunday": false,
                        "saturday": true
                    }
                }
            ],
            "departure_date_time": "20190309T160754",
            "requested_date_time": "20190309T160346",
            "fare": {
                "found": false,
                "total": {
                    "value": "0.0"
                },
                "links": []
            },
            "co2_emission": {
                "value": 748.1096,
                "unit": "gEC"
            },
            "type": "comfort",
            "duration": 2519,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "2.320914;48.839049",
                        "quality": 0,
                        "name": "9 Rue du Commandt René Mouchotte (Paris)",
                        "address": {
                            "name": "9 Rue du Commandt René Mouchotte",
                            "house_number": 9,
                            "coord": {
                                "lat": "48.839049",
                                "lon": "2.320914"
                            },
                            "label": "9 Rue du Commandt René Mouchotte (Paris)",
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566101",
                                        "lon": "2.3514992"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000-75116"
                                }
                            ],
                            "id": "2.320914;48.839049"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20190309T161900",
                    "departure_date_time": "20190309T160754",
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:37378:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "37378"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3812976"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3812976"
                                }
                            ],
                            "name": "Place du 18 Juin 1940 - Rue de l'Arrivée",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "coord": {
                                "lat": "48.844327",
                                "lon": "2.322839"
                            },
                            "label": "Place du 18 Juin 1940 - Rue de l'Arrivée (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75106",
                                    "name": "Paris 6e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.850433",
                                        "lon": "2.33295"
                                    },
                                    "label": "Paris 6e Arrondissement (75006)",
                                    "id": "admin:fr:75106",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "7510623",
                                    "name": "Quartier Notre-Dame-des-Champs",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.846416",
                                        "lon": "2.327366"
                                    },
                                    "label": "Quartier Notre-Dame-des-Champs (75006)",
                                    "id": "admin:fr:7510623",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59:3812976",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3687473"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59:3687473"
                                    }
                                ],
                                "name": "Place du 18 Juin 1940 / Rue de l'Arrivée",
                                "links": [],
                                "coord": {
                                    "lat": "48.84418",
                                    "lon": "2.322626"
                                },
                                "label": "Place du 18 Juin 1940 / Rue de l'Arrivée (Paris)",
                                "administrative_regions": [
                                    {
                                        "insee": "7511558",
                                        "name": "Quartier Necker",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.842684",
                                            "lon": "2.310797"
                                        },
                                        "label": "Quartier Necker (75015)",
                                        "id": "admin:fr:7511558",
                                        "zip_code": "75015"
                                    },
                                    {
                                        "insee": "75115",
                                        "name": "Paris 15e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.84137",
                                            "lon": "2.300382"
                                        },
                                        "label": "Paris 15e Arrondissement (75015)",
                                        "id": "admin:fr:75115",
                                        "zip_code": "75015"
                                    },
                                    {
                                        "insee": "75056",
                                        "name": "Paris",
                                        "level": 8,
                                        "coord": {
                                            "lat": "48.856696",
                                            "lon": "2.351461"
                                        },
                                        "label": "Paris (75000-75116)",
                                        "id": "admin:fr:75056",
                                        "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                    },
                                    {
                                        "insee": "75106",
                                        "name": "Paris 6e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.850433",
                                            "lon": "2.33295"
                                        },
                                        "label": "Paris 6e Arrondissement (75006)",
                                        "id": "admin:fr:75106",
                                        "zip_code": "75006"
                                    },
                                    {
                                        "insee": "7510623",
                                        "name": "Quartier Notre-Dame-des-Champs",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.846416",
                                            "lon": "2.327366"
                                        },
                                        "label": "Quartier Notre-Dame-des-Champs (75006)",
                                        "id": "admin:fr:7510623",
                                        "zip_code": "75006"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59:3687473"
                            }
                        },
                        "name": "Place du 18 Juin 1940 - Rue de l'Arrivée (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3812976"
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 745
                            }
                        ],
                        "coordinates": [
                            [
                                2.3208864963,
                                48.8389950113
                            ],
                            [
                                2.3208864963,
                                48.8389950113
                            ],
                            [
                                2.320914,
                                48.838981
                            ],
                            [
                                2.321158,
                                48.838857
                            ],
                            [
                                2.321257,
                                48.838944
                            ],
                            [
                                2.321271,
                                48.838957
                            ],
                            [
                                2.321293,
                                48.838977
                            ],
                            [
                                2.321312,
                                48.838994
                            ],
                            [
                                2.321346,
                                48.839022
                            ],
                            [
                                2.321523,
                                48.83917
                            ],
                            [
                                2.321895,
                                48.83948
                            ],
                            [
                                2.321811,
                                48.839686
                            ],
                            [
                                2.321665,
                                48.840059
                            ],
                            [
                                2.321497,
                                48.840654
                            ],
                            [
                                2.321472,
                                48.840732
                            ],
                            [
                                2.321394,
                                48.841022
                            ],
                            [
                                2.321434,
                                48.841081
                            ],
                            [
                                2.321474,
                                48.841117
                            ],
                            [
                                2.321528,
                                48.841156
                            ],
                            [
                                2.322299,
                                48.841801
                            ],
                            [
                                2.322465,
                                48.841933
                            ],
                            [
                                2.322659,
                                48.842087
                            ],
                            [
                                2.323647,
                                48.842895
                            ],
                            [
                                2.324016,
                                48.843192
                            ],
                            [
                                2.324007,
                                48.843439
                            ],
                            [
                                2.323375,
                                48.844034
                            ],
                            [
                                2.323036,
                                48.844145
                            ],
                            [
                                2.322803,
                                48.844221
                            ],
                            [
                                2.322839,
                                48.844327
                            ]
                        ]
                    },
                    "duration": 666,
                    "path": [
                        {
                            "duration": 22,
                            "direction": 0,
                            "length": 25,
                            "name": ""
                        },
                        {
                            "duration": 15,
                            "direction": -91,
                            "length": 17,
                            "name": ""
                        },
                        {
                            "duration": 60,
                            "direction": 2,
                            "length": 67,
                            "name": ""
                        },
                        {
                            "duration": 170,
                            "direction": -53,
                            "length": 190,
                            "name": "Avenue du Maine"
                        },
                        {
                            "duration": 283,
                            "direction": -4,
                            "length": 317,
                            "name": "Rue du Départ"
                        },
                        {
                            "duration": 75,
                            "direction": -34,
                            "length": 84,
                            "name": "Place du 18 Juin 1940"
                        },
                        {
                            "duration": 41,
                            "direction": -29,
                            "length": 46,
                            "name": "Boulevard du Montparnasse"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_11_0",
                    "mode": "walking"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:37378:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "37378"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3812976"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3812976"
                                }
                            ],
                            "name": "Place du 18 Juin 1940 - Rue de l'Arrivée",
                            "links": [],
                            "coord": {
                                "lat": "48.844327",
                                "lon": "2.322839"
                            },
                            "label": "Place du 18 Juin 1940 - Rue de l'Arrivée (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75106",
                                    "name": "Paris 6e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.850433",
                                        "lon": "2.33295"
                                    },
                                    "label": "Paris 6e Arrondissement (75006)",
                                    "id": "admin:fr:75106",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "7510623",
                                    "name": "Quartier Notre-Dame-des-Champs",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.846416",
                                        "lon": "2.327366"
                                    },
                                    "label": "Quartier Notre-Dame-des-Champs (75006)",
                                    "id": "admin:fr:7510623",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59:3812976",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3687473"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59:3687473"
                                    }
                                ],
                                "name": "Place du 18 Juin 1940 / Rue de l'Arrivée",
                                "links": [],
                                "coord": {
                                    "lat": "48.84418",
                                    "lon": "2.322626"
                                },
                                "label": "Place du 18 Juin 1940 / Rue de l'Arrivée (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59:3687473"
                            }
                        },
                        "name": "Place du 18 Juin 1940 - Rue de l'Arrivée (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3812976"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OIF:101346414-1_193935-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OIF:100100082:82OIF442"
                        },
                        {
                            "type": "route",
                            "id": "route:OIF:100100082:82"
                        },
                        {
                            "type": "commercial_mode",
                            "id": "commercial_mode:bus"
                        },
                        {
                            "type": "physical_mode",
                            "id": "physical_mode:Bus"
                        },
                        {
                            "type": "network",
                            "id": "network:RTP"
                        }
                    ],
                    "arrival_date_time": "20190309T164600",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20190309T161900",
                    "display_informations": {
                        "direction": "Hôpital Américain (Neuilly-sur-Seine)",
                        "code": "82",
                        "network": "RATP",
                        "links": [],
                        "color": "f68f4b",
                        "name": "Luxembourg - Neuilly Hôpital Américain",
                        "physical_mode": "Bus",
                        "headsign": "HOPITAL AMERICAIN",
                        "label": "82",
                        "equipments": [
                            "has_wheelchair_accessibility"
                        ],
                        "text_color": "0",
                        "commercial_mode": "Bus",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:23505:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "23505"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3813010"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3813010"
                                }
                            ],
                            "name": "Porte Maillot",
                            "links": [],
                            "coord": {
                                "lat": "48.876788",
                                "lon": "2.28363"
                            },
                            "label": "Porte Maillot (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75116",
                                    "name": "Paris 16e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.86317",
                                        "lon": "2.275764"
                                    },
                                    "label": "Paris 16e Arrondissement (75016-75116)",
                                    "id": "admin:fr:75116",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "7511664",
                                    "name": "Quartier de Chaillot",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.868434",
                                        "lon": "2.291677"
                                    },
                                    "label": "Quartier de Chaillot (75016-75116)",
                                    "id": "admin:fr:7511664",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "2"
                            },
                            "id": "stop_point:OIF:SP:59:3813010",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.877751",
                                    "lon": "2.282561"
                                },
                                "label": "Porte Maillot (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8738102"
                            }
                        },
                        "name": "Porte Maillot (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3813010"
                    },
                    "base_arrival_date_time": "20190309T164600",
                    "base_departure_date_time": "20190309T161900",
                    "co2_emission": {
                        "value": 748.1096,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 5768
                            }
                        ],
                        "coordinates": [
                            [
                                2.322839,
                                48.844327
                            ],
                            [
                                2.318495,
                                48.84598
                            ],
                            [
                                2.316452,
                                48.84731
                            ],
                            [
                                2.315116,
                                48.849763
                            ],
                            [
                                2.314094,
                                48.851678
                            ],
                            [
                                2.31299,
                                48.853574
                            ],
                            [
                                2.306057,
                                48.854354
                            ],
                            [
                                2.300475,
                                48.851557
                            ],
                            [
                                2.297886,
                                48.85321
                            ],
                            [
                                2.29527,
                                48.854899
                            ],
                            [
                                2.291822,
                                48.857154
                            ],
                            [
                                2.292896,
                                48.859392
                            ],
                            [
                                2.291601,
                                48.861153
                            ],
                            [
                                2.293587,
                                48.864137
                            ],
                            [
                                2.292087,
                                48.865997
                            ],
                            [
                                2.290696,
                                48.867453
                            ],
                            [
                                2.289359,
                                48.869232
                            ],
                            [
                                2.285312,
                                48.870371
                            ],
                            [
                                2.284915,
                                48.871953
                            ],
                            [
                                2.284286,
                                48.874316
                            ],
                            [
                                2.28363,
                                48.876788
                            ]
                        ]
                    },
                    "duration": 1620,
                    "type": "public_transport",
                    "id": "section_12_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:37378:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "37378"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812976"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812976"
                                    }
                                ],
                                "name": "Place du 18 Juin 1940 - Rue de l'Arrivée",
                                "links": [],
                                "coord": {
                                    "lat": "48.844327",
                                    "lon": "2.322839"
                                },
                                "label": "Place du 18 Juin 1940 - Rue de l'Arrivée (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812976"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161900",
                            "base_arrival_date_time": "20190309T161900",
                            "base_departure_date_time": "20190309T161900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:26783:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "26783"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764712"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3764712"
                                    }
                                ],
                                "name": "Maine - Vaugirard",
                                "links": [],
                                "coord": {
                                    "lat": "48.84598",
                                    "lon": "2.318495"
                                },
                                "label": "Maine - Vaugirard (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3764712"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162100",
                            "base_arrival_date_time": "20190309T162100",
                            "base_departure_date_time": "20190309T162100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:36741:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "36741"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812978"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812978"
                                    }
                                ],
                                "name": "Duroc",
                                "links": [],
                                "coord": {
                                    "lat": "48.84731",
                                    "lon": "2.316452"
                                },
                                "label": "Duroc (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812978"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162200",
                            "base_arrival_date_time": "20190309T162200",
                            "base_departure_date_time": "20190309T162200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:36743:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "36743"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812980"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812980"
                                    }
                                ],
                                "name": "Oudinot",
                                "links": [],
                                "coord": {
                                    "lat": "48.849763",
                                    "lon": "2.315116"
                                },
                                "label": "Oudinot (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812980"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162300",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162300",
                            "base_arrival_date_time": "20190309T162300",
                            "base_departure_date_time": "20190309T162300"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23497:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23497"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812982"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812982"
                                    }
                                ],
                                "name": "Saint-François-Xavier",
                                "links": [],
                                "coord": {
                                    "lat": "48.851678",
                                    "lon": "2.314094"
                                },
                                "label": "Saint-François-Xavier (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812982"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162400",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162400",
                            "base_arrival_date_time": "20190309T162400",
                            "base_departure_date_time": "20190309T162400"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:37379:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "37379"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813124"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813124"
                                    }
                                ],
                                "name": "Vauban - Hôtel des Invalides",
                                "links": [],
                                "coord": {
                                    "lat": "48.853574",
                                    "lon": "2.31299"
                                },
                                "label": "Vauban - Hôtel des Invalides (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813124"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162500",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162500",
                            "base_arrival_date_time": "20190309T162500",
                            "base_departure_date_time": "20190309T162500"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22971:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22971"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764765"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3764765"
                                    }
                                ],
                                "name": "École Militaire",
                                "links": [],
                                "coord": {
                                    "lat": "48.854354",
                                    "lon": "2.306057"
                                },
                                "label": "École Militaire (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3764765"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162600",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162600",
                            "base_arrival_date_time": "20190309T162600",
                            "base_departure_date_time": "20190309T162600"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:36303:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "36303"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812988"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812988"
                                    }
                                ],
                                "name": "Général de Bollardiere",
                                "links": [],
                                "coord": {
                                    "lat": "48.851557",
                                    "lon": "2.300475"
                                },
                                "label": "Général de Bollardiere (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812988"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162800",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162800",
                            "base_arrival_date_time": "20190309T162800",
                            "base_departure_date_time": "20190309T162800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:25773:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "25773"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812990"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812990"
                                    }
                                ],
                                "name": "Général Détrie",
                                "links": [],
                                "coord": {
                                    "lat": "48.85321",
                                    "lon": "2.297886"
                                },
                                "label": "Général Détrie (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812990"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162900",
                            "base_arrival_date_time": "20190309T162900",
                            "base_departure_date_time": "20190309T162900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:27050:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "27050"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812991"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812991"
                                    }
                                ],
                                "name": "Champ de Mars - Suffren",
                                "links": [],
                                "coord": {
                                    "lat": "48.854899",
                                    "lon": "2.29527"
                                },
                                "label": "Champ de Mars - Suffren (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812991"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163100",
                            "base_arrival_date_time": "20190309T163100",
                            "base_departure_date_time": "20190309T163100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:25772:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "25772"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812992"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812992"
                                    }
                                ],
                                "name": "Champ de Mars",
                                "links": [],
                                "coord": {
                                    "lat": "48.857154",
                                    "lon": "2.291822"
                                },
                                "label": "Champ de Mars (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812992"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163200",
                            "base_arrival_date_time": "20190309T163200",
                            "base_departure_date_time": "20190309T163200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:25775:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "25775"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812993"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812993"
                                    }
                                ],
                                "name": "Tour Eiffel",
                                "links": [],
                                "coord": {
                                    "lat": "48.859392",
                                    "lon": "2.292896"
                                },
                                "label": "Tour Eiffel (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812993"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163400",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163400",
                            "base_arrival_date_time": "20190309T163400",
                            "base_departure_date_time": "20190309T163400"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:37377:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "37377"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812995"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812995"
                                    }
                                ],
                                "name": "Varsovie",
                                "links": [],
                                "coord": {
                                    "lat": "48.861153",
                                    "lon": "2.291601"
                                },
                                "label": "Varsovie (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812995"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163500",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163500",
                            "base_arrival_date_time": "20190309T163500",
                            "base_departure_date_time": "20190309T163500"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:8439:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "8439"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812997"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812997"
                                    }
                                ],
                                "name": "Iéna",
                                "links": [],
                                "coord": {
                                    "lat": "48.864137",
                                    "lon": "2.293587"
                                },
                                "label": "Iéna (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812997"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163700",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163700",
                            "base_arrival_date_time": "20190309T163700",
                            "base_departure_date_time": "20190309T163700"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:9108:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "9108"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812999"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812999"
                                    }
                                ],
                                "name": "Lübeck",
                                "links": [],
                                "coord": {
                                    "lat": "48.865997",
                                    "lon": "2.292087"
                                },
                                "label": "Lübeck (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812999"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163800",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163800",
                            "base_arrival_date_time": "20190309T163800",
                            "base_departure_date_time": "20190309T163800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:39327:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "39327"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813001"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813001"
                                    }
                                ],
                                "name": "Kléber - Boissière",
                                "links": [],
                                "coord": {
                                    "lat": "48.867453",
                                    "lon": "2.290696"
                                },
                                "label": "Kléber - Boissière (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813001"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163900",
                            "base_arrival_date_time": "20190309T163900",
                            "base_departure_date_time": "20190309T163900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23500:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23500"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813003"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813003"
                                    }
                                ],
                                "name": "Lauriston",
                                "links": [],
                                "coord": {
                                    "lat": "48.869232",
                                    "lon": "2.289359"
                                },
                                "label": "Lauriston (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813003"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164100",
                            "base_arrival_date_time": "20190309T164100",
                            "base_departure_date_time": "20190309T164100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23499:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23499"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813004"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813004"
                                    }
                                ],
                                "name": "Victor Hugo - Poincaré",
                                "links": [],
                                "coord": {
                                    "lat": "48.870371",
                                    "lon": "2.285312"
                                },
                                "label": "Victor Hugo - Poincaré (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813004"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164200",
                            "base_arrival_date_time": "20190309T164200",
                            "base_departure_date_time": "20190309T164200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23503:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23503"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813006"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813006"
                                    }
                                ],
                                "name": "Foch",
                                "links": [],
                                "coord": {
                                    "lat": "48.871953",
                                    "lon": "2.284915"
                                },
                                "label": "Foch (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813006"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164300",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164300",
                            "base_arrival_date_time": "20190309T164300",
                            "base_departure_date_time": "20190309T164300"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23501:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23501"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813008"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813008"
                                    }
                                ],
                                "name": "Alphand",
                                "links": [],
                                "coord": {
                                    "lat": "48.874316",
                                    "lon": "2.284286"
                                },
                                "label": "Alphand (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813008"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164400",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164400",
                            "base_arrival_date_time": "20190309T164400",
                            "base_departure_date_time": "20190309T164400"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23505:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23505"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813010"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813010"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.876788",
                                    "lon": "2.28363"
                                },
                                "label": "Porte Maillot (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "2"
                                },
                                "id": "stop_point:OIF:SP:59:3813010"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164600",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164600",
                            "base_arrival_date_time": "20190309T164600",
                            "base_departure_date_time": "20190309T164600"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:23505:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "23505"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3813010"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3813010"
                                },
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:23505:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "23505"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3813010"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3813010"
                                }
                            ],
                            "name": "Porte Maillot",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "coord": {
                                "lat": "48.876788",
                                "lon": "2.28363"
                            },
                            "label": "Porte Maillot (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding",
                                "has_wheelchair_boarding"
                            ],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75116",
                                    "name": "Paris 16e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.86317",
                                        "lon": "2.275764"
                                    },
                                    "label": "Paris 16e Arrondissement (75016-75116)",
                                    "id": "admin:fr:75116",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "7511664",
                                    "name": "Quartier de Chaillot",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.868434",
                                        "lon": "2.291677"
                                    },
                                    "label": "Quartier de Chaillot (75016-75116)",
                                    "id": "admin:fr:7511664",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "75116",
                                    "name": "Paris 16e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.86317",
                                        "lon": "2.275764"
                                    },
                                    "label": "Paris 16e Arrondissement (75016-75116)",
                                    "id": "admin:fr:75116",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "7511664",
                                    "name": "Quartier de Chaillot",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.868434",
                                        "lon": "2.291677"
                                    },
                                    "label": "Quartier de Chaillot (75016-75116)",
                                    "id": "admin:fr:7511664",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "2"
                            },
                            "id": "stop_point:OIF:SP:59:3813010",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.877751",
                                    "lon": "2.282561"
                                },
                                "label": "Porte Maillot (Paris)",
                                "administrative_regions": [
                                    {
                                        "insee": "75117",
                                        "name": "Paris 17e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.884223",
                                            "lon": "2.322363"
                                        },
                                        "label": "Paris 17e Arrondissement (75017)",
                                        "id": "admin:fr:75117",
                                        "zip_code": "75017"
                                    },
                                    {
                                        "insee": "75056",
                                        "name": "Paris",
                                        "level": 8,
                                        "coord": {
                                            "lat": "48.856696",
                                            "lon": "2.351461"
                                        },
                                        "label": "Paris (75000-75116)",
                                        "id": "admin:fr:75056",
                                        "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                    },
                                    {
                                        "insee": "7511765",
                                        "name": "Quartier des Ternes",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.88042",
                                            "lon": "2.289984"
                                        },
                                        "label": "Quartier des Ternes (75017)",
                                        "id": "admin:fr:7511765",
                                        "zip_code": "75017"
                                    },
                                    {
                                        "insee": "75116",
                                        "name": "Paris 16e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.86317",
                                            "lon": "2.275764"
                                        },
                                        "label": "Paris 16e Arrondissement (75016-75116)",
                                        "id": "admin:fr:75116",
                                        "zip_code": "75016;75116"
                                    },
                                    {
                                        "insee": "7511664",
                                        "name": "Quartier de Chaillot",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.868434",
                                            "lon": "2.291677"
                                        },
                                        "label": "Quartier de Chaillot (75016-75116)",
                                        "id": "admin:fr:7511664",
                                        "zip_code": "75016;75116"
                                    },
                                    {
                                        "insee": "7511663",
                                        "name": "Quartier de la Porte-Dauphine",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.871767",
                                            "lon": "2.271916"
                                        },
                                        "label": "Quartier de la Porte-Dauphine (75016-75116)",
                                        "id": "admin:fr:7511663",
                                        "zip_code": "75016;75116"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8738102"
                            }
                        },
                        "name": "Porte Maillot (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3813010"
                    },
                    "links": [],
                    "arrival_date_time": "20190309T164953",
                    "departure_date_time": "20190309T164600",
                    "to": {
                        "embedded_type": "address",
                        "id": "2.280638;48.877747",
                        "quality": 0,
                        "name": "17 Place de la Porte Maillot (Paris)",
                        "address": {
                            "name": "17 Place de la Porte Maillot",
                            "house_number": 17,
                            "coord": {
                                "lat": "48.877747",
                                "lon": "2.280638"
                            },
                            "label": "17 Place de la Porte Maillot (Paris)",
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566101",
                                        "lon": "2.3514992"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000-75116"
                                }
                            ],
                            "id": "2.280638;48.877747"
                        }
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 260
                            }
                        ],
                        "coordinates": [
                            [
                                2.28363,
                                48.876788
                            ],
                            [
                                2.2835268561,
                                48.8767612265
                            ],
                            [
                                2.283536,
                                48.876726
                            ],
                            [
                                2.283326,
                                48.876896
                            ],
                            [
                                2.283154,
                                48.876994
                            ],
                            [
                                2.283026,
                                48.877067
                            ],
                            [
                                2.282522,
                                48.877022
                            ],
                            [
                                2.281818,
                                48.877149
                            ],
                            [
                                2.281338,
                                48.877393
                            ],
                            [
                                2.281094,
                                48.877373
                            ],
                            [
                                2.281058,
                                48.877434
                            ],
                            [
                                2.281033,
                                48.877426
                            ],
                            [
                                2.2806353896,
                                48.8777437333
                            ],
                            [
                                2.2806353896,
                                48.8777437333
                            ]
                        ]
                    },
                    "duration": 233,
                    "path": [
                        {
                            "duration": 49,
                            "direction": 0,
                            "length": 55,
                            "name": "Avenue de Malakoff"
                        },
                        {
                            "duration": 121,
                            "direction": -49,
                            "length": 136,
                            "name": "Place de la Porte Maillot"
                        },
                        {
                            "duration": 16,
                            "direction": -45,
                            "length": 18,
                            "name": ""
                        },
                        {
                            "duration": 6,
                            "direction": 76,
                            "length": 7,
                            "name": ""
                        },
                        {
                            "duration": 41,
                            "direction": -95,
                            "length": 46,
                            "name": ""
                        }
                    ],
                    "type": "street_network",
                    "id": "section_13_0",
                    "mode": "walking"
                }
            ]
        },
        {
            "status": "",
            "distances": {
                "car": 0,
                "walking": 542,
                "bike": 0,
                "ridesharing": 0
            },
            "links": [
                {
                    "href": "https://api.navitia.io/v1/journeys?allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59%3A3442436&allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59%3A3813010&allowed_id%5B%5D=stop_point%3AOIF%3ASP%3A59%3A3764712&from=2.320752%3B48.839268&to=2.280502%3B48.877179&is_journey_schedules=True&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=1&direct_path=none&first_section_mode%5B%5D=walking",
                    "type": "journeys",
                    "rel": "same_journey_schedules",
                    "templated": false
                }
            ],
            "tags": [
                "walking"
            ],
            "nb_transfers": 1,
            "durations": {
                "car": 0,
                "walking": 485,
                "total": 2705,
                "ridesharing": 0,
                "bike": 0
            },
            "arrival_date_time": "20190309T164953",
            "calendars": [
                {
                    "active_periods": [
                        {
                            "begin": "20190309",
                            "end": "20190310"
                        }
                    ],
                    "week_pattern": {
                        "monday": false,
                        "tuesday": false,
                        "friday": false,
                        "wednesday": false,
                        "thursday": false,
                        "sunday": false,
                        "saturday": true
                    }
                }
            ],
            "departure_date_time": "20190309T160448",
            "requested_date_time": "20190309T160346",
            "fare": {
                "found": false,
                "total": {
                    "value": "0.0"
                },
                "links": []
            },
            "co2_emission": {
                "value": 809.0686,
                "unit": "gEC"
            },
            "type": "less_fallback_walk",
            "duration": 2705,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "2.320914;48.839049",
                        "quality": 0,
                        "name": "9 Rue du Commandt René Mouchotte (Paris)",
                        "address": {
                            "name": "9 Rue du Commandt René Mouchotte",
                            "house_number": 9,
                            "coord": {
                                "lat": "48.839049",
                                "lon": "2.320914"
                            },
                            "label": "9 Rue du Commandt René Mouchotte (Paris)",
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566101",
                                        "lon": "2.3514992"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000-75116"
                                }
                            ],
                            "id": "2.320914;48.839049"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20190309T160900",
                    "departure_date_time": "20190309T160448",
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:20099:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "20099"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3442436"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3442436"
                                }
                            ],
                            "name": "Gare Montparnasse",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "coord": {
                                "lat": "48.840885",
                                "lon": "2.321642"
                            },
                            "label": "Gare Montparnasse (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75114",
                                    "name": "Paris 14e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.833058",
                                        "lon": "2.326959"
                                    },
                                    "label": "Paris 14e Arrondissement",
                                    "id": "admin:fr:75114",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "7511453",
                                    "name": "Quartier du Montparnasse",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.837616",
                                        "lon": "2.331789"
                                    },
                                    "label": "Quartier du Montparnasse",
                                    "id": "admin:fr:7511453",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59:3442436",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8739100"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8739100"
                                    }
                                ],
                                "name": "Gare Montparnasse",
                                "links": [],
                                "coord": {
                                    "lat": "48.841716",
                                    "lon": "2.320821"
                                },
                                "label": "Gare Montparnasse (Paris)",
                                "administrative_regions": [
                                    {
                                        "insee": "75114",
                                        "name": "Paris 14e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.833058",
                                            "lon": "2.326959"
                                        },
                                        "label": "Paris 14e Arrondissement",
                                        "id": "admin:fr:75114",
                                        "zip_code": ""
                                    },
                                    {
                                        "insee": "7511456",
                                        "name": "Quartier de Plaisance",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.830285",
                                            "lon": "2.315312"
                                        },
                                        "label": "Quartier de Plaisance (75014)",
                                        "id": "admin:fr:7511456",
                                        "zip_code": "75014"
                                    },
                                    {
                                        "insee": "75056",
                                        "name": "Paris",
                                        "level": 8,
                                        "coord": {
                                            "lat": "48.856696",
                                            "lon": "2.351461"
                                        },
                                        "label": "Paris (75000-75116)",
                                        "id": "admin:fr:75056",
                                        "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                    },
                                    {
                                        "insee": "75106",
                                        "name": "Paris 6e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.850433",
                                            "lon": "2.33295"
                                        },
                                        "label": "Paris 6e Arrondissement (75006)",
                                        "id": "admin:fr:75106",
                                        "zip_code": "75006"
                                    },
                                    {
                                        "insee": "7510623",
                                        "name": "Quartier Notre-Dame-des-Champs",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.846416",
                                            "lon": "2.327366"
                                        },
                                        "label": "Quartier Notre-Dame-des-Champs (75006)",
                                        "id": "admin:fr:7510623",
                                        "zip_code": "75006"
                                    },
                                    {
                                        "insee": "7511558",
                                        "name": "Quartier Necker",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.842684",
                                            "lon": "2.310797"
                                        },
                                        "label": "Quartier Necker (75015)",
                                        "id": "admin:fr:7511558",
                                        "zip_code": "75015"
                                    },
                                    {
                                        "insee": "75115",
                                        "name": "Paris 15e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.84137",
                                            "lon": "2.300382"
                                        },
                                        "label": "Paris 15e Arrondissement (75015)",
                                        "id": "admin:fr:75115",
                                        "zip_code": "75015"
                                    },
                                    {
                                        "insee": "7511453",
                                        "name": "Quartier du Montparnasse",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.837616",
                                            "lon": "2.331789"
                                        },
                                        "label": "Quartier du Montparnasse",
                                        "id": "admin:fr:7511453",
                                        "zip_code": ""
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8739100"
                            }
                        },
                        "name": "Gare Montparnasse (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3442436"
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 282
                            }
                        ],
                        "coordinates": [
                            [
                                2.3208864963,
                                48.8389950113
                            ],
                            [
                                2.3208864963,
                                48.8389950113
                            ],
                            [
                                2.320914,
                                48.838981
                            ],
                            [
                                2.321158,
                                48.838857
                            ],
                            [
                                2.321257,
                                48.838944
                            ],
                            [
                                2.321271,
                                48.838957
                            ],
                            [
                                2.321293,
                                48.838977
                            ],
                            [
                                2.321312,
                                48.838994
                            ],
                            [
                                2.321346,
                                48.839022
                            ],
                            [
                                2.321523,
                                48.83917
                            ],
                            [
                                2.321895,
                                48.83948
                            ],
                            [
                                2.321811,
                                48.839686
                            ],
                            [
                                2.321665,
                                48.840059
                            ],
                            [
                                2.321947,
                                48.840136
                            ],
                            [
                                2.321764,
                                48.840578
                            ],
                            [
                                2.3216525261,
                                48.8408887757
                            ],
                            [
                                2.321642,
                                48.840885
                            ]
                        ]
                    },
                    "duration": 252,
                    "path": [
                        {
                            "duration": 22,
                            "direction": 0,
                            "length": 25,
                            "name": ""
                        },
                        {
                            "duration": 15,
                            "direction": -91,
                            "length": 17,
                            "name": ""
                        },
                        {
                            "duration": 60,
                            "direction": 2,
                            "length": 67,
                            "name": ""
                        },
                        {
                            "duration": 59,
                            "direction": -53,
                            "length": 66,
                            "name": "Avenue du Maine"
                        },
                        {
                            "duration": 20,
                            "direction": 82,
                            "length": 22,
                            "name": ""
                        },
                        {
                            "duration": 76,
                            "direction": -83,
                            "length": 85,
                            "name": "Avenue du Maine"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_0_0",
                    "mode": "walking"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:20099:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "20099"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3442436"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3442436"
                                }
                            ],
                            "name": "Gare Montparnasse",
                            "links": [],
                            "coord": {
                                "lat": "48.840885",
                                "lon": "2.321642"
                            },
                            "label": "Gare Montparnasse (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75114",
                                    "name": "Paris 14e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.833058",
                                        "lon": "2.326959"
                                    },
                                    "label": "Paris 14e Arrondissement",
                                    "id": "admin:fr:75114",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "7511453",
                                    "name": "Quartier du Montparnasse",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.837616",
                                        "lon": "2.331789"
                                    },
                                    "label": "Quartier du Montparnasse",
                                    "id": "admin:fr:7511453",
                                    "zip_code": ""
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59:3442436",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8739100"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8739100"
                                    }
                                ],
                                "name": "Gare Montparnasse",
                                "links": [],
                                "coord": {
                                    "lat": "48.841716",
                                    "lon": "2.320821"
                                },
                                "label": "Gare Montparnasse (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8739100"
                            }
                        },
                        "name": "Gare Montparnasse (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3442436"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OIF:101667116-1_371861-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OIF:100100028:28OIF442"
                        },
                        {
                            "type": "route",
                            "id": "route:OIF:100100028:28"
                        },
                        {
                            "type": "commercial_mode",
                            "id": "commercial_mode:bus"
                        },
                        {
                            "type": "physical_mode",
                            "id": "physical_mode:Bus"
                        },
                        {
                            "type": "network",
                            "id": "network:RTP"
                        }
                    ],
                    "arrival_date_time": "20190309T161200",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20190309T160900",
                    "display_informations": {
                        "direction": "Gare Saint-Lazare (Paris)",
                        "code": "28",
                        "network": "RATP",
                        "links": [],
                        "color": "DF9AB1",
                        "name": "Gare St-Lazare - Porte d'Orléans",
                        "physical_mode": "Bus",
                        "headsign": "GARE SAINT-LAZARE",
                        "label": "28",
                        "equipments": [
                            "has_wheelchair_accessibility"
                        ],
                        "text_color": "0",
                        "commercial_mode": "Bus",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:26783:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "26783"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3764712"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3764712"
                                }
                            ],
                            "name": "Maine - Vaugirard",
                            "links": [],
                            "coord": {
                                "lat": "48.84598",
                                "lon": "2.318495"
                            },
                            "label": "Maine - Vaugirard (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75106",
                                    "name": "Paris 6e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.850433",
                                        "lon": "2.33295"
                                    },
                                    "label": "Paris 6e Arrondissement (75006)",
                                    "id": "admin:fr:75106",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "7510623",
                                    "name": "Quartier Notre-Dame-des-Champs",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.846416",
                                        "lon": "2.327366"
                                    },
                                    "label": "Quartier Notre-Dame-des-Champs (75006)",
                                    "id": "admin:fr:7510623",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59:3764712",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764712"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59:3764712"
                                    }
                                ],
                                "name": "Maine / Vaugirard",
                                "links": [],
                                "coord": {
                                    "lat": "48.845423",
                                    "lon": "2.318881"
                                },
                                "label": "Maine / Vaugirard (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59:3764712"
                            }
                        },
                        "name": "Maine - Vaugirard (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3764712"
                    },
                    "base_arrival_date_time": "20190309T161200",
                    "base_departure_date_time": "20190309T160900",
                    "co2_emission": {
                        "value": 108.5589,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 837
                            }
                        ],
                        "coordinates": [
                            [
                                2.321642,
                                48.840885
                            ],
                            [
                                2.324119,
                                48.843024
                            ],
                            [
                                2.322635,
                                48.844399
                            ],
                            [
                                2.318495,
                                48.84598
                            ]
                        ]
                    },
                    "duration": 180,
                    "type": "public_transport",
                    "id": "section_1_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:20099:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "20099"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3442436"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3442436"
                                    }
                                ],
                                "name": "Gare Montparnasse",
                                "links": [],
                                "coord": {
                                    "lat": "48.840885",
                                    "lon": "2.321642"
                                },
                                "label": "Gare Montparnasse (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3442436"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T160900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T160900",
                            "base_arrival_date_time": "20190309T160900",
                            "base_departure_date_time": "20190309T160900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:28682:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "28682"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:7170677"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:7170677"
                                    }
                                ],
                                "name": "Place du 18 Juin 1940 - Rue du Départ",
                                "links": [],
                                "coord": {
                                    "lat": "48.843024",
                                    "lon": "2.324119"
                                },
                                "label": "Place du 18 Juin 1940 - Rue du Départ (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:7170677"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161000",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161000",
                            "base_arrival_date_time": "20190309T161000",
                            "base_departure_date_time": "20190309T161000"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:27079:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "27079"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764711"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3764711"
                                    }
                                ],
                                "name": "Place du 18 Juin 1940 - Rue de l'Arrivée",
                                "links": [],
                                "coord": {
                                    "lat": "48.844399",
                                    "lon": "2.322635"
                                },
                                "label": "Place du 18 Juin 1940 - Rue de l'Arrivée (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3764711"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161000",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161000",
                            "base_arrival_date_time": "20190309T161000",
                            "base_departure_date_time": "20190309T161000"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:26783:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "26783"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764712"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3764712"
                                    }
                                ],
                                "name": "Maine - Vaugirard",
                                "links": [],
                                "coord": {
                                    "lat": "48.84598",
                                    "lon": "2.318495"
                                },
                                "label": "Maine - Vaugirard (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3764712"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T161200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T161200",
                            "base_arrival_date_time": "20190309T161200",
                            "base_departure_date_time": "20190309T161200"
                        }
                    ]
                },
                {
                    "links": [],
                    "arrival_date_time": "20190309T162100",
                    "departure_date_time": "20190309T161200",
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "duration": 540,
                    "type": "waiting",
                    "id": "section_2_0"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:26783:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "26783"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3764712"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3764712"
                                }
                            ],
                            "name": "Maine - Vaugirard",
                            "links": [],
                            "coord": {
                                "lat": "48.84598",
                                "lon": "2.318495"
                            },
                            "label": "Maine - Vaugirard (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75106",
                                    "name": "Paris 6e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.850433",
                                        "lon": "2.33295"
                                    },
                                    "label": "Paris 6e Arrondissement (75006)",
                                    "id": "admin:fr:75106",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "7510623",
                                    "name": "Quartier Notre-Dame-des-Champs",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.846416",
                                        "lon": "2.327366"
                                    },
                                    "label": "Quartier Notre-Dame-des-Champs (75006)",
                                    "id": "admin:fr:7510623",
                                    "zip_code": "75006"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "1"
                            },
                            "id": "stop_point:OIF:SP:59:3764712",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764712"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:59:3764712"
                                    }
                                ],
                                "name": "Maine / Vaugirard",
                                "links": [],
                                "coord": {
                                    "lat": "48.845423",
                                    "lon": "2.318881"
                                },
                                "label": "Maine / Vaugirard (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:59:3764712"
                            }
                        },
                        "name": "Maine - Vaugirard (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3764712"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OIF:101346414-1_193935-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OIF:100100082:82OIF442"
                        },
                        {
                            "type": "route",
                            "id": "route:OIF:100100082:82"
                        },
                        {
                            "type": "commercial_mode",
                            "id": "commercial_mode:bus"
                        },
                        {
                            "type": "physical_mode",
                            "id": "physical_mode:Bus"
                        },
                        {
                            "type": "network",
                            "id": "network:RTP"
                        }
                    ],
                    "arrival_date_time": "20190309T164600",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20190309T162100",
                    "display_informations": {
                        "direction": "Hôpital Américain (Neuilly-sur-Seine)",
                        "code": "82",
                        "network": "RATP",
                        "links": [],
                        "color": "f68f4b",
                        "name": "Luxembourg - Neuilly Hôpital Américain",
                        "physical_mode": "Bus",
                        "headsign": "HOPITAL AMERICAIN",
                        "label": "82",
                        "equipments": [
                            "has_wheelchair_accessibility"
                        ],
                        "text_color": "0",
                        "commercial_mode": "Bus",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:23505:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "23505"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3813010"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3813010"
                                }
                            ],
                            "name": "Porte Maillot",
                            "links": [],
                            "coord": {
                                "lat": "48.876788",
                                "lon": "2.28363"
                            },
                            "label": "Porte Maillot (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding"
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75116",
                                    "name": "Paris 16e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.86317",
                                        "lon": "2.275764"
                                    },
                                    "label": "Paris 16e Arrondissement (75016-75116)",
                                    "id": "admin:fr:75116",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "7511664",
                                    "name": "Quartier de Chaillot",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.868434",
                                        "lon": "2.291677"
                                    },
                                    "label": "Quartier de Chaillot (75016-75116)",
                                    "id": "admin:fr:7511664",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "2"
                            },
                            "id": "stop_point:OIF:SP:59:3813010",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.877751",
                                    "lon": "2.282561"
                                },
                                "label": "Porte Maillot (Paris)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8738102"
                            }
                        },
                        "name": "Porte Maillot (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3813010"
                    },
                    "base_arrival_date_time": "20190309T164600",
                    "base_departure_date_time": "20190309T162100",
                    "co2_emission": {
                        "value": 700.5097,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 5401
                            }
                        ],
                        "coordinates": [
                            [
                                2.318495,
                                48.84598
                            ],
                            [
                                2.316452,
                                48.84731
                            ],
                            [
                                2.315116,
                                48.849763
                            ],
                            [
                                2.314094,
                                48.851678
                            ],
                            [
                                2.31299,
                                48.853574
                            ],
                            [
                                2.306057,
                                48.854354
                            ],
                            [
                                2.300475,
                                48.851557
                            ],
                            [
                                2.297886,
                                48.85321
                            ],
                            [
                                2.29527,
                                48.854899
                            ],
                            [
                                2.291822,
                                48.857154
                            ],
                            [
                                2.292896,
                                48.859392
                            ],
                            [
                                2.291601,
                                48.861153
                            ],
                            [
                                2.293587,
                                48.864137
                            ],
                            [
                                2.292087,
                                48.865997
                            ],
                            [
                                2.290696,
                                48.867453
                            ],
                            [
                                2.289359,
                                48.869232
                            ],
                            [
                                2.285312,
                                48.870371
                            ],
                            [
                                2.284915,
                                48.871953
                            ],
                            [
                                2.284286,
                                48.874316
                            ],
                            [
                                2.28363,
                                48.876788
                            ]
                        ]
                    },
                    "duration": 1500,
                    "type": "public_transport",
                    "id": "section_3_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:26783:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "26783"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764712"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3764712"
                                    }
                                ],
                                "name": "Maine - Vaugirard",
                                "links": [],
                                "coord": {
                                    "lat": "48.84598",
                                    "lon": "2.318495"
                                },
                                "label": "Maine - Vaugirard (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3764712"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162100",
                            "base_arrival_date_time": "20190309T162100",
                            "base_departure_date_time": "20190309T162100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:36741:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "36741"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812978"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812978"
                                    }
                                ],
                                "name": "Duroc",
                                "links": [],
                                "coord": {
                                    "lat": "48.84731",
                                    "lon": "2.316452"
                                },
                                "label": "Duroc (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812978"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162200",
                            "base_arrival_date_time": "20190309T162200",
                            "base_departure_date_time": "20190309T162200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:36743:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "36743"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812980"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812980"
                                    }
                                ],
                                "name": "Oudinot",
                                "links": [],
                                "coord": {
                                    "lat": "48.849763",
                                    "lon": "2.315116"
                                },
                                "label": "Oudinot (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812980"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162300",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162300",
                            "base_arrival_date_time": "20190309T162300",
                            "base_departure_date_time": "20190309T162300"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23497:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23497"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812982"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812982"
                                    }
                                ],
                                "name": "Saint-François-Xavier",
                                "links": [],
                                "coord": {
                                    "lat": "48.851678",
                                    "lon": "2.314094"
                                },
                                "label": "Saint-François-Xavier (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812982"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162400",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162400",
                            "base_arrival_date_time": "20190309T162400",
                            "base_departure_date_time": "20190309T162400"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:37379:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "37379"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813124"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813124"
                                    }
                                ],
                                "name": "Vauban - Hôtel des Invalides",
                                "links": [],
                                "coord": {
                                    "lat": "48.853574",
                                    "lon": "2.31299"
                                },
                                "label": "Vauban - Hôtel des Invalides (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813124"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162500",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162500",
                            "base_arrival_date_time": "20190309T162500",
                            "base_departure_date_time": "20190309T162500"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:22971:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "22971"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3764765"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3764765"
                                    }
                                ],
                                "name": "École Militaire",
                                "links": [],
                                "coord": {
                                    "lat": "48.854354",
                                    "lon": "2.306057"
                                },
                                "label": "École Militaire (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3764765"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162600",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162600",
                            "base_arrival_date_time": "20190309T162600",
                            "base_departure_date_time": "20190309T162600"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:36303:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "36303"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812988"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812988"
                                    }
                                ],
                                "name": "Général de Bollardiere",
                                "links": [],
                                "coord": {
                                    "lat": "48.851557",
                                    "lon": "2.300475"
                                },
                                "label": "Général de Bollardiere (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812988"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162800",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162800",
                            "base_arrival_date_time": "20190309T162800",
                            "base_departure_date_time": "20190309T162800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:25773:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "25773"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812990"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812990"
                                    }
                                ],
                                "name": "Général Détrie",
                                "links": [],
                                "coord": {
                                    "lat": "48.85321",
                                    "lon": "2.297886"
                                },
                                "label": "Général Détrie (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812990"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T162900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T162900",
                            "base_arrival_date_time": "20190309T162900",
                            "base_departure_date_time": "20190309T162900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:27050:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "27050"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812991"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812991"
                                    }
                                ],
                                "name": "Champ de Mars - Suffren",
                                "links": [],
                                "coord": {
                                    "lat": "48.854899",
                                    "lon": "2.29527"
                                },
                                "label": "Champ de Mars - Suffren (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812991"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163100",
                            "base_arrival_date_time": "20190309T163100",
                            "base_departure_date_time": "20190309T163100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:25772:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "25772"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812992"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812992"
                                    }
                                ],
                                "name": "Champ de Mars",
                                "links": [],
                                "coord": {
                                    "lat": "48.857154",
                                    "lon": "2.291822"
                                },
                                "label": "Champ de Mars (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812992"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163200",
                            "base_arrival_date_time": "20190309T163200",
                            "base_departure_date_time": "20190309T163200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:25775:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "25775"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812993"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812993"
                                    }
                                ],
                                "name": "Tour Eiffel",
                                "links": [],
                                "coord": {
                                    "lat": "48.859392",
                                    "lon": "2.292896"
                                },
                                "label": "Tour Eiffel (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812993"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163400",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163400",
                            "base_arrival_date_time": "20190309T163400",
                            "base_departure_date_time": "20190309T163400"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:37377:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "37377"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812995"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812995"
                                    }
                                ],
                                "name": "Varsovie",
                                "links": [],
                                "coord": {
                                    "lat": "48.861153",
                                    "lon": "2.291601"
                                },
                                "label": "Varsovie (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812995"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163500",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163500",
                            "base_arrival_date_time": "20190309T163500",
                            "base_departure_date_time": "20190309T163500"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:8439:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "8439"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812997"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812997"
                                    }
                                ],
                                "name": "Iéna",
                                "links": [],
                                "coord": {
                                    "lat": "48.864137",
                                    "lon": "2.293587"
                                },
                                "label": "Iéna (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812997"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163700",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163700",
                            "base_arrival_date_time": "20190309T163700",
                            "base_departure_date_time": "20190309T163700"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:9108:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "9108"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3812999"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3812999"
                                    }
                                ],
                                "name": "Lübeck",
                                "links": [],
                                "coord": {
                                    "lat": "48.865997",
                                    "lon": "2.292087"
                                },
                                "label": "Lübeck (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3812999"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163800",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163800",
                            "base_arrival_date_time": "20190309T163800",
                            "base_departure_date_time": "20190309T163800"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:39327:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "39327"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813001"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813001"
                                    }
                                ],
                                "name": "Kléber - Boissière",
                                "links": [],
                                "coord": {
                                    "lat": "48.867453",
                                    "lon": "2.290696"
                                },
                                "label": "Kléber - Boissière (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813001"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T163900",
                            "additional_informations": [],
                            "departure_date_time": "20190309T163900",
                            "base_arrival_date_time": "20190309T163900",
                            "base_departure_date_time": "20190309T163900"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23500:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23500"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813003"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813003"
                                    }
                                ],
                                "name": "Lauriston",
                                "links": [],
                                "coord": {
                                    "lat": "48.869232",
                                    "lon": "2.289359"
                                },
                                "label": "Lauriston (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813003"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164100",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164100",
                            "base_arrival_date_time": "20190309T164100",
                            "base_departure_date_time": "20190309T164100"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23499:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23499"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813004"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813004"
                                    }
                                ],
                                "name": "Victor Hugo - Poincaré",
                                "links": [],
                                "coord": {
                                    "lat": "48.870371",
                                    "lon": "2.285312"
                                },
                                "label": "Victor Hugo - Poincaré (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813004"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164200",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164200",
                            "base_arrival_date_time": "20190309T164200",
                            "base_departure_date_time": "20190309T164200"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23503:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23503"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813006"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813006"
                                    }
                                ],
                                "name": "Foch",
                                "links": [],
                                "coord": {
                                    "lat": "48.871953",
                                    "lon": "2.284915"
                                },
                                "label": "Foch (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813006"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164300",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164300",
                            "base_arrival_date_time": "20190309T164300",
                            "base_departure_date_time": "20190309T164300"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23501:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23501"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813008"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813008"
                                    }
                                ],
                                "name": "Alphand",
                                "links": [],
                                "coord": {
                                    "lat": "48.874316",
                                    "lon": "2.284286"
                                },
                                "label": "Alphand (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "1"
                                },
                                "id": "stop_point:OIF:SP:59:3813008"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164400",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164400",
                            "base_arrival_date_time": "20190309T164400",
                            "base_departure_date_time": "20190309T164400"
                        },
                        {
                            "stop_point": {
                                "codes": [
                                    {
                                        "type": "SIRI_STIF",
                                        "value": "STIF:StopPoint:Q:23505:"
                                    },
                                    {
                                        "type": "ZDEr_ID_REF_A",
                                        "value": "23505"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF59:3813010"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopPoint:59:3813010"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.876788",
                                    "lon": "2.28363"
                                },
                                "label": "Porte Maillot (Paris)",
                                "equipments": [
                                    "has_wheelchair_boarding"
                                ],
                                "fare_zone": {
                                    "name": "2"
                                },
                                "id": "stop_point:OIF:SP:59:3813010"
                            },
                            "links": [],
                            "arrival_date_time": "20190309T164600",
                            "additional_informations": [],
                            "departure_date_time": "20190309T164600",
                            "base_arrival_date_time": "20190309T164600",
                            "base_departure_date_time": "20190309T164600"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "codes": [
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:23505:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "23505"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3813010"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3813010"
                                },
                                {
                                    "type": "SIRI_STIF",
                                    "value": "STIF:StopPoint:Q:23505:"
                                },
                                {
                                    "type": "ZDEr_ID_REF_A",
                                    "value": "23505"
                                },
                                {
                                    "type": "external_code",
                                    "value": "OIF59:3813010"
                                },
                                {
                                    "type": "source",
                                    "value": "StopPoint:59:3813010"
                                }
                            ],
                            "name": "Porte Maillot",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "coord": {
                                "lat": "48.876788",
                                "lon": "2.28363"
                            },
                            "label": "Porte Maillot (Paris)",
                            "equipments": [
                                "has_wheelchair_boarding",
                                "has_wheelchair_boarding"
                            ],
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "administrative_regions": [
                                {
                                    "insee": "75116",
                                    "name": "Paris 16e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.86317",
                                        "lon": "2.275764"
                                    },
                                    "label": "Paris 16e Arrondissement (75016-75116)",
                                    "id": "admin:fr:75116",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "7511664",
                                    "name": "Quartier de Chaillot",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.868434",
                                        "lon": "2.291677"
                                    },
                                    "label": "Quartier de Chaillot (75016-75116)",
                                    "id": "admin:fr:7511664",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                },
                                {
                                    "insee": "75116",
                                    "name": "Paris 16e Arrondissement",
                                    "level": 9,
                                    "coord": {
                                        "lat": "48.86317",
                                        "lon": "2.275764"
                                    },
                                    "label": "Paris 16e Arrondissement (75016-75116)",
                                    "id": "admin:fr:75116",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "7511664",
                                    "name": "Quartier de Chaillot",
                                    "level": 10,
                                    "coord": {
                                        "lat": "48.868434",
                                        "lon": "2.291677"
                                    },
                                    "label": "Quartier de Chaillot (75016-75116)",
                                    "id": "admin:fr:7511664",
                                    "zip_code": "75016;75116"
                                },
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.856696",
                                        "lon": "2.351461"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                }
                            ],
                            "fare_zone": {
                                "name": "2"
                            },
                            "id": "stop_point:OIF:SP:59:3813010",
                            "stop_area": {
                                "codes": [
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    },
                                    {
                                        "type": "external_code",
                                        "value": "OIF8738102"
                                    },
                                    {
                                        "type": "source",
                                        "value": "StopArea:8738102"
                                    }
                                ],
                                "name": "Porte Maillot",
                                "links": [],
                                "coord": {
                                    "lat": "48.877751",
                                    "lon": "2.282561"
                                },
                                "label": "Porte Maillot (Paris)",
                                "administrative_regions": [
                                    {
                                        "insee": "75117",
                                        "name": "Paris 17e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.884223",
                                            "lon": "2.322363"
                                        },
                                        "label": "Paris 17e Arrondissement (75017)",
                                        "id": "admin:fr:75117",
                                        "zip_code": "75017"
                                    },
                                    {
                                        "insee": "75056",
                                        "name": "Paris",
                                        "level": 8,
                                        "coord": {
                                            "lat": "48.856696",
                                            "lon": "2.351461"
                                        },
                                        "label": "Paris (75000-75116)",
                                        "id": "admin:fr:75056",
                                        "zip_code": "75000;75001;75002;75003;75004;75005;75006;75007;75008;75009;75010;75011;75012;75013;75014;75015;75016;75017;75018;75019;75020;75116"
                                    },
                                    {
                                        "insee": "7511765",
                                        "name": "Quartier des Ternes",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.88042",
                                            "lon": "2.289984"
                                        },
                                        "label": "Quartier des Ternes (75017)",
                                        "id": "admin:fr:7511765",
                                        "zip_code": "75017"
                                    },
                                    {
                                        "insee": "75116",
                                        "name": "Paris 16e Arrondissement",
                                        "level": 9,
                                        "coord": {
                                            "lat": "48.86317",
                                            "lon": "2.275764"
                                        },
                                        "label": "Paris 16e Arrondissement (75016-75116)",
                                        "id": "admin:fr:75116",
                                        "zip_code": "75016;75116"
                                    },
                                    {
                                        "insee": "7511664",
                                        "name": "Quartier de Chaillot",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.868434",
                                            "lon": "2.291677"
                                        },
                                        "label": "Quartier de Chaillot (75016-75116)",
                                        "id": "admin:fr:7511664",
                                        "zip_code": "75016;75116"
                                    },
                                    {
                                        "insee": "7511663",
                                        "name": "Quartier de la Porte-Dauphine",
                                        "level": 10,
                                        "coord": {
                                            "lat": "48.871767",
                                            "lon": "2.271916"
                                        },
                                        "label": "Quartier de la Porte-Dauphine (75016-75116)",
                                        "id": "admin:fr:7511663",
                                        "zip_code": "75016;75116"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OIF:SA:8738102"
                            }
                        },
                        "name": "Porte Maillot (Paris)",
                        "distance": "0",
                        "quality": 0,
                        "id": "stop_point:OIF:SP:59:3813010"
                    },
                    "links": [],
                    "arrival_date_time": "20190309T164953",
                    "departure_date_time": "20190309T164600",
                    "to": {
                        "embedded_type": "address",
                        "id": "2.280638;48.877747",
                        "quality": 0,
                        "name": "17 Place de la Porte Maillot (Paris)",
                        "address": {
                            "name": "17 Place de la Porte Maillot",
                            "house_number": 17,
                            "coord": {
                                "lat": "48.877747",
                                "lon": "2.280638"
                            },
                            "label": "17 Place de la Porte Maillot (Paris)",
                            "administrative_regions": [
                                {
                                    "insee": "75056",
                                    "name": "Paris",
                                    "level": 8,
                                    "coord": {
                                        "lat": "48.8566101",
                                        "lon": "2.3514992"
                                    },
                                    "label": "Paris (75000-75116)",
                                    "id": "admin:fr:75056",
                                    "zip_code": "75000-75116"
                                }
                            ],
                            "id": "2.280638;48.877747"
                        }
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 260
                            }
                        ],
                        "coordinates": [
                            [
                                2.28363,
                                48.876788
                            ],
                            [
                                2.2835268561,
                                48.8767612265
                            ],
                            [
                                2.283536,
                                48.876726
                            ],
                            [
                                2.283326,
                                48.876896
                            ],
                            [
                                2.283154,
                                48.876994
                            ],
                            [
                                2.283026,
                                48.877067
                            ],
                            [
                                2.282522,
                                48.877022
                            ],
                            [
                                2.281818,
                                48.877149
                            ],
                            [
                                2.281338,
                                48.877393
                            ],
                            [
                                2.281094,
                                48.877373
                            ],
                            [
                                2.281058,
                                48.877434
                            ],
                            [
                                2.281033,
                                48.877426
                            ],
                            [
                                2.2806353896,
                                48.8777437333
                            ],
                            [
                                2.2806353896,
                                48.8777437333
                            ]
                        ]
                    },
                    "duration": 233,
                    "path": [
                        {
                            "duration": 49,
                            "direction": 0,
                            "length": 55,
                            "name": "Avenue de Malakoff"
                        },
                        {
                            "duration": 121,
                            "direction": -49,
                            "length": 136,
                            "name": "Place de la Porte Maillot"
                        },
                        {
                            "duration": 16,
                            "direction": -45,
                            "length": 18,
                            "name": ""
                        },
                        {
                            "duration": 6,
                            "direction": 76,
                            "length": 7,
                            "name": ""
                        },
                        {
                            "duration": 41,
                            "direction": -95,
                            "length": 46,
                            "name": ""
                        }
                    ],
                    "type": "street_network",
                    "id": "section_4_0",
                    "mode": "walking"
                }
            ]
        }
    ],
    "disruptions": [],
    "notes": [],
    "feed_publishers": [
        {
            "url": "https://www.openstreetmap.org/copyright",
            "id": "osm",
            "license": "ODbL",
            "name": "openstreetmap"
        },
        {
            "url": "http://www.vianavigo.com",
            "id": "OIF",
            "license": "ODbL",
            "name": "Île de France Mobilités"
        }
    ],
    "context": {
        "timezone": "Europe/Paris",
        "current_datetime": "20190309T160346",
        "car_direct_path": {
            "co2_emission": {
                "value": 1295.8097054164,
                "unit": "gEC"
            }
        }
    },
    "exceptions": []
}
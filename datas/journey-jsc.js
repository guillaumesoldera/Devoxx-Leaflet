const journey = {
    "tickets": [],
    "links": [
        {
            "href": "https://api.navitia.io/v1/coverage/fr-sw/journeys?to=-1.154570;46.156636&from=-1.1506331;46.1519906&datetime_represents=departure&datetime=20190819T114647",
            "type": "next",
            "rel": "next",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/fr-sw/journeys?to=-1.154570;46.156636&from=-1.1506331;46.1519906&datetime_represents=arrival&datetime=20190819T120216",
            "type": "prev",
            "rel": "prev",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/fr-sw/journeys?to=-1.154570;46.156636&from=-1.1506331;46.1519906&datetime_represents=departure&datetime=20190819T000000",
            "type": "first",
            "rel": "first",
            "templated": false
        },
        {
            "href": "https://api.navitia.io/v1/coverage/fr-sw/journeys?to=-1.154570;46.156636&from=-1.1506331;46.1519906&datetime_represents=arrival&datetime=20190819T235959",
            "type": "last",
            "rel": "last",
            "templated": false
        }
    ],
    "journeys": [
        {
            "status": "",
            "distances": {
                "taxi": 0,
                "car": 0,
                "walking": 1099,
                "bike": 0,
                "ridesharing": 0
            },
            "tags": [
                "walking",
                "non_pt",
                "non_pt_walking",
                "ecologic"
            ],
            "nb_transfers": 0,
            "durations": {
                "taxi": 0,
                "walking": 982,
                "car": 0,
                "ridesharing": 0,
                "bike": 0,
                "total": 982
            },
            "arrival_date_time": "20190819T115955",
            "departure_date_time": "20190819T114333",
            "requested_date_time": "20190819T114333",
            "fare": {
                "found": false,
                "links": []
            },
            "co2_emission": {
                "value": 0,
                "unit": ""
            },
            "type": "best",
            "duration": 982,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "-1.1506331;46.1519906",
                        "quality": 0,
                        "name": "Quai Louis Prunier (La Rochelle)",
                        "address": {
                            "name": "Quai Louis Prunier",
                            "house_number": 0,
                            "coord": {
                                "lat": "46.1519906",
                                "lon": "-1.1506331"
                            },
                            "label": "Quai Louis Prunier (La Rochelle)",
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "id": "-1.1506331;46.1519906"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20190819T115955",
                    "departure_date_time": "20190819T114333",
                    "to": {
                        "embedded_type": "address",
                        "id": "-1.15457;46.156636",
                        "quality": 0,
                        "name": "Rue des Carmes (La Rochelle)",
                        "address": {
                            "name": "Rue des Carmes",
                            "house_number": 0,
                            "coord": {
                                "lat": "46.156636",
                                "lon": "-1.15457"
                            },
                            "label": "Rue des Carmes (La Rochelle)",
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "id": "-1.15457;46.156636"
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
                                "length": 1099
                            }
                        ],
                        "coordinates": [
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.150112,
                                46.152781
                            ],
                            [
                                -1.150051,
                                46.153811
                            ],
                            [
                                -1.149588,
                                46.153841
                            ],
                            [
                                -1.149589,
                                46.154042
                            ],
                            [
                                -1.149591,
                                46.154984
                            ],
                            [
                                -1.149616,
                                46.155302
                            ],
                            [
                                -1.149641,
                                46.155572
                            ],
                            [
                                -1.149652,
                                46.155894
                            ],
                            [
                                -1.149657,
                                46.155989
                            ],
                            [
                                -1.149649,
                                46.156394
                            ],
                            [
                                -1.150067,
                                46.157086
                            ],
                            [
                                -1.15029,
                                46.157424
                            ],
                            [
                                -1.150643,
                                46.15786
                            ],
                            [
                                -1.150706,
                                46.157937
                            ],
                            [
                                -1.151757,
                                46.158094
                            ],
                            [
                                -1.151893,
                                46.158091
                            ],
                            [
                                -1.153079,
                                46.157879
                            ],
                            [
                                -1.153813,
                                46.156837
                            ],
                            [
                                -1.153922,
                                46.156686
                            ],
                            [
                                -1.154466,
                                46.1567
                            ],
                            [
                                -1.1545771631,
                                46.1566529093
                            ]
                        ]
                    },
                    "duration": 982,
                    "path": [
                        {
                            "duration": 0,
                            "direction": 0,
                            "length": 0,
                            "name": ""
                        },
                        {
                            "duration": 212,
                            "direction": 0,
                            "length": 237,
                            "name": "Quai Louis Prunier"
                        },
                        {
                            "duration": 200,
                            "direction": -85,
                            "length": 224,
                            "name": "Quai de la Georgette"
                        },
                        {
                            "duration": 216,
                            "direction": -1,
                            "length": 242,
                            "name": "Quai Valin"
                        },
                        {
                            "duration": 174,
                            "direction": -48,
                            "length": 195,
                            "name": "Quai Duperré"
                        },
                        {
                            "duration": 131,
                            "direction": -50,
                            "length": 147,
                            "name": "Cours des Dames"
                        },
                        {
                            "duration": 41,
                            "direction": 66,
                            "length": 46,
                            "name": "Rue des Carmes"
                        },
                        {
                            "duration": 8,
                            "direction": 0,
                            "length": 9,
                            "name": "Rue Saint-Jean du Pérot"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_9_0",
                    "mode": "walking"
                }
            ]
        },
        {
            "status": "",
            "distances": {
                "taxi": 0,
                "car": 0,
                "walking": 841,
                "bike": 0,
                "ridesharing": 0
            },
            "links": [
                {
                    "href": "https://api.navitia.io/v1/journeys?allowed_id%5B%5D=stop_point%3AOQA%3ASP%3ANAQ%3AQuay%3A8069&allowed_id%5B%5D=stop_point%3AOQA%3ASP%3ANAQ%3AQuay%3A8768&from=-1.1506331%3B46.1519906&to=-1.154570%3B46.156636&is_journey_schedules=True&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=0&direct_path=none&first_section_mode%5B%5D=walking",
                    "type": "journeys",
                    "rel": "same_journey_schedules",
                    "templated": false
                }
            ],
            "tags": [
                "walking",
                "ecologic"
            ],
            "nb_transfers": 0,
            "durations": {
                "taxi": 0,
                "walking": 751,
                "car": 0,
                "ridesharing": 0,
                "bike": 0,
                "total": 931
            },
            "arrival_date_time": "20190819T120217",
            "calendars": [
                {
                    "exceptions": [
                        {
                            "type": "remove",
                            "datetime": "20190815"
                        }
                    ],
                    "active_periods": [
                        {
                            "begin": "20190805",
                            "end": "20190830"
                        }
                    ],
                    "week_pattern": {
                        "monday": true,
                        "tuesday": true,
                        "friday": false,
                        "wednesday": true,
                        "thursday": true,
                        "sunday": false,
                        "saturday": false
                    }
                }
            ],
            "departure_date_time": "20190819T114646",
            "requested_date_time": "20190819T114333",
            "fare": {
                "found": false,
                "total": {
                    "value": "0.0"
                },
                "links": []
            },
            "co2_emission": {
                "value": 58.6244,
                "unit": "gEC"
            },
            "type": "rapid",
            "duration": 931,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "-1.1506331;46.1519906",
                        "quality": 0,
                        "name": "Quai Louis Prunier (La Rochelle)",
                        "address": {
                            "name": "Quai Louis Prunier",
                            "house_number": 0,
                            "coord": {
                                "lat": "46.1519906",
                                "lon": "-1.1506331"
                            },
                            "label": "Quai Louis Prunier (La Rochelle)",
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "id": "-1.1506331;46.1519906"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20190819T114900",
                    "departure_date_time": "20190819T114646",
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "comment": "[AquarLg] Métrobus",
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "stop_area": {
                                "name": "Aquarium",
                                "links": [],
                                "coord": {
                                    "lat": "46.152847",
                                    "lon": "-1.150129"
                                },
                                "label": "Aquarium (La Rochelle)",
                                "administrative_regions": [
                                    {
                                        "insee": "17300",
                                        "name": "La Rochelle",
                                        "level": 8,
                                        "coord": {
                                            "lat": "46.159112",
                                            "lon": "-1.152043"
                                        },
                                        "label": "La Rochelle (17000)",
                                        "id": "admin:fr:17300",
                                        "zip_code": "17000"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:5014"
                            },
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "comments": [
                                {
                                    "type": "standard",
                                    "value": "[AquarLg] Métrobus"
                                }
                            ],
                            "label": "Aquarium (La Rochelle)",
                            "equipments": [],
                            "coord": {
                                "lat": "46.153343",
                                "lon": "-1.150022"
                            },
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8768",
                            "name": "Aquarium"
                        },
                        "quality": 0,
                        "name": "Aquarium (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8768"
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 150
                            }
                        ],
                        "coordinates": [
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.150112,
                                46.152781
                            ],
                            [
                                -1.1500785183,
                                46.1533463472
                            ],
                            [
                                -1.150022,
                                46.153343
                            ]
                        ]
                    },
                    "duration": 134,
                    "path": [
                        {
                            "duration": 0,
                            "direction": 0,
                            "length": 0,
                            "name": ""
                        },
                        {
                            "duration": 134,
                            "direction": 0,
                            "length": 150,
                            "name": "Quai Louis Prunier"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_6_0",
                    "mode": "walking"
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "comment": "[AquarLg] Métrobus",
                            "stop_area": {
                                "name": "Aquarium",
                                "links": [],
                                "coord": {
                                    "lat": "46.152847",
                                    "lon": "-1.150129"
                                },
                                "label": "Aquarium (La Rochelle)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:5014"
                            },
                            "links": [],
                            "comments": [
                                {
                                    "type": "standard",
                                    "value": "[AquarLg] Métrobus"
                                }
                            ],
                            "label": "Aquarium (La Rochelle)",
                            "equipments": [],
                            "coord": {
                                "lat": "46.153343",
                                "lon": "-1.150022"
                            },
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8768",
                            "name": "Aquarium"
                        },
                        "quality": 0,
                        "name": "Aquarium (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8768"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OQA:LRO:VehicleJourney:R1806695-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OQA:LRO:Line:L4"
                        },
                        {
                            "type": "route",
                            "id": "route:OQA:LRO:Line:L4_R"
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
                            "id": "network:OQA:LRO:Authority:1"
                        }
                    ],
                    "arrival_date_time": "20190819T115200",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20190819T114900",
                    "display_informations": {
                        "direction": "P+R Beaulieu (Puilboreau)",
                        "code": "4",
                        "network": "Yélo",
                        "links": [],
                        "color": "047935",
                        "name": "ILLICO Beaulieu <> Les Minimes",
                        "physical_mode": "Bus",
                        "headsign": "P+R Beaulieu",
                        "label": "4",
                        "equipments": [],
                        "text_color": "FFFFFF",
                        "commercial_mode": "Bus",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "name": "Porte Saint-Nicolas",
                            "links": [],
                            "coord": {
                                "lat": "46.155537",
                                "lon": "-1.149034"
                            },
                            "label": "Porte Saint-Nicolas (La Rochelle)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8069",
                            "stop_area": {
                                "name": "Porte Saint-Nicolas",
                                "links": [],
                                "coord": {
                                    "lat": "46.15563",
                                    "lon": "-1.14905"
                                },
                                "label": "Porte Saint-Nicolas (La Rochelle)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:4666"
                            }
                        },
                        "quality": 0,
                        "name": "Porte Saint-Nicolas (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8069"
                    },
                    "base_arrival_date_time": "20190819T115200",
                    "base_departure_date_time": "20190819T114900",
                    "co2_emission": {
                        "value": 58.6244,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 452
                            }
                        ],
                        "coordinates": [
                            [
                                -1.150022,
                                46.153343
                            ],
                            [
                                -1.147265,
                                46.15383
                            ],
                            [
                                -1.149034,
                                46.155537
                            ]
                        ]
                    },
                    "duration": 180,
                    "type": "public_transport",
                    "id": "section_7_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "comment": "[AquarLg] Métrobus",
                                "name": "Aquarium",
                                "links": [],
                                "comments": [
                                    {
                                        "type": "standard",
                                        "value": "[AquarLg] Métrobus"
                                    }
                                ],
                                "label": "Aquarium (La Rochelle)",
                                "equipments": [],
                                "coord": {
                                    "lat": "46.153343",
                                    "lon": "-1.150022"
                                },
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:8768"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T114900",
                            "additional_informations": [],
                            "departure_date_time": "20190819T114900",
                            "base_arrival_date_time": "20190819T114900",
                            "base_departure_date_time": "20190819T114900"
                        },
                        {
                            "stop_point": {
                                "name": "Gare SNCF",
                                "links": [],
                                "coord": {
                                    "lat": "46.15383",
                                    "lon": "-1.147265"
                                },
                                "label": "Gare SNCF (La Rochelle)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:49038"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T115100",
                            "additional_informations": [],
                            "departure_date_time": "20190819T115100",
                            "base_arrival_date_time": "20190819T115100",
                            "base_departure_date_time": "20190819T115100"
                        },
                        {
                            "stop_point": {
                                "name": "Porte Saint-Nicolas",
                                "links": [],
                                "coord": {
                                    "lat": "46.155537",
                                    "lon": "-1.149034"
                                },
                                "label": "Porte Saint-Nicolas (La Rochelle)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:8069"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T115200",
                            "additional_informations": [],
                            "departure_date_time": "20190819T115200",
                            "base_arrival_date_time": "20190819T115200",
                            "base_departure_date_time": "20190819T115200"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "name": "Porte Saint-Nicolas",
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "coord": {
                                "lat": "46.155537",
                                "lon": "-1.149034"
                            },
                            "label": "Porte Saint-Nicolas (La Rochelle)",
                            "equipments": [],
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                },
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8069",
                            "stop_area": {
                                "name": "Porte Saint-Nicolas",
                                "links": [],
                                "coord": {
                                    "lat": "46.15563",
                                    "lon": "-1.14905"
                                },
                                "label": "Porte Saint-Nicolas (La Rochelle)",
                                "administrative_regions": [
                                    {
                                        "insee": "17300",
                                        "name": "La Rochelle",
                                        "level": 8,
                                        "coord": {
                                            "lat": "46.159112",
                                            "lon": "-1.152043"
                                        },
                                        "label": "La Rochelle (17000)",
                                        "id": "admin:fr:17300",
                                        "zip_code": "17000"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:4666"
                            }
                        },
                        "quality": 0,
                        "name": "Porte Saint-Nicolas (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8069"
                    },
                    "links": [],
                    "arrival_date_time": "20190819T120217",
                    "departure_date_time": "20190819T115200",
                    "to": {
                        "embedded_type": "address",
                        "id": "-1.15457;46.156636",
                        "quality": 0,
                        "name": "Rue des Carmes (La Rochelle)",
                        "address": {
                            "name": "Rue des Carmes",
                            "house_number": 0,
                            "coord": {
                                "lat": "46.156636",
                                "lon": "-1.15457"
                            },
                            "label": "Rue des Carmes (La Rochelle)",
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "id": "-1.15457;46.156636"
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
                                "length": 691
                            }
                        ],
                        "coordinates": [
                            [
                                -1.149034,
                                46.155537
                            ],
                            [
                                -1.1489847567,
                                46.1555954354
                            ],
                            [
                                -1.149415,
                                46.155958
                            ],
                            [
                                -1.149415,
                                46.15604
                            ],
                            [
                                -1.149931,
                                46.157002
                            ],
                            [
                                -1.149998,
                                46.157093
                            ],
                            [
                                -1.150067,
                                46.157086
                            ],
                            [
                                -1.15029,
                                46.157424
                            ],
                            [
                                -1.150643,
                                46.15786
                            ],
                            [
                                -1.150706,
                                46.157937
                            ],
                            [
                                -1.151757,
                                46.158094
                            ],
                            [
                                -1.151893,
                                46.158091
                            ],
                            [
                                -1.153079,
                                46.157879
                            ],
                            [
                                -1.153813,
                                46.156837
                            ],
                            [
                                -1.153922,
                                46.156686
                            ],
                            [
                                -1.154466,
                                46.1567
                            ],
                            [
                                -1.1545771631,
                                46.1566529093
                            ],
                            [
                                -1.1545771631,
                                46.1566529093
                            ]
                        ]
                    },
                    "duration": 617,
                    "path": [
                        {
                            "duration": 46,
                            "direction": 0,
                            "length": 52,
                            "name": "Avenue du Général de Gaulle"
                        },
                        {
                            "duration": 120,
                            "direction": 0,
                            "length": 134,
                            "name": "Quai Valin"
                        },
                        {
                            "duration": 4,
                            "direction": -71,
                            "length": 4,
                            "name": "Quai de l'Amiral Meyer"
                        },
                        {
                            "duration": 93,
                            "direction": 74,
                            "length": 104,
                            "name": "Quai Valin"
                        },
                        {
                            "duration": 174,
                            "direction": -48,
                            "length": 195,
                            "name": "Quai Duperré"
                        },
                        {
                            "duration": 131,
                            "direction": -50,
                            "length": 147,
                            "name": "Cours des Dames"
                        },
                        {
                            "duration": 41,
                            "direction": 66,
                            "length": 46,
                            "name": "Rue des Carmes"
                        },
                        {
                            "duration": 8,
                            "direction": 0,
                            "length": 9,
                            "name": "Rue Saint-Jean du Pérot"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_8_0",
                    "mode": "walking"
                }
            ]
        },
        {
            "status": "",
            "distances": {
                "taxi": 0,
                "car": 0,
                "walking": 349,
                "bike": 0,
                "ridesharing": 0
            },
            "links": [
                {
                    "href": "https://api.navitia.io/v1/journeys?allowed_id%5B%5D=stop_point%3AOQA%3ASP%3ANAQ%3AQuay%3A8768&allowed_id%5B%5D=stop_point%3AOQA%3ASP%3ANAQ%3AQuay%3A8607&from=-1.1506331%3B46.1519906&to=-1.154570%3B46.156636&is_journey_schedules=True&last_section_mode%5B%5D=walking&min_nb_journeys=5&min_nb_transfers=0&direct_path=none&first_section_mode%5B%5D=walking",
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
                "taxi": 0,
                "walking": 312,
                "car": 0,
                "ridesharing": 0,
                "bike": 0,
                "total": 552
            },
            "arrival_date_time": "20190819T120258",
            "calendars": [
                {
                    "exceptions": [
                        {
                            "type": "remove",
                            "datetime": "20190815"
                        }
                    ],
                    "active_periods": [
                        {
                            "begin": "20190805",
                            "end": "20190830"
                        }
                    ],
                    "week_pattern": {
                        "monday": true,
                        "tuesday": true,
                        "friday": false,
                        "wednesday": true,
                        "thursday": true,
                        "sunday": false,
                        "saturday": false
                    }
                }
            ],
            "departure_date_time": "20190819T115346",
            "requested_date_time": "20190819T114333",
            "fare": {
                "found": false,
                "total": {
                    "value": "0.0"
                },
                "links": []
            },
            "co2_emission": {
                "value": 124.7714,
                "unit": "gEC"
            },
            "type": "fastest",
            "duration": 552,
            "sections": [
                {
                    "from": {
                        "embedded_type": "address",
                        "id": "-1.1506331;46.1519906",
                        "quality": 0,
                        "name": "Quai Louis Prunier (La Rochelle)",
                        "address": {
                            "name": "Quai Louis Prunier",
                            "house_number": 0,
                            "coord": {
                                "lat": "46.1519906",
                                "lon": "-1.1506331"
                            },
                            "label": "Quai Louis Prunier (La Rochelle)",
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "id": "-1.1506331;46.1519906"
                        }
                    },
                    "links": [],
                    "arrival_date_time": "20190819T115600",
                    "departure_date_time": "20190819T115346",
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "comment": "[AquarLg] Métrobus",
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "stop_area": {
                                "name": "Aquarium",
                                "links": [],
                                "coord": {
                                    "lat": "46.152847",
                                    "lon": "-1.150129"
                                },
                                "label": "Aquarium (La Rochelle)",
                                "administrative_regions": [
                                    {
                                        "insee": "17300",
                                        "name": "La Rochelle",
                                        "level": 8,
                                        "coord": {
                                            "lat": "46.159112",
                                            "lon": "-1.152043"
                                        },
                                        "label": "La Rochelle (17000)",
                                        "id": "admin:fr:17300",
                                        "zip_code": "17000"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:5014"
                            },
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "comments": [
                                {
                                    "type": "standard",
                                    "value": "[AquarLg] Métrobus"
                                }
                            ],
                            "label": "Aquarium (La Rochelle)",
                            "equipments": [],
                            "coord": {
                                "lat": "46.153343",
                                "lon": "-1.150022"
                            },
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8768",
                            "name": "Aquarium"
                        },
                        "quality": 0,
                        "name": "Aquarium (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8768"
                    },
                    "co2_emission": {
                        "value": 0,
                        "unit": ""
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 150
                            }
                        ],
                        "coordinates": [
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.15011,
                                46.151992
                            ],
                            [
                                -1.150112,
                                46.152781
                            ],
                            [
                                -1.1500785183,
                                46.1533463472
                            ],
                            [
                                -1.150022,
                                46.153343
                            ]
                        ]
                    },
                    "duration": 134,
                    "path": [
                        {
                            "duration": 0,
                            "direction": 0,
                            "length": 0,
                            "name": ""
                        },
                        {
                            "duration": 134,
                            "direction": 0,
                            "length": 150,
                            "name": "Quai Louis Prunier"
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
                            "comment": "[AquarLg] Métrobus",
                            "stop_area": {
                                "name": "Aquarium",
                                "links": [],
                                "coord": {
                                    "lat": "46.152847",
                                    "lon": "-1.150129"
                                },
                                "label": "Aquarium (La Rochelle)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:5014"
                            },
                            "links": [],
                            "comments": [
                                {
                                    "type": "standard",
                                    "value": "[AquarLg] Métrobus"
                                }
                            ],
                            "label": "Aquarium (La Rochelle)",
                            "equipments": [],
                            "coord": {
                                "lat": "46.153343",
                                "lon": "-1.150022"
                            },
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8768",
                            "name": "Aquarium"
                        },
                        "quality": 0,
                        "name": "Aquarium (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8768"
                    },
                    "links": [
                        {
                            "type": "vehicle_journey",
                            "id": "vehicle_journey:OQA:LRO:VehicleJourney:R1806472-1"
                        },
                        {
                            "type": "line",
                            "id": "line:OQA:LRO:Line:L3"
                        },
                        {
                            "type": "route",
                            "id": "route:OQA:LRO:Line:L3_R"
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
                            "id": "network:OQA:LRO:Authority:1"
                        }
                    ],
                    "arrival_date_time": "20190819T120000",
                    "additional_informations": [
                        "regular"
                    ],
                    "departure_date_time": "20190819T115600",
                    "display_informations": {
                        "direction": "Les Greffières (Lagord)",
                        "code": "3",
                        "network": "Yélo",
                        "links": [],
                        "color": "C95218",
                        "name": "ILLICO Lagord <> Bongraine",
                        "physical_mode": "Bus",
                        "headsign": "P+R Les Greffières",
                        "label": "3",
                        "equipments": [],
                        "text_color": "FFFFFF",
                        "commercial_mode": "Bus",
                        "description": ""
                    },
                    "to": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "comment": "[GrHorLg] Métrobus",
                            "stop_area": {
                                "name": "Grosse Horloge",
                                "links": [],
                                "coord": {
                                    "lat": "46.158108",
                                    "lon": "-1.153461"
                                },
                                "label": "Grosse Horloge (La Rochelle)",
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:4949"
                            },
                            "links": [],
                            "comments": [
                                {
                                    "type": "standard",
                                    "value": "[GrHorLg] Métrobus"
                                }
                            ],
                            "label": "Grosse Horloge (La Rochelle)",
                            "equipments": [],
                            "coord": {
                                "lat": "46.158108",
                                "lon": "-1.153461"
                            },
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8607",
                            "name": "Grosse Horloge"
                        },
                        "quality": 0,
                        "name": "Grosse Horloge (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8607"
                    },
                    "base_arrival_date_time": "20190819T120000",
                    "base_departure_date_time": "20190819T115600",
                    "co2_emission": {
                        "value": 124.7714,
                        "unit": "gEC"
                    },
                    "geojson": {
                        "type": "LineString",
                        "properties": [
                            {
                                "length": 962
                            }
                        ],
                        "coordinates": [
                            [
                                -1.150022,
                                46.153343
                            ],
                            [
                                -1.147265,
                                46.15383
                            ],
                            [
                                -1.149034,
                                46.155537
                            ],
                            [
                                -1.150452,
                                46.157806
                            ],
                            [
                                -1.153461,
                                46.158108
                            ]
                        ]
                    },
                    "duration": 240,
                    "type": "public_transport",
                    "id": "section_1_0",
                    "data_freshness": "base_schedule",
                    "stop_date_times": [
                        {
                            "stop_point": {
                                "comment": "[AquarLg] Métrobus",
                                "name": "Aquarium",
                                "links": [],
                                "comments": [
                                    {
                                        "type": "standard",
                                        "value": "[AquarLg] Métrobus"
                                    }
                                ],
                                "label": "Aquarium (La Rochelle)",
                                "equipments": [],
                                "coord": {
                                    "lat": "46.153343",
                                    "lon": "-1.150022"
                                },
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:8768"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T115600",
                            "additional_informations": [],
                            "departure_date_time": "20190819T115600",
                            "base_arrival_date_time": "20190819T115600",
                            "base_departure_date_time": "20190819T115600"
                        },
                        {
                            "stop_point": {
                                "name": "Gare SNCF",
                                "links": [],
                                "coord": {
                                    "lat": "46.15383",
                                    "lon": "-1.147265"
                                },
                                "label": "Gare SNCF (La Rochelle)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:49038"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T115700",
                            "additional_informations": [],
                            "departure_date_time": "20190819T115700",
                            "base_arrival_date_time": "20190819T115700",
                            "base_departure_date_time": "20190819T115700"
                        },
                        {
                            "stop_point": {
                                "name": "Porte Saint-Nicolas",
                                "links": [],
                                "coord": {
                                    "lat": "46.155537",
                                    "lon": "-1.149034"
                                },
                                "label": "Porte Saint-Nicolas (La Rochelle)",
                                "equipments": [],
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:8069"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T115800",
                            "additional_informations": [],
                            "departure_date_time": "20190819T115800",
                            "base_arrival_date_time": "20190819T115800",
                            "base_departure_date_time": "20190819T115800"
                        },
                        {
                            "stop_point": {
                                "comment": "Quai Valin",
                                "name": "Dames Blanches",
                                "links": [],
                                "comments": [
                                    {
                                        "type": "standard",
                                        "value": "Quai Valin"
                                    }
                                ],
                                "label": "Dames Blanches (La Rochelle)",
                                "equipments": [],
                                "coord": {
                                    "lat": "46.157806",
                                    "lon": "-1.150452"
                                },
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:48983"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T115900",
                            "additional_informations": [],
                            "departure_date_time": "20190819T115900",
                            "base_arrival_date_time": "20190819T115900",
                            "base_departure_date_time": "20190819T115900"
                        },
                        {
                            "stop_point": {
                                "comment": "[GrHorLg] Métrobus",
                                "name": "Grosse Horloge",
                                "links": [],
                                "comments": [
                                    {
                                        "type": "standard",
                                        "value": "[GrHorLg] Métrobus"
                                    }
                                ],
                                "label": "Grosse Horloge (La Rochelle)",
                                "equipments": [],
                                "coord": {
                                    "lat": "46.158108",
                                    "lon": "-1.153461"
                                },
                                "fare_zone": {
                                    "name": "0"
                                },
                                "id": "stop_point:OQA:SP:NAQ:Quay:8607"
                            },
                            "links": [],
                            "arrival_date_time": "20190819T120000",
                            "additional_informations": [],
                            "departure_date_time": "20190819T120000",
                            "base_arrival_date_time": "20190819T120000",
                            "base_departure_date_time": "20190819T120000"
                        }
                    ]
                },
                {
                    "from": {
                        "embedded_type": "stop_point",
                        "stop_point": {
                            "comment": "[GrHorLg] Métrobus",
                            "commercial_modes": [
                                {
                                    "id": "commercial_mode:bus",
                                    "name": "Bus"
                                }
                            ],
                            "stop_area": {
                                "name": "Grosse Horloge",
                                "links": [],
                                "coord": {
                                    "lat": "46.158108",
                                    "lon": "-1.153461"
                                },
                                "label": "Grosse Horloge (La Rochelle)",
                                "administrative_regions": [
                                    {
                                        "insee": "17300",
                                        "name": "La Rochelle",
                                        "level": 8,
                                        "coord": {
                                            "lat": "46.159112",
                                            "lon": "-1.152043"
                                        },
                                        "label": "La Rochelle (17000)",
                                        "id": "admin:fr:17300",
                                        "zip_code": "17000"
                                    }
                                ],
                                "timezone": "Europe/Paris",
                                "id": "stop_area:OQA:SA:NAQ:StopPlace:4949"
                            },
                            "links": [],
                            "physical_modes": [
                                {
                                    "id": "physical_mode:Bus",
                                    "name": "Bus"
                                }
                            ],
                            "comments": [
                                {
                                    "type": "standard",
                                    "value": "[GrHorLg] Métrobus"
                                },
                                {
                                    "type": "standard",
                                    "value": "[GrHorLg] Métrobus"
                                }
                            ],
                            "label": "Grosse Horloge (La Rochelle)",
                            "equipments": [],
                            "coord": {
                                "lat": "46.158108",
                                "lon": "-1.153461"
                            },
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                },
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "fare_zone": {
                                "name": "0"
                            },
                            "id": "stop_point:OQA:SP:NAQ:Quay:8607",
                            "name": "Grosse Horloge"
                        },
                        "quality": 0,
                        "name": "Grosse Horloge (La Rochelle)",
                        "id": "stop_point:OQA:SP:NAQ:Quay:8607"
                    },
                    "links": [],
                    "arrival_date_time": "20190819T120258",
                    "departure_date_time": "20190819T120000",
                    "to": {
                        "embedded_type": "address",
                        "id": "-1.15457;46.156636",
                        "quality": 0,
                        "name": "Rue des Carmes (La Rochelle)",
                        "address": {
                            "name": "Rue des Carmes",
                            "house_number": 0,
                            "coord": {
                                "lat": "46.156636",
                                "lon": "-1.15457"
                            },
                            "label": "Rue des Carmes (La Rochelle)",
                            "administrative_regions": [
                                {
                                    "insee": "17300",
                                    "name": "La Rochelle",
                                    "level": 8,
                                    "coord": {
                                        "lat": "46.159112",
                                        "lon": "-1.152043"
                                    },
                                    "label": "La Rochelle (17000)",
                                    "id": "admin:fr:17300",
                                    "zip_code": "17000"
                                }
                            ],
                            "id": "-1.15457;46.156636"
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
                                "length": 199
                            }
                        ],
                        "coordinates": [
                            [
                                -1.153461,
                                46.158108
                            ],
                            [
                                -1.1534594617,
                                46.1580319646
                            ],
                            [
                                -1.153606,
                                46.158029
                            ],
                            [
                                -1.154466,
                                46.1567
                            ],
                            [
                                -1.1545771631,
                                46.1566529093
                            ],
                            [
                                -1.1545771631,
                                46.1566529093
                            ]
                        ]
                    },
                    "duration": 178,
                    "path": [
                        {
                            "duration": 10,
                            "direction": 0,
                            "length": 11,
                            "name": "Quai Duperré"
                        },
                        {
                            "duration": 160,
                            "direction": 0,
                            "length": 179,
                            "name": "Cours des Dames"
                        },
                        {
                            "duration": 8,
                            "direction": 0,
                            "length": 9,
                            "name": "Rue Saint-Jean du Pérot"
                        }
                    ],
                    "type": "street_network",
                    "id": "section_2_0",
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
        }
    ],
    "context": {
        "timezone": "Europe/Paris",
        "current_datetime": "20190819T114333",
        "car_direct_path": {
            "co2_emission": {
                "value": 148.8286491242,
                "unit": "gEC"
            }
        }
    },
    "exceptions": []
}